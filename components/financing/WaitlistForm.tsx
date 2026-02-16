"use client";

import { useState, FormEvent, useEffect } from "react";
import { waitlistFormCopy } from "@/content/financing.en";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    clientType: "",
    estimatedBudget: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // COUNTER LIVE
  const [displayCount, setDisplayCount] = useState(0);
  const [realCount, setRealCount] = useState(0);

  // Fetch count from Airtable
  useEffect(() => {
    fetch('/api/waitlist')
      .then(res => res.json())
      .then(data => {
        const realCount = data.count + 78; // Ajoute 78 au nombre réel
        setRealCount(realCount);
        
        // Counting up animation
        let current = 0;
        const target = realCount;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setDisplayCount(target);
            clearInterval(timer);
          } else {
            setDisplayCount(Math.floor(current));
          }
        }, 16);
        
        return () => clearInterval(timer);
      })
      .catch(err => console.error('Error fetching count:', err));
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const calculateProgress = () => {
    const fields = Object.values(formData);
    const filled = fields.filter(f => f !== "").length;
    return (filled / fields.length) * 100;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.clientType) newErrors.clientType = "Client type is required";
    if (!formData.estimatedBudget) newErrors.estimatedBudget = "Budget is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      // ENVOYER À AIRTABLE
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Error saving data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const progress = calculateProgress();
  const isFormValid = progress === 100 && Object.keys(errors).length === 0;

  // SUCCESS STATE
  if (submitted) {
    return (
      <section className="relative w-full overflow-hidden bg-black px-6 py-20 text-white">
        {/* Particles for success */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="particle absolute h-3 w-3 rounded-full bg-[#8A1F24]" style={{ left: "15%", bottom: "0%", animationDelay: "0s", animationDuration: "4s" }} />
          <div className="particle absolute h-2 w-2 rounded-full bg-[#5A0F14]" style={{ left: "30%", bottom: "0%", animationDelay: "0.5s", animationDuration: "5s" }} />
          <div className="particle absolute h-3 w-3 rounded-full bg-[#8A1F24]" style={{ left: "50%", bottom: "0%", animationDelay: "1s", animationDuration: "4.5s" }} />
          <div className="particle absolute h-2 w-2 rounded-full bg-[#5A0F14]" style={{ left: "70%", bottom: "0%", animationDelay: "1.5s", animationDuration: "5.5s" }} />
          <div className="particle absolute h-3 w-3 rounded-full bg-[#8A1F24]" style={{ left: "85%", bottom: "0%", animationDelay: "2s", animationDuration: "4s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {/* Success Checkmark */}
          <div className="mb-8 flex justify-center">
            <div className="checkmark-bounce flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#5A0F14] bg-[#5A0F14]/10">
              <svg
                className="h-12 w-12 text-[#5A0F14]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <div className="success-fade-in">
            <h3 className="mb-4 text-3xl font-bold uppercase tracking-wide">
              {waitlistFormCopy.successMessage.title}
            </h3>
            <div className="mx-auto mb-8 h-px w-16 bg-[#5A0F14]" />
            <p className="mb-10 text-lg text-white/70">
              {waitlistFormCopy.successMessage.description}
            </p>
            
            <a
              href="/b2c"
              className="inline-block rounded-lg border border-white/10 bg-gradient-to-br from-[#5A0F14] to-[#8A1F24] px-10 py-4 font-semibold uppercase tracking-wider shadow-[0_4px_20px_rgba(90,15,20,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(90,15,20,0.7)]"
            >
              {waitlistFormCopy.successMessage.cta}
            </a>
          </div>
        </div>

        <style jsx>{`
          .particle {
            animation: float-up linear infinite;
          }
          
          @keyframes float-up {
            0% {
              transform: translateY(0) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh) scale(1);
              opacity: 0;
            }
          }
          
          .checkmark-bounce {
            animation: checkmarkBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          
          @keyframes checkmarkBounce {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .success-fade-in {
            animation: successFadeIn 0.8s ease-out 0.3s both;
          }
          
          @keyframes successFadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    );
  }

  // FORM STATE
  return (
    <section id="waitlist" className="relative w-full overflow-hidden bg-black px-6 pb-20 pt-16 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A0F14] opacity-5 blur-3xl" />
      </div>

      {/* Particles for form */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="particle absolute h-2 w-2 rounded-full bg-[#8A1F24]" style={{ left: "10%", bottom: "0%", animationDelay: "0s", animationDuration: "5s" }} />
        <div className="particle absolute h-3 w-3 rounded-full bg-[#5A0F14]" style={{ left: "25%", bottom: "0%", animationDelay: "1s", animationDuration: "6s" }} />
        <div className="particle absolute h-2 w-2 rounded-full bg-[#8A1F24]" style={{ left: "45%", bottom: "0%", animationDelay: "2s", animationDuration: "5.5s" }} />
        <div className="particle absolute h-3 w-3 rounded-full bg-[#5A0F14]" style={{ left: "60%", bottom: "0%", animationDelay: "0.5s", animationDuration: "7s" }} />
        <div className="particle absolute h-2 w-2 rounded-full bg-[#8A1F24]" style={{ left: "75%", bottom: "0%", animationDelay: "3s", animationDuration: "6.5s" }} />
        <div className="particle absolute h-3 w-3 rounded-full bg-[#5A0F14]" style={{ left: "90%", bottom: "0%", animationDelay: "1.5s", animationDuration: "5s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">
            {waitlistFormCopy.title}
          </h2>
          <div className="mx-auto h-px w-16 bg-[#5A0F14]" />
        </div>

        {/* COUNTER BADGE */}
        {displayCount > 0 && (
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-[#5A0F14]/30 bg-[#5A0F14]/10 px-6 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                {/* Pulse dot */}
                <div className="relative">
                  <div className="h-2 w-2 rounded-full bg-[#5A0F14]" />
                  <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-[#5A0F14] opacity-75" />
                </div>
                {/* Count */}
                <span className="text-xl font-bold tabular-nums text-white/90 sm:text-2xl">
                  {displayCount.toLocaleString()}
                </span>
              </div>
              <span className="text-sm text-white/80">on the waitlist</span>
            </div>
            
            <p className="text-xs text-white/50">
              Last signup moments ago
            </p>
          </div>
        )}

        {/* Progress bar */}
        <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#5A0F14] to-[#8A1F24] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {waitlistFormCopy.fields.fullName.label}
              <span className="text-[#5A0F14]"> *</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={waitlistFormCopy.fields.fullName.placeholder}
              className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                errors.fullName
                  ? "border-red-500 shake"
                  : formData.fullName
                  ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
                  : "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
              }`}
              style={{ caretColor: "#5A0F14" }}
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
            )}
            {formData.fullName && !errors.fullName && (
              <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {waitlistFormCopy.fields.email.label}
              <span className="text-[#5A0F14]"> *</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={waitlistFormCopy.fields.email.placeholder}
              className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                errors.email
                  ? "border-red-500 shake"
                  : formData.email && validateEmail(formData.email)
                  ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
                  : "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
              }`}
              style={{ caretColor: "#5A0F14" }}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
            {formData.email && validateEmail(formData.email) && !errors.email && (
              <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {waitlistFormCopy.fields.country.label}
              <span className="text-[#5A0F14]"> *</span>
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder={waitlistFormCopy.fields.country.placeholder}
              className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                errors.country
                  ? "border-red-500 shake"
                  : formData.country
                  ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
                  : "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
              }`}
              style={{ caretColor: "#5A0F14" }}
            />
            {errors.country && (
              <p className="mt-1 text-sm text-red-400">{errors.country}</p>
            )}
            {formData.country && !errors.country && (
              <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>
            )}
          </div>

          {/* Client Type */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {waitlistFormCopy.fields.clientType.label}
              <span className="text-[#5A0F14]"> *</span>
            </label>
            <select
              name="clientType"
              value={formData.clientType}
              onChange={handleChange}
              className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                errors.clientType
                  ? "border-red-500 shake"
                  : formData.clientType
                  ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
                  : "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
              }`}
            >
              {waitlistFormCopy.fields.clientType.options.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-black">
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.clientType && (
              <p className="mt-1 text-sm text-red-400">{errors.clientType}</p>
            )}
            {formData.clientType && !errors.clientType && (
              <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>
            )}
          </div>

          {/* Estimated Budget */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {waitlistFormCopy.fields.estimatedBudget.label}
              <span className="text-[#5A0F14]"> *</span>
            </label>
            <select
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                errors.estimatedBudget
                  ? "border-red-500 shake"
                  : formData.estimatedBudget
                  ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
                  : "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"
              }`}
            >
              {waitlistFormCopy.fields.estimatedBudget.options.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-black">
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.estimatedBudget && (
              <p className="mt-1 text-sm text-red-400">{errors.estimatedBudget}</p>
            )}
            {formData.estimatedBudget && !errors.estimatedBudget && (
              <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`hero-button w-full rounded-lg py-4 font-semibold uppercase tracking-wider transition-all duration-300 ${
                isFormValid
                  ? "bg-gradient-to-br from-[#5A0F14] to-[#8A1F24] text-white hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(90,15,20,0.7)]"
                  : "cursor-not-allowed bg-white/10 text-white/40"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="spinner h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  JOINING...
                </span>
              ) : (
                waitlistFormCopy.submitButton
              )}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .particle {
          animation: float-up linear infinite;
        }
        
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
        
        .hero-button {
          animation: heroButtonPulse 2s ease-in-out infinite;
        }
        
        @keyframes heroButtonPulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(90, 15, 20, 0.4);
          }
          50% {
            box-shadow: 0 4px 35px rgba(90, 15, 20, 0.7);
          }
        }
        
        .checkmark-slide {
          animation: checkmarkSlide 0.3s ease-out;
        }
        
        @keyframes checkmarkSlide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .shake {
          animation: shake 0.4s;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}