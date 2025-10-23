export interface VaccinationSchedule {
  id: string;
  ageWeeks: string;
  vaccines: string[];
  description: string;
  important: string;
}

export const puppyVaccinationSchedule: VaccinationSchedule[] = [
  {
    id: '6_8_weeks',
    ageWeeks: '6-8 weeks',
    vaccines: ['DHPP-1', 'Bordetella'],
    description: 'First round of core vaccines. This is the foundation of your puppy\'s immunity.',
    important: 'Keep puppy away from unknown dogs and public places until fully vaccinated.'
  },
  {
    id: '10_12_weeks',
    ageWeeks: '10-12 weeks',
    vaccines: ['DHPP-2', 'Leptospirosis-1', 'Canine Influenza-1', 'Lyme-1'],
    description: 'Second round builds on initial immunity. Optional vaccines added based on risk factors.',
    important: 'Discuss lifestyle and risk factors with your vet to determine which optional vaccines are needed.'
  },
  {
    id: '14_16_weeks',
    ageWeeks: '14-16 weeks',
    vaccines: ['DHPP-3', 'Rabies', 'Leptospirosis-2', 'Canine Influenza-2', 'Lyme-2'],
    description: 'Final puppy series. Rabies vaccine is legally required in most areas.',
    important: 'Rabies vaccine is a legal requirement. Keep certificate in a safe place.'
  },
  {
    id: '12_16_months',
    ageWeeks: '12-16 months',
    vaccines: ['DHPP Booster', 'Rabies Booster'],
    description: 'First adult booster to maintain immunity established in puppy series.',
    important: 'This booster is critical - immunity from puppy vaccines begins to wane around 1 year.'
  },
  {
    id: 'annual',
    ageWeeks: 'Every 1-3 years',
    vaccines: ['DHPP', 'Rabies', 'Bordetella', 'Other boosters as needed'],
    description: 'Ongoing adult boosters. Frequency varies by vaccine type and local regulations.',
    important: 'Rabies frequency depends on vaccine type (1-year vs 3-year) and local laws.'
  }
];

export interface CoreVaccine {
  id: string;
  name: string;
  shortName: string;
  category: 'core' | 'non-core';
  diseases: string[];
  description: string;
  whyImportant: string;
  howTransmitted: string;
  symptoms: string[];
  protectionLevel: string;
  boosterSchedule: string;
  sideEffects: string[];
}

export const coreVaccines: CoreVaccine[] = [
  {
    id: 'dhpp',
    name: 'DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza)',
    shortName: 'DHPP / DA2PP',
    category: 'core',
    diseases: ['Canine Distemper', 'Adenovirus (Hepatitis)', 'Parvovirus', 'Parainfluenza'],
    description: 'This combination vaccine protects against four serious and potentially fatal viral diseases. It\'s called a "core" vaccine because all dogs should receive it regardless of lifestyle.',
    whyImportant: 'These diseases are highly contagious, widespread, and can be fatal, especially in puppies. Parvovirus alone kills thousands of unvaccinated dogs each year. Distemper has no cure and is usually fatal.',
    howTransmitted: 'Through direct contact with infected dogs, contaminated surfaces, air droplets (distemper), and infected feces (parvo). Parvovirus can survive in the environment for months.',
    symptoms: ['Distemper: fever, discharge, coughing, vomiting, seizures', 'Hepatitis: fever, lethargy, loss of appetite, bleeding', 'Parvovirus: severe bloody diarrhea, vomiting, lethargy, rapid dehydration', 'Parainfluenza: coughing, nasal discharge, fever'],
    protectionLevel: 'Highly effective (95-99%) when complete series is given. Immunity lasts 1-3 years with boosters.',
    boosterSchedule: 'Puppy series: 3 doses, 3-4 weeks apart. First adult booster at 1 year. Then every 1-3 years based on vet recommendation and titer testing.',
    sideEffects: ['Mild: lethargy, decreased appetite for 24-48 hours', 'Moderate: swelling at injection site, mild fever', 'Rare: allergic reaction (vomiting, facial swelling, difficulty breathing) - seek immediate vet care']
  },
  {
    id: 'rabies',
    name: 'Rabies Vaccine',
    shortName: 'Rabies',
    category: 'core',
    diseases: ['Rabies'],
    description: 'Protects against the rabies virus, which is 100% fatal once symptoms appear. This vaccine is legally required in most countries and states.',
    whyImportant: 'Rabies is a deadly zoonotic disease (transmissible to humans). It\'s a legal requirement because it protects both your dog and public health. Without proof of vaccination, your dog may be quarantined or euthanized if involved in a bite incident.',
    howTransmitted: 'Through the saliva of infected animals, typically via bites. Common carriers include bats, raccoons, foxes, and skunks.',
    symptoms: ['Early: behavior changes, fever, difficulty swallowing', 'Advanced: aggression, excessive salivation, paralysis, seizures', 'Always fatal once symptoms appear'],
    protectionLevel: 'Nearly 100% effective. Provides immunity for 1-3 years depending on vaccine type.',
    boosterSchedule: 'First vaccine at 12-16 weeks. Booster at 1 year. Subsequent boosters every 1 or 3 years depending on vaccine type and local laws.',
    sideEffects: ['Mild: temporary lethargy, mild fever, soreness at injection site', 'Moderate: lumps at injection site (may last weeks)', 'Rare: vaccine-associated sarcoma (extremely rare), allergic reactions']
  }
];

export const nonCoreVaccines: CoreVaccine[] = [
  {
    id: 'bordetella',
    name: 'Bordetella (Kennel Cough)',
    shortName: 'Bordetella',
    category: 'non_core',
    diseases: ['Kennel Cough / Canine Infectious Tracheobronchitis'],
    description: 'Protects against the most common cause of kennel cough, a highly contagious respiratory infection.',
    whyImportant: 'Essential for dogs that will be boarded, groomed, attend doggy daycare, visit dog parks, or participate in training classes. Many facilities require proof of vaccination.',
    howTransmitted: 'Through airborne droplets, direct contact with infected dogs, and contaminated surfaces. Spreads rapidly in close quarters.',
    symptoms: ['Persistent dry, honking cough', 'Gagging or retching', 'Usually mild with normal activity level', 'Rarely: loss of appetite, lethargy, fever'],
    protectionLevel: 'Moderate (60-70%). Doesn\'t prevent all kennel cough but reduces severity and duration. Multiple pathogens cause kennel cough.',
    boosterSchedule: 'Initial vaccine, booster at 1 year, then every 6-12 months for high-risk dogs. Available as injectable, oral, or intranasal.',
    sideEffects: ['Intranasal: sneezing, nasal discharge for 2-3 days', 'Injectable: mild fever, lethargy', 'Oral: rare, generally well-tolerated']
  },
  {
    id: 'leptospirosis',
    name: 'Leptospirosis Vaccine',
    shortName: 'Lepto',
    category: 'non_core',
    diseases: ['Leptospirosis'],
    description: 'Protects against a bacterial disease that affects the kidneys and liver. It\'s a zoonotic disease that can spread to humans.',
    whyImportant: 'Recommended for dogs that spend time outdoors, in areas with wildlife, or where leptospirosis is common. The disease can cause severe kidney and liver damage and is potentially fatal.',
    howTransmitted: 'Through contact with contaminated water, soil, or urine from infected animals (especially rats, raccoons, and wildlife). Bacteria enter through mucous membranes or breaks in skin.',
    symptoms: ['Fever, muscle pain, weakness', 'Vomiting and diarrhea', 'Increased thirst and urination', 'Jaundice (yellowing of gums and eyes)', 'Kidney and liver failure in severe cases'],
    protectionLevel: 'Good (70-80%) against included strains. Requires annual boosters. Doesn\'t protect against all leptospirosis strains.',
    boosterSchedule: 'Initial series: 2 doses, 3-4 weeks apart. Annual boosters required for continued protection.',
    sideEffects: ['Higher rate of vaccine reactions compared to other vaccines', 'Mild: lethargy, decreased appetite', 'Moderate: vomiting, diarrhea, facial swelling', 'Report any reactions to your vet promptly']
  },
  {
    id: 'lyme',
    name: 'Lyme Disease Vaccine',
    shortName: 'Lyme',
    category: 'non_core',
    diseases: ['Lyme Disease (Borreliosis)'],
    description: 'Protects against Lyme disease, a tick-borne bacterial infection that can cause serious health issues.',
    whyImportant: 'Recommended for dogs in tick-endemic areas or that frequently hike, camp, or spend time in wooded areas. Lyme disease can cause chronic joint problems and kidney issues.',
    howTransmitted: 'Through bites from infected black-legged ticks (deer ticks). Ticks must be attached for 24-48 hours to transmit the disease.',
    symptoms: ['Lameness (often shifting between legs)', 'Fever and lethargy', 'Swollen lymph nodes and joints', 'Loss of appetite', 'Rarely: kidney problems (life-threatening)'],
    protectionLevel: 'Good (60-80%). Works best when combined with tick prevention products. Doesn\'t guarantee complete protection.',
    boosterSchedule: 'Initial series: 2 doses, 2-4 weeks apart. Annual boosters required. First dose before tick season starts.',
    sideEffects: ['Generally well-tolerated', 'Mild: temporary soreness at injection site', 'Rare: lethargy, decreased appetite', 'Very rare: more serious reactions']
  },
  {
    id: 'canine_influenza',
    name: 'Canine Influenza Vaccine',
    shortName: 'CIV',
    category: 'non_core',
    diseases: ['Canine Influenza Virus (H3N8 and H3N2 strains)'],
    description: 'Protects against dog flu, a contagious respiratory infection that has become increasingly common.',
    whyImportant: 'Recommended for dogs with high exposure risk: boarding facilities, doggy daycares, dog parks, grooming salons, or areas with recent outbreaks.',
    howTransmitted: 'Through respiratory droplets (coughing, sneezing), direct nose-to-nose contact, and contaminated objects. Highly contagious among dogs.',
    symptoms: ['Persistent cough lasting 2-3 weeks', 'Nasal discharge (often thick and colored)', 'Fever, lethargy', 'Decreased appetite', 'Some dogs show no symptoms but can still spread'],
    protectionLevel: 'Moderate to good (70-80%). Reduces severity and shedding even if dog gets infected. Bivalent vaccine covers both H3N8 and H3N2 strains.',
    boosterSchedule: 'Initial series: 2 doses, 2-4 weeks apart. Annual boosters for continued protection.',
    sideEffects: ['Mild: lethargy, decreased appetite for 24 hours', 'Injection site tenderness', 'Rare: facial swelling, hives', 'Usually resolve within 24-48 hours']
  },
  {
    id: 'rattlesnake',
    name: 'Rattlesnake Vaccine',
    shortName: 'Crotalus Atrox',
    category: 'non_core',
    diseases: ['Rattlesnake Venom Effects'],
    description: 'Provides some protection against Western Diamondback rattlesnake venom. Not a substitute for veterinary care if bitten.',
    whyImportant: 'Only for dogs in rattlesnake-endemic areas who regularly hike or spend time in snake habitats. Creates antibodies to reduce venom effects.',
    howTransmitted: 'Not a disease - vaccine helps dog produce antibodies against snake venom to reduce bite severity.',
    symptoms: ['Without vaccine: severe swelling, tissue damage, pain', 'Bleeding, shock, possible death', 'With vaccine: reduced severity and tissue damage', 'STILL REQUIRES IMMEDIATE VET CARE'],
    protectionLevel: 'Limited. May reduce severity but doesn\'t prevent all effects. Effectiveness varies by snake species (works best for Western Diamondback).',
    boosterSchedule: 'Initial vaccine, booster 1 month later, then every 6 months during snake season (spring/summer in most areas).',
    sideEffects: ['Mild to moderate: pain and swelling at injection site', 'Lethargy for 1-2 days', 'Small lump may persist', 'More reactions than typical vaccines']
  }
];

export interface VaccinationTip {
  id: string;
  category: 'before' | 'during' | 'after' | 'general';
  title: string;
  description: string;
}

export const vaccinationTips: VaccinationTip[] = [
  {
    id: 'pre_vaccination_health',
    category: 'before',
    title: 'Ensure Your Dog is Healthy',
    description: 'Vaccines work best when your dog is in good health. Delay vaccination if your dog is sick, has a fever, or is recovering from illness. Let your vet know about any health concerns.'
  },
  {
    id: 'timing_matters',
    category: 'before',
    title: 'Don\'t Skip or Delay Vaccines',
    description: 'Stick to the schedule your vet recommends. Gaps in timing can leave your puppy vulnerable or require restarting the series. Mark your calendar and set reminders.'
  },
  {
    id: 'bring_records',
    category: 'before',
    title: 'Bring Previous Vaccination Records',
    description: 'Always bring your dog\'s vaccination history to vet visits. This prevents over-vaccination and ensures proper timing of boosters.'
  },
  {
    id: 'discuss_lifestyle',
    category: 'before',
    title: 'Discuss Your Dog\'s Lifestyle',
    description: 'Tell your vet about your dog\'s activities, travel plans, and exposure risks. This helps determine which non-core vaccines are necessary.'
  },
  {
    id: 'monitor_closely',
    category: 'during',
    title: 'Watch for Immediate Reactions',
    description: 'Stay at the vet clinic for 15-20 minutes after vaccination. Serious allergic reactions typically occur within this timeframe.'
  },
  {
    id: 'no_exercise',
    category: 'after',
    title: 'Rest After Vaccination',
    description: 'Limit exercise and excitement for 24 hours after vaccination. This allows your dog\'s immune system to focus on building immunity.'
  },
  {
    id: 'watch_side_effects',
    category: 'after',
    title: 'Monitor for Side Effects',
    description: 'Watch for lethargy, decreased appetite, or soreness for 24-48 hours. These are normal. Contact your vet if symptoms worsen or last longer than 2 days.'
  },
  {
    id: 'when_to_call',
    category: 'after',
    title: 'Know When to Call the Vet',
    description: 'Call immediately if you notice: facial swelling, hives, vomiting, diarrhea, difficulty breathing, or collapse. These indicate a serious reaction.'
  },
  {
    id: 'titer_testing',
    category: 'general',
    title: 'Consider Titer Testing',
    description: 'For adult dogs, titer testing can check antibody levels before giving boosters. This prevents over-vaccination while ensuring protection.'
  },
  {
    id: 'keep_records',
    category: 'general',
    title: 'Maintain Detailed Records',
    description: 'Keep copies of all vaccination certificates. You\'ll need them for boarding, grooming, travel, and proof of rabies vaccination. Take photos of certificates as backup.'
  }
];

export interface VaccinationFAQ {
  id: string;
  question: string;
  answer: string;
  category: 'safety' | 'schedule' | 'necessity' | 'side-effects';
}

export const vaccinationFAQs: VaccinationFAQ[] = [
  {
    id: 'are_vaccines_safe',
    question: 'Are dog vaccines safe?',
    answer: 'Yes, vaccines are very safe for the vast majority of dogs. Benefits far outweigh risks. Serious reactions are rare (less than 1 in 10,000). Mild side effects like lethargy or soreness are common and temporary. Your vet screens for health issues before vaccinating.',
    category: 'safety'
  },
  {
    id: 'why_multiple_doses',
    question: 'Why does my puppy need multiple doses of the same vaccine?',
    answer: 'Puppies receive antibodies from their mother that interfere with vaccines. Multiple doses ensure that at least one dose is given after maternal antibodies fade. This builds strong, lasting immunity. Each dose "boosts" the immune response.',
    category: 'schedule'
  },
  {
    id: 'can_i_skip',
    question: 'Can I skip "non-core" vaccines?',
    answer: 'It depends on your dog\'s lifestyle and risk factors. Non-core vaccines aren\'t required for all dogs, but they\'re important for dogs with specific exposure risks. Discuss your dog\'s lifestyle with your vet to make an informed decision.',
    category: 'necessity'
  },
  {
    id: 'too_many_at_once',
    question: 'Is it safe to give multiple vaccines at one visit?',
    answer: 'Yes, it\'s safe and common to give multiple vaccines in one visit. Research shows no increased risk. However, some vets prefer spacing vaccines for small or sensitive dogs. Discuss your preferences with your vet.',
    category: 'safety'
  },
  {
    id: 'overdue_restart',
    question: 'If my dog is overdue, do we start over?',
    answer: 'Usually not. For most vaccines, you can pick up where you left off without restarting the entire series. However, significant delays (years) might require restarting some vaccines. Your vet will advise based on the specific vaccine and time elapsed.',
    category: 'schedule'
  },
  {
    id: 'natural_immunity',
    question: 'Can my dog build natural immunity instead?',
    answer: 'While dogs can develop immunity after surviving infections, it\'s extremely risky. Diseases like parvo and distemper have high mortality rates. Natural infection can cause severe suffering, permanent damage, or death. Vaccination is much safer.',
    category: 'necessity'
  },
  {
    id: 'lump_after',
    question: 'My dog has a lump where they got the vaccine. Is this normal?',
    answer: 'Small, firm lumps at injection sites are common and usually disappear within weeks. However, monitor the lump. If it grows, persists beyond 3 months, or seems painful, contact your vet. Rarely, lumps can indicate more serious reactions.',
    category: 'side_effects'
  },
  {
    id: 'indoor_dog_needs',
    question: 'Does my indoor-only dog really need vaccines?',
    answer: 'Yes! Core vaccines (DHPP and rabies) are still essential. Viruses like parvo can be carried on shoes and clothing. Rabies vaccination is legally required. Indoor dogs can also escape or encounter wildlife. Core vaccines protect all dogs.',
    category: 'necessity'
  }
];
