'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacy');

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-sm text-gray-600 mb-8">{t('lastUpdated')}: October 24, 2025</p>

          <div className="prose prose-blue max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <p className="text-gray-700 mb-4">{t('intro.p1')}</p>
              <p className="text-gray-700">{t('intro.p2')}</p>
            </section>

            {/* 1. Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section1.title')}</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('section1.sub1.title')}</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>{t('section1.sub1.item1')}</li>
                <li>{t('section1.sub1.item2')}</li>
                <li>{t('section1.sub1.item3')}</li>
                <li>{t('section1.sub1.item4')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('section1.sub2.title')}</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>{t('section1.sub2.item1')}</li>
                <li>{t('section1.sub2.item2')}</li>
                <li>{t('section1.sub2.item3')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('section1.sub3.title')}</h3>
              <p className="text-gray-700 mb-2">{t('section1.sub3.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('section1.sub3.item1')}</li>
                <li>{t('section1.sub3.item2')}</li>
                <li>{t('section1.sub3.item3')}</li>
                <li>{t('section1.sub3.item4')}</li>
                <li>{t('section1.sub3.item5')}</li>
                <li>{t('section1.sub3.item6')}</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section2.title')}</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('section2.item1')}</li>
                <li>{t('section2.item2')}</li>
                <li>{t('section2.item3')}</li>
                <li>{t('section2.item4')}</li>
                <li>{t('section2.item5')}</li>
                <li>{t('section2.item6')}</li>
                <li>{t('section2.item7')}</li>
              </ul>
            </section>

            {/* 3. Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section3.title')}</h2>
              <p className="text-gray-700 mb-4">{t('section3.p1')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('section3.sub1.title')}</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>{t('section3.sub1.item1')}</li>
                <li>{t('section3.sub1.item2')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('section3.sub2.title')}</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>{t('section3.sub2.item1')}</li>
                <li>{t('section3.sub2.item2')}</li>
                <li>{t('section3.sub2.item3')}</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('section3.sub3.title')}</h3>
              <p className="text-gray-700">{t('section3.sub3.p1')}</p>
            </section>

            {/* 4. Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section4.title')}</h2>
              <p className="text-gray-700 mb-4">{t('section4.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Google:</strong> {t('section4.google')}</li>
                <li><strong>Facebook:</strong> {t('section4.facebook')}</li>
                <li><strong>Apple:</strong> {t('section4.apple')}</li>
                <li><strong>Microsoft:</strong> {t('section4.microsoft')}</li>
                <li><strong>GitHub:</strong> {t('section4.github')}</li>
                <li><strong>Twitter:</strong> {t('section4.twitter')}</li>
                <li><strong>Resend:</strong> {t('section4.resend')}</li>
              </ul>
              <p className="text-gray-700">{t('section4.p2')}</p>
            </section>

            {/* 5. Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section5.title')}</h2>
              <p className="text-gray-700 mb-4">{t('section5.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>{t('section5.item1')}</li>
                <li>{t('section5.item2')}</li>
                <li>{t('section5.item3')}</li>
              </ul>
              <p className="text-gray-700">{t('section5.p2')}</p>
            </section>

            {/* 6. Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section6.title')}</h2>
              <p className="text-gray-700">{t('section6.p1')}</p>
            </section>

            {/* 7. Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section7.title')}</h2>
              <p className="text-gray-700 mb-4">{t('section7.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>{t('section7.access.title')}:</strong> {t('section7.access.desc')}</li>
                <li><strong>{t('section7.rectification.title')}:</strong> {t('section7.rectification.desc')}</li>
                <li><strong>{t('section7.erasure.title')}:</strong> {t('section7.erasure.desc')}</li>
                <li><strong>{t('section7.restriction.title')}:</strong> {t('section7.restriction.desc')}</li>
                <li><strong>{t('section7.portability.title')}:</strong> {t('section7.portability.desc')}</li>
                <li><strong>{t('section7.objection.title')}:</strong> {t('section7.objection.desc')}</li>
              </ul>
              <p className="text-gray-700">{t('section7.p2')}</p>
            </section>

            {/* 8. California Privacy Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section8.title')}</h2>
              <p className="text-gray-700 mb-4">{t('section8.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>{t('section8.item1')}</li>
                <li>{t('section8.item2')}</li>
                <li>{t('section8.item3')}</li>
              </ul>
            </section>

            {/* 9. Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section9.title')}</h2>
              <p className="text-gray-700">{t('section9.p1')}</p>
            </section>

            {/* 10. International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section10.title')}</h2>
              <p className="text-gray-700">{t('section10.p1')}</p>
            </section>

            {/* 11. Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section11.title')}</h2>
              <p className="text-gray-700">{t('section11.p1')}</p>
            </section>

            {/* 12. Changes to Privacy Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section12.title')}</h2>
              <p className="text-gray-700">{t('section12.p1')}</p>
            </section>

            {/* 13. Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('section13.title')}</h2>
              <p className="text-gray-700 mb-2">{t('section13.p1')}</p>
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@tour.pet<br />
                <strong>Address:</strong> TourPet Privacy Department, [Your Address]<br />
                <strong>Phone:</strong> [Your Phone Number]
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              {t('footer')}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
