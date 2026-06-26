export interface FoundationalChoice {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface Intervention {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export interface StrategicGoal {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl?: string;
  type: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  gender: 'Boy' | 'Girl';
  region: string;
  hobbies: string[];
  photo: string;
  description: string;
  birthday: string;
  isSponsored: boolean;
}

export interface DonationCause {
  id: string;
  title: string;
  description: string;
  icon: string;
}
