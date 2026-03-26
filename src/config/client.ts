export const client = {
  // Business Details
  name: "GAF Homecare",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in London.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07760 165302",
  email: "",
  website: "",

  // Location
  address: "London",
  city: "London",
  county: "",
  postcode: "",
  basedIn: "London",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Julie G.", rating: 5, text: "Just had GAF Homecare finish our garden project in London. What a difference! The team were lovely to have around — respectful of our property, cleaned up after themselves, and produced an amazing result.", date: "3 months ago" },
    { name: "Georgia H.", rating: 5, text: "Brilliant job by GAF Homecare. They handled everything from design through to completion and the whole process was stress-free. The lawn, planting, and fencing all look superb. Worth every penny.", date: "6 months ago" },
    { name: "Gary Hughes", rating: 5, text: "We found GAF Homecare online and after reading about their work, decided to give them a call. So glad we did — the garden has been completely transformed. Professional from start to finish.", date: "3 months ago" },
    { name: "Beth K.", rating: 5, text: "Really impressed with GAF Homecare. They came out, assessed what we needed, gave us honest advice about what would work best, and then delivered a fantastic result. No hard sell, just good honest work.", date: "a month ago" },
    { name: "Rebecca W.", rating: 5, text: "Had a wonderful experience with GAF Homecare. From the design phase right through to the final clean-up, everything was handled brilliantly. The new patio and planting scheme look amazing.", date: "4 months ago" },
    { name: "Stuart Taylor", rating: 5, text: "We've used several landscapers over the years and GAF Homecare are by far the best. Quality materials, expert installation, and they genuinely care about getting it right. Our patio and borders look fantastic.", date: "a year ago" },
    { name: "Ben B.", rating: 5, text: "Contacted GAF Homecare after a recommendation from a friend and I can see why they were so highly rated. Excellent communication, fair price, and the garden looks incredible. Thank you!", date: "2 years ago" },
    { name: "Rosie Kelly", rating: 5, text: "Hired GAF Homecare for a full garden redesign and the results speak for themselves. The team worked hard, kept us informed throughout, and left the site spotless each day. It's like having a brand new garden. Highly recommend to anyone in London.", date: "2 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "GAF Homecare | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};
