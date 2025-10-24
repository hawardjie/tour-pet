'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ServiceDogsPage() {
  const t = useTranslations();
  const serviceTypes = [
    {
      title: 'Guide Dogs',
      description: 'Assist people who are blind or visually impaired',
      tasks: [
        'Navigate around obstacles',
        'Stop at curbs and stairs',
        'Find doors and elevators',
        'Locate empty seats',
      ],
      breeds: ['Labrador Retriever', 'Golden Retriever', 'German Shepherd'],
      training: '18-24 months',
    },
    {
      title: 'Hearing Dogs',
      description: 'Alert people who are deaf or hard of hearing to sounds',
      tasks: [
        'Alert to doorbells and knocks',
        'Notify of alarm clocks',
        'Signal phone ringing',
        'Warn of smoke alarms',
      ],
      breeds: ['Labrador Retriever', 'Golden Retriever', 'Cocker Spaniel'],
      training: '12-18 months',
    },
    {
      title: 'Mobility Assistance Dogs',
      description: 'Help people with physical disabilities',
      tasks: [
        'Open and close doors',
        'Pick up dropped items',
        'Help with balance and stability',
        'Retrieve objects',
      ],
      breeds: ['Labrador Retriever', 'Golden Retriever', 'German Shepherd'],
      training: '18-24 months',
    },
    {
      title: 'Medical Alert Dogs',
      description: 'Detect and alert to medical conditions',
      tasks: [
        'Detect changes in blood sugar',
        'Alert to oncoming seizures',
        'Sense cardiac episodes',
        'Get emergency help',
      ],
      breeds: ['Labrador Retriever', 'Golden Retriever', 'Poodle'],
      training: '12-24 months',
    },
    {
      title: 'Psychiatric Service Dogs',
      description: 'Assist people with psychiatric disabilities',
      tasks: [
        'Interrupt harmful behaviors',
        'Provide deep pressure therapy',
        'Create personal space in crowds',
        'Remind to take medication',
      ],
      breeds: ['Labrador Retriever', 'Golden Retriever', 'German Shepherd'],
      training: '18-24 months',
    },
    {
      title: 'Autism Service Dogs',
      description: 'Help children and adults with autism',
      tasks: [
        'Provide calming presence',
        'Prevent wandering',
        'Interrupt repetitive behaviors',
        'Create sensory connection',
      ],
      breeds: ['Labrador Retriever', 'Golden Retriever', 'Bernese Mountain Dog'],
      training: '18-24 months',
    },
  ];

  const trainingSteps = [
    {
      phase: 'Puppy Selection (8 weeks)',
      description: 'Careful selection based on temperament, health, and aptitude',
    },
    {
      phase: 'Puppy Raising (2-18 months)',
      description: 'Socialization and basic training with volunteer puppy raisers',
    },
    {
      phase: 'Advanced Training (6-12 months)',
      description: 'Specialized task training with professional trainers',
    },
    {
      phase: 'Client Matching',
      description: 'Careful pairing based on lifestyle, needs, and compatibility',
    },
    {
      phase: 'Team Training (2-4 weeks)',
      description: 'Handler and dog train together to work as a team',
    },
    {
      phase: 'Ongoing Support',
      description: 'Lifetime support and periodic check-ins',
    },
  ];

  const legalRights = [
    {
      title: 'Americans with Disabilities Act (ADA)',
      points: [
        'Service dogs are allowed in all public places',
        'No pet fees or deposits can be charged',
        'Service dogs in training may have limited access',
        'Only two questions can be asked: Is the dog required for a disability? What work/task is the dog trained to perform?',
      ],
    },
    {
      title: 'Fair Housing Act',
      points: [
        'Service dogs allowed in housing with no-pet policies',
        'No additional fees or deposits',
        'Must provide reasonable accommodation',
      ],
    },
    {
      title: 'Air Carrier Access Act',
      points: [
        'Service dogs can fly in cabin free of charge',
        'Must be trained and behave appropriately',
        'Documentation may be required 48 hours in advance',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=600&fit=crop&crop=faces"
          alt="Service Dogs"
          fill
          className="object-cover object-center brightness-80"
          priority
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('serviceDogs.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('serviceDogs.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#types" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              {t('serviceDogs.exploreTypes')}
            </Link>
            <Link href="/" className="bg-white text-blue-600 border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              {t('serviceDogs.backToHome')}
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('serviceDogs.whatAreServiceDogs')}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {t('serviceDogs.intro1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('serviceDogs.intro2')}
          </p>
        </div>

        {/* Types of Service Dogs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('serviceDogs.typesOfServiceDogs')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{type.title}</h3>
                <p className="text-gray-700 mb-4">{type.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('serviceDogs.tasks')}</h4>
                  <ul className="space-y-1">
                    {type.tasks.map((task, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{t('serviceDogs.commonBreeds')}</span> {type.breeds.join(', ')}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">{t('serviceDogs.trainingDuration')}</span> {type.training}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('serviceDogs.trainingProcess')}</h2>
          <div className="space-y-4">
            {trainingSteps.map((step, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('serviceDogs.trainingCostsTitle')}</h3>
            <p className="text-gray-700 mb-2">
              {t('serviceDogs.trainingCostsIntro')}
            </p>
            <ul className="text-gray-700 space-y-1 ml-6">
              <li>• {t('serviceDogs.trainingCost1')}</li>
              <li>• {t('serviceDogs.trainingCost2')}</li>
              <li>• {t('serviceDogs.trainingCost3')}</li>
              <li>• {t('serviceDogs.trainingCost4')}</li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm">
              {t('serviceDogs.trainingCostsNote')}
            </p>
          </div>
        </div>

        {/* Legal Rights */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('serviceDogs.legalRights')}</h2>
          <div className="space-y-6">
            {legalRights.map((law, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{law.title}</h3>
                <ul className="space-y-2">
                  {law.points.map((point, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-bold text-gray-900 mb-2">{t('serviceDogs.importantNote')}</h4>
            <p className="text-gray-700">
              {t('serviceDogs.legalNote')}
            </p>
          </div>
        </div>

        {/* Service Dog Etiquette */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('serviceDogs.etiquette')}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">{t('serviceDogs.do')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Treat service dog teams with respect
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Give service dogs space to work
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Ask permission before petting (when not working)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Be patient and understanding
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">{t('serviceDogs.dont')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Pet or distract a working service dog
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Feed a service dog
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Make kissy noises or call to the dog
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  Ask invasive questions about disabilities
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('serviceDogs.resources')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('serviceDogs.serviceOrganizations')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Guide Dogs for the Blind</li>
                <li>• Canine Companions for Independence</li>
                <li>• Assistance Dogs International</li>
                <li>• International Association of Assistance Dog Partners</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('serviceDogs.additionalResources')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ADA National Network</li>
                <li>• U.S. Department of Justice ADA Information</li>
                <li>• Service Dog Central Registry</li>
                <li>• Local disability rights organizations</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <Link href="/breeds" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              {t('serviceDogs.exploreBreeds')}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
