import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  Download,
  Check,
  MapPin,
  X,
  QrCode,
  Building2,
  Users,
  Wrench,
  Shield,
  Sprout,
  Briefcase,
  ChevronRight,
  ArrowUpRight,
  Layers,
  Award,
  Sparkles,
  Share2
} from 'lucide-react';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Lock body scroll when drawer or modal is open
  useEffect(() => {
    if (isDrawerOpen || showQrModal || showBusinessModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isDrawerOpen, showQrModal, showBusinessModal]);

  // Update document title
  useEffect(() => {
    document.title = 'Nandishgouda B. Patil — Entrepreneur | Operations';
  }, []);

  // Generate and download .vcf file for Nandishgouda B. Patil
  const handleSaveContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Nandishgouda B. Patil
N:Patil;Nandishgouda;B.;;
TITLE:Entrepreneur | Operations
ORG:New Hitech Powder Coats
TEL;TYPE=CELL:+916366705787
EMAIL;TYPE=INTERNET:nandishpatil7555@gmail.com
ADR;TYPE=WORK:;;Hubli;;;;
URL;TYPE=Instagram:https://www.instagram.com/nandishpatil555___
URL;TYPE=LinkedIn:https://www.linkedin.com/in/nandishgouda-patil
NOTE:Operations, Surface Finishing, Metal Fabrication, Agricultural Implements, Safe Lockers & Strong Room Doors.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Nandishgouda_B_Patil.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  const handleShareProfile = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Nandishgouda B. Patil — Executive Profile',
          text: 'Nandishgouda B. Patil | Entrepreneur & Operations',
          url: window.location.href,
        });
      } catch {
        // Fallback copy URL
        copyUrl();
      }
    } else {
      copyUrl();
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#111412] text-[#F2EFE7] font-sans antialiased selection:bg-[#C5A15A] selection:text-[#111412] relative pb-20 sm:pb-0">
      
      {/* Toast Notification */}
      {(downloaded || copied) && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] glass-panel border border-[#C5A15A]/50 text-[#F2EFE7] px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-2xl flex items-center gap-3 anim-fade-in">
          <div className="w-6 h-6 rounded-full bg-[#C5A15A] text-[#111412] flex items-center justify-center font-bold">
            <Check size={14} />
          </div>
          <span>{downloaded ? 'Contact (.vcf) saved to your device!' : 'Profile link copied to clipboard!'}</span>
        </div>
      )}

      {/* Luxury Background Glow Elements */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#C5A15A]/5 rounded-full blur-[140px] pointer-events-none z-0 anim-pulse-gold" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-[#1B211E]/80 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-[#C5A15A]/15 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Monogram */}
          <a href="#home" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full bg-[#1B211E] border border-[#C5A15A]/50 flex items-center justify-center font-serif text-[#C5A15A] text-base font-bold tracking-wider shadow-lg group-hover:border-[#C5A15A] group-hover:shadow-[#C5A15A]/20 transition-all">
              NP
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-widest uppercase text-[#F2EFE7] group-hover:text-[#C5A15A] transition-colors">
                NANDISHGOUDA B. PATIL
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#A8AAA3]">
                ENTREPRENEUR | OPERATIONS
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase text-[#A8AAA3]">
            <a href="#home" className="hover:text-[#C5A15A] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#C5A15A] transition-colors">About</a>
            <a href="#businesses" className="hover:text-[#C5A15A] transition-colors">Businesses</a>
            <a href="#work" className="hover:text-[#C5A15A] transition-colors">Work</a>
            <a href="#journey" className="hover:text-[#C5A15A] transition-colors">Journey</a>
            <a href="#contact" className="hover:text-[#C5A15A] transition-colors">Contact</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setShowQrModal(true)}
              className="p-2.5 rounded-full bg-[#1B211E] border border-[#C5A15A]/30 text-[#C5A15A] hover:border-[#C5A15A] hover:bg-[#C5A15A]/10 transition-all cursor-pointer"
              title="Show QR Code"
            >
              <QrCode size={18} />
            </button>
            <button
              onClick={handleSaveContact}
              className="gold-gradient-bg text-[#111412] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-[#C5A15A]/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <Download size={14} />
              <span>Save Contact</span>
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setShowQrModal(true)}
              className="p-2 rounded-full bg-[#1B211E] border border-[#C5A15A]/30 text-[#C5A15A]"
            >
              <QrCode size={18} />
            </button>
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="p-2.5 text-[#F2EFE7] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <span className={`h-[2px] w-full bg-[#C5A15A] transition-all ${isDrawerOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-[2px] w-full bg-[#F2EFE7] transition-all ${isDrawerOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[2px] w-full bg-[#C5A15A] transition-all ${isDrawerOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsDrawerOpen(false)} />
        <aside className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#111412] border-l border-[#C5A15A]/20 p-6 flex flex-col justify-between transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#C5A15A]/15">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1B211E] border border-[#C5A15A]/50 flex items-center justify-center font-serif text-[#C5A15A] text-xs font-bold">
                  NP
                </div>
                <span className="font-semibold text-xs tracking-wider uppercase text-[#F2EFE7]">MENU</span>
              </div>
              <button onClick={() => setIsDrawerOpen(false)} className="text-[#A8AAA3] hover:text-[#F2EFE7]">
                <X size={24} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-5 text-base tracking-wider uppercase">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Businesses', href: '#businesses' },
                { name: 'Work', href: '#work' },
                { name: 'Journey', href: '#journey' },
                { name: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-[#A8AAA3] hover:text-[#C5A15A] transition-colors py-1 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ChevronRight size={16} className="text-[#C5A15A]/50" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#C5A15A]/15">
            <button
              onClick={(e) => {
                handleSaveContact(e);
                setIsDrawerOpen(false);
              }}
              className="w-full gold-gradient-bg text-[#111412] py-3 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Download size={16} />
              <span>SAVE MY CONTACT</span>
            </button>
            <a
              href="https://wa.me/916366705787?text=Hi%20Nandish,%20I%20scanned%20your%20digital%20visiting%20card."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsDrawerOpen(false)}
              className="w-full bg-[#1B211E] border border-[#C5A15A]/30 text-[#F2EFE7] py-3 rounded-xl font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 text-center"
            >
              <MessageSquare size={16} className="text-[#C5A15A]" />
              <span>WHATSAPP ME</span>
            </a>
          </div>
        </aside>
      </div>

      {/* MAIN CONTENT CONTAINERS */}
      <main className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">

        {/* 2. SECTION: HOME HERO */}
        <section id="home" className="pt-12 sm:pt-20 pb-16 sm:pb-24 flex flex-col items-center text-center">
          
          {/* Executive Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B211E] border border-[#C5A15A]/40 text-[#C5A15A] text-xs font-semibold uppercase tracking-widest mb-8 shadow-inner">
            <Sparkles size={13} />
            <span>Digital Profile & Business Gateway</span>
          </div>

          {/* Monogram Crest */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#1B211E] to-[#111412] border-2 border-[#C5A15A] flex items-center justify-center font-serif text-[#C5A15A] text-3xl sm:text-4xl font-bold tracking-wider shadow-2xl shadow-[#C5A15A]/15 mb-8 relative">
            <div className="absolute inset-0 rounded-full border border-[#C5A15A]/30 animate-ping opacity-20" />
            NP
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EFE7] mb-3">
            NANDISHGOUDA B. PATIL
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg tracking-[0.2em] font-semibold uppercase text-[#C5A15A] mb-6">
            ENTREPRENEUR | OPERATIONS
          </p>

          {/* Short Statement */}
          <p className="max-w-2xl text-base sm:text-xl text-[#A8AAA3] leading-relaxed mb-8 font-light">
            Building and managing businesses with a focus on operations, growth and long-term value.
          </p>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F2EFE7]/80 mb-10 bg-[#1B211E]/80 px-4 py-2 rounded-full border border-[#C5A15A]/20">
            <MapPin size={15} className="text-[#C5A15A]" />
            <span className="font-medium tracking-wide">Hubli</span>
          </div>

          {/* PRIMARY ACTION BUTTONS (VITAL - Save Contact as biggest button) */}
          <div className="w-full max-w-md flex flex-col gap-4 mb-12">
            
            {/* 1. SAVE MY CONTACT (Primary & Largest Button) */}
            <button
              onClick={handleSaveContact}
              className="w-full gold-gradient-bg gold-gradient-bg-hover text-[#111412] py-4 sm:py-5 px-8 rounded-2xl text-base sm:text-lg font-extrabold uppercase tracking-wider shadow-2xl shadow-[#C5A15A]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Download size={22} className="group-hover:scale-110 transition-transform" />
              <span>SAVE MY CONTACT</span>
            </button>

            {/* 2. WHATSAPP ME */}
            <a
              href="https://wa.me/916366705787?text=Hi%20Nandish,%20I%20am%20connecting%20via%20your%20digital%20visiting%20card."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1B211E] border border-[#C5A15A]/40 text-[#F2EFE7] hover:border-[#C5A15A] hover:bg-[#1B211E]/80 py-4 px-8 rounded-2xl text-sm sm:text-base font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <MessageSquare size={18} className="text-[#C5A15A] group-hover:scale-110 transition-transform" />
              <span>WHATSAPP ME</span>
            </a>

          </div>

          {/* Quick Connect Icon Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
            <a
              href="tel:+916366705787"
              className="p-3.5 rounded-xl bg-[#1B211E]/60 border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 text-[#F2EFE7] hover:text-[#C5A15A] transition-all flex items-center justify-center gap-2 text-xs uppercase font-medium"
            >
              <Phone size={15} className="text-[#C5A15A]" />
              <span>Call Me</span>
            </a>

            <a
              href="mailto:nandishpatil7555@gmail.com"
              className="p-3.5 rounded-xl bg-[#1B211E]/60 border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 text-[#F2EFE7] hover:text-[#C5A15A] transition-all flex items-center justify-center gap-2 text-xs uppercase font-medium"
            >
              <Mail size={15} className="text-[#C5A15A]" />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nandishgouda-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#1B211E]/60 border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 text-[#F2EFE7] hover:text-[#C5A15A] transition-all flex items-center justify-center gap-2 text-xs uppercase font-medium"
            >
              <Briefcase size={15} className="text-[#C5A15A]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/nandishpatil555___"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#1B211E]/60 border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 text-[#F2EFE7] hover:text-[#C5A15A] transition-all flex items-center justify-center gap-2 text-xs uppercase font-medium"
            >
              <Share2 size={15} className="text-[#C5A15A]" />
              <span>Instagram</span>
            </a>
          </div>

        </section>

        <hr className="border-t border-[#C5A15A]/15 my-4" />

        {/* 3. SECTION: ABOUT ME */}
        <section id="about" className="py-16 sm:py-24">
          <div className="flex flex-col gap-3 mb-10">
            <span className="text-xs font-bold tracking-widest text-[#C5A15A] uppercase">PHILOSOPHY & CAPABILITIES</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F2EFE7]">
              About Nandishgouda B. Patil
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Bio Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-[#A8AAA3] text-base leading-relaxed">
              <div className="p-6 rounded-2xl bg-[#1B211E]/80 border border-[#C5A15A]/30 text-[#F2EFE7]">
                <p className="text-lg sm:text-xl font-light italic leading-relaxed text-[#F2EFE7]/90">
                  "I am an entrepreneur focused on business operations, growth and execution. I work across manufacturing, projects and business development, with a focus on building efficient operations and creating long-term opportunities."
                </p>
              </div>

              <p>
                We are a diversified manufacturing and engineering company with expertise across surface finishing, metal fabrication, agricultural implements and security products.
              </p>

              <p>
                Our capabilities include <strong className="text-[#F2EFE7]">powder coating, wooden coating and anodizing</strong>, with coating services available for components up to <strong className="text-[#C5A15A]">20 feet in length</strong>. We also provide fabrication and engineering solutions in Aluminium, Mild Steel (MS) and Stainless Steel (SS).
              </p>

              <p>
                We manufacture a range of agricultural implements, including <strong className="text-[#F2EFE7]">seed drills and cultivators</strong>, designed to support modern farming requirements.
              </p>

              <p>
                Our security products division specializes in the manufacturing of <strong className="text-[#F2EFE7]">safe lockers, strong room doors and gold safes</strong>, providing robust security solutions for homes, businesses, financial institutions and commercial establishments.
              </p>

              <p>
                Backed by a team of <strong className="text-[#C5A15A]">100+ people</strong>, we bring together skilled manpower, manufacturing capabilities and industry experience to execute projects ranging from customized fabrication to specialized product manufacturing.
              </p>
            </div>

            {/* Stats & Capability Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A15A]">100+</span>
                  <span className="text-xs uppercase font-medium text-[#A8AAA3]">Team Strength</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 flex flex-col gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A15A]">20 FT</span>
                  <span className="text-xs uppercase font-medium text-[#A8AAA3]">Coating Capacity</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#C5A15A] flex items-center gap-2">
                  <Award size={16} />
                  <span>Key Manufacturing Pillars</span>
                </h3>
                
                <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#F2EFE7]">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C5A15A]" />
                    <span>Powder & Wooden Coating • Anodizing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C5A15A]" />
                    <span>Laser Cutting, Bending & Welding (MS/SS/Al)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C5A15A]" />
                    <span>Agricultural Implements (Seed Drills, Cultivators)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C5A15A]" />
                    <span>Bank Safe Lockers & Strong Room Doors</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* MY APPROACH GRID */}
          <div className="mt-16">
            <h3 className="text-center font-serif text-xl sm:text-2xl font-bold text-[#F2EFE7] mb-8">
              My Approach
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 transition-all flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="text-lg font-bold text-[#F2EFE7]">BUILD</h4>
                <p className="text-sm text-[#A8AAA3] leading-relaxed">
                  Create businesses and opportunities with long-term vision and structural integrity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 transition-all flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="text-lg font-bold text-[#F2EFE7]">OPERATE</h4>
                <p className="text-sm text-[#A8AAA3] leading-relaxed">
                  Focus on systems, people, execution and efficiency across production and delivery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 transition-all flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="text-lg font-bold text-[#F2EFE7]">GROW</h4>
                <p className="text-sm text-[#A8AAA3] leading-relaxed">
                  Expand businesses through strategic partnerships, technology adoption and new markets.
                </p>
              </div>

            </div>
          </div>

        </section>

        <hr className="border-t border-[#C5A15A]/15 my-4" />

        {/* 4. SECTION: BUSINESSES & VENTURES */}
        <section id="businesses" className="py-16 sm:py-24">
          <div className="flex flex-col gap-3 mb-10">
            <span className="text-xs font-bold tracking-widest text-[#C5A15A] uppercase">PORTFOLIO</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F2EFE7]">
              Businesses & Ventures
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            
            {/* Primary Business Card: NEW HITECH POWDER COATS */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1B211E] border border-[#C5A15A]/40 relative overflow-hidden group hover:border-[#C5A15A] transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A15A]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#C5A15A]/15">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A15A]/10 text-[#C5A15A] text-xs font-semibold uppercase tracking-wider mb-3">
                    <Building2 size={13} />
                    <span>FLAGSHIP VENTURE</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#F2EFE7]">
                    NEW HITECH POWDER COATS
                  </h3>
                  <p className="text-sm sm:text-base text-[#A8AAA3] mt-1">
                    Surface Finishing • Metal Fabrication • Agri Equipment • Security Systems
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#F2EFE7]/80 bg-[#111412] px-4 py-2 rounded-xl border border-[#C5A15A]/20 self-start lg:self-center">
                  <MapPin size={14} className="text-[#C5A15A]" />
                  <span>📍 Hubli, Karnataka</span>
                </div>
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#C5A15A]">Specialized Capabilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Powder Coating',
                      'Wooden Coating',
                      'Anodizing (up to 20ft)',
                      'Laser Cutting',
                      'Bending',
                      'Welding',
                      'Aluminium Fabrication',
                      'Mild Steel (MS)',
                      'Stainless Steel (SS)',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-[#111412] border border-[#C5A15A]/20 text-xs text-[#F2EFE7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#C5A15A]">Specialized Products</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Agricultural Seed Drills',
                      'Cultivators',
                      'Home Safe Lockers',
                      'Bank Strong Room Doors',
                      'Gold Safes',
                      '100+ Team Capacity',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-[#111412] border border-[#C5A15A]/20 text-xs text-[#C5A15A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#C5A15A]/15 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setShowBusinessModal(true)}
                  className="text-xs uppercase font-bold text-[#C5A15A] hover:text-[#E5C17A] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>VIEW FULL BUSINESS PROFILE</span>
                  <ArrowUpRight size={16} />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/916366705787?text=Hi%20Nandish,%20I%20am%20inquiring%20about%20New%20Hitech%20Powder%20Coats."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#111412] border border-[#C5A15A]/30 text-[#F2EFE7] hover:border-[#C5A15A] text-xs font-semibold uppercase flex items-center gap-2"
                  >
                    <MessageSquare size={14} className="text-[#C5A15A]" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Future Ventures Placeholder */}
            <div className="p-8 rounded-3xl bg-[#1B211E]/40 border border-dashed border-[#C5A15A]/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A8AAA3]">EXPANSION</span>
                <h3 className="text-xl font-bold text-[#F2EFE7] mt-1">Future Expansions & Strategic Ventures</h3>
                <p className="text-sm text-[#A8AAA3] mt-1">
                  Exploring new manufacturing, infrastructure, and strategic business opportunities across Karnataka.
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#1B211E] text-xs uppercase tracking-wider text-[#C5A15A] border border-[#C5A15A]/20 self-start md:self-auto">
                In Development
              </div>
            </div>

          </div>
        </section>

        <hr className="border-t border-[#C5A15A]/15 my-4" />

        {/* 5. SECTION: WHAT I DO (Areas of Work) */}
        <section id="work" className="py-16 sm:py-24">
          <div className="flex flex-col gap-3 mb-10">
            <span className="text-xs font-bold tracking-widest text-[#C5A15A] uppercase">CAPABILITIES</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F2EFE7]">
              Areas of Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center">
                <Wrench size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#F2EFE7]">Operations</h3>
              <p className="text-sm text-[#A8AAA3] leading-relaxed">
                Business operations, production planning, workforce management, quality control, and process optimization.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center">
                <Briefcase size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#F2EFE7]">Business Development</h3>
              <p className="text-sm text-[#A8AAA3] leading-relaxed">
                Building strategic client relationships, identifying high-value industrial opportunities, and developing new markets.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center">
                <Layers size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#F2EFE7]">Projects</h3>
              <p className="text-sm text-[#A8AAA3] leading-relaxed">
                Planning, resource allocation, and hands-on execution of complex engineering, fabrication, and surface finishing projects.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 hover:border-[#C5A15A]/60 transition-all flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-[#F2EFE7]">Expansion</h3>
              <p className="text-sm text-[#A8AAA3] leading-relaxed">
                Exploring new regional markets, technology partnerships, and business opportunities across Hubli and beyond.
              </p>
            </div>

          </div>
        </section>

        <hr className="border-t border-[#C5A15A]/15 my-4" />

        {/* 6. SECTION: EXPERIENCE / JOURNEY */}
        <section id="journey" className="py-16 sm:py-24">
          <div className="flex flex-col gap-3 mb-12">
            <span className="text-xs font-bold tracking-widest text-[#C5A15A] uppercase">MILESTONES</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F2EFE7]">
              My Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {[
              {
                num: '01',
                title: 'Foundation',
                desc: 'Started building hands-on experience through business operations and manufacturing environments.',
              },
              {
                num: '02',
                title: 'Operations',
                desc: 'Took an active leadership role in managing people, production lines, and business execution.',
              },
              {
                num: '03',
                title: 'Expansion',
                desc: 'Developing opportunities, strategic client networks, and infrastructure across Hubli.',
              },
              {
                num: '04',
                title: "What's Next",
                desc: 'Building scalable businesses, advancing industrial capabilities, and exploring new ventures.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/20 flex flex-col justify-between gap-6 hover:border-[#C5A15A] transition-all"
              >
                <div className="font-serif text-3xl font-bold text-[#C5A15A]">{step.num}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#F2EFE7] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#A8AAA3] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        <hr className="border-t border-[#C5A15A]/15 my-4" />

        {/* 7. SECTION: CONTACT ME */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="flex flex-col gap-3 mb-10 text-center items-center">
            <span className="text-xs font-bold tracking-widest text-[#C5A15A] uppercase">GET IN TOUCH</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F2EFE7]">
              Let's Connect
            </h2>
            <p className="text-sm sm:text-base text-[#A8AAA3] max-w-lg">
              Direct communication for business inquiries, operational partnerships, and engineering services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            
            {/* Main Contact Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <a
                href="tel:+916366705787"
                className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/30 hover:border-[#C5A15A] transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-[#A8AAA3] block mb-1">Direct Call</span>
                  <span className="text-base font-bold text-[#F2EFE7]">+91 6366705787</span>
                </div>
              </a>

              <a
                href="https://wa.me/916366705787?text=Hi%20Nandish,%20I%20am%20getting%20in%20touch%20from%20your%20digital%20card."
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/30 hover:border-[#C5A15A] transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-[#A8AAA3] block mb-1">WhatsApp</span>
                  <span className="text-base font-bold text-[#F2EFE7]">+91 6366705787</span>
                </div>
              </a>

              <a
                href="mailto:nandishpatil99@gmail.com"
                className="p-6 rounded-2xl bg-[#1B211E] border border-[#C5A15A]/30 hover:border-[#C5A15A] transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C5A15A]/10 text-[#C5A15A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-[#A8AAA3] block mb-1">Email Direct</span>
                  <span className="text-xs font-bold text-[#F2EFE7] block truncate">nandishpatil7555@gmail.com</span>
                </div>
              </a>

            </div>

            {/* DEDICATED vCARD DOWNLOAD BOX */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1B211E] to-[#111412] border-2 border-[#C5A15A]/50 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <span className="text-xs uppercase font-bold text-[#C5A15A] tracking-wider">VISITING CARD INTEGRATION</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F2EFE7]">
                  ADD ME TO YOUR CONTACTS
                </h3>
                <p className="text-xs sm:text-sm text-[#A8AAA3]">
                  Instantly save Nandishgouda B. Patil (.vcf) with phone, email & business info.
                </p>
              </div>

              <button
                onClick={handleSaveContact}
                className="gold-gradient-bg gold-gradient-bg-hover text-[#111412] px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider flex items-center gap-2.5 shadow-xl shrink-0 cursor-pointer"
              >
                <Download size={18} />
                <span>SAVE MY CONTACT</span>
              </button>
            </div>

            {/* Social Links & Share */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-[#A8AAA3]">
              <div className="flex items-center gap-6 uppercase tracking-wider">
                <a
                  href="https://www.instagram.com/nandishpatil555___"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A15A] transition-colors"
                >
                  Instagram
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/nandishgouda-patil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A15A] transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://wa.me/916366705787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A15A] transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              <button
                onClick={handleShareProfile}
                className="hover:text-[#C5A15A] transition-colors flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
              >
                <Share2 size={14} />
                <span>Share Profile Link</span>
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* 8. FOOTER */}
      <footer className="border-t border-[#C5A15A]/15 py-8 text-center text-xs text-[#A8AAA3] relative z-10">
        <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#1B211E] border border-[#C5A15A]/40 flex items-center justify-center font-serif text-[#C5A15A] text-[9px] font-bold">
              NP
            </div>
            <span>Nandishgouda B. Patil &mdash; Entrepreneur | Operations</span>
          </div>
          <span>Hubli &bull; All Rights Reserved</span>
        </div>
      </footer>

      {/* 9. STICKY MOBILE QUICK BAR (CRITICAL ON MOBILE DEVICE) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#111412]/95 backdrop-blur-lg border-t border-[#C5A15A]/30 p-3 flex items-center justify-between gap-2 sm:hidden shadow-2xl">
        <a
          href="tel:+916366705787"
          className="flex-1 bg-[#1B211E] border border-[#C5A15A]/30 text-[#F2EFE7] py-2.5 rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-1.5"
        >
          <Phone size={14} className="text-[#C5A15A]" />
          <span>Call</span>
        </a>

        <button
          onClick={handleSaveContact}
          className="flex-[2] gold-gradient-bg text-[#111412] py-2.5 rounded-xl text-xs font-extrabold uppercase flex items-center justify-center gap-1.5 shadow-lg"
        >
          <Download size={14} />
          <span>Save Contact</span>
        </button>

        <a
          href="https://wa.me/916366705787?text=Hi%20Nandish,%20connecting%20via%20your%20visiting%20card."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#1B211E] border border-[#C5A15A]/30 text-[#F2EFE7] py-2.5 rounded-xl text-xs font-bold uppercase flex items-center justify-center gap-1.5"
        >
          <MessageSquare size={14} className="text-[#C5A15A]" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* MODAL 1: QR CODE DISPLAY MODAL */}
      {showQrModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowQrModal(false)} />
          <div className="relative w-full max-w-sm bg-[#111412] border border-[#C5A15A]/50 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl anim-fade-in">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-[#A8AAA3] hover:text-[#F2EFE7]"
            >
              <X size={20} />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#1B211E] border border-[#C5A15A] flex items-center justify-center font-serif text-[#C5A15A] text-lg font-bold mb-4">
              NP
            </div>

            <h3 className="font-serif text-xl font-bold text-[#F2EFE7] mb-1">
              CONNECT WITH ME
            </h3>
            <p className="text-xs text-[#A8AAA3] mb-6">
              Scan QR code to open Digital Executive Profile
            </p>

            {/* Generated High Quality QR Visual Representation */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#C5A15A] shadow-inner mb-6 relative">
              <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* QR Code SVG pattern artwork */}
                <rect width="100" height="100" fill="white" />
                {/* Corner Position Detection Patterns */}
                <rect x="5" y="5" width="26" height="26" fill="#111412" />
                <rect x="9" y="9" width="18" height="18" fill="white" />
                <rect x="13" y="13" width="10" height="10" fill="#111412" />

                <rect x="69" y="5" width="26" height="26" fill="#111412" />
                <rect x="73" y="9" width="18" height="18" fill="white" />
                <rect x="77" y="13" width="10" height="10" fill="#111412" />

                <rect x="5" y="69" width="26" height="26" fill="#111412" />
                <rect x="9" y="73" width="18" height="18" fill="white" />
                <rect x="13" y="77" width="10" height="10" fill="#111412" />

                {/* Random Data Pattern Mockup */}
                <path d="M36 5h6v6h-6zM48 5h6v6h-6zM36 17h6v6h-6zM48 17h6v6h-6zM57 5h6v6h-6zM57 17h6v6h-6zM36 29h27v6H36zM5 36h26v6H5zM5 48h12v6H5zM23 48h8v6h-8zM36 42h6v12h-6zM48 42h15v6H48zM69 36h26v6H69zM69 48h12v6H69zM87 48h8v6h-8zM5 57h6v6H5zM17 57h14v6H17zM36 57h6v6h-6zM48 57h15v6H48zM69 57h6v6h-6zM81 57h14v6H81zM36 69h6v26h-6zM48 69h6v12h-6zM57 75h6v20h-6zM69 69h26v6H69zM69 81h12v14H69zM87 81h8v14h-8z" fill="#111412" />
                
                {/* Center NP Badge Overlay */}
                <rect x="40" y="40" width="20" height="20" rx="4" fill="#1B211E" stroke="#C5A15A" strokeWidth="2" />
                <text x="50" y="54" textAnchor="middle" fill="#C5A15A" fontSize="9" fontWeight="bold" fontFamily="serif">NP</text>
              </svg>
            </div>

            <button
              onClick={handleSaveContact}
              className="w-full gold-gradient-bg text-[#111412] py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Download size={15} />
              <span>SAVE CONTACT (.VCF)</span>
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2: BUSINESS DETAILS MODAL */}
      {showBusinessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowBusinessModal(false)} />
          <div className="relative w-full max-w-2xl bg-[#111412] border border-[#C5A15A]/50 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl anim-fade-in">
            
            <button
              onClick={() => setShowBusinessModal(false)}
              className="absolute top-6 right-6 text-[#A8AAA3] hover:text-[#F2EFE7]"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1B211E] border border-[#C5A15A] flex items-center justify-center text-[#C5A15A]">
                <Building2 size={20} />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#C5A15A] tracking-wider">BUSINESS PROFILE</span>
                <h3 className="font-serif text-2xl font-bold text-[#F2EFE7]">
                  NEW HITECH POWDER COATS
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-6 text-sm text-[#A8AAA3] leading-relaxed border-t border-[#C5A15A]/15 pt-6">
              
              <div className="p-4 rounded-xl bg-[#1B211E] border border-[#C5A15A]/20 text-[#F2EFE7]">
                <p>
                  New Hitech Powder Coats is a premier surface finishing, metal fabrication, agricultural equipment, and bank security manufacturing company based in Hubli, Karnataka.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#C5A15A] tracking-wider mb-2 flex items-center gap-2">
                  <Wrench size={15} />
                  <span>1. Surface Finishing & Coating Services</span>
                </h4>
                <p>
                  Industrial Grade Powder Coating, Decorative Wooden Coating, and Anodizing. Fully equipped to handle large-scale components up to <strong>20 feet in length</strong> with uniform micron thickness and weather resistance.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#C5A15A] tracking-wider mb-2 flex items-center gap-2">
                  <Layers size={15} />
                  <span>2. Metal Fabrication & Engineering</span>
                </h4>
                <p>
                  High-precision Laser Cutting, Hydraulic Bending, and Robotic Welding. Complete custom engineering in <strong>Aluminium, Mild Steel (MS), and Stainless Steel (SS)</strong> for industrial and architectural projects.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#C5A15A] tracking-wider mb-2 flex items-center gap-2">
                  <Sprout size={15} />
                  <span>3. Agricultural Implements</span>
                </h4>
                <p>
                  Manufacturing robust farming implements, including heavy-duty seed drills and cultivators, built to enhance agricultural productivity and withstand tough soil conditions.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#C5A15A] tracking-wider mb-2 flex items-center gap-2">
                  <Shield size={15} />
                  <span>4. Security Products Division</span>
                </h4>
                <p>
                  Manufacturing heavy-duty bank safe lockers, strong room doors, and gold safes providing certified security solutions for commercial, residential, and banking institutions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1B211E]/50 border border-[#C5A15A]/15 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase text-[#A8AAA3] block">Operations & Management</span>
                  <span className="text-sm font-bold text-[#F2EFE7]">Nandishgouda B. Patil</span>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase text-[#A8AAA3] block">Workforce</span>
                  <span className="text-sm font-bold text-[#C5A15A]">100+ Skilled Staff</span>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-[#C5A15A]/15 flex flex-col sm:flex-row items-center justify-end gap-3">
              <a
                href="https://wa.me/916366705787?text=Hi%20Nandish,%20I%20scanned%20your%20visiting%20card%20and%20want%20to%20know%20more%20about%20New%20Hitech%20Powder%20Coats."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl gold-gradient-bg text-[#111412] font-bold text-xs uppercase flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Contact via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
