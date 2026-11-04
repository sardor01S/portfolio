"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/components/providers/language-provider";

const contacts = [
  { key: "email", value: "sismatov811@gmail.com", icon: <Mail size={18} />, href: "mailto:sismatov811@gmail.com", external: false },
  { key: "phone", value: "+998 94 876 69 66", icon: <Phone size={18} />, href: "tel:+998948766966", external: false },
  { key: "github", value: "github.com/sardor01S", icon: <FaGithub size={18} />, href: "https://github.com/sardor01S", external: true },
] as const;

export function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "validation" | "error">("idle");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (
      !form.name.trim() ||
      !form.subject.trim() ||
      !form.message.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      setStatus("validation");
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
          <p className="text-sm uppercase tracking-[0.35em] text-sky-700 dark:text-cyan-300">{t.contactPage.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-white">{t.contactPage.title}</h2>
          <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300">{t.contactPage.subtitle}</p>
          <div className="mt-8 grid gap-4">
            {contacts.map((contact, index) => (
              <motion.a key={contact.key} href={contact.href} target={contact.external ? "_blank" : undefined} rel={contact.external ? "noopener noreferrer" : undefined} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.06 }} whileHover={{ x: 4 }} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition hover:border-sky-400 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-400/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 dark:bg-cyan-400/10 dark:text-cyan-300">{contact.icon}</div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.contactPage.links[contact.key]}</p>
                  <p className="break-all font-medium text-slate-950 dark:text-white">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form noValidate initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }} onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)] sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">{t.contactPage.name}<input required type="text" autoComplete="name" placeholder={t.contactPage.placeholders.name} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400" /></label>
            <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">{t.contactPage.email}<input required type="email" autoComplete="email" placeholder={t.contactPage.placeholders.email} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400" /></label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">{t.contactPage.subject}<input required placeholder={t.contactPage.placeholders.subject} value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400" /></label>
          <label className="mt-4 flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">{t.contactPage.message}<textarea required rows={6} placeholder={t.contactPage.placeholders.message} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400" /></label>

          <button type="submit" disabled={status === "loading"} className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"><Send size={16} /> {status === "loading" ? t.contactPage.sending : t.buttons.submit}</button>

          {status === "success" ? <p role="status" className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">{t.contactPage.success}</p> : null}
          {status === "validation" ? <p role="alert" className="mt-4 text-sm text-rose-600 dark:text-rose-400">{t.contactPage.validation}</p> : null}
          {status === "error" ? <p role="alert" className="mt-4 text-sm text-rose-600 dark:text-rose-400">{t.contactPage.error}</p> : null}
        </motion.form>
      </div>
    </section>
  );
}
