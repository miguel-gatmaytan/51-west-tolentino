/**
 * Central place for site copy and structured content.
 *
 * NOTE: Contact details, exact distances, and room counts below are
 * placeholders written for a small inn in Tolentino West, Tagaytay City.
 * Swap them out for the real details before publishing.
 */

export const site = {
  name: '51 West Tolentino Inn',
  shortName: '51 West',
  legalName: '51 West Tolentino Inn',
  tagline: 'A cool-air basecamp on Tagaytay’s western ridge',
  description:
    'A small, family-run inn in Tolentino West, Tagaytay City — simple, comfortable rooms a short ride from Taal’s viewpoints, parks, and food-trip favourites.',
  address: {
    line1: 'Tolentino West',
    line2: 'Tagaytay City, Cavite 4120',
    country: 'Philippines',
  },
  phone: '+63 900 000 0000',
  phoneDisplay: '+63 900 000 0000',
  email: 'stay@51westtolentino.example',
  facebookHandle: '51WestTolentinoInn',
  facebookUrl: 'https://www.facebook.com/51WestTolentinoInn/',
  agodaUrl:
    'https://www.agoda.com/51-west-tolentino-inn-tagaytay/hotel/tagaytay-ph.html',
  mapQuery: 'Tolentino West, Tagaytay City, Cavite, Philippines',
  mapEmbedSrc:
    'https://maps.google.com/maps?q=Tolentino%20West%2C%20Tagaytay%20City%2C%20Cavite%2C%20Philippines&t=&z=14&ie=UTF8&iwloc=&output=embed',
  frontDeskHours: '24 hours — someone is always on duty',
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/stay', label: 'Rooms & Amenities' },
  { to: '/location', label: "What's Nearby" },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const stats = [
  { value: '~640m', label: 'Above sea level' },
  { value: '1.5–2 hrs', label: 'From Metro Manila' },
  { value: 'Tolentino West', label: 'Tagaytay City, Cavite' },
  { value: '10–20 min', label: 'To most viewpoints' },
];

export const values = [
  {
    title: 'Comfortable, no-fuss rooms',
    body:
      'Clean linens, hot showers, and a quiet place to warm up after a day on the ridge. Nothing fancy — just done properly.',
  },
  {
    title: 'A ridge-side location',
    body:
      'Tucked into Tolentino West, an easy reach of Tagaytay’s viewpoints, parks, and the Aguinaldo Highway corridor.',
  },
  {
    title: 'Hospitality that knows the area',
    body:
      'We’re a small, family-run operation — ask us where to catch the best sunset, or which carinderia does the best bulalo.',
  },
];

export const amenities = [
  { icon: 'wifi', label: 'Free Wi-Fi throughout' },
  { icon: 'snow', label: 'Air-conditioned rooms' },
  { icon: 'parking', label: 'Free private parking' },
  { icon: 'clock', label: '24-hour front desk' },
  { icon: 'leaf', label: 'Garden & outdoor seating' },
  { icon: 'shower', label: 'Hot & cold shower' },
  { icon: 'tv', label: 'Flat-screen TV' },
  { icon: 'broom', label: 'Daily housekeeping' },
  { icon: 'map', label: 'Local tips & directions' },
  { icon: 'noSmoking', label: 'Non-smoking rooms available' },
];

export const rooms = [
  {
    name: 'Standard Double',
    sleeps: 'Sleeps 2',
    bed: '1 queen or double bed',
    description:
      'A snug room for couples or solo travellers, with air-conditioning, a private hot-shower bathroom, and a small work desk — everything you need after a day exploring the ridge.',
    features: ['Air-conditioning', 'Private bathroom', 'Hot shower', 'Flat-screen TV', 'Free Wi-Fi'],
  },
  {
    name: 'Twin Room',
    sleeps: 'Sleeps 2',
    bed: '2 single beds',
    description:
      'Two separate beds make this a comfortable pick for friends, colleagues, or siblings travelling together — same comforts, just split down the middle.',
    features: ['Air-conditioning', 'Private bathroom', 'Hot shower', 'Flat-screen TV', 'Free Wi-Fi'],
  },
  {
    name: 'Family Room',
    sleeps: 'Sleeps up to 4',
    bed: '1 double bed + 2 singles (configurations vary)',
    description:
      'A bit more breathing room for families or small groups, with flexible bedding arrangements. Ask us about connecting rooms if your group is larger.',
    features: ['Air-conditioning', 'Private bathroom', 'Hot shower', 'Flat-screen TV', 'Free Wi-Fi', 'Extra bedding on request'],
  },
];

export const nearby = [
  {
    category: 'Viewpoints & nature',
    places: [
      {
        name: "People's Park in the Sky",
        blurb: 'Sweeping views over Taal Lake and the surrounding ridgelines from one of the highest points in town.',
        distance: '~15–20 min drive',
      },
      {
        name: 'Picnic Grove',
        blurb: 'Pine-lined park with viewing decks, picnic huts, ziplines, and horseback rides along the ridge.',
        distance: '~10–15 min drive',
      },
    ],
  },
  {
    category: 'Family & things to do',
    places: [
      {
        name: 'Sky Ranch Tagaytay',
        blurb: 'A small amusement park with a ridge-top Ferris wheel and views over the caldera.',
        distance: '~10 min drive',
      },
    ],
  },
  {
    category: 'Food & coffee',
    places: [
      {
        name: 'Mahogany Market',
        blurb: 'Stalls selling local produce, snacks, and souvenirs — a good stop for fresh fruit and pasalubong.',
        distance: '~10 min drive',
      },
      {
        name: 'Tagaytay–Calamba Road eateries',
        blurb: 'A strip of restaurants and cafés serving Tagaytay favourites like bulalo, tawilis, and fresh-brewed coffee.',
        distance: '~5–10 min drive',
      },
    ],
  },
  {
    category: 'Shopping & errands',
    places: [
      {
        name: 'Ayala Malls Serin',
        blurb: 'Shops, a supermarket, and dining options for everyday essentials or a casual meal.',
        distance: '~5–10 min drive',
      },
      {
        name: 'Olivarez Plaza area',
        blurb: 'A well-known landmark along the highway, handy for transport connections and quick stops.',
        distance: '~5–10 min drive',
      },
    ],
  },
];

export const gettingThere = [
  {
    mode: 'By car',
    details:
      'From Metro Manila, take the Sta. Rosa–Tagaytay Road or the Emilio Aguinaldo Highway through Silang. The drive takes roughly 1.5–2 hours outside of peak traffic.',
  },
  {
    mode: 'By bus',
    details:
      'Provincial buses to Tagaytay run from terminals around Pasay/Buendia and Coastal Mall. Get off near the Olivarez Plaza / Tolentino junction, then take a short tricycle or rideshare to the inn.',
  },
  {
    mode: 'By rideshare or taxi',
    details:
      'Grab and local taxis operate throughout Tagaytay. Tricycles ("trikes") are the easiest way to cover short distances around town once you’ve arrived.',
  },
];

export const faqs = [
  {
    q: 'What time are check-in and check-out?',
    a: 'Standard check-in is from 2:00 PM and check-out is by 12:00 NN. If you’re arriving early or need a later check-out, let us know in advance — we’ll do our best to accommodate you depending on availability.',
  },
  {
    q: 'Is breakfast included?',
    a: 'Breakfast isn’t included in the room rate, but there are cafés and local eateries just a short walk or drive away. Ask our front desk for recommendations — we’re happy to point you to our favourites.',
  },
  {
    q: 'Do you have parking?',
    a: 'Yes — free private parking is available on-site for registered guests.',
  },
  {
    q: 'Is Wi-Fi available?',
    a: 'Yes, free Wi-Fi is available in all rooms and common areas.',
  },
  {
    q: 'Can I book directly instead of through a travel site?',
    a: 'Yes. Message us on Facebook, call or email us, or use the contact form on this site. We’ll confirm availability and rates directly — no booking fees.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'If you booked through a third-party travel site, that platform’s cancellation terms apply. For direct bookings, please get in touch with us as early as possible if your plans change and we’ll work with you.',
  },
  {
    q: 'Do you allow pets?',
    a: 'We’re generally not set up for pets, but reach out if you have a service animal or a special circumstance and we’ll see what we can do.',
  },
  {
    q: 'Is smoking allowed?',
    a: 'Rooms are non-smoking. Outdoor and garden areas are available for guests who smoke.',
  },
  {
    q: 'What should I pack?',
    a: 'Tagaytay sits on a ridge and is noticeably cooler than Manila, especially in the evenings and early mornings — a light jacket or sweater goes a long way.',
  },
  {
    q: 'Do you accept walk-in guests?',
    a: 'Walk-ins are welcome subject to availability, but we recommend calling ahead — especially on weekends, holidays, and during the cooler months when Tagaytay gets busy.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Cash is accepted on arrival. Get in touch before your stay if you’d like to ask about other payment options.',
  },
];
