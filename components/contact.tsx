"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { SocialLinks } from "./social-links";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.person.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(
          data.message || "Thank you! Your message has been sent successfully."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Failed to send message. Please try again or email directly."
        );
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setStatusMessage("An unexpected network error occurred. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Start a Conversation"
          subtitle="Whether you have an internship position, a freelance project, or just want to connect, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I generally reply within 24 hours. For quick queries, feel free to reach out directly via email or LinkedIn.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-start justify-between p-3.5 rounded-2xl bg-slate-950/60 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-950/50 text-purple-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase">
                        Email
                      </span>
                      <a
                        href={portfolio.links.email}
                        className="block text-sm font-medium text-slate-200 hover:text-purple-400 transition-colors"
                      >
                        {portfolio.person.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    aria-label="Copy email address"
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {copiedEmail ? (
                      <Check size={16} className="text-emerald-400" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-white/5">
                  <div className="p-2 rounded-xl bg-indigo-950/50 text-indigo-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={portfolio.links.phone}
                      className="block text-sm font-medium text-slate-200 hover:text-indigo-400 transition-colors"
                    >
                      {portfolio.person.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-white/5">
                  <div className="p-2 rounded-xl bg-emerald-950/50 text-emerald-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      Location
                    </span>
                    <p className="text-sm font-medium text-slate-200">
                      {portfolio.person.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Professional Profiles
                </span>
                <SocialLinks size="lg" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field (hidden from screen reader & users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website (Leave blank)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                    >
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300"
                  >
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  />
                </div>

                {/* Status Feedback Banners */}
                {status === "success" && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs sm:text-sm flex items-center gap-3"
                  >
                    <AlertCircle size={18} className="text-rose-400 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg shadow-purple-900/30 hover:shadow-purple-700/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
