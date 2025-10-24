'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  const t = useTranslations();
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop&crop=faces', alt: 'Happy Golden Retriever' },
    { url: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=600&fit=crop&crop=faces', alt: 'Playful Labrador' },
    { url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&h=600&fit=crop&crop=faces', alt: 'French Bulldog Portrait' },
    { url: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&h=600&fit=crop&crop=faces', alt: 'Beagle in Nature' },
    { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop&crop=faces', alt: 'German Shepherd' },
    { url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=800&h=600&fit=crop&crop=faces', alt: 'Elegant Poodle' },
    { url: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop&crop=faces', alt: 'Adorable Bulldog' },
    { url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&h=600&fit=crop&crop=faces', alt: 'Cute Puppy' },
    { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&h=600&fit=crop&crop=faces', alt: 'Running Dog' },
    { url: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=800&h=600&fit=crop&crop=faces', alt: 'Dog in Grass' },
    { url: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&h=600&fit=crop&crop=faces', alt: 'Dog Playing' },
    { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop&crop=faces', alt: 'Sleeping Dog' },
    { url: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=800&h=600&fit=crop&crop=faces', alt: 'Dog on Walk' },
    { url: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop&crop=faces', alt: 'Dog with Toy' },
    { url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop&crop=faces', alt: 'Group of Dogs' },
    { url: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&h=600&fit=crop&crop=faces', alt: 'Golden Retriever Smile' },
    { url: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=600&fit=crop&crop=faces', alt: 'Labrador Portrait' },
    { url: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?w=800&h=600&fit=crop&crop=faces', alt: 'German Shepherd Close-up' },
    { url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&h=600&fit=crop&crop=faces', alt: 'French Bulldog Face' },
    { url: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&h=600&fit=crop&crop=faces', alt: 'Beagle Face' },
    { url: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=800&h=600&fit=crop&crop=faces', alt: 'Corgi Smiling' },
    { url: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&h=600&fit=crop&crop=faces', alt: 'Shiba Inu' },
    { url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&h=600&fit=crop&crop=faces', alt: 'Dog at Beach' },
    { url: 'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?w=800&h=600&fit=crop&crop=faces', alt: 'Small Terrier' },
    { url: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=800&h=600&fit=crop&crop=faces', alt: 'Happy Boxer' },
    { url: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=800&h=600&fit=crop&crop=faces', alt: 'Puppy Eyes' },
    { url: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?w=800&h=600&fit=crop&crop=faces', alt: 'English Bulldog' },
    { url: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=800&h=600&fit=crop&crop=faces', alt: 'Rottweiler Portrait' },
    { url: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&h=600&fit=crop&crop=faces', alt: 'Playful Pup' },
    { url: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=800&h=600&fit=crop&crop=faces', alt: 'Dalmatian Dog' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('gallery.title')}</h1>
          <p className="text-xl text-purple-100">
            {t('gallery.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition group">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover object-center group-hover:scale-110 transition duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-end p-4">
                <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('gallery.wantYourDog')}</h2>
          <p className="text-gray-600 mb-6">
            {t('gallery.wantYourDogDesc')}
          </p>
          <Link href="/services/booking" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            {t('gallery.bookService')}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
