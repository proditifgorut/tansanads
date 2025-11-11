import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl px-3 py-1 rounded-lg">
                TA
              </div>
              <span className="font-bold text-xl">Tansan Ads</span>
            </div>
            <p className="text-gray-400 mb-6">
              Solusi pemasaran digital profesional untuk bisnis dari semua ukuran.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Harga</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Fitur</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Optimasi SEO</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Iklan Media Sosial</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Pemasaran Konten</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Iklan Google</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                <a href="mailto:info@tansanads.com" className="text-gray-400 hover:text-white transition-colors">
                  info@tansanads.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                <a href="tel:+6281234567890" className="text-gray-400 hover:text-white transition-colors">
                  +62 812 3456 7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-400" />
                <span className="text-gray-400">
                  Jl. Jend. Sudirman Kav. 52-53<br />Jakarta Selatan, DKI Jakarta 12190
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Tansan Ads. Hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Ketentuan Layanan</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Kebijakan Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
