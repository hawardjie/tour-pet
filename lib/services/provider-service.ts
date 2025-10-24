export interface ServiceOffered {
  type: 'sitting' | 'walking';
  price: number;
  description: string;
}

export interface Provider {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  city: string;
  zipCode: string;
  services: ServiceOffered[];
  serviceRadius: number; // in miles
  offersDropOff: boolean;
  availability: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  rating: number;
  reviewCount: number;
  verified: boolean;
  imageUrl?: string;
  createdAt: string;
}

const STORAGE_KEY = 'tourpet_providers';

// Sample provider data
const sampleProviders: Provider[] = [
  {
    id: '1',
    userId: 'sample1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '(555) 123-4567',
    bio: 'Experienced dog lover with 10+ years of pet care. I treat every dog like my own and ensure they get plenty of exercise and attention.',
    location: 'Downtown',
    city: 'San Francisco',
    zipCode: '94102',
    services: [
      { type: 'sitting', price: 45, description: 'Full day dog sitting with playtime and walks' },
      { type: 'walking', price: 25, description: '30-minute walks in your neighborhood' },
    ],
    serviceRadius: 5,
    offersDropOff: true,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false,
    },
    rating: 4.9,
    reviewCount: 127,
    verified: true,
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    userId: 'sample2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    phone: '(555) 234-5678',
    bio: 'Professional dog walker and trainer. Specializing in high-energy breeds and behavioral training during walks.',
    location: 'Mission District',
    city: 'San Francisco',
    zipCode: '94110',
    services: [
      { type: 'walking', price: 30, description: '45-minute energetic walks with training' },
    ],
    serviceRadius: 10,
    offersDropOff: false,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    },
    rating: 4.8,
    reviewCount: 89,
    verified: true,
    createdAt: '2024-02-20T10:00:00Z',
  },
  {
    id: '3',
    userId: 'sample3',
    name: 'Emma Rodriguez',
    email: 'emma@example.com',
    phone: '(555) 345-6789',
    bio: 'Stay-at-home pet sitter with a large backyard. Perfect for dogs who need space to run and play!',
    location: 'Sunset District',
    city: 'San Francisco',
    zipCode: '94122',
    services: [
      { type: 'sitting', price: 40, description: 'Overnight stays with backyard access' },
      { type: 'walking', price: 20, description: 'Gentle walks for senior dogs' },
    ],
    serviceRadius: 15,
    offersDropOff: true,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: true,
    },
    rating: 5.0,
    reviewCount: 203,
    verified: true,
    createdAt: '2023-11-10T10:00:00Z',
  },
  {
    id: '4',
    userId: 'sample4',
    name: 'David Park',
    email: 'david@example.com',
    phone: '(555) 456-7890',
    bio: 'Former veterinary assistant with expertise in special needs dogs. CPR and first aid certified.',
    location: 'Marina District',
    city: 'San Francisco',
    zipCode: '94123',
    services: [
      { type: 'sitting', price: 55, description: 'Premium care for special needs dogs' },
      { type: 'walking', price: 35, description: 'Therapeutic walks with medication admin' },
    ],
    serviceRadius: 5,
    offersDropOff: false,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: true,
    },
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    createdAt: '2024-03-05T10:00:00Z',
  },
  {
    id: '5',
    userId: 'sample5',
    name: 'Lisa Thompson',
    email: 'lisa@example.com',
    phone: '(555) 567-8901',
    bio: 'Dog boarding specialist with multiple play areas. Your pup will have a vacation while you are away!',
    location: 'Richmond District',
    city: 'San Francisco',
    zipCode: '94121',
    services: [
      { type: 'sitting', price: 50, description: 'Multi-day boarding with socialization' },
    ],
    serviceRadius: 20,
    offersDropOff: true,
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: true,
    },
    rating: 4.7,
    reviewCount: 98,
    verified: true,
    createdAt: '2024-01-20T10:00:00Z',
  },
];

// Initialize localStorage with sample data if empty
export function initializeProviders() {
  if (typeof window === 'undefined') return;

  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleProviders));
  }
}

// Get all providers
export function getAllProviders(): Provider[] {
  if (typeof window === 'undefined') return [];

  initializeProviders();
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Get provider by ID
export function getProviderById(id: string): Provider | null {
  const providers = getAllProviders();
  return providers.find(p => p.id === id) || null;
}

// Save a new provider
export function saveProvider(provider: Omit<Provider, 'id' | 'createdAt' | 'rating' | 'reviewCount'>): Provider {
  const providers = getAllProviders();

  const newProvider: Provider = {
    ...provider,
    id: Date.now().toString(),
    rating: 5.0,
    reviewCount: 0,
    createdAt: new Date().toISOString(),
  };

  providers.push(newProvider);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(providers));

  return newProvider;
}

// Update existing provider
export function updateProvider(id: string, updates: Partial<Provider>): Provider | null {
  const providers = getAllProviders();
  const index = providers.findIndex(p => p.id === id);

  if (index === -1) return null;

  providers[index] = { ...providers[index], ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(providers));

  return providers[index];
}

// Get provider by user ID
export function getProviderByUserId(userId: string): Provider | null {
  const providers = getAllProviders();
  return providers.find(p => p.userId === userId) || null;
}

// Search providers
export interface SearchFilters {
  location?: string;
  zipCode?: string;
  serviceType?: 'sitting' | 'walking';
  maxPrice?: number;
  minPrice?: number;
  maxDistance?: number;
}

export function searchProviders(filters: SearchFilters): Provider[] {
  let providers = getAllProviders();

  if (filters.location) {
    const searchTerm = filters.location.toLowerCase();
    providers = providers.filter(p =>
      p.city.toLowerCase().includes(searchTerm) ||
      p.location.toLowerCase().includes(searchTerm) ||
      p.zipCode.includes(searchTerm)
    );
  }

  if (filters.zipCode) {
    providers = providers.filter(p => p.zipCode === filters.zipCode);
  }

  if (filters.serviceType) {
    providers = providers.filter(p =>
      p.services.some(s => s.type === filters.serviceType)
    );
  }

  if (filters.maxPrice !== undefined || filters.minPrice !== undefined) {
    providers = providers.filter(p => {
      const prices = p.services.map(s => s.price);
      const minServicePrice = Math.min(...prices);
      const maxServicePrice = Math.max(...prices);

      if (filters.minPrice !== undefined && maxServicePrice < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice !== undefined && minServicePrice > filters.maxPrice) {
        return false;
      }
      return true;
    });
  }

  if (filters.maxDistance !== undefined) {
    providers = providers.filter(p => p.serviceRadius >= filters.maxDistance!);
  }

  return providers;
}

// Get providers sorted by rating
export function getTopRatedProviders(limit: number = 5): Provider[] {
  const providers = getAllProviders();
  return providers
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}
