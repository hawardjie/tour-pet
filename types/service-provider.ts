export interface ServiceProvider {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  profileImage?: string;
  bio: string;
  location: {
    city: string;
    state: string;
    zipCode: string;
    address?: string;
    lat?: number;
    lng?: number;
  };
  services: ServiceOffering[];
  serviceArea: ServiceArea;
  availability: Availability;
  rating: number;
  reviewCount: number;
  verified: boolean;
  joinedDate: string;
}

export interface ServiceOffering {
  type: 'dog-sitting' | 'dog-walking' | 'boarding' | 'daycare';
  enabled: boolean;
  pricing: {
    hourly?: number;
    daily?: number;
    weekly?: number;
  };
  description: string;
  maxDogs: number;
  acceptedSizes: ('small' | 'medium' | 'large' | 'giant')[];
}

export interface ServiceArea {
  radiusMiles?: number[]; // e.g., [2, 5, 10, 15, 20]
  allowDropOff: boolean;
  dropOffAddress?: string;
  specificZipCodes?: string[];
  specificNeighborhoods?: string[];
}

export interface Availability {
  schedule: {
    [key: string]: { // day of week
      available: boolean;
      hours?: { start: string; end: string }[];
    };
  };
  blockedDates?: string[]; // ISO dates
}

export interface Review {
  id: string;
  providerId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
}

export interface ServiceRequest {
  id: string;
  userId: string;
  providerId: string;
  serviceType: string;
  startDate: string;
  endDate: string;
  numberOfDogs: number;
  dogDetails: {
    name: string;
    breed: string;
    size: string;
    age: number;
    specialNeeds?: string;
  }[];
  location: 'provider' | 'customer';
  status: 'pending' | 'accepted' | 'declined' | 'completed' | 'cancelled';
  totalPrice: number;
  message?: string;
}
