"use client";

import { useState } from "react";
import Link from "next/link";
import { SEO_PAGES } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required";
    if (!form.projectType) nextErrors.projectType = "Project type is required";
    if (!form.location.trim()) nextErrors.location = "Project location is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission animation
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        location: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="border-t border-line bg-ink text-paper relative overflow-hidden min-h-[90vh]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        {/* Intro */}
        <div className="reveal mb-20 max-w-[900px]">
          <span className="label text-accent font-medium">Get In Touch</span>
          <h2 className="display mt-4 text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none">
            Every meaningful space begins with a conversation.
          </h2>
          <p className="mt-8 text-lg text-paper/70 font-light leading-relaxed max-w-[32ch]">
            Whether you are envisioning a residence, an institution, a commercial environment, or a transformative spatial experience, we look forward to understanding your vision.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 items-start mt-12">
          {/* Left Column: Studios & Connect */}
          <div className="lg:col-span-5 flex flex-col gap-12 border-t border-paper/10 pt-8">
            {/* Studios */}
            <div>
              <h3 className="label text-accent font-semibold mb-6">Our Studios</h3>
              <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 lg:flex-col lg:gap-8">
                {/* Hanamkonda */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-lg font-medium text-paper">Hanmakonda Studio</span>
                  <span className="text-sm text-paper/60">35-7-5/A Jawahar colony Main Road,</span>
                  <span className="text-sm text-paper/60">Gopalpur, Hanmakonda, Telangana</span>
                  <a href="tel:+91XXXXXXXXXX" className="text-sm text-paper/80 hover:text-paper hover:underline mt-1">
                    +91 XXXXX XXXXX
                  </a>
                </div>
                {/* Hyderabad */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-lg font-medium text-paper">Hyderabad Studio</span>
                  <span className="text-sm text-paper/60">First Floor, Ganesham Square,</span>
                  <span className="text-sm text-paper/60">Road No. 7, Kakatiya Hills, Madhapur, Hyderabad</span>
                  <a href="tel:+91XXXXXXXXXX" className="text-sm text-paper/80 hover:text-paper hover:underline mt-1">
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="border-t border-paper/10 pt-8">
              <h3 className="label text-accent font-semibold mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@voidarchitects.in" className="text-lg text-paper/80 hover:text-paper hover:underline">
                  hello@voidarchitects.in
                </a>
                <a href="tel:+91XXXXXXXXXX" className="text-sm text-paper/60 hover:text-paper">
                  +91 XXXXX XXXXX
                </a>
                <div className="flex gap-6 mt-3 text-sm">
                  <a href="#instagram" className="text-paper/60 hover:text-paper transition-colors">
                    Instagram
                  </a>
                  <a href="#linkedin" className="text-paper/60 hover:text-paper transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-6 lg:col-start-7 border-t border-paper/10 pt-8 relative">
            <h3 className="label text-accent font-semibold mb-2">Project Enquiries</h3>
            <p className="text-sm text-paper/60 mb-8 leading-relaxed max-w-[40ch]">
              Share your ideas, aspirations, and project requirements. Every meaningful collaboration begins with understanding.
            </p>

            {success ? (
              <div className="bg-paper/5 border border-paper/10 rounded-xl p-8 text-center backdrop-blur-sm reveal">
                <span className="display text-2xl text-paper block">Enquiry Submitted</span>
                <p className="text-sm text-paper/60 mt-4 leading-relaxed max-w-[32ch] mx-auto">
                  Thank you for reaching out. We have received your enquiry and will connect with you within two working days.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-sm text-accent underline underline-offset-4 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h4 className="display text-xl mb-2">Enquiry Form</h4>
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-paper/60 uppercase tracking-wider font-mono">
                    * Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-paper/5 border border-paper/15 rounded-lg px-4 py-3 text-sm text-paper focus:outline-none focus:border-paper transition-colors"
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name}</span>}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-paper/60 uppercase tracking-wider font-mono">
                    * Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-paper/5 border border-paper/15 rounded-lg px-4 py-3 text-sm text-paper focus:outline-none focus:border-paper transition-colors"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <span className="text-xs text-red-400 mt-1">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs text-paper/60 uppercase tracking-wider font-mono">
                    * Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-paper/5 border border-paper/15 rounded-lg px-4 py-3 text-sm text-paper focus:outline-none focus:border-paper transition-colors"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <span className="text-xs text-red-400 mt-1">{errors.phone}</span>}
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-xs text-paper/60 uppercase tracking-wider font-mono">
                    * Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-paper/5 border border-paper/15 rounded-lg px-4 py-3 text-sm text-paper/60 focus:outline-none focus:border-paper focus:text-paper transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-ink text-paper">Select Project Type</option>
                    <option value="Residential" className="bg-ink text-paper">Residential</option>
                    <option value="Commercial" className="bg-ink text-paper">Commercial</option>
                    <option value="Institutional" className="bg-ink text-paper">Institutional</option>
                    <option value="Landscape" className="bg-ink text-paper">Landscape Design</option>
                    <option value="Interior" className="bg-ink text-paper">Interior Design</option>
                  </select>
                  {errors.projectType && <span className="text-xs text-red-400 mt-1">{errors.projectType}</span>}
                </div>

                {/* Project Location */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="text-xs text-paper/60 uppercase tracking-wider font-mono">
                    * Project Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full bg-paper/5 border border-paper/15 rounded-lg px-4 py-3 text-sm text-paper focus:outline-none focus:border-paper transition-colors"
                    placeholder="City / Region"
                  />
                  {errors.location && <span className="text-xs text-red-400 mt-1">{errors.location}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs text-paper/60 uppercase tracking-wider font-mono">
                    * Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-paper/5 border border-paper/15 rounded-lg px-4 py-3 text-sm text-paper focus:outline-none focus:border-paper transition-colors resize-none"
                    placeholder="Tell us about your site, brief, or timeline"
                  />
                  {errors.message && <span className="text-xs text-red-400 mt-1">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 mt-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Closing Statement / SEO links */}
        <div className="border-t border-paper/10 mt-24 pt-16 flex flex-col gap-12">
          <div className="text-center max-w-[700px] mx-auto flex flex-col gap-6">
            <p className="text-lg md:text-2xl font-light text-paper/70 leading-relaxed">
              Architecture begins long before the first line is drawn. It begins with listening.
            </p>
            <p className="label text-accent font-semibold tracking-widest">
              Let&rsquo;s create spaces that endure.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-paper/10 pt-8 justify-center">
            {SEO_PAGES.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="text-xs text-paper/40 transition-colors hover:text-paper"
              >
                {p.h1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

