'use client';

import { motion } from 'framer-motion';
import { 
  Calculator, 
  BookOpen, 
  Upload, 
  Download, 
  MessageCircle, 
  Users, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Calculator className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Go Private Math
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.nav 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#beranda" className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>Beranda</a>
              <a href="#layanan" className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>Layanan</a>
              <a href="#harga" className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>Harga</a>
              <a href="#kontak" className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}>Kontak</a>
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:hidden p-2 rounded-lg transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="py-4 space-y-4 border-t border-gray-200/20">
              <a 
                href="#beranda" 
                onClick={closeMobileMenu}
                className={`block py-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Beranda
              </a>
              <a 
                href="#layanan" 
                onClick={closeMobileMenu}
                className={`block py-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Layanan
              </a>
              <a 
                href="#harga" 
                onClick={closeMobileMenu}
                className={`block py-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Harga
              </a>
              <a 
                href="#kontak" 
                onClick={closeMobileMenu}
                className={`block py-2 transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                Kontak
              </a>
            </nav>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="beranda" 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
              >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Solusi Matematika
              <span className="text-blue-100 block drop-shadow-lg">Terpercaya</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Dapatkan bantuan matematika berkualitas dengan tutor berpengalaman. 
              Kami siap membantu Anda mengatasi kesulitan matematika dengan cara yang mudah dipahami.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Mulai Sekarang
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-700">
              Berbagai layanan matematika yang dapat membantu Anda
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pendaftaran Murid</h3>
              <p className="text-gray-700 mb-4">
                Daftar sebagai murid untuk mendapatkan akses ke semua layanan matematika kami.
              </p>
              <div className="text-2xl font-bold text-blue-600">Rp 500.000</div>
              <div className="text-sm text-gray-500">Biaya pendaftaran sekali bayar</div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pengerjaan Tugas</h3>
              <p className="text-gray-700 mb-4">
                Kirim tugas matematika Anda dan kami akan membantu menyelesaikannya dengan detail.
              </p>
              <div className="text-2xl font-bold text-black">Rp 50.000</div>
              <div className="text-sm text-gray-500">Per soal</div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Konsultasi</h3>
              <p className="text-gray-700 mb-4">
                Konsultasi langsung dengan tutor matematika untuk membahas konsep yang sulit.
              </p>
              <div className="text-2xl font-bold text-purple-600">Rp 100.000</div>
              <div className="text-sm text-gray-500">Per sesi (30 menit)</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upload & Download
            </h2>
            <p className="text-xl text-gray-700">
              Sistem upload dan download yang mudah digunakan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Upload Soal</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Upload foto atau file soal matematika Anda. Kami mendukung format JPG, PNG, dan PDF.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Klik untuk upload soal</p>
                <p className="text-sm text-gray-500 mt-2">atau drag and drop file di sini</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Download Jawaban</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Download jawaban yang sudah dikerjakan dengan penjelasan detail dan langkah-langkah yang jelas.
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                <Download className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Klik untuk download jawaban</p>
                <p className="text-sm text-gray-500 mt-2">Jawaban akan tersedia dalam 24 jam</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Paket Layanan
            </h2>
            <p className="text-xl text-gray-700">
              Pilih paket yang sesuai dengan kebutuhan Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition-colors"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Paket Dasar</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">Rp 500.000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span className="text-black">Pendaftaran murid</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span className="text-black">5 soal pengerjaan tugas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span className="text-black">1 sesi konsultasi</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Pilih Paket
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Terpopuler
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Paket Premium</h3>
                <div className="text-4xl font-bold mb-6">Rp 1.500.000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span>Pendaftaran murid</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span>20 soal pengerjaan tugas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span>5 sesi konsultasi</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span>Prioritas pengerjaan</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Pilih Paket
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition-colors"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Paket Unlimited</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">Rp 3.000.000</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span className="text-black">Pendaftaran murid</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span className="text-black">Soal unlimited</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span className="text-black">Konsultasi unlimited</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-black mr-3" />
                    <span className="text-black">Prioritas maksimal</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Pilih Paket
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Testimoni Murid
            </h2>
            <p className="text-xl text-gray-700">
              Apa kata mereka tentang layanan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Amanda",
                role: "Siswa SMA",
                content: "Berkat Go Private Math, nilai matematika saya naik drastis! Penjelasannya sangat mudah dipahami.",
                rating: 5
              },
              {
                name: "Budi Santoso",
                role: "Mahasiswa",
                content: "Tutor sangat sabar dan profesional. Soal-soal yang sulit jadi mudah dipahami.",
                rating: 5
              },
              {
                name: "Dewi Putri",
                role: "Siswa SMP",
                content: "Sistem upload dan download sangat praktis. Jawaban selalu tepat waktu dan berkualitas.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-700">
              Siap membantu Anda dengan pertanyaan dan kebutuhan matematika
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-800">WhatsApp</div>
                    <div className="text-gray-700">+62 857-3562-7450</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-700">info@goprivatemath.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-800">Alamat</div>
                    <div className="text-gray-700">Perum Margatama Asri G/3, Kanigoro, Kec. Kartoharjo, Kota Madiun</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Go Private Math</span>
              </div>
              <p className="text-gray-400">
                Solusi matematika terpercaya untuk semua tingkat pendidikan.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Pendaftaran Murid</li>
                <li>Pengerjaan Tugas</li>
                <li>Konsultasi</li>
                <li>Upload Soal</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Tim Tutor</li>
                <li>Karir</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+62 857-3562-7450</li>
                <li>info@goprivatemath.com</li>
                <li>Perum Margatama Asri G/3, Kanigoro, Kec. Kartoharjo, Kota Madiun</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Go Private Math. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6285735627450"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </motion.a>
    </div>
  );
}
