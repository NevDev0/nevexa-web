"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
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

  const [displayCount, setDisplayCount] = useState(0);
  const [realCount, setRealCount] = useState(0);

  // Refs pour navigation Enter
  const emailRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const clientTypeRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    fetch('/api/waitlist')
      .then(res => res.json())
      .then(data => {
        const count = data.count + 78;
        setRealCount(count);
        let current = 0;
        const increment = count / (2000 / 16);
        const timer = setInterval(() => {
          current += increment;
          if (current >= count) { setDisplayCount(count); clearInterval(timer); }
          else setDisplayCount(Math.floor(current));
        }, 16);
        return () => clearInterval(timer);
      })
      .catch(err => console.error('Error fetching count:', err));
  }, []);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const calculateProgress = () => {
    const fields = Object.values(formData);
    return (fields.filter(f => f !== "").length / fields.length) * 100;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  // Enter key navigation entre champs texte
  const focusNext = (ref: React.RefObject<any>) => {
    ref.current?.focus();
  };

  const handleKeyDownEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Valide email avant de passer au suivant
      if (formData.email && !validateEmail(formData.email)) {
        setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
      } else {
        setErrors(prev => ({ ...prev, email: "" }));
      }
      focusNext(countryRef);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    next?: React.RefObject<any>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (next) focusNext(next);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.clientType) newErrors.clientType = "Client type is required";
    if (!formData.estimatedBudget) newErrors.estimatedBudget = "Budget is required";

    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setLoading(true);
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) setSubmitted(true);
      else alert('Error saving data. Please try again.');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const progress = calculateProgress();

  // SUCCESS STATE
  if (submitted) {
    return (
      <section className="relative w-full overflow-hidden bg-black px-6 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {[15, 30, 50, 70, 85].map((left, i) => (
            <div key={i} className="particle absolute h-3 w-3 rounded-full bg-[#8A1F24]"
              style={{ left: `${left}%`, bottom: "0", animationDelay: `${i * 0.5}s`, animationDuration: `${4 + i * 0.3}s` }} />
          ))}
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="checkmark-bounce flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#5A0F14] bg-[#5A0F14]/10">
              <svg className="h-12 w-12 text-[#5A0F14]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="success-fade-in">
            <h3 className="mb-4 text-3xl font-bold uppercase tracking-wide">{waitlistFormCopy.successMessage.title}</h3>
            <div className="mx-auto mb-8 h-px w-16 bg-[#5A0F14]" />
            <p className="mb-10 text-lg text-white/70">{waitlistFormCopy.successMessage.description}</p>
            <a href="/b2c" className="inline-block rounded-lg border border-white/10 bg-gradient-to-br from-[#5A0F14] to-[#8A1F24] px-10 py-4 font-semibold uppercase tracking-wider shadow-[0_4px_20px_rgba(90,15,20,0.5)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(90,15,20,0.7)]">
              {waitlistFormCopy.successMessage.cta}
            </a>
          </div>
        </div>
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

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {[
          { left: "10%", delay: "0s", dur: "5s", size: "h-2 w-2" },
          { left: "25%", delay: "1s", dur: "6s", size: "h-3 w-3" },
          { left: "45%", delay: "2s", dur: "5.5s", size: "h-2 w-2" },
          { left: "60%", delay: "0.5s", dur: "7s", size: "h-3 w-3" },
          { left: "75%", delay: "3s", dur: "6.5s", size: "h-2 w-2" },
          { left: "90%", delay: "1.5s", dur: "5s", size: "h-3 w-3" },
        ].map((p, i) => (
          <div key={i} className={`particle absolute rounded-full bg-[#5A0F14] ${p.size}`}
            style={{ left: p.left, bottom: "0", animationDelay: p.delay, animationDuration: p.dur }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">{waitlistFormCopy.title}</h2>
          <div className="mx-auto h-px w-16 bg-[#5A0F14]" />
        </div>

        {/* Counter */}
        {displayCount > 0 && (
          <div className="mb-4 text-center">
            <div className="mb-2 inline-flex items-center gap-3 rounded-full border border-[#5A0F14]/30 bg-[#5A0F14]/10 px-6 py-3 backdrop-blur-sm">
              <div className="relative">
                <div className="h-2 w-2 rounded-full bg-[#5A0F14]" />
                <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-[#5A0F14] opacity-75" />
              </div>
              <span className="text-xl font-bold tabular-nums text-white/90 sm:text-2xl">{displayCount.toLocaleString()}</span>
              <span className="text-sm text-white/80">on the waitlist</span>
            </div>
            <p className="text-xs text-white/60">Last signup moments ago</p>
          </div>
        )}

        {/* Progress bar */}
        <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full bg-gradient-to-r from-[#5A0F14] to-[#8A1F24] transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        {/* Form — 2 colonnes desktop */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Row 1 : Full Name + Email */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                {waitlistFormCopy.fields.fullName.label}<span className="text-[#5A0F14]"> *</span>
              </label>
              <input
                type="text" name="fullName" value={formData.fullName}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, emailRef)}
                placeholder={waitlistFormCopy.fields.fullName.placeholder}
                className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                  errors.fullName ? "border-red-500 shake" :
                  formData.fullName ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]" :
                  "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"}`}
                style={{ caretColor: "#5A0F14" }}
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
              {formData.fullName && !errors.fullName && <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                {waitlistFormCopy.fields.email.label}<span className="text-[#5A0F14]"> *</span>
              </label>
              <input
                ref={emailRef} type="email" name="email" value={formData.email}
                onChange={handleChange}
                onKeyDown={handleKeyDownEmail}
                placeholder={waitlistFormCopy.fields.email.placeholder}
                className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                  errors.email ? "border-red-500 shake" :
                  formData.email && validateEmail(formData.email) ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]" :
                  "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"}`}
                style={{ caretColor: "#5A0F14" }}
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              {formData.email && validateEmail(formData.email) && !errors.email && <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>}
            </div>
          </div>

          {/* Row 2 : Country + Client Type */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Country */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                {waitlistFormCopy.fields.country.label}<span className="text-[#5A0F14]"> *</span>
              </label>
              <input
                ref={countryRef} type="text" name="country" value={formData.country}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyDown(e, clientTypeRef)}
                placeholder={waitlistFormCopy.fields.country.placeholder}
                className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                  errors.country ? "border-red-500 shake" :
                  formData.country ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]" :
                  "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"}`}
                style={{ caretColor: "#5A0F14" }}
              />
              {errors.country && <p className="mt-1 text-sm text-red-400">{errors.country}</p>}
              {formData.country && !errors.country && <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>}
            </div>

            {/* Client Type */}
            <div>
              <label htmlFor="clientType" className="mb-2 block text-sm font-medium">
                {waitlistFormCopy.fields.clientType.label}<span className="text-[#5A0F14]"> *</span>
              </label>
              <select
                id="clientType"
                ref={clientTypeRef} name="clientType" value={formData.clientType}
                onChange={handleChange}
                className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                  errors.clientType ? "border-red-500 shake" :
                  formData.clientType ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]" :
                  "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"}`}
              >
                {waitlistFormCopy.fields.clientType.options.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-black">{opt.label}</option>
                ))}
              </select>
              {errors.clientType && <p className="mt-1 text-sm text-red-400">{errors.clientType}</p>}
              {formData.clientType && !errors.clientType && <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>}
            </div>
          </div>

          {/* Row 3 : Budget — pleine largeur */}
          <div>
            <label htmlFor="estimatedBudget" className="mb-2 block text-sm font-medium">
              {waitlistFormCopy.fields.estimatedBudget.label}<span className="text-[#5A0F14]"> *</span>
            </label>
            <select
              id="estimatedBudget"
              name="estimatedBudget" value={formData.estimatedBudget}
              onChange={handleChange}
              className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 focus:scale-[1.01] focus:outline-none ${
                errors.estimatedBudget ? "border-red-500 shake" :
                formData.estimatedBudget ? "border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]" :
                "border-white/10 focus:border-[#5A0F14] focus:shadow-[0_0_20px_rgba(90,15,20,0.3)]"}`}
            >
              {waitlistFormCopy.fields.estimatedBudget.options.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-black">{opt.label}</option>
              ))}
            </select>
            {errors.estimatedBudget && <p className="mt-1 text-sm text-red-400">{errors.estimatedBudget}</p>}
            {formData.estimatedBudget && !errors.estimatedBudget && <div className="checkmark-slide mt-2 text-[#5A0F14]">✓</div>}
          </div>

          {/* Submit — toujours visible */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="hero-button w-full rounded-lg bg-gradient-to-br from-[#5A0F14] to-[#8A1F24] py-4 font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_35px_rgba(90,15,20,0.7)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="spinner h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  JOINING...
                </span>
              ) : waitlistFormCopy.submitButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}