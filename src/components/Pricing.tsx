import React from 'react';
import { Check, Star, Zap, Rocket } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Pemula',
      icon: Zap,
      price: 'Rp 4,5jt',
      period: '/bulan',
      description: 'Sempurna untuk bisnis kecil yang baru memulai',
      popular: false,
      features: [
        'Manajemen Media Sosial (2 platform)',
        'Hingga 10 postingan per bulan',
        'Optimasi SEO dasar',
        'Laporan kinerja bulanan',
        'Dukungan melalui email',
        'Perencanaan kalender konten',
      ],
      color: 'from-blue-500 to-blue-600',
      buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      name: 'Profesional',
      icon: Star,
      price: 'Rp 10,5jt',
      period: '/bulan',
      description: 'Ideal untuk bisnis yang sedang berkembang & siap berekspansi',
      popular: true,
      features: [
        'Manajemen Media Sosial (4 platform)',
        'Hingga 20 postingan per bulan',
        'Optimasi SEO tingkat lanjut',
        'Manajemen Iklan Google (anggaran $500)',
        'Laporan kinerja dua mingguan',
        'Pembuatan & desain konten',
        'Pemasaran email (hingga 2 kampanye)',
        'Dukungan prioritas email & chat',
        'Analisis kompetitor',
      ],
      color: 'from-purple-500 to-pink-500',
      buttonClass: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
    },
    {
      name: 'Perusahaan',
      icon: Rocket,
      price: 'Rp 22,5jt',
      period: '/bulan',
      description: 'Solusi lengkap untuk bisnis yang sudah mapan',
      popular: false,
      features: [
        'Manajemen Media Sosial (Semua platform)',
        'Postingan tak terbatas per bulan',
        'Optimasi SEO premium',
        'Manajemen Iklan Google (anggaran $1500)',
        'Laporan kinerja mingguan',
        'Pembuatan konten profesional',
        'Pemasaran email (kampanye tak terbatas)',
        'Manajemen iklan media sosial',
        'Pembuatan konten video',
        'Manajer akun khusus',
        'Dukungan prioritas 24/7',
        'Konsultasi strategi kustom',
      ],
      color: 'from-orange-500 to-red-500',
      buttonClass: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket Harga
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sempurna untuk kebutuhan bisnis Anda. Semua paket mencakup fitur inti dan dukungan khusus kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-purple-500 transform md:scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Paling Populer
                  </div>
                )}

                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>

                  <a
                    href="#contact"
                    className={`block w-full py-3 px-6 rounded-full font-semibold text-center transition-all ${plan.buttonClass} shadow-lg hover:shadow-xl`}
                  >
                    Mulai
                  </a>

                  <div className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Butuh solusi khusus?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            Hubungi kami untuk harga perusahaan
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
