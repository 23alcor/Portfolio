// Ralph Customs: the window tinting business Ralph ran from May 2023 to Aug 2025.
// Content for the /ralph-customs/ page, which recreates the original Squarespace
// site (ralphcustoms.com, expired Oct 2025). Text comes from that site with a few
// typos fixed. Phone, email and street address are left out on purpose: the
// business is closed.
// Keep this file plain data (no JSX, no imports) so the build step can load it.

export const ralphCustomsPage = {
  path: "/ralph-customs/",
  title: "Ralph Customs (2023–2025) | Ralphael Alcober",
  ogTitle: "Ralph Customs: Westchester Window Tinting",
  description:
    "An archived recreation of ralphcustoms.com, the mobile window tinting business Ralphael Alcober ran in Westchester, NY from May 2023 to August 2025.",
  ogImage: "/ralph-customs/og.jpg",
  fontsHref:
    "https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=Space+Mono:wght@400;700&display=swap",
};

export const archive = {
  period: "May 2023 – Aug 2025",
  note: "Ralph Customs ran from May 2023 to August 2025 and is no longer taking bookings.",
};

export const nav = [
  { label: "Percentages", href: "#percentages" },
  { label: "Tints", href: "#tints" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  kicker: "Westchester Window Tinting",
  title: "Ralph Customs",
  subtitle: "Mobile Tint Service, NY",
  image: "/ralph-customs/hero.jpg",
  credit: {
    name: "Roberto Nickson",
    href: "https://unsplash.com/photos/zu95jkyrGtw",
  },
};

export const filmBrand = [
  {
    title: "Tint Brand",
    body: "Every job used Geoshield window film, from an international wholesale distributor of professional-grade film.",
  },
  {
    title: "C2 Carbon",
    body: "Geoshield C2 is a nano carbon film that looks and performs like a premium film at a mid-range price. C2 is 1.5 mil, 2-ply.",
  },
  {
    title: "Pro Nano Ceramic",
    body: "Pro-Nano Ceramic fuses color-stable polyester with nano ceramic particles, for outstanding infrared heat rejection without giving up looks.",
  },
];

export const serviceArea = {
  dropOff: ["Appointments only***", "Westchester County", "Yonkers, NY"],
  mobile: [
    [
      "Yonkers",
      "Hartsdale",
      "White Plains",
      "New Rochelle",
      "Mt. Vernon",
      "Dobbs Ferry",
      "Bronxville",
      "Ossining",
      "Mt. Kisco",
      "Yorktown",
      "Peekskill",
    ],
    [
      "Greenwich",
      "Stamford",
      "New Canaan",
      "Long Island",
      "Nanuet",
      "New City",
      "Englewood",
    ],
  ],
  note: "*Distance is subject to additional travel fees",
  photo: {
    src: "/ralph-customs/20-sides-3.jpg",
    alt: "Black sedan with fresh 20% tint, parked next to a C2 Carbon sign",
  },
};

export const shades = [
  {
    id: "5",
    label: "5%",
    title: "5% Tint",
    text: "5% is perfect for those that want complete privacy in their vehicles. For total privacy, the windshield would need to be tinted as well to block light from entering the car.",
    photos: [
      { src: "/ralph-customs/5-sides-20-windshield.jpg", caption: "5% sides with a 20% windshield" },
      { src: "/ralph-customs/5-sides.jpg", caption: "5% sides" },
      { src: "/ralph-customs/5-inside.jpg", caption: "Inside of a 5% side window" },
    ],
  },
  {
    id: "20",
    label: "20%",
    title: "20% Tint",
    text: "20% is perfect for those that want privacy but aren't comfortable driving with dark tints at night.",
    photos: [
      { src: "/ralph-customs/20-sides-1.jpg", caption: "20% sides" },
      { src: "/ralph-customs/20-sides-2.jpg", caption: "20% sides" },
      { src: "/ralph-customs/20-front-sides.jpg", caption: "20% front side windows" },
      { src: "/ralph-customs/20-sides-3.jpg", caption: "20% sides" },
    ],
  },
  {
    id: "35",
    label: "35%",
    title: "35% Tint",
    text: "35% is perfect if you want some darkness in your windows while the inside stays visible.",
    photos: [
      { src: "/ralph-customs/35-sides-1.jpg", caption: "35% sides" },
      { src: "/ralph-customs/35-front-sides.jpg", caption: "35% front side windows" },
      { src: "/ralph-customs/35-inside.jpg", caption: "Inside of 35% tint" },
      { src: "/ralph-customs/35-sides-2.jpg", caption: "35% sides" },
      { src: "/ralph-customs/35-sides-3.jpg", caption: "35% sides" },
    ],
  },
  {
    id: "windshields",
    label: "Windshields",
    title: "Windshields",
    text: "Windshields matter for how dark the car looks, for heat rejection and for trim protection. A tinted windshield makes the entire car darker, even with 5% on every other window. On very bright days, 5% looks lighter and privacy is limited without windshield tint.",
    photos: [
      { src: "/ralph-customs/windshield-20-5-sides.jpg", caption: "20% windshield with 5% sides" },
      { src: "/ralph-customs/windshield-20-a.jpg", caption: "20% windshield" },
      { src: "/ralph-customs/windshield-20-b.jpg", caption: "20% windshield" },
      { src: "/ralph-customs/windshield-50.jpg", caption: "50% windshield" },
    ],
  },
];

export const pricing = {
  fullNote:
    "Full tint covers every window except the windshield, including the quarter windows and any small windows on the vehicle.",
  windshieldNote:
    "Windshield tint can go on over the registration and inspection stickers, or the inspection sticker can be removed and re-applied on top of the tint.",
  films: [
    {
      id: "carbon",
      lead: "C2",
      accent: "Carbon",
      tail: "Tints",
      classes: [
        {
          name: "Small sedans / coupes",
          full: "$160",
          windshield: "$80",
          other: [
            ["Two front windows", "$80"],
            ["Sides only", "$140"],
            ["Back & back sides", "$140"],
          ],
        },
        {
          name: "Sedans / SUVs",
          full: "$200",
          windshield: "$80",
          other: [
            ["Two front windows", "$80"],
            ["Sides only", "$160"],
            ["Back & back sides", "$160"],
          ],
        },
        {
          name: "Vans / trucks",
          full: "Contact for pricing",
          windshield: "$120+",
          other: [["Other windows", "Prices vary"]],
        },
      ],
    },
    {
      id: "ceramic",
      lead: "Pro Nano",
      accent: "Ceramic",
      tail: "Tints",
      classes: [
        {
          name: "Small sedans / coupes",
          full: "$240",
          windshield: "$180",
          other: [
            ["Two front windows", "$140"],
            ["Sides only", "$180"],
            ["Back & back sides", "$180"],
          ],
        },
        {
          name: "Sedans / SUVs",
          full: "$300",
          windshield: "$140",
          other: [
            ["Two front windows", "$140"],
            ["Sides only", "$220"],
            ["Back & back sides", "$220"],
          ],
        },
        {
          name: "Vans / trucks",
          full: "Contact for pricing",
          windshield: "$160+",
          other: [["Other windows", "Prices vary"]],
        },
      ],
    },
  ],
};

export const faqs = [
  {
    q: "What is really the big difference?",
    a: "The biggest difference between carbon and ceramic is that ceramic keeps your car's interior temperature more stable and less affected by the sun.",
  },
  {
    q: "Is ceramic going to make my car clear on the inside?",
    a: "A common misconception in the tint industry is that only ceramic is dark on the outside and clear on the inside. Ceramic is dark on the outside and clear on the inside, but carbon does the same at the same level. Ceramic is simply the highest quality of tint you can install on your vehicle.",
  },
  {
    q: "Why is ceramic a lot more expensive than carbon?",
    a: "Ceramic tint costs double per foot compared to carbon tint, and that material cost carries over into the price of the service.",
  },
  {
    q: "How long do tints last, and how do I maintain them?",
    a: "Window tint can last 10 years or more with proper care: don't roll the windows down for 3–4 days after getting your car tinted, and clean them with ammonia-free products.",
  },
  {
    q: "What tint brand is being put on my car?",
    a: "Geoshield, the best tint manufacturer on the market. They provide a lifetime warranty on the stability of their products.",
  },
];

export const about = {
  title: "Who We Are",
  badge: { src: "/ralph-customs/badge.png", alt: "Ralph Auto Tint badge logo" },
  paragraphs: [
    "Welcome to Ralph Auto Tint, where our passion for cars meets the art of window tinting. Founded and operated by Ralph, a true car enthusiast, we bring a personalized touch to every vehicle that crosses our path.",
    "At Ralph Auto Tint, we understand that your car is more than just a mode of transportation; it's an extension of your personality and style. That's why we're dedicated to providing top-quality window tinting services that not only enhance the look of your vehicle but also protect its interior and improve your driving experience.",
    "With years of experience and a keen eye for detail, Ralph takes pride in delivering exceptional results. From luxury sedans to rugged trucks, we treat every car like it's our own, ensuring precision and perfection in every tint job we undertake.",
    "Located in the heart of Westchester, we operate from a home-based workshop, allowing us to offer competitive pricing without compromising on quality. Our cozy setup means you'll receive personalized attention and expert advice tailored to your needs, whether you're looking to reduce glare, increase privacy, or enhance the aesthetics of your vehicle.",
    "At Ralph Auto Tint, we're not just in the business of tinting windows; we're in the business of building relationships. We strive to create a warm and welcoming atmosphere where customers feel valued and appreciated every step of the way. Your satisfaction is our ultimate goal, and we won't rest until you're thrilled with the results.",
    "So, whether you're a fellow car enthusiast looking to upgrade your ride or simply seeking professional tinting services you can trust, look no further than Ralph Auto Tint. Let us help you take your car to the next level with our passion, expertise, and dedication to excellence.",
  ],
};

export const quote = {
  intro:
    "Interested in getting work done on your vehicle? Fill in the following form to get a quote on the job and the available days and times for your appointment. You'll get a text back within 1–2 business days.",
  closedNote:
    "Bookings are closed. This form is part of the archived site and doesn't send anything.",
  policies: [
    {
      title: "Pre-appointment details",
      body: "Scheduling an appointment for carbon window tint work is free. Ceramic tint work or any mobile work requires an initial deposit to confirm the appointment. Ceramic mobile work only takes the ceramic deposit. The deposit comes off the total price of the job.",
      items: [
        ["Ceramic tint appointment", "$100"],
        ["Mobile tint appointment", "$50"],
      ],
    },
    {
      title: "Cancellation policies",
      body: "Deposits will be refunded if cancellation is within 2 days before the appointment.",
    },
    {
      title: "Payment policies",
      body: "Cash is preferred on site. Apple Cash, Zelle and some credit cards are also accepted. Deposits can be paid through Apple Cash or Zelle.",
    },
  ],
};

export const contact = {
  body: "Ralph Customs is closed, so the old phone line and email no longer take bookings. To reach me about anything else, use the contact section of my portfolio.",
};

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/ralph.tintz/" },
  { label: "TikTok", href: "https://www.tiktok.com/@ralphtints" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100093244027506" },
];
