import React from 'react';
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Solusi Pemasaran Digital</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Kembangkan Bisnis Anda dengan
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">
                Tansan Ads
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-blue-50 leading-relaxed">
              Layanan pemasaran digital profesional yang dirancang untuk UMKM dan bisnis. 
              Tingkatkan kehadiran online Anda, jangkau lebih banyak pelanggan, dan tingkatkan pendapatan Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Lihat Harga
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Layanan Kami
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-blue-100">Klien Dilayani</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <p className="text-sm text-blue-100">Tingkat Keberhasilan</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">3x</span>
                </div>
                <p className="text-sm text-blue-100">Rata-rata ROI</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Dasbor Pemasaran Digital"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pertumbuhan Pendapatan</p>
                    <p className="text-2xl font-bold text-gray-900">+245%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
