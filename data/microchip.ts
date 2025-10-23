export interface MicrochipInfo {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export const microchipBenefits: MicrochipInfo[] = [
  {
    id: 'identification',
    title: 'Permanent Identification',
    icon: '🔍',
    description: 'Unlike collars and tags that can fall off, a microchip provides permanent identification.',
    details: [
      'Cannot be removed or lost',
      'Lasts for the pet\'s lifetime',
      'Unique ID number registered to owner',
      'Scannable by any universal scanner'
    ]
  },
  {
    id: 'reunion',
    title: 'Increased Reunion Chances',
    icon: '🏠',
    description: 'Microchipped pets are much more likely to be reunited with their owners.',
    details: [
      'Studies show 52% higher return rate',
      'Works even if pet travels far from home',
      'Shelters and vets routinely scan for chips',
      'Can be scanned even if pet is injured'
    ]
  },
  {
    id: 'proof',
    title: 'Proof of Ownership',
    icon: '📋',
    description: 'Microchips serve as legal proof of ownership in disputes.',
    details: [
      'Registered in your name',
      'Can help recover stolen pets',
      'Important in custody disputes',
      'Required for international travel'
    ]
  },
  {
    id: 'safety',
    title: 'Safe and Painless',
    icon: '💉',
    description: 'The microchipping procedure is quick, safe, and causes minimal discomfort.',
    details: [
      'Takes only seconds to implant',
      'Similar to a routine vaccination',
      'No anesthesia required',
      'Biocompatible and non-toxic'
    ]
  }
];

export interface MicrochipFAQ {
  id: string;
  question: string;
  answer: string;
}

export const microchipFAQs: MicrochipFAQ[] = [
  {
    id: 'what-is',
    question: 'What is a microchip?',
    answer: 'A microchip is a tiny electronic chip (about the size of a grain of rice) that is implanted under your pet\'s skin, typically between the shoulder blades. It contains a unique identification number that can be read by a scanner.'
  },
  {
    id: 'how-works',
    question: 'How does it work?',
    answer: 'When a scanner is passed over the microchip, it emits a radio frequency that powers the chip, causing it to transmit the unique ID number. This number is then looked up in a database to find the owner\'s contact information.'
  },
  {
    id: 'does-it-hurt',
    question: 'Does it hurt my pet?',
    answer: 'The implantation process is similar to a routine vaccination and causes only brief, minimal discomfort. No anesthesia is required, and most pets don\'t react to the procedure.'
  },
  {
    id: 'battery',
    question: 'Does it need a battery?',
    answer: 'No, microchips are passive devices with no battery. They only activate when scanned, which is why they last for the pet\'s entire lifetime without needing replacement.'
  },
  {
    id: 'gps',
    question: 'Can it track my pet\'s location?',
    answer: 'No, a standard microchip is not a GPS tracker. It only stores an ID number that can be read when scanned. For real-time tracking, you would need a separate GPS collar device.'
  },
  {
    id: 'cost',
    question: 'How much does it cost?',
    answer: 'Microchipping typically costs between $25-$50, including registration. Many shelters and clinics offer low-cost or free microchipping events. This one-time fee provides lifetime identification.'
  },
  {
    id: 'register',
    question: 'Do I need to register the microchip?',
    answer: 'Yes! Registration is crucial. The microchip is useless if it\'s not registered with your current contact information in a pet recovery database. Always update your information when you move or change phone numbers.'
  },
  {
    id: 'update',
    question: 'How do I update my information?',
    answer: 'Contact the microchip registry where your pet is registered (your vet can tell you which one). You can usually update your information online through the registry\'s website or by phone.'
  }
];

export interface MicrochipStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const microchipProcess: MicrochipStep[] = [
  {
    id: 'consult',
    step: 1,
    title: 'Consult with Your Vet',
    description: 'Schedule an appointment with your veterinarian to discuss microchipping. They can answer questions and determine the best time for the procedure.'
  },
  {
    id: 'implant',
    step: 2,
    title: 'Quick Implantation',
    description: 'The vet will implant the microchip using a needle, similar to giving a vaccination. The chip is placed under the skin between the shoulder blades.'
  },
  {
    id: 'register',
    step: 3,
    title: 'Register the Chip',
    description: 'Register the microchip number with a pet recovery database, providing your current contact information, alternate contacts, and pet details.'
  },
  {
    id: 'maintain',
    step: 4,
    title: 'Keep Information Updated',
    description: 'Update your contact information whenever you move, change phone numbers, or if there are changes to your pet\'s information.'
  },
  {
    id: 'scan',
    step: 5,
    title: 'Annual Check',
    description: 'Have your vet scan the microchip during annual checkups to ensure it\'s still functioning properly and readable.'
  }
];
