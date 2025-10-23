export interface AdoptionBenefit {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export const adoptionBenefits: AdoptionBenefit[] = [
  {
    id: 'save_life',
    title: 'Save a Life',
    icon: '❤️',
    description: 'By adopting, you\'re giving a deserving dog a second chance at a happy life and freeing up space for another rescue.'
  },
  {
    id: 'cost_effective',
    title: 'Cost-Effective',
    icon: '💰',
    description: 'Adoption fees are typically much lower than buying from a breeder and often include vaccinations, spaying/neutering, and microchipping.'
  },
  {
    id: 'variety',
    title: 'Wide Variety',
    icon: '🐕',
    description: 'Shelters have dogs of all ages, sizes, breeds, and personalities, making it easier to find your perfect match.'
  },
  {
    id: 'support',
    title: 'Ongoing Support',
    icon: '🤝',
    description: 'Many shelters provide post-adoption support, training resources, and behavioral guidance to help you succeed.'
  }
];

export interface AdoptionStep {
  id: string;
  step: number;
  title: string;
  description: string;
  tips: string[];
}

export const adoptionSteps: AdoptionStep[] = [
  {
    id: 'research',
    step: 1,
    title: 'Research and Prepare',
    description: 'Before adopting, research different breeds and consider your lifestyle, living situation, and commitment level.',
    tips: [
      'Assess your living space and activity level',
      'Consider the time and financial commitment',
      'Research breeds that match your lifestyle',
      'Prepare your home for a new dog'
    ]
  },
  {
    id: 'find',
    step: 2,
    title: 'Find a Shelter or Rescue',
    description: 'Research local animal shelters, rescue organizations, and breed-specific rescues in your area.',
    tips: [
      'Visit multiple shelters and rescues',
      'Check online databases and websites',
      'Attend adoption events',
      'Ask for recommendations from vets'
    ]
  },
  {
    id: 'meet',
    step: 3,
    title: 'Meet and Interact',
    description: 'Spend time with potential dogs to find the right personality match for your family.',
    tips: [
      'Ask about the dog\'s history and behavior',
      'Observe how the dog interacts with you',
      'Bring family members to meet the dog',
      'Ask to take the dog for a walk'
    ]
  },
  {
    id: 'apply',
    step: 4,
    title: 'Complete Application',
    description: 'Fill out the adoption application honestly and provide references as requested.',
    tips: [
      'Be honest about your experience and expectations',
      'Provide accurate contact information',
      'Have references ready (vet, landlord, personal)',
      'Be prepared for a home visit if required'
    ]
  },
  {
    id: 'prepare_home',
    step: 5,
    title: 'Prepare Your Home',
    description: 'Get everything ready for your new family member before bringing them home.',
    tips: [
      'Buy food, bowls, collar, leash, and ID tags',
      'Set up a comfortable sleeping area',
      'Remove hazards and secure the yard',
      'Stock up on toys and treats'
    ]
  },
  {
    id: 'bring_home',
    step: 6,
    title: 'Bring Your Dog Home',
    description: 'Make the transition smooth with patience, consistency, and lots of love.',
    tips: [
      'Give your dog time to adjust',
      'Establish a routine immediately',
      'Schedule a vet visit within the first week',
      'Be patient with house training and behavior'
    ]
  }
];

export interface AdoptionTip {
  id: string;
  category: 'Before' | 'During' | 'After';
  title: string;
  description: string;
}

export const adoptionTips: AdoptionTip[] = [
  {
    id: 'consider_age',
    category: 'Before',
    title: 'Consider Adult Dogs',
    description: 'Adult dogs often come house-trained and with established personalities, making them easier to integrate into your life.'
  },
  {
    id: 'meet_family',
    category: 'Before',
    title: 'Include Everyone',
    description: 'Make sure all family members meet the dog before adopting to ensure everyone is comfortable and compatible.'
  },
  {
    id: 'ask_questions',
    category: 'During',
    title: 'Ask Lots of Questions',
    description: 'Don\'t hesitate to ask shelter staff about the dog\'s health history, behavior, energy level, and any special needs.'
  },
  {
    id: 'trial_period',
    category: 'During',
    title: 'Consider a Trial Period',
    description: 'Some shelters offer trial adoptions or foster-to-adopt programs to ensure it\'s the right fit before committing.'
  },
  {
    id: 'patience',
    category: 'After',
    title: 'Be Patient',
    description: 'Give your new dog at least 3 months to fully adjust. The "3-3-3 rule": 3 days to decompress, 3 weeks to learn your routine, 3 months to feel at home.'
  },
  {
    id: 'training',
    category: 'After',
    title: 'Invest in Training',
    description: 'Professional training or classes can help you and your dog bond while addressing any behavioral issues early on.'
  },
  {
    id: 'vet_visit',
    category: 'After',
    title: 'Early Vet Visit',
    description: 'Schedule a vet appointment within the first week to establish care, address any health concerns, and get professional advice.'
  },
  {
    id: 'routine',
    category: 'After',
    title: 'Establish Routine',
    description: 'Dogs thrive on consistency. Set regular feeding times, walk schedules, and bedtime routines from day one.'
  }
];

export interface AdoptionResource {
  id: string;
  name: string;
  type: 'Shelter' | 'Rescue' | 'Database' | 'Information';
  description: string;
  website?: string;
}

export const adoptionResources: AdoptionResource[] = [
  {
    id: 'petfinder',
    name: 'Petfinder',
    type: 'Database',
    description: 'The largest pet adoption database with thousands of shelters and rescues across the country.',
    website: 'https://www.petfinder.com'
  },
  {
    id: 'adopt_a_pet',
    name: 'Adopt-a-Pet',
    type: 'Database',
    description: 'Search adoptable pets from thousands of shelters and rescues nationwide.',
    website: 'https://www.adoptapet.com'
  },
  {
    id: 'aspca',
    name: 'ASPCA',
    type: 'Information',
    description: 'Provides resources on pet adoption, care, and finding local shelters.',
    website: 'https://www.aspca.org'
  },
  {
    id: 'humane_society',
    name: 'Humane Society',
    type: 'Information',
    description: 'Offers adoption guidance, pet care information, and shelter locator.',
    website: 'https://www.humanesociety.org'
  },
  {
    id: 'rescue_groups',
    name: 'Breed-Specific Rescues',
    type: 'Rescue',
    description: 'Many breeds have dedicated rescue organizations that specialize in rehoming specific breeds.',
    website: 'https://www.akc.org/breeder-programs/rescue-network/'
  },
  {
    id: 'local_shelter',
    name: 'Local Animal Shelters',
    type: 'Shelter',
    description: 'Contact your city or county animal shelter for adoptable dogs in your local area.'
  }
];

export interface DetailedProcedure {
  id: string;
  phase: number;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
  whatToExpect: string[];
  commonQuestions: Array<{ q: string; a: string }>;
}

export const detailedAdoptionProcedures: DetailedProcedure[] = [
  {
    id: 'pre_qualification',
    phase: 1,
    title: 'Pre-Adoption Requirements',
    description: 'Before you can adopt, shelters need to ensure you can provide a safe, loving home. Understanding these requirements helps you prepare.',
    duration: 'Initial assessment',
    requirements: [
      'Must be at least 18-21 years old (varies by organization)',
      'Valid government-issued ID',
      'Proof of residence (lease, utility bill, or mortgage)',
      'Landlord approval if renting (pet policy documentation)',
      'Financial stability to cover pet expenses',
      'All household members must agree to the adoption'
    ],
    whatToExpect: [
      'Background check on pet ownership history',
      'Verification of current pets\' vaccination records',
      'Discussion about your lifestyle and daily schedule',
      'Questions about your experience with dogs',
      'Assessment of your living environment',
      'Review of your ability to meet the dog\'s needs'
    ],
    commonQuestions: [
      {
        q: 'What if I have no prior dog ownership experience?',
        a: 'Many shelters welcome first-time owners and will recommend dogs suitable for beginners. They often provide training resources and ongoing support.'
      },
      {
        q: 'Do I need a fenced yard?',
        a: 'Not always required, but some high-energy or large breeds may need one. Shelters will discuss exercise alternatives if you don\'t have a yard.'
      },
      {
        q: 'Can I adopt if I have other pets?',
        a: 'Yes, but the shelter may require a meet-and-greet to ensure compatibility. Your current pets must be up-to-date on vaccinations.'
      }
    ]
  },
  {
    id: 'application',
    phase: 2,
    title: 'The Application Process',
    description: 'The application is your opportunity to tell the shelter about yourself and find the perfect match for your family.',
    duration: '30-60 minutes to complete',
    requirements: [
      'Personal information (name, address, contact)',
      'Employment and financial information',
      'Housing details and landlord contact',
      'Veterinarian reference (if you have current/previous pets)',
      'Personal references (2-3 people)',
      'Details about your household and lifestyle'
    ],
    whatToExpect: [
      'Questions about your daily routine and work schedule',
      'Inquiries about exercise and activity plans',
      'Discussion of any breed or size preferences',
      'Questions about dealing with behavioral challenges',
      'Explanation of your expectations and commitment level',
      'Honesty about any concerns or limitations'
    ],
    commonQuestions: [
      {
        q: 'How long does application review take?',
        a: 'Most shelters review applications within 24-72 hours. High-demand dogs may have multiple applications requiring additional time.'
      },
      {
        q: 'What if my application is denied?',
        a: 'Ask for specific feedback. You may reapply later, apply for a different dog, or look for better-suited matches at other organizations.'
      },
      {
        q: 'Can I apply for multiple dogs?',
        a: 'Policies vary, but many shelters allow you to list preferences or submit applications for different dogs if your first choice is adopted.'
      }
    ]
  },
  {
    id: 'interview_screening',
    phase: 3,
    title: 'Interview and Screening',
    description: 'A shelter representative will discuss your application in detail to ensure the best match for both you and the dog.',
    duration: '30-90 minutes',
    requirements: [
      'Availability for phone or in-person interview',
      'References available for contact',
      'Veterinary records if applicable',
      'Proof of pet-friendly housing',
      'Openness to discussing your lifestyle honestly'
    ],
    whatToExpect: [
      'Detailed discussion about specific dog you\'re interested in',
      'Questions about handling common dog behaviors',
      'Scenarios about emergencies or health issues',
      'Discussion of financial commitment (food, vet, emergencies)',
      'Conversation about training and socialization plans',
      'Reference checks with landlord, vet, and personal contacts'
    ],
    commonQuestions: [
      {
        q: 'What kind of scenarios will they ask about?',
        a: 'Common topics include: what if the dog has accidents, chews furniture, barks excessively, or develops health issues. They want to ensure you\'re prepared.'
      },
      {
        q: 'Will they really call my references?',
        a: 'Yes, most organizations do contact at least some references. Ensure your references know to expect a call and can speak positively about you.'
      },
      {
        q: 'What if I work full-time?',
        a: 'Many adopters work full-time. Discuss your plans for exercise, potty breaks, doggy daycare, or pet sitters to show you\'ve planned for the dog\'s needs.'
      }
    ]
  },
  {
    id: 'home_visit',
    phase: 4,
    title: 'Home Visit Protocol',
    description: 'Many rescues require a home visit to ensure your environment is safe and suitable for the dog.',
    duration: '30-60 minutes',
    requirements: [
      'Schedule a convenient time for the visit',
      'All household members should be present',
      'Current pets should be home (if applicable)',
      'Home should be in normal living condition',
      'Yard should be accessible if applicable'
    ],
    whatToExpect: [
      'Inspector checks for hazards (chemicals, small objects, toxic plants)',
      'Verification of secure fencing if required',
      'Assessment of space and sleeping arrangements',
      'Review of where food, water, and supplies will be kept',
      'Discussion of any safety concerns or modifications needed',
      'Meeting all family members and current pets'
    ],
    commonQuestions: [
      {
        q: 'Does my house need to be perfect?',
        a: 'No, they\'re looking for safety, not perfection. Normal lived-in homes are fine. They want to see that it\'s safe for a dog.'
      },
      {
        q: 'What if they find an issue?',
        a: 'Minor issues can usually be fixed before adoption. They\'ll provide recommendations. Major safety concerns may delay adoption until resolved.'
      },
      {
        q: 'What about apartments or small spaces?',
        a: 'Size matters less than suitability. They assess if the space works for the specific dog\'s size and energy level, and your exercise plans.'
      }
    ]
  },
  {
    id: 'meet_greet',
    phase: 5,
    title: 'Meet and Greet Procedures',
    description: 'This crucial step lets you and your family interact with the dog to ensure compatibility and connection.',
    duration: '1-3 visits, 30-60 minutes each',
    requirements: [
      'All household members should attend',
      'Bring current pets for introduction (if applicable)',
      'Wear comfortable clothes for interaction',
      'Follow shelter guidelines for interaction',
      'Be patient and observe the dog\'s behavior'
    ],
    whatToExpect: [
      'Initial meeting in controlled environment',
      'Staff guidance on proper approach and interaction',
      'Observation of dog\'s behavior with each family member',
      'Walking the dog together if appropriate',
      'Play time and bonding activities',
      'Staff sharing dog\'s history, preferences, and quirks',
      'Pet-to-pet introduction if you have other animals',
      'Discussion of any concerns or questions'
    ],
    commonQuestions: [
      {
        q: 'What if the dog seems shy or nervous?',
        a: 'Shelter stress is common. Staff can explain the dog\'s true personality. Multiple visits help dogs warm up. Consider their shelter behavior vs. potential.'
      },
      {
        q: 'Should I bring my kids to meet the dog?',
        a: 'Absolutely! It\'s essential that children and dogs meet before adoption. Staff will supervise and guide appropriate interactions.'
      },
      {
        q: 'How do I know if it\'s the right match?',
        a: 'Trust your instincts but also listen to staff insights. Look for signs of mutual interest, comfortable body language, and manageable energy levels.'
      }
    ]
  },
  {
    id: 'trial_period',
    phase: 6,
    title: 'Trial Period and Foster-to-Adopt',
    description: 'Some organizations offer trial periods or foster-to-adopt programs to ensure the match works before finalizing.',
    duration: '1-2 weeks typically',
    requirements: [
      'Signed foster or trial agreement',
      'Commitment to follow shelter guidelines',
      'Daily communication with shelter (some programs)',
      'Return the dog if it doesn\'t work out',
      'Provide honest feedback about the experience'
    ],
    whatToExpect: [
      'Take the dog home with supplies provided',
      'Observe how dog adjusts to your home',
      'Test compatibility with your lifestyle',
      'Address any unexpected behaviors or issues',
      'Contact shelter with questions or concerns',
      'Decision point at end of trial period',
      'Option to adopt, try another dog, or return'
    ],
    commonQuestions: [
      {
        q: 'What if I fall in love but there are issues?',
        a: 'Discuss with the shelter. Many behavioral issues are solvable with training. They can provide resources, trainers, or determine if it\'s a dealbreaker.'
      },
      {
        q: 'Will I lose my deposit if it doesn\'t work?',
        a: 'Most trial programs don\'t require deposits. Adoption fees are typically paid only when you finalize. Check your specific organization\'s policy.'
      },
      {
        q: 'How do I know if normal adjustment vs. real incompatibility?',
        a: 'Contact the shelter with concerns. Initial adjustment is normal (3-3-3 rule). They\'ll help distinguish adjustment from incompatibility issues.'
      }
    ]
  },
  {
    id: 'finalization',
    phase: 7,
    title: 'Finalization and Paperwork',
    description: 'Once you\'re ready to commit, you\'ll complete the adoption contract and pay the adoption fee.',
    duration: '30-60 minutes',
    requirements: [
      'Signed adoption contract',
      'Payment of adoption fee (varies $50-$500)',
      'Agreement to spay/neuter if not already done',
      'Commitment to provide necessary care',
      'Understanding of return policy'
    ],
    whatToExpect: [
      'Review of adoption contract terms',
      'Payment processing (cash, card, check)',
      'Receiving medical records and history',
      'Microchip transfer to your name',
      'Copy of vaccination records',
      'Spay/neuter certificate or schedule',
      'ID tags and collar (often provided)',
      'Welcome packet with resources',
      'Photos and celebration!'
    ],
    commonQuestions: [
      {
        q: 'What does the adoption fee cover?',
        a: 'Typically includes vaccinations, spay/neuter, microchip, deworming, and initial health check. Much less than these services separately!'
      },
      {
        q: 'Can I return the dog if it doesn\'t work out?',
        a: 'Most shelters have return policies, often within 30 days or even lifetime returns. They want the dog to find the right home, not just any home.'
      },
      {
        q: 'Do I get a trial period after adoption?',
        a: 'Some offer grace periods. Review the contract. Most encourage calling with issues before returning so they can help you work through challenges.'
      }
    ]
  },
  {
    id: 'post_adoption',
    phase: 8,
    title: 'Post-Adoption Support and Follow-Up',
    description: 'Reputable organizations provide ongoing support to ensure successful adoptions and happy outcomes.',
    duration: 'Ongoing (varies by organization)',
    requirements: [
      'Respond to follow-up calls or emails',
      'Update organization on dog\'s progress',
      'Contact them with serious issues',
      'Attend recommended training classes',
      'Maintain relationship with the organization'
    ],
    whatToExpect: [
      'Follow-up call within first week',
      'Check-ins at 30, 60, 90 days',
      'Access to behavior helpline',
      'Training class recommendations or discounts',
      'Medical advice referrals',
      'Community events and socialization opportunities',
      'Lifetime support for questions',
      'Updates and photos appreciated'
    ],
    commonQuestions: [
      {
        q: 'What if I have issues after adoption?',
        a: 'Contact the shelter immediately! Most offer behavior support, training resources, or problem-solving help. Don\'t struggle alone.'
      },
      {
        q: 'Do I need to provide updates?',
        a: 'While not always required, organizations love updates and photos! It helps them track outcomes and brings joy to staff and volunteers.'
      },
      {
        q: 'Can I get help with training or health issues?',
        a: 'Yes! Most organizations provide trainer referrals, behavioral resources, and can guide you to affordable vet care or assistance programs.'
      }
    ]
  }
];
