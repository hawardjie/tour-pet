'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function TermsOfServicePage() {
  const t = useTranslations('terms');

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{t('title')}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{t('lastUpdated')}: October 24, 2025</p>

          <div className="prose prose-blue max-w-none">
            {/* 1. Acceptance of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section1.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section1.p1')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('section1.p2')}</p>
            </section>

            {/* 2. Service Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section2.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section2.p1')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('section2.p2')}</p>
            </section>

            {/* 3. User Accounts */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section3.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section3.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                <li>{t('section3.list.item1')}</li>
                <li>{t('section3.list.item2')}</li>
                <li>{t('section3.list.item3')}</li>
                <li>{t('section3.list.item4')}</li>
              </ul>
            </section>

            {/* 4. Platform Role and Disclaimer */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section4.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold uppercase">{t('section4.p1')}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section4.p2')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('section4.p3')}</p>
            </section>

            {/* 5. User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section5.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section5.p1')}</p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('section5.providers.title')}</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>{t('section5.providers.item1')}</li>
                  <li>{t('section5.providers.item2')}</li>
                  <li>{t('section5.providers.item3')}</li>
                  <li>{t('section5.providers.item4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('section5.customers.title')}</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>{t('section5.customers.item1')}</li>
                  <li>{t('section5.customers.item2')}</li>
                  <li>{t('section5.customers.item3')}</li>
                  <li>{t('section5.customers.item4')}</li>
                </ul>
              </div>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section6.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold uppercase">{t('section6.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                <li>{t('section6.list.item1')}</li>
                <li>{t('section6.list.item2')}</li>
                <li>{t('section6.list.item3')}</li>
                <li>{t('section6.list.item4')}</li>
                <li>{t('section6.list.item5')}</li>
                <li>{t('section6.list.item6')}</li>
              </ul>
            </section>

            {/* 7. Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section7.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300">{t('section7.p1')}</p>
            </section>

            {/* 8. Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section8.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section8.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                <li>{t('section8.list.item1')}</li>
                <li>{t('section8.list.item2')}</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">{t('section8.p2')}</p>
            </section>

            {/* 9. Payments and Fees */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section9.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section9.p1')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('section9.p2')}</p>
            </section>

            {/* 10. Prohibited Conduct */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section10.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section10.p1')}</p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>{t('section10.list.item1')}</li>
                <li>{t('section10.list.item2')}</li>
                <li>{t('section10.list.item3')}</li>
                <li>{t('section10.list.item4')}</li>
                <li>{t('section10.list.item5')}</li>
                <li>{t('section10.list.item6')}</li>
              </ul>
            </section>

            {/* 11. Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section11.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300">{t('section11.p1')}</p>
            </section>

            {/* 12. Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section12.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{t('section12.p1')}</p>
              <p className="text-gray-700 dark:text-gray-300">{t('section12.p2')}</p>
            </section>

            {/* 13. Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section13.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300">{t('section13.p1')}</p>
            </section>

            {/* 14. Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section14.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300">{t('section14.p1')}</p>
            </section>

            {/* 15. Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('section15.title')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t('section15.p1')}</p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> legal@tour.pet<br />
                <strong>Address:</strong> TourPet Legal Department, PO Box 55821, California, USA
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              {t('footer')}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
