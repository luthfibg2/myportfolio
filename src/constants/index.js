const words = [
    {
        text: 'Ide-ide',
        imgPath: '/images/ideas.svg'
    },
    {
        text: 'Konsep',
        imgPath: '/images/concepts.svg'
    },
    {
        text: 'Desain',
        imgPath: '/images/designs.svg'
    },
    {
        text: 'Kode',
        imgPath: '/images/code.svg'
    },
]

const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
];
  

const counterItems = [
    { value: 34.47, suffix: "+", label: "Indeks Prestasi Kumulatif" },
    { value: 554, label: "Skor TOEFL" },
    { value: 'A', label: "Pemrograman Web I & II" },
    { value: 'A', label: "Pemrograman Mobile II" },
];

const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Fokus Kualitas",
      desc: "Mengutamakan pelayanan terbaik dengan fokus pada kualitas terbaik.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Komunikasi Terbuka",
      desc: "Membangun komunikasi yang terbuka dan terpercaya dengan para klien.",
    },
    {
      imgPath: "/images/time.png",
      title: "Tepat Waktu",
      desc: "Menyelesaikan proyek setepat waktu mungkin.",
    },
];

const expCards = [
    {
      review: "Kontribusi sebagai tim IT Developer di Gegas Pilar Sinergi, sebuah usaha gagasan.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Fullstack Developer",
      date: "Desember 2024 - Present",
      responsibilities: [
        "Mengembangkan aplikasi website menggunakan React, Node.js, dan Laravel.",
        "Mengoptimalkan pengalaman pengguna menggunakan teknologi terbaru.",
        "Kerja sama dengan tim CloudTV dalam bisnis iklan digital",
      ],
    },
    // {
    //   review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    //   imgPath: "/images/exp2.png",
    //   logoPath: "/images/logo2.png",
    //   title: "Full Stack Developer",
    //   date: "June 2020 - December 2023",
    //   responsibilities: [
    //     "Lorem ipsum dolor sit amet. ",
    //     "Consectetur adipiscing elit sed do eiusmod.",
    //     "Tempor incididunt ut labore dolore magna aliqua.",
    //   ],
    // },
    {
      review: "Penelitian penggunaan algoritma machine learning pada aplikasi CRM, membantu meningkatkan efisiensi bisnis.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Magang Web Developer",
      date: "Februari 2024 - Juli 2024",
      responsibilities: [
        "Presales untuk produk IT hardware",
        "Pengelolaan administrasi pesan marketing kepada pelanggan dan calon pelanggan.",
        "Pengembangan aplikasi web CRM untuk perusahaan.",
      ],
    },
];

const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
    words,
    counterItems,
    navLinks,
    logoIconsList,
    abilities,
    expCards,
    techStackImgs,
    techStackIcons,
    socialImgs
}
