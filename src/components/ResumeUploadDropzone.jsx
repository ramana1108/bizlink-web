import { useState, useRef } from 'react';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { API_BASE_URL } from '../config/api';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx'];

export default function ResumeUploadDropzone({ onResumeParsed, onClear }) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = async (file) => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!file) return;

    // 1. Validate Extension
    const ext = file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setErrorMessage(
        'Invalid file format. Please upload a resume in PDF, DOC or DOCX format.'
      );
      return;
    }

    // 2. Validate File Size (Max 5MB)
    if (file.size > MAX_FILE_SIZE) {
      setErrorMessage('File size exceeds 5 MB. Please upload a smaller resume file.');
      return;
    }

    setSelectedFile(file);
    setIsUploading(true);
    setUploadProgress(20);

    // 3. Send to Backend Parser API
    const formData = new FormData();
    formData.append('resume', file);

    try {
      setUploadProgress(45);

      const response = await fetch(`${API_BASE_URL}/api/resume/parse`, {
        method: 'POST',
        body: formData,
      });

      setUploadProgress(85);

      const result = await response.json();

      if (response.ok && result.success) {
        setUploadProgress(100);
        setSuccessMessage(
          'Resume details extracted successfully. Please review and verify the information below before submitting.'
        );
        if (onResumeParsed) {
          onResumeParsed(result.data, file.name);
        }
      } else {
        setErrorMessage(
          result.message ||
            'Could not extract information from this resume. You can still fill out the form manually.'
        );
      }
    } catch (err) {
      console.error('Resume upload error:', err);
      setErrorMessage(
        'Unable to connect to the parsing server. You can still complete your application by filling the form manually.'
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setErrorMessage('');
    setSuccessMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className="w-full space-y-3 mb-6">
      
      {/* Upload Header / Dropzone Container */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative rounded-2xl border-2 transition-all p-6 sm:p-7 text-center ${
          isDragging
            ? 'border-[#2563EB] bg-[#EFF6FF]'
            : selectedFile && !errorMessage
            ? 'border-emerald-300 bg-emerald-50/30'
            : 'border-dashed border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#2563EB]/60 hover:bg-[#F1F5F9]'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
          onChange={handleFileSelect}
          className="hidden"
          id="resume-file-input"
        />

        {isUploading ? (
          /* Parsing / Loading State */
          <div className="py-4 space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mx-auto animate-pulse">
              <Loader2 size={28} className="animate-spin" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#0B1F3A]">
                Analyzing Resume with AI...
              </h4>
              <p className="text-xs text-[#64748B] mt-1">
                Extracting contact information, qualifications, skills and work history...
              </p>
            </div>
            {/* Progress Bar */}
            <div className="w-48 max-w-full bg-slate-200 h-1.5 rounded-full mx-auto overflow-hidden">
              <div
                className="bg-[#2563EB] h-full transition-all duration-300 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        ) : selectedFile && successMessage ? (
          /* Success File Preview State */
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-sm text-[#0B1F3A] truncate max-w-[200px] sm:max-w-xs">
                    {selectedFile.name}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 size={12} /> Parsed
                  </span>
                </div>
                <span className="text-xs text-[#64748B]">
                  {(selectedFile.size / 1024).toFixed(1)} KB • Ready for review
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#0B1F3A] transition-colors cursor-pointer"
              >
                <RefreshCw size={13} />
                <span>Upload Another</span>
              </button>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Remove file"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* Default Upload State */
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto shadow-xs">
              <UploadCloud size={24} />
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm text-[#0B1F3A] flex items-center justify-center gap-1.5">
                <span>Upload Your Resume for AI Auto-Fill</span>
                <Sparkles size={15} className="text-[#F59E0B]" />
              </h4>
              <p className="text-xs text-[#64748B] mt-1">
                Drag and drop your file here or click to browse
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
              >
                <FileText size={14} />
                <span>Browse Resume</span>
              </button>
            </div>

            <p className="text-[11px] text-[#94A3B8]">
              Accepted Formats: <strong>PDF, DOC, DOCX</strong> • Max Size: <strong>5 MB</strong>
            </p>
          </div>
        )}
      </div>

      {/* Success Notification Banner */}
      {successMessage && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <strong>AI Auto-Fill Completed:</strong> {successMessage}
          </div>
          <button
            type="button"
            onClick={() => setSuccessMessage('')}
            className="text-emerald-600 hover:text-emerald-800"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
          <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
          <div className="flex-1">{errorMessage}</div>
          <button
            type="button"
            onClick={() => setErrorMessage('')}
            className="text-red-500 hover:text-red-700"
          >
            <X size={14} />
          </button>
        </div>
      )}

    </div>
  );
}
