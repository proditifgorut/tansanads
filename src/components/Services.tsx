import React from 'react';
import { Target, MessageSquare, TrendingUp, Share2, Mail, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Optimasi SEO',
      description: 'Tingkatkan peringkat mesin pencari Anda dan datangkan lalu lintas organik ke situs web Anda.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Iklan Media Sosial',
      description: 'Kampanye iklan bertarget di Facebook, Instagram, dan platform lainnya.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MessageSquare,
      title: 'Pemasaran Konten',
      description: 'Pembuatan konten menarik yang sesuai dengan audiens target Anda.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Iklan Google',
      description: 'Kampanye PPC strategis untuk memaksimalkan laba atas investasi Anda.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Share2,
      title: 'Manajemen Media Sosial',
      description: 'Manajemen kehadiran media sosial lengkap dan keterlibatan komunitas.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Mail,
      title: 'Pemasaran Email',
      description: 'Kampanye email otomatis untuk memelihara prospek dan mempertahankan pelanggan.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi pemasaran digital komprehensif yang dirancang untuk membantu bisnis Anda berkembang di lanskap digital.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
