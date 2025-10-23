export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  relatedTopics?: string[];
}

export const faqs: FAQ[] = [
  {
    id: 'how-much-sleep',
    category: 'General Care',
    question: 'How much sleep does my dog need?',
    answer: 'Dogs typically need 12-14 hours of sleep per day, though this varies by age and breed. Puppies and senior dogs may sleep up to 18-20 hours daily. Large breeds tend to sleep more than small breeds. If your dog seems to sleep excessively or has trouble sleeping, consult your vet as it could indicate a health issue.',
    relatedTopics: ['puppy care', 'senior dogs', 'health monitoring'],
  },
  {
    id: 'first-vet-visit',
    category: 'Health',
    question: 'When should I take my new puppy to the vet?',
    answer: 'Schedule a vet visit within the first week of bringing your puppy home, ideally within 48-72 hours. The vet will perform a health check, discuss vaccination schedules, deworming, microchipping, spay/neuter timing, and answer any questions. Bring any medical records from the breeder or shelter.',
    relatedTopics: ['vaccinations', 'puppy care', 'preventive health'],
  },
  {
    id: 'potty-training-time',
    category: 'Training',
    question: 'How long does potty training take?',
    answer: 'Most puppies can be reliably potty trained by 4-6 months old, but some may take up to a year. Success depends on consistency, your schedule, the puppy\'s age, and previous training. Take puppies out every 1-2 hours, immediately after eating, drinking, playing, or waking up. Praise successes immediately and never punish accidents.',
    relatedTopics: ['puppy training', 'house training', 'crate training'],
  },
  {
    id: 'can-eat-human-food',
    category: 'Nutrition',
    question: 'Can dogs eat human food?',
    answer: 'Some human foods are safe in moderation (plain chicken, carrots, apples, peanut butter without xylitol), but many are toxic. NEVER feed: chocolate, grapes, raisins, onions, garlic, macadamia nuts, xylitol, alcohol, avocado, or cooked bones. Human food should not exceed 10% of daily calories. Always research before sharing food with your dog.',
    relatedTopics: ['nutrition', 'toxic foods', 'treats'],
  },
  {
    id: 'why-eat-grass',
    category: 'Behavior',
    question: 'Why does my dog eat grass?',
    answer: 'Grass eating is common and usually harmless. Reasons include: upset stomach (grass may induce vomiting), dietary needs (seeking fiber), boredom, or simply liking the taste. Most dogs who eat grass don\'t vomit. However, if it\'s excessive, accompanied by vomiting, or if the grass is chemically treated, consult your vet. Ensure your dog has a complete diet and plenty of enrichment.',
    relatedTopics: ['dog behavior', 'digestive health', 'pica'],
  },
  {
    id: 'stop-barking',
    category: 'Training',
    question: 'How do I stop excessive barking?',
    answer: 'First, identify why your dog barks (alerting, attention-seeking, anxiety, boredom, fear). Then address the cause: increase exercise and mental stimulation, desensitize to triggers, teach "quiet" command, ignore attention-seeking barking, and reward quiet behavior. Never yell (they think you\'re barking too). For persistent issues, consult a professional trainer. Some breeds are naturally more vocal.',
    relatedTopics: ['barking behavior', 'training basics', 'anxiety'],
  },
  {
    id: 'socialize-adult-dog',
    category: 'Socialization',
    question: 'Can I socialize an adult dog?',
    answer: 'Yes, though it\'s easier with puppies during the critical 3-14 week period. Adult dog socialization requires patience and gradual exposure. Start with calm, controlled environments and positive associations. Never force interactions. Consider working with a professional trainer, especially for fearful or reactive dogs. Progress slowly and celebrate small victories. Some dogs may always have limitations based on their history.',
    relatedTopics: ['socialization', 'fearful dogs', 'adult dog training'],
  },
  {
    id: 'how-often-bathe',
    category: 'Grooming',
    question: 'How often should I bathe my dog?',
    answer: 'Most dogs need bathing every 4-6 weeks, but this varies widely. Factors include coat type, lifestyle, skin conditions, and odor. Overbathing strips natural oils and can cause dry, itchy skin. Dogs with skin conditions may need medicated baths weekly. Short-haired, indoor dogs may only need bathing every 2-3 months. Always use dog-specific shampoo.',
    relatedTopics: ['grooming', 'skin health', 'coat care'],
  },
  {
    id: 'safe-leave-alone',
    category: 'General Care',
    question: 'How long can I safely leave my dog alone?',
    answer: 'Adult dogs can typically be left alone for 4-6 hours. Puppies under 6 months should not be alone longer than their age in months plus one (3-month-old = 4 hours max). Consider these factors: potty needs, exercise requirements, anxiety levels, and age. Provide water, safe toys, and comfortable space. For longer periods, arrange for a dog walker or pet sitter.',
    relatedTopics: ['separation anxiety', 'puppy care', 'dog sitting services'],
  },
  {
    id: 'dog-insurance-worth',
    category: 'Health',
    question: 'Is pet insurance worth it?',
    answer: 'Pet insurance can be valuable for managing unexpected veterinary costs. It\'s most beneficial when purchased early (before pre-existing conditions develop). Consider: your financial situation, breed-specific health risks, deductible and coverage options, and whether you have emergency savings. Insurance doesn\'t cover pre-existing conditions, routine care (unless you pay extra), or certain hereditary conditions depending on the policy. Compare multiple companies.',
    relatedTopics: ['veterinary care', 'health costs', 'preventive care'],
  },
  {
    id: 'signs-of-pain',
    category: 'Health',
    question: 'How do I know if my dog is in pain?',
    answer: 'Signs of pain include: limping, reluctance to move or jump, decreased appetite, excessive panting or drooling, whining or whimpering, hiding, aggression when touched, changes in posture, restlessness, or excessive licking of one area. Dogs often hide pain, so subtle changes matter. Any sudden behavior change warrants a vet visit. Senior dogs may develop arthritis pain that develops gradually.',
    relatedTopics: ['health monitoring', 'arthritis', 'senior dog care'],
  },
  {
    id: 'puppy-biting',
    category: 'Training',
    question: 'How do I stop my puppy from biting?',
    answer: 'Puppy biting (mouthing) is normal exploration and teething behavior. To address it: yelp or say "ouch" and stop play when bitten, redirect to appropriate chew toys, never use hands as toys, avoid rough play that encourages biting, provide frozen toys for teething, and reward gentle behavior. Consistency is key. If biting is aggressive rather than playful, consult a trainer. Most puppies outgrow it by 6-7 months.',
    relatedTopics: ['puppy behavior', 'teething', 'bite inhibition'],
  },
  {
    id: 'introduce-new-dog',
    category: 'Socialization',
    question: 'How do I introduce a new dog to my current dog?',
    answer: 'Introduce dogs on neutral territory (not your home) with both on leash. Walk them parallel at a distance, gradually closer. Watch for relaxed body language. If positive, allow brief greetings, then separate. Repeat over several meetings. At home, supervise closely, feed separately, provide individual resources, and give both attention. Some dogs click immediately, others take weeks. Never force interactions. Consider professional help for reactive dogs.',
    relatedTopics: ['multi-dog households', 'socialization', 'dog behavior'],
  },
  {
    id: 'crate-training-benefits',
    category: 'Training',
    question: 'Should I crate train my dog?',
    answer: 'Crate training is highly recommended. Benefits include: aids house training, provides a safe space, prevents destructive behavior when unsupervised, facilitates travel, and helps with vet visits. Dogs naturally den, so most find crates comforting when properly introduced. Never use as punishment. The crate should be large enough to stand, turn, and lie down. Puppies shouldn\'t be crated longer than they can hold their bladder.',
    relatedTopics: ['house training', 'puppy care', 'travel safety'],
  },
  {
    id: 'spay-neuter-when',
    category: 'Health',
    question: 'When should I spay or neuter my dog?',
    answer: 'Traditional timing is 6 months, but recent research suggests waiting may benefit large breeds. Discuss with your vet based on your dog\'s breed, size, and health. Large/giant breeds may benefit from waiting until 12-18 months for bone growth. Small breeds can be done at 6 months. Benefits include preventing unwanted litters, reducing certain cancers, and decreasing roaming/marking behaviors. There are also risks to consider.',
    relatedTopics: ['preventive health', 'puppy care', 'breed-specific care'],
  },
  {
    id: 'dog-cold',
    category: 'Health',
    question: 'Can dogs catch colds from humans?',
    answer: 'No, dogs cannot catch human colds or flu. However, dogs can get their own respiratory infections (kennel cough, canine influenza) with similar symptoms: coughing, sneezing, nasal discharge, lethargy. If your dog shows these signs, especially after boarding or dog parks, consult your vet. Some respiratory infections are contagious among dogs. Keep sick dogs away from other pets.',
    relatedTopics: ['contagious diseases', 'kennel cough', 'respiratory health'],
  },
  {
    id: 'why-sniff-everything',
    category: 'Behavior',
    question: 'Why does my dog sniff everything on walks?',
    answer: 'Sniffing is how dogs explore and understand their world. Their sense of smell is 10,000-100,000 times more acute than ours. Sniffing provides mental stimulation, information about other animals, and is naturally calming. Allow sniff breaks during walks - it\'s enriching and tiring. Consider "sniffari" walks where sniffing is the primary goal. Forced rapid walks without sniffing can increase anxiety.',
    relatedTopics: ['dog behavior', 'mental enrichment', 'walking tips'],
  },
  {
    id: 'dog-dreams',
    category: 'General Care',
    question: 'Do dogs dream?',
    answer: 'Yes, dogs dream. You may notice twitching, paw movements, muffled barks, or rapid eye movement during sleep. Dogs enter REM sleep about 20 minutes after falling asleep. They likely dream about daily activities: playing, eating, interacting with you. Puppies and senior dogs dream more than middle-aged dogs. Never wake a dreaming dog suddenly as they may startle and snap reflexively.',
    relatedTopics: ['sleep patterns', 'dog behavior', 'REM sleep'],
  },
  {
    id: 'best-first-dog',
    category: 'Choosing a Dog',
    question: 'What\'s the best breed for first-time owners?',
    answer: 'Good starter breeds include: Labrador Retriever, Golden Retriever, Cavalier King Charles Spaniel, Pug, and mixed breeds. Look for: trainability, friendly temperament, moderate energy, and size appropriate for your living situation. Consider adopting an adult dog - temperament is already known, and they\'re often calmer than puppies. Research breeds thoroughly, meet individual dogs, and honestly assess your lifestyle, time, and commitment level.',
    relatedTopics: ['choosing a breed', 'adoption', 'lifestyle matching'],
  },
  {
    id: 'dog-age-calculator',
    category: 'General Care',
    question: 'How do I calculate my dog\'s age in human years?',
    answer: 'The old "multiply by 7" rule is inaccurate. Dogs age faster in their early years. A more accurate method: the first year equals about 15 human years, second year adds 9 years, then each year after is about 4-5 human years. However, this varies by size - small dogs live longer and age slower than large breeds. A 10-year-old small dog might be equivalent to 56 human years, while a large dog might be 66.',
    relatedTopics: ['senior dog care', 'life stages', 'aging'],
  },
];
