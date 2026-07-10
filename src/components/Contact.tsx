import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Please enter your email");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please write a small message for our bakers");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <MapPin className="text-warm-brown" size={20} />,
      title: "Address",
      value: "452 Artisans Boulevard, Pastry District, New York, NY 10001",
    },
    {
      icon: <Phone className="text-warm-brown" size={20} />,
      title: "Phone",
      value: "+1 (555) 987-6543",
    },
    {
      icon: <Mail className="text-warm-brown" size={20} />,
      title: "Email",
      value: "hello@manosalwa-bakery.com",
    },
    {
      icon: <Clock className="text-warm-brown" size={20} />,
      title: "Working Hours",
      value: "Monday - Saturday: 6:00 AM - 8:00 PM | Sunday: 7:00 AM - 4:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Warm Blur Orb */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-golden-beige/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest font-mono text-golden-beige uppercase block">
            Visit & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-dark tracking-tight leading-tight">
            Contact Us
          </h2>
          <div className="h-1 w-20 bg-golden-beige rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-warm-brown/70 font-sans font-light leading-relaxed">
            Have a custom design request or want to reserve bread? Leave us a message or find our opening times and locations below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-golden-beige/10 shadow-sm relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-warm-dark mb-4">
                    Send Us a Message
                  </h3>

                  {errorMsg && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl p-3 text-sm font-medium">
                      <AlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold tracking-wide font-mono text-warm-brown uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-cream border border-golden-beige/20 hover:border-golden-beige/40 focus:border-warm-brown focus:ring-1 focus:ring-warm-brown px-4 py-3 rounded-xl text-sm transition-all focus:outline-none placeholder-warm-brown/30"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold tracking-wide font-mono text-warm-brown uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-cream border border-golden-beige/20 hover:border-golden-beige/40 focus:border-warm-brown focus:ring-1 focus:ring-warm-brown px-4 py-3 rounded-xl text-sm transition-all focus:outline-none placeholder-warm-brown/30"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold tracking-wide font-mono text-warm-brown uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full bg-cream border border-golden-beige/20 hover:border-golden-beige/40 focus:border-warm-brown focus:ring-1 focus:ring-warm-brown px-4 py-3 rounded-xl text-sm transition-all focus:outline-none placeholder-warm-brown/30"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold tracking-wide font-mono text-warm-brown uppercase">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your celebration theme, dietary needs, or bread reservation..."
                      className="w-full bg-cream border border-golden-beige/20 hover:border-golden-beige/40 focus:border-warm-brown focus:ring-1 focus:ring-warm-brown px-4 py-3 rounded-xl text-sm transition-all focus:outline-none placeholder-warm-brown/30 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-warm-brown text-cream hover:bg-golden-beige hover:text-warm-dark font-medium text-sm py-4 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 group active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="py-12 px-6 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="p-4 bg-golden-beige/20 rounded-full text-warm-brown"
                  >
                    <CheckCircle size={56} className="stroke-[1.5]" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-warm-dark">
                      Message Sent!
                    </h3>
                    <p className="text-sm sm:text-base text-warm-brown/80 max-w-md mx-auto leading-relaxed">
                      Thank you so much. Your inquiry has been secured. Our head baking coordinator will reach out to you within the next 24 working hours!
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-warm-brown hover:bg-golden-beige hover:text-warm-dark text-cream px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Right Column: Contact info cards + Google Maps */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between h-full">
            
            {/* Direct Cards */}
            <div className="space-y-4" id="contact-info-list">
              {contactDetails.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white p-5 rounded-2xl border border-golden-beige/10 flex gap-4 items-start text-left hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-cream border border-golden-beige/10 rounded-xl shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-bold tracking-wide font-mono text-golden-beige uppercase">
                      {detail.title}
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-warm-brown font-light mt-1">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Embedded Google Maps Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-golden-beige/25 shadow-md h-[250px] relative bg-cream group"
            >
              <iframe
                title="MaNoSaLwA Bakery Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784412431203!3d40.75797473487221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a29a4e9471%3A0xf59ddbe94b0d00f7!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 brightness-[0.9] contrast-[1.1] grayscale-[20%] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-warm-brown text-cream text-[9px] font-mono tracking-widest px-2.5 py-1 rounded-full uppercase shadow-md pointer-events-none">
                Interactive Map
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
