import { useState, useEffect, useRef } from 'react';
import {
  Mail,
  AlertCircle,
  X,
  Loader2,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';

export default function EmailVerificationModal({
  isOpen,
  email,
  onClose,
  onVerified,
}) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);

  const inputRefs = useRef([]);
  const autoSentEmailRef = useRef('');

  // Send OTP automatically when modal opens, avoiding StrictMode duplicate requests
  useEffect(() => {
    if (!isOpen || !email) {
      autoSentEmailRef.current = '';
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    if (autoSentEmailRef.current === normalizedEmail) {
      return;
    }

    autoSentEmailRef.current = normalizedEmail;
    setOtp(['', '', '', '', '', '']);
    setErrorMessage('');
    setInfoMessage('');
    setResendCooldown(0);

    sendOtp(normalizedEmail);
  }, [isOpen, email]);

  // Resend countdown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Send OTP to the candidate's actual email address
  const sendOtp = async (targetEmail) => {
    const emailToSend = (targetEmail || email || '').trim().toLowerCase();

    if (!emailToSend || !emailToSend.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setInfoMessage('');
      return;
    }

    setIsSending(true);
    setErrorMessage('');
    setInfoMessage('');

    try {
      const response = await fetch(
        'http://localhost:5000/api/email/send-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailToSend,
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setInfoMessage(
          `Verification code sent to ${emailToSend}. Please check your inbox and spam folder.`
        );
        setErrorMessage('');
        setResendCooldown(result.resendAfter || 60);

        // Focus first OTP input
        setTimeout(() => {
          inputRefs.current[0]?.focus();
        }, 200);
      } else {
        setInfoMessage('');
        setErrorMessage(
          result.message || 'Unable to send verification code. Please try again.'
        );
      }
    } catch (err) {
      console.error('Send OTP error:', err);
      setInfoMessage('');
      setErrorMessage(
        'Unable to send verification code. Please try again.'
      );
    } finally {
      setIsSending(false);
    }
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    // Allow only numbers
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];

    // Only keep one digit in each box
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    // Move to next input automatically
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Allow pasting a 6-digit OTP from email
  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData('text')
      .trim();

    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');

      setOtp(digits);

      inputRefs.current[5]?.focus();
    }
  };

  // Verify OTP with backend
  const handleVerify = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const fullOtp = otp.join('');

    if (fullOtp.length !== 6) {
      setErrorMessage(
        'Please enter the complete 6-digit verification code.'
      );
      return;
    }

    setIsVerifying(true);
    setErrorMessage('');
    setInfoMessage('');

    try {
      const response = await fetch(
        'http://localhost:5000/api/email/verify-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            otp: fullOtp,
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        // Send verification token back to ContactForm
        if (onVerified) {
          onVerified(result.verificationToken);
        }

        if (onClose) {
          onClose();
        }
      } else {
        setErrorMessage(
          result.message ||
            'Invalid verification code. Please try again.'
        );

        // Clear OTP after failed verification
        setOtp(['', '', '', '', '', '']);

        setTimeout(() => {
          inputRefs.current[0]?.focus();
        }, 100);
      }
    } catch (err) {
      console.error('Verify OTP error:', err);

      setErrorMessage(
        'Unable to connect to the verification server. Please try again.'
      );
    } finally {
      setIsVerifying(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  const isOtpComplete = otp.every((digit) => digit !== '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#DCE5F0] overflow-hidden p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-150">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto shadow-xs border border-blue-100">
            <Mail size={22} />
          </div>

          <h3 className="font-heading font-extrabold text-xl text-[#0B1F3A]">
            Verify Your Email Address
          </h3>

          <p className="text-xs sm:text-sm text-[#64748B]">
            We sent a 6-digit verification code to
            <br />

            <strong className="text-[#0B1F3A]">
              {email}
            </strong>
          </p>
        </div>

        {/* Information Message */}
        {infoMessage && (
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs flex items-start gap-2">
            <ShieldCheck
              size={15}
              className="text-[#2563EB] shrink-0 mt-0.5"
            />

            <span>{infoMessage}</span>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
            <AlertCircle
              size={15}
              className="text-red-500 shrink-0 mt-0.5"
            />

            <span>{errorMessage}</span>
          </div>
        )}

        {/* OTP Input Section */}
        <div className="space-y-4 pt-1">

          <div
            className="flex justify-center gap-2 sm:gap-3"
            onPaste={handlePaste}
          >
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleOtpChange(idx, e.target.value)
                }
                onKeyDown={(e) =>
                  handleKeyDown(idx, e)
                }
                className="w-11 h-12 sm:w-12 sm:h-14 text-center font-mono font-extrabold text-lg sm:text-xl text-[#0B1F3A] bg-[#F8FAFC] border-2 border-[#DCE5F0] rounded-xl focus:border-[#2563EB] focus:bg-white focus:outline-none transition-all"
              />
            ))}
          </div>

          {/* Resend OTP */}
          <div className="text-center text-xs text-[#64748B]">
            {resendCooldown > 0 ? (
              <span>
                Resend code in{' '}
                <strong>{resendCooldown}s</strong>
              </span>
            ) : (
              <button
                type="button"
                onClick={sendOtp}
                disabled={isSending}
                className="inline-flex items-center gap-1.5 font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer disabled:text-slate-400"
              >
                {isSending ? (
                  <Loader2
                    size={13}
                    className="animate-spin"
                  />
                ) : (
                  <RefreshCw size={13} />
                )}

                <span>
                  {isSending
                    ? 'Sending...'
                    : 'Resend Verification Code'}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Verify Button */}
        <div className="pt-2 space-y-2">
          <button
            type="button"
            onClick={handleVerify}
            disabled={!isOtpComplete || isVerifying}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm transition-all shadow-xs ${
              isOtpComplete && !isVerifying
                ? 'bg-[#2563EB] hover:bg-[#1D4ED8] cursor-pointer'
                : 'bg-slate-300 cursor-not-allowed text-slate-500'
            }`}
          >
            {isVerifying ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />

                <span>
                  Verifying Code...
                </span>
              </>
            ) : (
              <>
                <ShieldCheck size={16} />

                <span>
                  Verify Email & Proceed
                </span>
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-[#94A3B8]">
            The verification code expires in 10 minutes.
            <br />
            Maximum 3 attempts are permitted.
          </p>
        </div>

      </div>
    </div>
  );
}