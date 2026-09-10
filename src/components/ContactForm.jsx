import { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Send,
  AlertCircle,
  Building2,
  UserCheck,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Mail,
  FileCheck,
  Lock
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/companyData';
import ResumeUploadDropzone from './ResumeUploadDropzone';
import EmailVerificationModal from './EmailVerificationModal';

export default function ContactForm({
  initialType = 'employer',
  prefilledService = '',
  prefilledIndustry = '',
}) {
  const [formType, setFormType] = useState(initialType); // 'employer' | 'candidate'
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Set of field names that were auto-filled from the resume
  const [autoFilledFields, setAutoFilledFields] = useState(new Set());
  const [resumeFileName, setResumeFileName] = useState('');
  const [resumeParsed, setResumeParsed] = useState(false);

  // Email Verification State for Candidates
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState('');
  const [verificationToken, setVerificationToken] = useState('');
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    // Shared / Base
    name: '',
    email: '',
    phone: '',
    industry: prefilledIndustry || '',
    requiredRole: prefilledService || '',
    location: '',

    // Employer Specific
    company: '',
    headcount: '',
    details: '',

    // Candidate Specific
    qualification: '',
    degree: '',
    specialization: '',
    college: '',
    graduationYear: '',
    skills: '',
    totalExperience: '',
    currentCompany: '',
    jobTitle: '',
    city: '',
    state: '',
    linkedin: '',
    github: '',
    additionalDetails: '',
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // If candidate changes their email after verification, reset verified state
    if (name === 'email' && isEmailVerified && value.toLowerCase().trim() !== verifiedEmail) {
      setIsEmailVerified(false);
      setVerificationToken('');
      setVerifiedEmail('');
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Callback when resume is parsed via AI
  const handleResumeParsed = (extractedData, fileName) => {
    setResumeFileName(fileName);
    setResumeParsed(true);

    const newAutoFilled = new Set();

    setFormData((prev) => {
      const updated = { ...prev };

      if (extractedData.fullName) {
        updated.name = extractedData.fullName;
        newAutoFilled.add('name');
      }

      if (extractedData.email) {
        updated.email = extractedData.email;
        newAutoFilled.add('email');
        // Reset verified status if new email is loaded
        setIsEmailVerified(false);
        setVerificationToken('');
        setVerifiedEmail('');
      }

      if (extractedData.phone) {
        updated.phone = extractedData.phone;
        newAutoFilled.add('phone');
      }

      if (extractedData.highestQualification) {
        updated.qualification = extractedData.highestQualification;
        newAutoFilled.add('qualification');
      }

      if (extractedData.degree) {
        updated.degree = extractedData.degree;
        newAutoFilled.add('degree');
      }

      if (extractedData.specialization) {
        updated.specialization = extractedData.specialization;
        newAutoFilled.add('specialization');
      }

      if (extractedData.college) {
        updated.college = extractedData.college;
        newAutoFilled.add('college');
      }

      if (extractedData.graduationYear) {
        updated.graduationYear = extractedData.graduationYear;
        newAutoFilled.add('graduationYear');
      }

      if (extractedData.skills && extractedData.skills.length > 0) {
        updated.skills = extractedData.skills.join(', ');
        newAutoFilled.add('skills');
      }

      if (extractedData.experience || extractedData.totalExperience) {
        updated.totalExperience = extractedData.totalExperience || extractedData.experience;
        newAutoFilled.add('totalExperience');
      }

      if (extractedData.company) {
        updated.currentCompany = extractedData.company;
        newAutoFilled.add('currentCompany');
      }

      if (extractedData.jobTitle) {
        updated.jobTitle = extractedData.jobTitle;
        newAutoFilled.add('jobTitle');
      }

      if (extractedData.industry) {
        updated.industry = extractedData.industry;
        newAutoFilled.add('industry');
      }

      if (extractedData.jobFunction) {
        updated.requiredRole = extractedData.jobFunction;
        newAutoFilled.add('requiredRole');
      }

      if (extractedData.city) {
        updated.city = extractedData.city;
        newAutoFilled.add('city');
      }

      if (extractedData.state) {
        updated.state = extractedData.state;
        newAutoFilled.add('state');
      }

      if (extractedData.linkedin) {
        updated.linkedin = extractedData.linkedin;
        newAutoFilled.add('linkedin');
      }

      if (extractedData.github) {
        updated.github = extractedData.github;
        newAutoFilled.add('github');
      }

      return updated;
    });

    setAutoFilledFields(newAutoFilled);
  };

  const handleClearResume = () => {
    setResumeFileName('');
    setResumeParsed(false);
    setAutoFilledFields(new Set());
  };

  // Trigger Email OTP Verification Modal
  const handleTriggerEmailVerification = () => {
    setErrorMessage('');
    if (!formData.email || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address first.');
      return;
    }
    setIsOtpModalOpen(true);
  };

  // Callback when OTP is verified
  const handleEmailVerified = (token) => {
    setIsEmailVerified(true);
    setVerifiedEmail(formData.email.toLowerCase().trim());
    setVerificationToken(token);
    setIsOtpModalOpen(false);
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    // Common Security check: Email MUST be verified with OTP before final submission
    if (!isEmailVerified || !verificationToken) {
      setIsLoading(false);
      if (!formData.email || !formData.email.includes('@')) {
        setErrorMessage('Please enter a valid email address first.');
        return;
      }
      setIsOtpModalOpen(true);
      return;
    }

    try {
      if (formType === 'employer') {
        // ================= EMPLOYER RFQ SUBMISSION =================
        const payload = {
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          service: formData.requiredRole,
          headcount: formData.headcount,
          timeline: formData.location ? `Location: ${formData.location}` : 'Immediate',
          message: formData.details,
          formType: 'employer',
          verificationToken,
        };

        const response = await fetch('http://localhost:5000/api/rfq', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          if (result.requiresVerification) {
            setIsEmailVerified(false);
            setVerificationToken('');
            setIsOtpModalOpen(true);
          }
          setErrorMessage(result.message || 'Failed to submit RFQ. Please try again.');
        }
      } else {
        // ================= CANDIDATE SUBMISSION =================
        const payload = {
          name: formData.name,
          qualification: formData.qualification || formData.degree || 'Not Specified',
          degree: formData.degree,
          specialization: formData.specialization,
          college: formData.college,
          graduationYear: formData.graduationYear,
          phone: formData.phone,
          email: formData.email,
          industry: formData.industry,
          jobFunction: formData.requiredRole || formData.jobTitle,
          skills: formData.skills ? formData.skills.split(',').map((s) => s.trim()).filter(Boolean) : [],
          totalExperience: formData.totalExperience,
          company: formData.currentCompany,
          jobTitle: formData.jobTitle,
          city: formData.city || formData.location,
          state: formData.state,
          country: 'India',
          linkedin: formData.linkedin,
          github: formData.github,
          additionalDetails: formData.additionalDetails || formData.details,
          resumeFileName,
          resumeParsed,
          verificationToken,
        };

        const response = await fetch('http://localhost:5000/api/candidates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          if (result.requiresVerification) {
            setIsEmailVerified(false);
            setVerificationToken('');
            setIsOtpModalOpen(true);
          }
          setErrorMessage(result.message || 'Failed to submit candidate registration.');
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        'Unable to connect to the server. Please check your connection or contact our operations desk directly.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsEmailVerified(false);
    setVerificationToken('');
    setVerifiedEmail('');
    setResumeFileName('');
    setResumeParsed(false);
    setAutoFilledFields(new Set());
    setFormData({
      name: '',
      email: '',
      phone: '',
      industry: '',
      requiredRole: '',
      location: '',
      company: '',
      headcount: '',
      details: '',
      qualification: '',
      degree: '',
      specialization: '',
      college: '',
      graduationYear: '',
      skills: '',
      totalExperience: '',
      currentCompany: '',
      jobTitle: '',
      city: '',
      state: '',
      linkedin: '',
      github: '',
      additionalDetails: '',
    });
  };

  // Helper to render Auto-filled visual indicator
  const renderAutoFillBadge = (fieldName) => {
    if (formType === 'candidate' && autoFilledFields.has(fieldName)) {
      return (
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#2563EB] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-full ml-1.5 animate-in fade-in duration-150">
          <Sparkles size={10} className="text-[#F59E0B]" />
          <span>Auto-filled from resume</span>
        </span>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl border border-[#DCE5F0] p-6 sm:p-8 shadow-xs">
      
      {/* 1. Selector: Job Seeker vs Employer */}
      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
          Select Your Requirement Type:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          {/* Option: Employer RFQ */}
          <button
            type="button"
            onClick={() => {
              setFormType('employer');
              setErrorMessage('');
            }}
            className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              formType === 'employer'
                ? 'border-[#F59E0B] bg-[#FFFBEB]/40 ring-1 ring-[#F59E0B]'
                : 'border-[#DCE5F0] bg-white hover:bg-[#F6F8FC]'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                formType === 'employer' ? 'bg-[#F59E0B] text-white' : 'bg-[#F6F8FC] text-[#F59E0B]'
              }`}
            >
              <Building2 size={18} />
            </div>
            <div>
              <span className="font-heading font-bold text-sm text-[#0B1F3A] block">
                I'm Hiring Staff (Employer)
              </span>
              <span className="text-xs text-[#64748B] block">
                Submit workforce requirements & RFQs
              </span>
            </div>
          </button>

          {/* Option: Candidate Profile */}
          <button
            type="button"
            onClick={() => {
              setFormType('candidate');
              setErrorMessage('');
            }}
            className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              formType === 'candidate'
                ? 'border-[#2563EB] bg-[#EFF6FF]/50 ring-1 ring-[#2563EB]'
                : 'border-[#DCE5F0] bg-white hover:bg-[#F6F8FC]'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                formType === 'candidate' ? 'bg-[#2563EB] text-white' : 'bg-[#F6F8FC] text-[#2563EB]'
              }`}
            >
              <UserCheck size={18} />
            </div>
            <div>
              <span className="font-heading font-bold text-sm text-[#0B1F3A] block">
                I'm Looking for a Job (Candidate)
              </span>
              <span className="text-xs text-[#64748B] block">
                Register candidate profile & technical skills
              </span>
            </div>
          </button>

        </div>
      </div>

      {isSubmitted ? (
        /* Submission Success Confirmation */
        <div className="text-center py-10 space-y-4 animate-in fade-in duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="font-heading font-extrabold text-xl text-[#0B1F3A]">
            Submission Successful
          </h3>
          <p className="text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl py-3 px-4 max-w-md mx-auto">
            Your submission has been sent successfully. Our team will contact you soon.
          </p>
          <p className="text-xs text-[#64748B] max-w-md mx-auto">
            {formType === 'employer'
              ? 'Our operations desk has received your requirement and will review your specifications promptly.'
              : `Thank you, ${formData.name}. Your profile has been recorded and delivered to our recruitment team.`}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#F6F8FC] hover:bg-[#EDF2F7] text-[#0B1F3A] border border-[#DCE5F0] text-xs font-bold transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        /* Form Container */
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Candidate-Only: AI Resume Upload Dropzone */}
          {formType === 'candidate' && (
            <ResumeUploadDropzone
              onResumeParsed={handleResumeParsed}
              onClear={handleClearResume}
            />
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Name & (Company for Employer / Qualification for Candidate) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                <span>Full Name</span>
                <span className="text-red-500 ml-0.5">*</span>
                {renderAutoFillBadge('name')}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
              />
            </div>

            {formType === 'employer' ? (
              <div>
                <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Precision Auto Components Ltd"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            ) : (
              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>Highest Qualification</span>
                  <span className="text-red-500 ml-0.5">*</span>
                  {renderAutoFillBadge('qualification')}
                </label>
                <input
                  type="text"
                  name="qualification"
                  required
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g. B.E. / Diploma / ITI"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            )}
          </div>

          {/* Candidate-Only: Degree & Specialization */}
          {formType === 'candidate' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>Degree / Trade Title</span>
                  {renderAutoFillBadge('degree')}
                </label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="e.g. Bachelor of Engineering / ITI Machinist"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>

              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>Specialization / Branch</span>
                  {renderAutoFillBadge('specialization')}
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="e.g. Mechanical / ECE / Automobile / Tool & Die"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            </div>
          )}

          {/* Candidate-Only: College & Graduation Year */}
          {formType === 'candidate' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>College / Institute / Polytechnic</span>
                  {renderAutoFillBadge('college')}
                </label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="e.g. Government College of Technology"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>

              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>Graduation / Completion Year</span>
                  {renderAutoFillBadge('graduationYear')}
                </label>
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  placeholder="e.g. 2026 / 2025"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            </div>
          )}

          {/* Row: Email (with OTP Verification Button for both Employers & Candidates) & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A]">
                  <span>{formType === 'employer' ? 'Official Company Email' : 'Candidate Email'}</span>
                  <span className="text-red-500 ml-0.5">*</span>
                  {renderAutoFillBadge('email')}
                </label>

                {/* Email Verification Status / Trigger (Both Forms) */}
                {isEmailVerified ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full animate-in fade-in">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span>Verified ✓</span>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleTriggerEmailVerification}
                    disabled={!formData.email}
                    className="text-[11px] font-bold text-[#2563EB] hover:text-[#1D4ED8] hover:underline cursor-pointer disabled:text-slate-400"
                  >
                    Verify with OTP
                  </button>
                )}
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={
                    formType === 'employer'
                      ? 'e.g. procurement@company.com'
                      : 'e.g. candidate@example.com'
                  }
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 bg-white ${
                    isEmailVerified
                      ? 'border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500 pr-9'
                      : 'border-[#DCE5F0] focus:border-[#2563EB] focus:ring-[#2563EB]'
                  }`}
                />
                {isEmailVerified && (
                  <CheckCircle2
                    size={16}
                    className="absolute right-3 top-3 text-emerald-500 pointer-events-none"
                  />
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                <span>Contact Phone / Mobile</span>
                <span className="text-red-500 ml-0.5">*</span>
                {renderAutoFillBadge('phone')}
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
              />
            </div>
          </div>

          {/* Row: Industry & Role / Function */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                <span>Industry Sector</span>
                {renderAutoFillBadge('industry')}
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
              >
                <option value="">Select Industry</option>
                {INDUSTRIES_DATA.map((ind) => (
                  <option key={ind.id} value={ind.name}>
                    {ind.name}
                  </option>
                ))}
                <option value="Other Industrial / Manufacturing">Other Industrial / Manufacturing</option>
              </select>
            </div>

            <div>
              <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                <span>{formType === 'employer' ? 'Required Role / Category' : 'Preferred Job Function / Title'}</span>
                {renderAutoFillBadge('requiredRole')}
              </label>
              <input
                type="text"
                name="requiredRole"
                value={formData.requiredRole}
                onChange={handleChange}
                placeholder={
                  formType === 'employer'
                    ? 'e.g. CNC Operators / Line Assemblers'
                    : 'e.g. Machine Operator / Quality Checker / Technician'
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
              />
            </div>
          </div>

          {/* Candidate-Only: Technical Skills */}
          {formType === 'candidate' && (
            <div>
              <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                <span>Key Technical & Operational Skills (comma-separated)</span>
                {renderAutoFillBadge('skills')}
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. CNC, VMC, PLC, AutoCAD, Soldering, Quality Inspection, Kaizen, 5S"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
              />
            </div>
          )}

          {/* Row: Experience & Company/Headcount */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                <span>{formType === 'employer' ? 'Required Workforce (Headcount)' : 'Total Work Experience'}</span>
                {renderAutoFillBadge('totalExperience')}
              </label>
              <input
                type="text"
                name={formType === 'employer' ? 'headcount' : 'totalExperience'}
                value={formType === 'employer' ? formData.headcount : formData.totalExperience}
                onChange={handleChange}
                placeholder={formType === 'employer' ? 'e.g. 25 Operators' : 'e.g. Fresher / 2 Years in Automotive'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
              />
            </div>

            {formType === 'employer' ? (
              <div>
                <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                  Plant / Work Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Sriperumbudur / Oragadam / Chennai"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            ) : (
              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>Current / Previous Company</span>
                  {renderAutoFillBadge('currentCompany')}
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  placeholder="e.g. Tata Motors / Foxconn / MSME Unit (Leave blank if fresher)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            )}
          </div>

          {/* Candidate-Only: City, State & Social Links */}
          {formType === 'candidate' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>City / Town</span>
                  {renderAutoFillBadge('city')}
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Chennai / Salem / Coimbatore"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>

              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>State</span>
                  {renderAutoFillBadge('state')}
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. Tamil Nadu"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            </div>
          )}

          {/* Candidate-Only: LinkedIn / Portfolio */}
          {formType === 'candidate' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>LinkedIn Profile URL</span>
                  {renderAutoFillBadge('linkedin')}
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>

              <div>
                <label className="flex items-center text-xs font-semibold text-[#0B1F3A] mb-1">
                  <span>GitHub / Portfolio / Project URL</span>
                  {renderAutoFillBadge('github')}
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                />
              </div>
            </div>
          )}

          {/* Details / Message */}
          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
              {formType === 'employer'
                ? 'Requirement Details / Shift Specifications'
                : 'Additional Information / Notice Period / Willingness to Relocate'}
            </label>
            <textarea
              name={formType === 'employer' ? 'details' : 'additionalDetails'}
              rows={3}
              value={formType === 'employer' ? formData.details : formData.additionalDetails}
              onChange={handleChange}
              placeholder={
                formType === 'employer'
                  ? 'Specify shift patterns, machinery models, skill criteria or joining timelines...'
                  : 'Specify preferred shifts, relevant machine experience, notice period or relocation preferences...'
              }
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCE5F0] text-sm text-[#0B1F3A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white resize-none"
            ></textarea>
          </div>

          {/* Submit Action Area */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-xs ${
                formType === 'employer'
                  ? isEmailVerified
                    ? 'bg-[#F59E0B] hover:bg-[#D97706]'
                    : 'bg-[#0B1F3A] hover:bg-[#1E3A8A]'
                  : isEmailVerified
                  ? 'bg-[#2563EB] hover:bg-[#1D4ED8]'
                  : 'bg-[#2563EB] hover:bg-[#1D4ED8]'
              } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <span>Processing Submission...</span>
              ) : formType === 'employer' ? (
                isEmailVerified ? (
                  <>
                    <ShieldCheck size={16} className="text-[#FBBF24]" />
                    <span>Submit Verified Workforce RFQ</span>
                    <Send size={15} />
                  </>
                ) : (
                  <>
                    <Mail size={16} />
                    <span>Verify Email & Submit RFQ</span>
                    <ArrowRight size={15} />
                  </>
                )
              ) : isEmailVerified ? (
                <>
                  <ShieldCheck size={16} className="text-[#FBBF24]" />
                  <span>Submit Verified Candidate Application</span>
                  <Send size={15} />
                </>
              ) : (
                <>
                  <Mail size={16} />
                  <span>Verify Email & Submit Application</span>
                  <ArrowRight size={15} />
                </>
              )}
            </button>

            {!isEmailVerified && (
              <p className="text-[11px] text-center text-[#64748B] flex items-center justify-center gap-1.5">
                <Lock size={12} className="text-[#2563EB] shrink-0" />
                <span>
                  A 6-digit verification code will be sent to your email to authenticate and route your {formType === 'employer' ? 'workforce RFQ' : 'application'}.
                </span>
              </p>
            )}

            {isEmailVerified && (
              <p className="text-[11px] text-center text-emerald-700 flex items-center justify-center gap-1.5 font-medium">
                <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                <span>Email authenticated: <strong>{verifiedEmail}</strong></span>
              </p>
            )}
          </div>

        </form>
      )}

      {/* Email Verification OTP Modal */}
      <EmailVerificationModal
        isOpen={isOtpModalOpen}
        email={formData.email}
        onClose={() => setIsOtpModalOpen(false)}
        onVerified={handleEmailVerified}
      />

    </div>
  );
}
