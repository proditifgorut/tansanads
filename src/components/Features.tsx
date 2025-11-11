import React from 'react';
import { BarChart3, Users, Clock, Shield, Smartphone, HeadphonesIcon } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Hasil Berbasis Data',
      description: 'Buat keputusan berdasarkan informasi dengan analitik komprehensif dan pelacakan kinerja.',
    },
    {
      icon: Users,
      title: 'Tim Ahli',
      description: 'Bekerja dengan para profesional pemasaran digital berpengalaman yang berdedikasi untuk kesuksesan Anda.',
    },
    {
      icon: Clock,
      title: 'Proses Cepat',
      description: 'Implementasi cepat dan layanan responsif untuk menjaga kampanye Anda berjalan lancar.',
    },
    {
      icon: Shield,
      title: 'Laporan Transparan',
      description: 'Pelaporan yang jelas dan jujur tentang kinerja kampanye dan metrik ROI.',
    },
    {
      icon: Smartphone,
      title: 'Strategi Mobile-First',
      description: 'Kampanye yang dioptimalkan untuk pengguna seluler untuk memaksimalkan keterlibatan dan konversi.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dukungan 24/7',
      description: 'Bantuan sepanjang waktu setiap kali Anda membutuhkan bantuan atau memiliki pertanyaan.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Tansan Ads?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menggabungkan keahlian, teknologi, dan kreativitas untuk memberikan hasil luar biasa bagi bisnis Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
