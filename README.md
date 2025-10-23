# 🐾 TourPet - Complete Dog Care Web Application

A comprehensive web application for dog lovers, providing professional dog care services (sitting and walking) alongside an extensive knowledge base covering breeds, behavior, care tips, nutrition, and more.

## Features

### 📸 Image-Rich Experience
- **Hero Images**: Stunning hero banner with beautiful dog photography
- **Photo Gallery**: Dedicated gallery page with 30+ high-quality dog photos
- **Breed Photos**: Each breed profile includes a beautiful, breed-specific image
- **Service Images**: All services showcased with relevant dog photos
- **Testimonials with Photos**: Customer reviews featuring their dogs
- **Interactive Elements**: Hover effects and zoom animations on images

### 🏠 Dog Care Services
- **Dog Sitting**: Professional in-home or overnight care with flexible scheduling
- **Dog Walking**: Daily walks with customizable duration (30 or 60 minutes)
- **Easy Booking System**: User-friendly booking interface with calendar integration

### 📚 Comprehensive Knowledge Base

#### 🐕 Dog Breeds Encyclopedia
- Detailed profiles of 10+ popular breeds
- Information includes:
  - Temperament and personality traits
  - Size, origin, and lifespan
  - Exercise and grooming requirements
  - Training difficulty
  - Compatibility with children, other pets, and strangers
  - Care notes and health considerations
  - Interactive characteristics visualization

#### 🎯 Behavior Guide
- 12+ common dog behaviors explained
- Understanding body language and communication
- What behaviors mean and when to worry
- Practical tips for managing behaviors
- Categories: Communication, Social, Instinct, Problem, Training

#### 💙 Care Tips
- Grooming essentials (brushing, nail care, bathing)
- Exercise requirements and mental enrichment
- Training fundamentals
- Health monitoring and preventive care
- Safety guidelines (home and weather)
- Parasite prevention

#### 🍖 Nutrition Guide
- Complete feeding guidelines for puppies, adults, and seniors
- Toxic foods to avoid (chocolate, grapes, xylitol, etc.)
- Safe human foods for dogs
- Nutritional needs (protein, fats, carbs, vitamins)
- Special diets (weight management, allergies, homemade, raw)
- Hydration requirements

#### ❓ FAQ Section
- 20+ frequently asked questions
- Searchable and filterable by category
- Topics include:
  - General care and health
  - Training and behavior
  - Nutrition
  - Socialization
  - Puppy care
  - Senior dogs

#### 🔧 Interactive Tools
- **Dog Age Calculator**: Convert dog years to human years (accounts for size differences)
- **Calorie Calculator**: Determine daily calorie needs based on weight and activity level
- **Body Condition Guide**: Visual guide to assess if your dog is at a healthy weight
- **Quick Reference**: Vaccination schedules, vet visit frequency, emergency signs

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: Responsive design with mobile optimization

## Image Sources

All dog photos are sourced from [Unsplash](https://unsplash.com/), a free stock photo service with high-quality images. The images are loaded via Unsplash's API and optimized by Next.js Image component for best performance.

- **Hero Image**: Beautiful group shot of happy dogs
- **Gallery**: 30+ curated dog photos from various breeds and situations
- **Breed Images**: Breed-specific photos for accurate representation
- **Service Photos**: Contextual images showing dogs being cared for and walked

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tour-pet.git
cd tour-pet
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tour-pet/
├── app/                      # Next.js app directory
│   ├── breeds/              # Dog breeds encyclopedia (with photos!)
│   │   ├── [id]/           # Individual breed detail pages
│   │   └── page.tsx        # Breeds listing with images
│   ├── behavior/            # Behavior guide
│   ├── care/                # Care tips
│   ├── nutrition/           # Nutrition information
│   ├── faq/                 # FAQ section
│   ├── gallery/             # Photo gallery (30+ dog photos)
│   ├── services/            # Service pages with images
│   │   ├── booking/        # Booking form
│   │   └── page.tsx        # Services overview
│   ├── tools/               # Interactive calculators
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage (hero image, photo grid, testimonials)
│   └── globals.css          # Global styles
├── data/                     # Data files
│   ├── breeds.ts            # Dog breed information (with image URLs)
│   ├── behaviors.ts         # Behavior data
│   ├── care-tips.ts         # Care guidelines
│   ├── nutrition.ts         # Nutrition information
│   └── faqs.ts              # FAQ data
├── components/              # Reusable components
├── public/                  # Static assets
├── next.config.ts           # Next.js config (image domains configured)
└── README.md
```

## Data Overview

### Breeds Database
- 10 detailed breed profiles
- Comprehensive characteristics including energy level, affection, intelligence, playfulness, and shedding
- Compatibility information
- Detailed care notes

### Behaviors Database
- 12 common behaviors
- Detailed explanations of what each behavior means
- Practical "what to do" advice
- Warning signs
- Helpful tips

### Care Tips Database
- 12+ care guides covering all aspects of dog care
- Organized by category
- Tools and frequency information
- Important warnings

### Nutrition Database
- 14 comprehensive nutrition topics
- Safe and toxic foods lists
- Feeding schedules
- Portion guidelines

### FAQ Database
- 20+ common questions
- Expert answers
- Related topics for deeper exploration

## Features Highlights

- ✅ **50+ High-Quality Dog Photos** throughout the site
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fast page navigation with Next.js App Router
- ✅ Type-safe with TypeScript
- ✅ Modern, clean UI with Tailwind CSS
- ✅ **Optimized Image Loading** with Next.js Image component
- ✅ **Interactive Image Gallery** with hover effects
- ✅ Interactive calculators and tools
- ✅ Searchable and filterable content
- ✅ SEO-friendly
- ✅ Accessibility considerations
- ✅ **Hero images and photo galleries** on multiple pages

## Future Enhancements

- User authentication and profiles
- Backend integration for booking management
- Payment processing
- Real-time availability calendar
- User reviews and ratings
- Photo gallery for each service
- Blog section with dog care articles
- Email notifications
- Admin dashboard
- Mobile app

## Contributing

This is a demonstration project for a dog care service website. Feel free to fork and customize for your own needs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support:
- Email: info@tour.pet
- WeChat: TourPet
- Line: TourPet
- Hours: Mon-Sun 7am-9pm

---

**Built with ❤️ for pet lovers**
