'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import {
  Shield, Scale, Users, Home as HomeIcon, ShoppingBag, FileText, Gavel,
  Lock, Globe, Phone, MapPin, Mail, MessageCircle, ChevronDown, Sun, Moon,
  Menu, X, Star, ArrowRight, Award, Clock, CheckCircle2, BookOpen,
  Fingerprint, Building2, Briefcase, Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { toast } from 'sonner'

const HERO_BG = 'https://images.unsplash.com/photo-1645570990200-2701a49d45ca?q=80&w=2000&auto=format&fit=crop'
const LAWYER_IMG = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop'
const JUSTICE_IMG = 'https://images.pexels.com/photos/30483132/pexels-photo-30483132.jpeg?auto=compress&cs=tinysrgb&w=1200'
const SCALES_IMG = 'https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg?auto=compress&cs=tinysrgb&w=1200'

const PRACTICE_AREAS = [
  { icon: Lock, title: 'Cyber Crime', desc: 'Online fraud, hacking, data theft, cyberstalking, identity theft' },
  { icon: Gavel, title: 'Criminal Law', desc: 'FIR, bail, anticipatory bail, trials, criminal appeals' },
  { icon: Users, title: 'Family & Matrimonial', desc: 'Divorce, custody, alimony, domestic violence, mediation' },
  { icon: HomeIcon, title: 'Property & Real Estate', desc: 'Title disputes, RERA, tenancy, property documentation' },
  { icon: ShoppingBag, title: 'Consumer Disputes', desc: 'Defective goods, service deficiency, e-commerce fraud' },
  { icon: FileText, title: 'Legal Notices', desc: 'Drafting notices, replies, agreements, contracts' },
  { icon: Shield, title: 'Bail Matters', desc: 'Regular bail, anticipatory bail, interim bail applications' },
  { icon: Fingerprint, title: 'Cyber Forensics', desc: 'Digital evidence, IT Act cases, phishing recovery' },
  { icon: Briefcase, title: 'Corporate Advisory', desc: 'Startup legal, compliance, employment disputes' },
  { icon: Building2, title: 'NRI Legal Services', desc: 'Power of Attorney, property, family disputes for NRIs' },
  { icon: Scale, title: 'Civil Litigation', desc: 'Recovery suits, injunctions, specific performance' },
  { icon: BookOpen, title: 'Documentation', desc: 'Wills, sale deeds, MOUs, partnership agreements' },
]

const WHY_US = [
  { icon: Award, title: '10+ Years Experience', desc: 'Proven track record in criminal & cyber law across Delhi courts' },
  { icon: Shield, title: 'Complete Confidentiality', desc: 'Attorney-client privilege strictly maintained — your matter stays private' },
  { icon: Clock, title: '24/7 Emergency Support', desc: 'Bail emergencies, FIR filing, urgent legal help — anytime' },
  { icon: Globe, title: 'PAN India + NRI', desc: 'Consultation across India and for NRIs worldwide via secure video' },
  { icon: CheckCircle2, title: 'Transparent Pricing', desc: 'No hidden costs. Fees discussed upfront during consultation' },
]

const REVIEWS = [
  { name: 'Rahul Sharma', role: 'Business Owner, Delhi', rating: 5, text: 'Adv. Bhanu handled my cyber fraud case with exceptional professionalism. Recovered funds within 6 months. Highly recommended for cyber crime matters.' },
  { name: 'Priya Malhotra', role: 'IT Professional, Noida', rating: 5, text: 'When my identity was stolen online, BPS Legal guided me through every step. Their expertise in IT Act is unmatched. Truly a trusted advisor.' },
  { name: 'Amit Verma', role: 'Startup Founder', rating: 5, text: 'Got instant anticipatory bail assistance during a false FIR situation. Bhanu Sir is calm, sharp, and knows the law inside out.' },
  { name: 'Neha Kapoor (NRI)', role: 'Client from UK', rating: 5, text: 'Handled my property dispute in India remotely. Regular video calls, clear updates. Best decision to hire BPS Legal for NRI matters.' },
  { name: 'Vikram Singh', role: 'Corporate Executive', rating: 5, text: 'Represented me in a matrimonial matter with dignity and strategic thinking. The outcome was better than expected. Deeply grateful.' },
]

const FAQS = [
  { q: 'What should I do if I am a victim of cyber fraud?', a: 'File a complaint immediately on cybercrime.gov.in and at your nearest cyber cell. Preserve all digital evidence — screenshots, transaction IDs, emails. Contact us within 24 hours for the best recovery chances.' },
  { q: 'How does anticipatory bail work?', a: 'If you fear arrest in a non-bailable offense, you can apply under Section 438 CrPC (now BNSS Section 482). We prepare and file the application in Sessions Court or High Court. Grant depends on merits — typically hearing happens within 3-7 days.' },
  { q: 'Do you offer online consultation for NRIs?', a: 'Yes. We offer secure video consultations via Google Meet/Zoom. All documents can be shared digitally. Power of Attorney can be executed remotely via Indian Embassy attestation.' },
  { q: 'What are your consultation fees?', a: 'First consultation is a flat fee (30 minutes). Case-specific fees are discussed transparently before engagement. We accept UPI, bank transfer, and international wire.' },
  { q: 'How long do criminal cases typically take?', a: 'Bail matters: 3–7 days. FIR quashing: 3–6 months. Full trials: 1–3 years depending on complexity. We provide realistic timelines during consultation.' },
  { q: 'Is my case information kept confidential?', a: 'Absolutely. Attorney-client privilege is sacred. All communications, documents, and case details are strictly confidential and encrypted.' },
]

const RIGHTS = [
  { title: 'Right to Silence', desc: 'You have the right to remain silent during police interrogation under Article 20(3) of the Constitution.' },
  { title: 'Right to Legal Aid', desc: 'Free legal aid is your constitutional right under Article 39A if you cannot afford a lawyer.' },
  { title: 'Right Against Illegal Arrest', desc: 'Police must inform you of grounds of arrest and produce you before a magistrate within 24 hours.' },
  { title: 'Cyber Fraud Reporting', desc: 'Report cyber fraud within Golden Hour (1 hour) at 1930 or cybercrime.gov.in to freeze the money.' },
]

const OFFICES = [
  { city: 'Delhi (Head Office)', addr: 'Chamber No. 42, Patiala House Courts, New Delhi – 110001', phone: '+91-98XXX-XXXXX' },
  { city: 'Noida Branch', addr: 'Sector 18, Noida, UP – 201301', phone: '+91-98XXX-XXXXX' },
  { city: 'Gurugram Chamber', addr: 'DLF Cyber City, Gurugram, HR – 122002', phone: '+91-98XXX-XXXXX' },
  { city: 'Ghaziabad Court', addr: 'District Court Complex, Ghaziabad, UP – 201001', phone: '+91-98XXX-XXXXX' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
            <Sun className="w-4 h-4 text-gold" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
            <Moon className="w-4 h-4 text-gold" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#practice', label: 'Practice Areas' },
    { href: '#rights', label: 'Know Your Rights' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-gold/20 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-gold/30 group-hover:scale-105 transition-transform">
            <span className="font-serif font-bold text-black text-lg">BPS</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-lg leading-tight">BPS Legal</div>
            <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Adv. Bhanu Pratap Sagar</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative text-sm font-medium hover:text-gold transition-colors group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="hidden md:inline-flex">
            <Button className="bg-gold text-black hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/40 transition-all font-medium">
              Book Consultation
            </Button>
          </a>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-gold/20 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-gold transition-colors">{l.label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gold text-black hover:bg-gold/90">Book Consultation</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${HERO_BG})`, filter: 'blur(3px) brightness(0.55)' }}
        />
      </motion.div>
      <div className="absolute inset-0 hero-overlay" />

      {/* Gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="container relative z-10 text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm tracking-wider text-gold">CRIMINAL &amp; CYBER LAW SPECIALIST</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl"
        >
          Advocate <span className="gold-text-gradient">Bhanu Pratap</span>
          <br />
          Sagar
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-white/70"
        >
          <span className="text-sm tracking-widest">LL.B.</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span className="text-sm tracking-widest">DIPLOMA IN CYBER LAW</span>
          <span className="w-1 h-1 rounded-full bg-gold" />
          <span className="text-sm tracking-widest">DELHI HIGH COURT</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 text-2xl md:text-3xl font-serif italic text-white/90 max-w-3xl"
        >
          &ldquo;Your Rights. <span className="text-gold">Our Responsibility.</span>&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-4 text-lg text-white/70 max-w-2xl"
        >
          Justice. Integrity. Protection. Trusted legal counsel for Criminal &amp; Cyber matters across India, with dedicated NRI consultation services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#contact">
            <Button size="lg" className="bg-gold text-black hover:bg-gold/90 hover:shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all text-base h-14 px-8 font-medium">
              Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="border-gold/50 text-white hover:bg-gold/10 hover:border-gold transition-all text-base h-14 px-8 backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Now
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-gold" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function TrustStrip() {
  const items = ['Criminal Law', 'Cyber Law', 'PAN India', 'NRI Consultation', 'Strictly Confidential', 'Delhi High Court', '24/7 Emergency Bail', 'Since 2014']
  const doubled = [...items, ...items]
  return (
    <section className="py-6 bg-black text-white border-y border-gold/20 overflow-hidden">
      <div className="flex scroll-marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center px-8 gap-8">
            <span className="font-serif text-lg text-white/80">{t}</span>
            <span className="w-2 h-2 rounded-full bg-gold" />
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, subtitle, light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="w-8 h-px bg-gold" />
        <span className="text-xs tracking-[0.3em] text-gold uppercase">{eyebrow}</span>
        <span className="w-8 h-px bg-gold" />
      </div>
      <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${light ? 'text-white/70' : 'text-muted-foreground'}`}>{subtitle}</p>}
    </motion.div>
  )
}

function PracticeAreas() {
  return (
    <section id="practice" className="py-24 bg-background">
      <div className="container">
        <SectionHeader eyebrow="Practice Areas" title="Comprehensive Legal Expertise" subtitle="From cyber crime to criminal defense, family matters to property disputes — experienced counsel across every domain." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PRACTICE_AREAS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group card-hover relative p-6 rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer pointer-events-none" />
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4 shadow-lg shadow-gold/20">
                <p.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-gold transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 gold-gradient rounded-2xl opacity-20 blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-gold/30">
            <img src={LAWYER_IMG} alt="Adv. Bhanu Pratap Sagar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs tracking-widest text-gold mb-2">FOUNDER &amp; MANAGING ADVOCATE</div>
              <div className="font-serif text-2xl">Bhanu Pratap Sagar</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-gold text-black rounded-xl p-5 shadow-2xl hidden sm:block">
            <div className="text-4xl font-serif font-bold">10+</div>
            <div className="text-xs uppercase tracking-widest">Years Experience</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs tracking-[0.3em] text-gold uppercase">About the Advocate</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            A decade of pursuing <span className="gold-text-gradient">justice</span> with unwavering integrity.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Adv. Bhanu Pratap Sagar is a distinguished criminal and cyber law practitioner based in Delhi. With an LL.B. and Diploma in Cyber Law, he has represented clients across Delhi High Court, District Courts, and cyber crime cells throughout North India.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            His practice combines old-school courtroom craft with modern digital forensics — making BPS Legal a preferred choice for both traditional criminal matters and complex cyber crime cases.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { n: '500+', l: 'Cases Handled' },
              { n: '95%', l: 'Success Rate' },
              { n: '4', l: 'Office Locations' },
            ].map((s) => (
              <div key={s.l} className="text-center p-4 rounded-lg border border-gold/20 bg-card">
                <div className="font-serif text-3xl text-gold">{s.n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          <Button className="bg-gold text-black hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30">
            Read Full Bio <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${JUSTICE_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      <div className="container relative">
        <SectionHeader eyebrow="Why Choose BPS Legal" title="Five Pillars of Trust" subtitle="What sets us apart in Delhi's legal landscape." light />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHY_US.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 rounded-xl glass hover:border-gold/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-full border-2 border-gold/40 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/10 transition-all">
                <w.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-white">{w.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function KnowYourRights() {
  return (
    <section id="rights" className="py-24 bg-background">
      <div className="container">
        <SectionHeader eyebrow="Know Your Rights" title="Legal Awareness. Empowered Citizens." subtitle="Bite-sized guides to help you understand your constitutional and legal protections." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {RIGHTS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-hover p-6 rounded-xl border border-gold/20 bg-gradient-to-br from-card to-secondary/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 gold-gradient opacity-5 rounded-full blur-2xl" />
              <div className="text-5xl font-serif text-gold/30 mb-2">0{i + 1}</div>
              <h3 className="font-serif text-lg mb-3">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="reviews" className="py-24 bg-secondary/30">
      <div className="container">
        <SectionHeader eyebrow="Client Reviews" title="Voices of Trust" subtitle="What our clients say about their experience with BPS Legal." />
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative p-10 md:p-14 rounded-2xl bg-card border border-gold/20 text-center"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black text-3xl font-serif shadow-lg shadow-gold/30">&ldquo;</div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-5 h-5 fill-gold text-gold" />)}
              </div>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-8">&ldquo;{REVIEWS[i].text}&rdquo;</p>
              <div className="font-serif text-lg">{REVIEWS[i].name}</div>
              <div className="text-sm text-muted-foreground">{REVIEWS[i].role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-gold' : 'w-2 bg-muted-foreground/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Straight answers to common legal queries." />
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem value={`item-${i}`} className="border border-gold/20 rounded-xl px-6 bg-card data-[state=open]:border-gold/50 data-[state=open]:shadow-lg data-[state=open]:shadow-gold/10 transition-all">
                <AccordionTrigger className="font-serif text-lg hover:text-gold text-left hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', country: 'India', state: '', city: '',
    caseType: '', language: 'English', mode: 'Online', description: '',
  })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Please provide your name and phone number')
      return
    }
    setLoading(true)
    try {
      const r = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await r.json()
      if (data.ok) {
        toast.success('Consultation request received! We will contact you within 24 hours.')
        setForm({ name: '', phone: '', email: '', country: 'India', state: '', city: '', caseType: '', language: 'English', mode: 'Online', description: '' })
      } else {
        toast.error(data.error || 'Something went wrong')
      }
    } catch (err) {
      toast.error('Network error. Please try WhatsApp.')
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: `url(${SCALES_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="container relative">
        <SectionHeader eyebrow="Get in Touch" title="Book Your Confidential Consultation" subtitle="Every conversation is protected by attorney-client privilege. Share your matter with peace of mind." light />
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-serif text-2xl mb-6 text-gold">Our Offices</h3>
              <div className="space-y-4">
                {OFFICES.map((o) => (
                  <div key={o.city} className="p-4 rounded-lg glass hover:border-gold/50 transition-all">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                      <div>
                        <div className="font-medium text-white">{o.city}</div>
                        <div className="text-sm text-white/60 mt-1">{o.addr}</div>
                        <div className="text-sm text-gold mt-1">{o.phone}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-lg gold-gradient text-black">
              <div className="text-xs uppercase tracking-widest opacity-80 mb-2">Emergency Bail? 24/7 Available</div>
              <a href="tel:+919999999999" className="font-serif text-2xl font-bold flex items-center gap-2">
                <Phone className="w-5 h-5" /> +91-98XXX-XXXXX
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 p-8 rounded-2xl glass border border-gold/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">Full Name *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-gold" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">Phone *</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-gold" placeholder="+91 98XXX XXXXX" />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">Email</label>
                <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-gold" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">Country</label>
                <Input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-gold" />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">State</label>
                <Input value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-gold" placeholder="Delhi" />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">City</label>
                <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-gold" placeholder="New Delhi" />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">Case Type</label>
                <Select value={form.caseType} onValueChange={(v) => setForm({ ...form, caseType: v })}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-gold">
                    <SelectValue placeholder="Select case type" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRACTICE_AREAS.map((p) => <SelectItem key={p.title} value={p.title}>{p.title}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">Consultation Mode</label>
                <Select value={form.mode} onValueChange={(v) => setForm({ ...form, mode: v })}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Online">Online (Video / Call)</SelectItem>
                    <SelectItem value="Chamber">In-person (Chamber)</SelectItem>
                    <SelectItem value="Court">At Court</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1.5 block">Preferred Language</label>
                <Select value={form.language} onValueChange={(v) => setForm({ ...form, language: v })}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Punjabi">Punjabi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70 mb-1.5 block">Describe your matter (kept strictly confidential)</label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-gold" placeholder="Briefly explain your legal issue..." />
            </div>
            <Button type="submit" disabled={loading} size="lg" className="w-full mt-6 bg-gold text-black hover:bg-gold/90 hover:shadow-2xl hover:shadow-gold/40 transition-all h-14 text-base font-medium">
              {loading ? 'Sending...' : (<>Request Consultation <ArrowRight className="w-4 h-4 ml-2" /></>)}
            </Button>
            <p className="text-xs text-white/50 text-center mt-4">By submitting, you consent to being contacted. Your information is confidential.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gold/20 py-16">
      <div className="container grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
              <span className="font-serif font-bold text-black">BPS</span>
            </div>
            <div>
              <div className="font-serif text-xl">BPS Legal</div>
              <div className="text-[10px] tracking-[0.2em] text-gold uppercase">Adv. Bhanu Pratap Sagar</div>
            </div>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">
            Delhi&apos;s trusted advocate for Criminal &amp; Cyber Law. Serving clients across India and NRIs worldwide with integrity, discretion, and dedication.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://wa.me/919999999999" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all"><MessageCircle className="w-4 h-4" /></a>
            <a href="tel:+919999999999" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all"><Phone className="w-4 h-4" /></a>
            <a href="mailto:contact@bpslegal.in" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-black transition-all"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
            <li><a href="#practice" className="hover:text-gold transition-colors">Practice Areas</a></li>
            <li><a href="#rights" className="hover:text-gold transition-colors">Know Your Rights</a></li>
            <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Contact</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Patiala House Courts</li>
            <li>New Delhi, India</li>
            <li className="text-gold">+91-98XXX-XXXXX</li>
            <li>contact@bpslegal.in</li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <div>&copy; {new Date().getFullYear()} BPS Legal. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold">Privacy Policy</a>
          <a href="#" className="hover:text-gold">Terms of Service</a>
          <a href="#" className="hover:text-gold">Disclaimer</a>
        </div>
      </div>
      <div className="container mt-6 text-[10px] text-white/30 text-center leading-relaxed">
        As per Bar Council of India Rules, advocates are prohibited from advertising. This website is for informational purposes only. No attorney-client relationship is created by browsing.
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  )
}

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <PracticeAreas />
      <AboutPreview />
      <WhyUs />
      <KnowYourRights />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App




## package.json

{
    "name": "nextjs-mongo-template",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "dev": "NODE_OPTIONS='--max-old-space-size=512' next dev --hostname 0.0.0.0 --port 3000",
        "dev:no-reload": "next dev --hostname 0.0.0.0 --port 3000",
        "dev:webpack": "next dev --hostname 0.0.0.0 --port 3000",
        "build": "next build",
        "start": "next start"
    },
    "dependencies": {
        "@hookform/resolvers": "5.1.1",
        "@radix-ui/react-accordion": "1.2.11",
        "@radix-ui/react-alert-dialog": "1.1.14",
        "@radix-ui/react-aspect-ratio": "1.1.7",
        "@radix-ui/react-avatar": "1.1.10",
        "@radix-ui/react-checkbox": "1.3.2",
        "@radix-ui/react-collapsible": "1.1.11",
        "@radix-ui/react-context-menu": "2.2.15",
        "@radix-ui/react-dialog": "1.1.14",
        "@radix-ui/react-dropdown-menu": "2.1.15",
        "@radix-ui/react-hover-card": "1.1.14",
        "@radix-ui/react-label": "2.1.7",
        "@radix-ui/react-menubar": "1.1.15",
        "@radix-ui/react-navigation-menu": "1.2.13",
        "@radix-ui/react-popover": "1.1.14",
        "@radix-ui/react-progress": "1.1.7",
        "@radix-ui/react-radio-group": "1.3.7",
        "@radix-ui/react-scroll-area": "1.2.9",
        "@radix-ui/react-select": "2.2.5",
        "@radix-ui/react-separator": "1.1.7",
        "@radix-ui/react-slider": "1.3.5",
        "@radix-ui/react-slot": "1.2.3",
        "@radix-ui/react-switch": "1.2.5",
        "@radix-ui/react-tabs": "1.1.12",
        "@radix-ui/react-toast": "1.2.14",
        "@radix-ui/react-toggle": "1.1.9",
        "@radix-ui/react-toggle-group": "1.1.10",
        "@radix-ui/react-tooltip": "1.2.7",
        "@tanstack/react-query": "5.56.2",
        "@tanstack/react-table": "8.21.3",
        "axios": "1.18.0",
        "class-variance-authority": "0.7.1",
        "clsx": "2.1.1",
        "cmdk": "1.1.1",
        "date-fns": "4.1.0",
        "dayjs": "1.11.13",
        "embla-carousel-react": "8.6.0",
        "framer-motion": "11.18.0",
        "input-otp": "1.4.2",
        "lodash": "4.18.1",
        "lucide-react": "0.516.0",
        "mongodb": "6.6.0",
        "next": "15.5.18",
        "next-themes": "0.4.6",
        "react": "18.3.1",
        "react-day-picker": "9.7.0",
        "react-dom": "18.3.1",
        "react-hook-form": "7.58.1",
        "react-resizable-panels": "3.0.3",
        "recharts": "2.15.3",
        "sonner": "2.0.5",
        "swr": "2.3.8",
        "tailwind-merge": "3.3.1",
        "tailwindcss-animate": "1.0.7",
        "uuid": "11.1.1",
        "vaul": "1.1.2",
        "zod": "3.25.67"
    },
    "devDependencies": {
        "@types/lodash": "4.17.24",
        "autoprefixer": "10.4.19",
        "globals": "16.2.0",
        "postcss": "8",
        "tailwindcss": "3.4.1"
    },
    "resolutions": {
        "follow-redirects": "1.16.0",
        "form-data": "4.0.6",
        "**/micromatch/picomatch": "2.3.2",
        "**/anymatch/picomatch": "2.3.2",
        "**/readdirp/picomatch": "2.3.2",
        "postcss": "8.5.10",
        "yaml": "2.8.3",
        "lodash": "4.18.1"
    },
    "packageManager": "yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e"
}









