import { FoundationalChoice, Intervention, StrategicGoal, Partner, FAQItem, ChildProfile, DonationCause } from './types';

export const FOUNDATIONAL_CHOICES: FoundationalChoice[] = [
  {
    id: 'christ-centered',
    title: 'Christ-Centered',
    subtitle: 'Faith-Driven Foundation',
    description: "Jesus Christ is at the core of Compassion's ministry. His life and teachings shape our programs, reflecting the spiritual commitments of our staff and guiding how we love people and respect communities.",
    iconName: 'cross',
  },
  {
    id: 'child-focused',
    title: 'Child-Focused',
    subtitle: 'Individual Care',
    description: "Child development, as per Compassion's program, is centered on the individual child. Each participant receives the holistic care they deserve to realize their full, God-created potential. A careful blend of physical, social, economic, and spiritual care is essential for a child to fully mature.",
    iconName: 'user',
  },
  {
    id: 'church-driven',
    title: 'Church-Driven',
    subtitle: 'Indigenous Partnerships',
    description: "Compassion partners with indigenous local churches for effective child development. We believe that the strategic placement of local churches positions them best to address the holistic needs of children in their communities, delivering life-changing care.",
    iconName: 'church',
  }
];

export const INTERVENTIONS: Intervention[] = [
  {
    id: 'education',
    title: 'Primary & Secondary Education',
    image: '/assets/about-us-2.png',
    category: 'Education Support',
    description: 'Providing tuition, textbooks, uniforms, and learning resources to children across underserved Ghanaian communities.'
  },
  {
    id: 'health',
    title: 'Holistic Pediatric Healthcare',
    image: '/assets/hero-3.webp',
    category: 'Health & Wellness',
    description: 'Regular health screenings, immunizations, essential dental checkups, and immediate medical treatment for emergency illnesses.'
  },
  {
    id: 'water-sanitation',
    title: 'Clean WASH Water Initiatives',
    image: '/assets/hero-2.jpeg',
    category: 'Clean Water',
    description: 'Installing borehole wells and modern handwashing facilities to secure pure drinking water and block sanitation-related illnesses.'
  },
  {
    id: 'nutrition',
    title: 'Nutritious Dietary Support',
    image: '/assets/difficult-decisions-delivery.jpg',
    category: 'Nutritional Care',
    description: 'Distributing balanced food packages and micro-nutrient rich meals to children showing signs of developmental malnutrition.'
  },
  {
    id: 'vocational',
    title: 'Youth Livelihood Training',
    image: '/assets/human-trafficking-labor.jpg',
    category: 'Skills Training',
    description: 'Equipping older youth with critical vocational skills like computing, tailoring, carpentry, and small enterprise management.'
  },
  {
    id: 'disaster',
    title: 'Emergency Community Relief',
    image: '/assets/sponsor-gift-family-store.jpg',
    category: 'Emergency Response',
    description: 'Providing fast response relief support, shelter aids, and emotional counseling to families struck by sudden climate floods.'
  }
];

export const STRATEGIC_GOALS: StrategicGoal[] = [
  {
    id: 'youth',
    title: 'Youth as Change Leaders',
    description: 'Fulfilled Christian Youth who are empowered and act as agents of change in local, regional, and global contexts.',
    image: '/assets/strategic-goal-youth.webp'
  },
  {
    id: 'families',
    title: 'Families That Nurture Potential',
    description: 'Thriving and Resilient Families that collaborate with church partners, communities, and other stakeholders to enable youth to achieve their God-given potential.',
    image: '/assets/strategic-goal-families.jpg'
  },
  {
    id: 'churches',
    title: 'Churches Delivering Impact',
    description: 'Resourceful Church Partners who deliver quality, timely, and context-appropriate interventions to help youth and children realize their God-given potential.',
    image: '/assets/strategic-goal-churches.jpg'
  }
];

export const PARTNERS: Partner[] = [
  { id: 'awana', name: 'Awana International', type: 'Ministry Partner' },
  { id: 'hopespring', name: 'Hopespring Community', type: 'Community Partner' },
  { id: 'chalmers', name: 'The Chalmers Center', type: 'Economic Training' },
  { id: 'sanctuary', name: 'Sanctuary for Children', type: 'Protection Partner' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'regions',
    question: 'In which regions of Ghana does Compassion International operate?',
    answer: 'Compassion International Ghana currently operates in multiple areas, partnering with over 400 local evangelical churches in the Greater Accra, Eastern, Volta, Central, Ashanti, and Western regions to offer holistic developmental support directly to communities.'
  },
  {
    id: 'support',
    question: 'How can someone support the work of Compassion International Ghana?',
    answer: 'You can support our mission by sponsoring a specific Ghanaian child, making a targeted one-time or recurring general donation to critical areas (like healthcare, water filters, or education), partnering as a local church, or sharing our stories on social media.'
  },
  {
    id: 'sponsorship',
    question: 'How does child sponsorship work and what exactly does it provide?',
    answer: 'Sponsorship establishes a direct connection between you and a child in need. Your monthly sponsorship contribution of $43 provides them with critical, localized benefits including academic tuition support, nutritional food, medical screenings, social mentoring, and personal character development under local church supervision.'
  },
  {
    id: 'long-term',
    question: 'What are the long-term strategic goals of Compassion International Ghana?',
    answer: 'Our main strategic goal is to reach and transform the lives of 150,000 children and youth in poverty-stricken communities across Ghana by the year 2030, empowering them with skills, faith, and physical well-being to achieve self-reliance and community impact.'
  }
];

export const CHILD_PROFILES: ChildProfile[] = [
  {
    id: 'c-01',
    name: 'Kofi',
    age: 6,
    gender: 'Boy',
    region: 'Central Region',
    hobbies: ['Soccer', 'Drawing', 'Running'],
    photo: '/assets/strategic-goal-families.jpg',
    description: 'Kofi is a bright young boy who loves playing soccer with his neighborhood friends. He wants to be a high school teacher when he grows up.',
    birthday: 'October 14',
    isSponsored: false
  },
  {
    id: 'c-02',
    name: 'Ama',
    age: 8,
    gender: 'Girl',
    region: 'Eastern Region',
    hobbies: ['Singing', 'Jump rope', 'Reading'],
    photo: '/assets/strategic-goal-youth.webp',
    description: 'Ama is highly creative, with a beautiful singing voice. She attends her local Sunday school regularly and dreams of becoming a pediatrician.',
    birthday: 'June 22',
    isSponsored: false
  },
  {
    id: 'c-03',
    name: 'Kwabena',
    age: 5,
    gender: 'Boy',
    region: 'Volta Region',
    hobbies: ['Storytelling', 'Drawing', 'Gardening'],
    photo: '/assets/about-us-1.jpg',
    description: 'Kwabena is a quiet boy who is very curious about nature. He enjoys drawing plants and animals and loves helping his grandmother in the garden.',
    birthday: 'December 05',
    isSponsored: false
  },
  {
    id: 'c-04',
    name: 'Abena',
    age: 7,
    gender: 'Girl',
    region: 'Central Region',
    hobbies: ['Dancing', 'Writing', 'Math games'],
    photo: '/assets/sponsor-gift-story-header.jpg',
    description: 'Abena is incredibly energetic and loves cultural dance. She excels in mathematics and wants to build houses as a civil engineer one day.',
    birthday: 'March 18',
    isSponsored: false
  },
  {
    id: 'c-05',
    name: 'Yaw',
    age: 9,
    gender: 'Boy',
    region: 'Ashanti Region',
    hobbies: ['Mathematics', 'Building blocks', 'Soccer'],
    photo: '/assets/difficult-decisions-header.jpg',
    description: 'Yaw is a natural leader and team player. He is the top of his class in arithmetic and hopes to work in computing and technology.',
    birthday: 'August 30',
    isSponsored: false
  },
  {
    id: 'c-06',
    name: 'Akosua',
    age: 6,
    gender: 'Girl',
    region: 'Volta Region',
    hobbies: ['Crafts', 'Reading', 'Singing'],
    photo: '/assets/human-trafficking-child.jpg',
    description: 'Akosua is soft-spoken but loves organizing craft games. She reads books voraciously and wants to write children stories in the future.',
    birthday: 'January 11',
    isSponsored: false
  }
];

export const DONATION_CAUSES: DonationCause[] = [
  {
    id: 'general',
    title: 'Where Most Needed',
    description: 'Provide flexible funding that goes directly to addressing the most immediate and critical needs of children.',
    icon: 'heart'
  },
  {
    id: 'water',
    title: 'Clean Water & Boreholes',
    description: 'Fund clean water wells, household water filter packages, and handwashing setups in rural villages.',
    icon: 'droplets'
  },
  {
    id: 'medical',
    title: 'Emergency Medical Care',
    description: 'Fund critical operations, hospital bills, physical therapy, and life-saving pediatric medicine.',
    icon: 'activity'
  },
  {
    id: 'education',
    title: 'Higher Education & Vocational',
    description: 'Provide vocational computer training, secondary scholarships, and tools for business startups.',
    icon: 'book-open'
  }
];
