"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/components/providers/language-provider";

const contacts = [
  { label: "GitHub", value: "github.com/sardor", icon: <FaGithub size={18} />, href: "https://github.com/sardor01S" },
  { label: "LinkedIn", value: "linkedin.com/in/sardor", icon: <FaLinkedin size={18} />, href: "https://linkedin.com" },
  { label: "Telegram", value: "@s_ismatov1", icon: <FaTelegram size={18} />, href: "https://t.me/s_ismatov1" },
  { label: "Email", value: "sismatov811@gmail.com", icon: <Mail size={18} />, href: "mailto:sismatov811@gmail.com" },
  { label: "Location", value: "Tashkent, Uzbekistan", icon: <MapPin size={18} />, href: "https://maps.google.com" },
];

export function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(serviceId, templateId, { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message }, publicKey);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">{t.nav.contact}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t.contactPage.title}</h2>
          <p className="mt-4 max-w-xl text-lg text-slate-400">{t.contactPage.subtitle}</p>
          <div className="mt-8 grid gap-4">
            {contacts.map((contact, index) => (
              <motion.a key={contact.label} href={contact.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} whileHover={{ x: 6, y: -4, scale: 1.01 }} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl transition hover:border-cyan-400/30 hover:shadow-[0_16px_60px_rgba(59,130,246,0.14)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">{contact.icon}</div>
                <div>
                  <p className="text-sm text-slate-400">{contact.label}</p>
                  <p className="font-medium text-white">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55 }} onSubmit={handleSubmit} className="rounded-4xl border border-white/10 bg-slate-950/70 p-7 shadow-[0_25px_100px_rgba(2,8,23,0.35)] backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">{t.contactPage.name}<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" /></label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">{t.contactPage.email}<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" /></label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm text-slate-200">{t.contactPage.subject}<input required value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" /></label>
          <label className="mt-4 flex flex-col gap-2 text-sm text-slate-200">{t.contactPage.message}<textarea required rows={6} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none" /></label>

          <button type="submit" disabled={status === "loading"} className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"><Send size={16} /> {status === "loading" ? t.contactPage.sending : t.buttons.submit}</button>

          {status === "success" ? <p className="mt-4 text-sm text-emerald-400">{t.contactPage.success}</p> : null}
          {status === "error" ? <p className="mt-4 text-sm text-rose-400">{t.contactPage.error}</p> : null}
        </motion.form>
      </div>
    </section>
  );
}
