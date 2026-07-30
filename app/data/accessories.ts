export type Accessory = {
  id: string;
  name: string;
  description: string;
  images: string[];
  placeholder?: boolean;
};

export type AccessoryGroup = {
  id: string;
  name: string;
  description: string;
  products: Accessory[];
};

const laptopPlaceholder = "/accessories/laptop-essential-placeholder.svg";

export const accessoryGroups: AccessoryGroup[] = [
  {
    id: "creator-support",
    name: "Creator Support & Gimbals",
    description: "Tracking tripods and stabilisers for hands-free recording, live sessions and mobile content.",
    products: [
      {
        id: "cl12-tracking-tripod",
        name: "CL12 / CL12-P Auto Face Tracking Tripod",
        description: "Portable auto face-tracking tripod for mobile content and hands-free recording.",
        images: ["/accessories/auto-face-tracking-tripod-cl12.svg"],
      },
      {
        id: "c17-ai-gimbal",
        name: "C17 AI Face Tracking Quadrapod Gimbal",
        description: "Multifunctional AI tracking gimbal with an adjustable quadrapod base.",
        images: ["/accessories/c17-ai-face-tracking-gimbal.svg"],
      },
      {
        id: "p05-desktop-gimbal",
        name: "P05 Auto Face Tracking Desktop Gimbal",
        description: "Compact 360° desktop tracker with gesture control and colourful accent lighting.",
        images: [
          "/accessories/p05-desktop-gimbal.svg",
          "/accessories/p05-desktop-gimbal-box.svg",
        ],
      },
      {
        id: "q16-tracking-tripod",
        name: "Q16 Smart Tracking Tripod",
        description: "One-click folding smart tripod designed for steady mobile recording.",
        images: ["/accessories/q16-smart-tracking-tripod.svg"],
      },
    ],
  },
  {
    id: "creator-lighting",
    name: "Creator Lighting",
    description: "Portable lighting for livestreams, product photography, video calls and beauty content.",
    products: [
      {
        id: "rgb-ring-fill-light",
        name: "RGB Ring Fill Light",
        description: "Colour-changing RGB fill light with a central phone holder for mobile shoots.",
        images: ["/accessories/rgb-ring-fill-light.svg"],
      },
      {
        id: "rl24a-beauty-lamp",
        name: "RL-24A LED Beauty Lamp",
        description: "Large soft LED panel with adjustable brightness and colour-temperature modes.",
        images: [
          "/accessories/rl-24a-led-beauty-lamp.svg",
          "/accessories/rl-24a-led-beauty-lamp-box.svg",
        ],
      },
      {
        id: "zgrl02-square-light",
        name: "ZGRL-02 Photographic Square Light",
        description: "Dimmable square light with a built-in phone holder for livestreaming and photography.",
        images: ["/accessories/zgrl-02-square-light.svg"],
      },
    ],
  },
  {
    id: "storage-connectivity",
    name: "Storage & Connectivity",
    description: "Portable storage, SSD enclosures and multi-port adapters for a more capable workspace.",
    products: [
      {
        id: "wd-elements-drive",
        name: "WD Elements Portable External Drive",
        description: "Compact external storage for backups, transfers and keeping important files close.",
        images: ["/accessories/wd-elements-portable-drive.svg"],
      },
      {
        id: "m2-ssd-case",
        name: "M.2 SSD External Case",
        description: "Portable enclosure that turns a compatible M.2 SSD into an external drive.",
        images: ["/accessories/m2-ssd-external-case.svg"],
      },
      {
        id: "type-c-hub",
        name: "Type-C to HDTV 8-in-1 Hub",
        description: "Multi-port USB-C hub with display, data, card-reader and network connectivity.",
        images: [
          "/accessories/type-c-8-in-1-hub-stock.svg",
          "/accessories/type-c-8-in-1-hub.svg",
        ],
      },
    ],
  },
  {
    id: "power-audio",
    name: "Power & Audio",
    description: "Portable power and wireless sound for work, travel and everyday entertainment.",
    products: [
      {
        id: "magsafe-battery-pack",
        name: "MagSafe Magnetic Battery Pack",
        description: "Slim magnetic wireless battery pack for compatible phones and charging setups.",
        images: [
          "/accessories/magsafe-battery-pack.svg",
          "/accessories/magsafe-battery-pack-box.svg",
        ],
      },
      {
        id: "kisonli-k23-subwoofer",
        name: "Kisonli K23 70W Portable Subwoofer",
        description: "Portable wireless speaker with a carry handle and colourful front lighting.",
        images: [
          "/accessories/kisonli-k23-subwoofer.svg",
          "/accessories/kisonli-k23-subwoofer-box.svg",
        ],
      },
    ],
  },
  {
    id: "laptop-essentials",
    name: "Laptop Essentials",
    description: "Everyday upgrades and desk accessories for protecting, powering and using your laptop.",
    products: [
      {
        id: "hp-w10-mouse",
        name: "HP W10 Bluetooth & Wireless Dual-Mode Mouse",
        description: "Dual-mode wireless mouse with Bluetooth connectivity and colourful edge lighting.",
        images: [
          "/accessories/hp-w10-wireless-mouse-stock.svg",
          "/accessories/hp-w10-wireless-mouse.svg",
        ],
      },
      {
        id: "universal-stylus",
        name: "Universal Active Stylus Pen",
        description: "Slim active stylus for compatible tablets and touchscreen devices.",
        images: ["/accessories/universal-active-stylus-pen.svg"],
      },
      {
        id: "laptop-chargers",
        name: "Laptop Chargers & Power Adapters",
        description: "Original and compatible replacement chargers for supported laptop models.",
        images: [laptopPlaceholder],
        placeholder: true,
      },
      {
        id: "laptop-bags",
        name: "Laptop Bags & Sleeves",
        description: "Protective bags and sleeves for commuting, storage and everyday travel.",
        images: [laptopPlaceholder],
        placeholder: true,
      },
      {
        id: "ram-ssd-upgrades",
        name: "RAM & SSD Upgrades",
        description: "Memory and internal storage options selected for compatible laptops.",
        images: [laptopPlaceholder],
        placeholder: true,
      },
      {
        id: "keyboards-headsets",
        name: "Keyboards & Headsets",
        description: "Wired and wireless input and audio essentials for work and gaming.",
        images: [laptopPlaceholder],
        placeholder: true,
      },
      {
        id: "stands-cooling",
        name: "Laptop Stands & Cooling Pads",
        description: "Desk stands and cooling accessories for comfort and airflow.",
        images: [laptopPlaceholder],
        placeholder: true,
      },
    ],
  },
];
