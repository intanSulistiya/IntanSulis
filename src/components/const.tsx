export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  technologies: string[];
  link?: string;
  category: string;
  status: "online" | "offline";
  url?: string;
  detailDescription?: string;
}

// Bilingual project data
export const projectsDataBilingual = {
  en: [
    {
      title: "Personal Portfolio Website",
      description: "Modern and responsive personal portfolio website. Built with Next.js and Tailwind CSS for an elegant and user-friendly interface.",
      image: "/api/placeholder/400/250",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#",
      category: "Portfolio",
      status: "online" as const,
      url: "#",
      detailDescription: "Personal portfolio website built with modern Next.js and TypeScript technologies. Clean and minimalist design with a focus on user experience. Key features include smooth animations, responsive design for all devices, and SEO optimization."
    },
    {
      title: "Jendig BPDAS",
      description: "Web-based digital correspondence system for BPDAS with integrated Content Management System (CMS). Digitalizing the mail administration process.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "JavaScript", "MySQL", "Bootstrap 5"],
      link: "#",
      category: "CMS",
      status: "offline" as const,
      detailDescription: "Digital correspondence system developed for BPDAS (Watershed Management Agency) with integrated Content Management System (CMS). This system aims to digitalize and streamline the mail administration process. Key features include 2-level access system (adminPI, super admin), responsive navbar with intuitive menu structure, sidebar navigation with hierarchical menu, and optimal form validation for good user experience."
    },
    {
      title: "DepresiCheck",
      description: "Depression diagnosis decision support system using Certainty Factor and Forward Chaining methods. Helps medical personnel evaluate patient symptoms with accurate confidence levels.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "JavaScript", "MySQL"],
      link: "#",
      category: "Education",
      status: "offline" as const,
      detailDescription: "Decision support system built to assist medical personnel in diagnosing depression. Uses Certainty Factor and Forward Chaining methods to produce symptom evaluations with accurate confidence levels. Responsive interface with symptom input forms, result visualization dashboard, and JavaScript API integration to display diagnosis interactively with graphs and color-coding."
    },
    {
      title: "Stone House QR Menu",
      description: "Progressive Web Application (PWA) based service information system integrated with QR Code and Prophet algorithm for Stone House Cafe in Makassar.",
      image: "/api/placeholder/400/250",
      technologies: ["PHP Native", "JavaScript", "MySQL", "Bootstrap 5"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Progressive Web Application (PWA) based service information system integrated with QR Code and Prophet algorithm for Stone House Cafe in Makassar. This system addresses the problem of long order waiting times by providing a digital ordering platform directly from customer tables. Key features include ordering interface with QR Code scanner, interactive order forms, responsive digital menu display, multi-role dashboard for Owner and Staff, menu & stock management, sales reports, prediction data visualization using Chart.js, and PWA optimization with offline-ready features and real-time updates using AJAX."
    },
    {
      title: "GK Cafe Online Menu",
      description: "Responsive and user-friendly online cafe menu website in Jeneponto. Displays complete menu with food and beverage categories.",
      // image: "/api/placeholder/400/250",
      // images: [
      //   "/image/projects/gk-cafe-1.jpg",
      //   "/image/projects/gk-cafe-2.jpg",
      //   "/image/projects/gk-cafe-3.jpg"
      // ],
      technologies: ["Laravel", "Filament", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Online cafe menu website developed for a cafe in Jeneponto. This system displays a complete menu with well-organized food and beverage categories. Responsive design ensures optimal user experience on all devices. Built with Laravel and Filament for easy content management."
    },
    {
      title: "Sayang Rakyat App",
      description: "Vote prediction system for ELECTIONS based on voter data input. Web-based application for analysis and prediction of election results.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "Filament", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Election vote prediction system application developed to assist in analyzing election results. This system allows voter data input and generates vote predictions based on the entered data. Built with Laravel and Filament for a powerful and easy-to-use admin interface."
    },
    {
      title: "Youtive Inspire Educamp Ticketing",
      description: "Web-based ticket booking application for educational events and seminars. Provides digital ticket creation and verification features.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Online ticket booking system developed specifically for educational events and seminars. This application provides complete features for ticket creation, ticket verification, and participant management. User-friendly interface makes it easy for users to book tickets quickly and easily."
    },
    {
      title: "Event Organizer Locomotive Ticketing",
      description: "Online ticket booking system for event organizers with responsive and user-friendly interface. Provides ticket creation and verification features.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Online ticket booking system developed for event organizers. This application has a responsive and user-friendly interface, making it easy for users to book tickets quickly. Key features include ticket creation, ticket verification, and integrated event management."
    },
    {
      title: "Jastip App Papua – Makassar",
      description: "Shopping service application with visual delivery tracking features and responsive payment interface. Integrated with API for real-time status updates.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "Filament", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Shopping service application designed to facilitate goods delivery between Papua and Makassar. This system has visual delivery tracking features that allow users to monitor delivery status in real-time. Responsive payment interface integrated with API for real-time status updates provides optimal user experience."
    },
  ],
  id: [
    {
      title: "Website Portfolio Personal",
      description: "Website portfolio personal dengan desain modern dan responsive. Menggunakan Next.js dan Tailwind CSS untuk tampilan yang elegan dan user-friendly.",
      image: "/api/placeholder/400/250",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500", "/api/placeholder/800/500"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "#",
      category: "Portfolio",
      status: "online" as const,
      url: "#",
      detailDescription: "Website portfolio personal yang dibangun dengan teknologi modern Next.js dan TypeScript. Desain yang clean dan minimalis dengan fokus pada user experience. Fitur-fitur utama termasuk animasi smooth, responsive design untuk semua device, dan optimasi SEO."
    },
    {
      title: "Jendig BPDAS",
      description: "Sistem persuratan digital berbasis web untuk BPDAS dengan Content Management System (CMS) terintegrasi. Mendigitalisasi proses administrasi surat-menyurat.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "JavaScript", "MySQL", "Bootstrap 5"],
      link: "#",
      category: "CMS",
      status: "offline" as const,
      detailDescription: "Sistem persuratan digital yang dikembangkan untuk BPDAS (Balai Pengelolaan Daerah Aliran Sungai) dengan Content Management System (CMS) terintegrasi. Sistem ini bertujuan untuk mendigitalisasi dan mempermudah proses administrasi surat-menyurat. Fitur utama termasuk sistem 2 level akses (adminPI, super admin), navbar responsif dengan struktur menu intuitif, sidebar navigasi dengan menu hierarki, dan validasi form yang optimal untuk user experience yang baik."
    },
    {
      title: "DepresiCheck",
      description: "Sistem pendukung keputusan diagnosis depresi menggunakan metode Certainty Factor dan Forward Chaining. Membantu tenaga medis mengevaluasi gejala pasien dengan tingkat kepercayaan yang akurat.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "JavaScript", "MySQL"],
      link: "#",
      category: "Education",
      status: "offline" as const,
      detailDescription: "Sistem pendukung keputusan yang dibangun untuk membantu tenaga medis dalam diagnosis depresi. Menggunakan metode Certainty Factor dan Forward Chaining untuk menghasilkan evaluasi gejala dengan tingkat kepercayaan yang akurat. Interface responsif dengan form input gejala, dashboard visualisasi hasil, dan integrasi API JavaScript untuk menampilkan diagnosis secara interaktif dengan grafik dan color-coding."
    },
    {
      title: "Stone House QR Menu",
      description: "Sistem informasi layanan berbasis Progressive Web Application (PWA) terintegrasi dengan QR Code dan algoritma Prophet untuk Kafe Stone House di Makassar.",
      image: "/api/placeholder/400/250",
      technologies: ["PHP Native", "JavaScript", "MySQL", "Bootstrap 5"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Sistem informasi layanan berbasis Progressive Web Application (PWA) yang terintegrasi dengan QR Code dan algoritma Prophet untuk Kafe Stone House di Makassar. Sistem ini mengatasi permasalahan waktu tunggu pemesanan yang lama dengan menyediakan platform pemesanan digital langsung dari meja pelanggan. Fitur utama termasuk antarmuka pemesanan dengan QR Code scanner, form pemesanan interaktif, tampilan menu digital responsif, dashboard multi-role untuk Owner dan Karyawan, manajemen menu & stok, laporan penjualan, visualisasi data prediksi menggunakan Chart.js, dan optimasi PWA dengan fitur offline-ready dan real-time update menggunakan AJAX."
    },
    {
      title: "Menu Online GK Cafe",
      description: "Website menu online cafe di Jeneponto dengan tampilan yang responsive dan mudah digunakan. Menampilkan menu lengkap dengan kategori makanan dan minuman.",
      image: "/api/placeholder/400/250",
      images: [
        "/image/projects/gk-cafe-1.jpg",
        "/image/projects/gk-cafe-2.jpg",
        "/image/projects/gk-cafe-3.jpg"
      ],
      technologies: ["Laravel", "Filament", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Website menu online cafe yang dikembangkan untuk cafe di Jeneponto. Sistem ini menampilkan menu lengkap dengan kategori makanan dan minuman yang terorganisir dengan baik. Desain yang responsive memastikan pengalaman pengguna yang optimal di semua perangkat. Dibangun dengan Laravel dan Filament untuk manajemen konten yang mudah."
    },
    {
      title: "Sayang Rakyat App",
      description: "Sistem prediksi suara pada PEMILU berdasarkan inputan data pemilih. Aplikasi berbasis web untuk analisis dan prediksi hasil pemilihan umum.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "Filament", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Aplikasi sistem prediksi suara pemilu yang dikembangkan untuk membantu analisis hasil pemilihan umum. Sistem ini memungkinkan input data pemilih dan menghasilkan prediksi suara berdasarkan data yang dimasukkan. Dibangun dengan Laravel dan Filament untuk interface admin yang powerful dan mudah digunakan."
    },
    {
      title: "Youtive Inspire Educamp Ticketing",
      description: "Aplikasi pemesanan tiket untuk acara pendidikan dan seminar berbasis web. Menyediakan fitur pembuatan dan verifikasi tiket digital.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Sistem pemesanan tiket online yang dikembangkan khusus untuk acara pendidikan dan seminar. Aplikasi ini menyediakan fitur lengkap untuk pembuatan tiket, verifikasi tiket, dan manajemen peserta. Interface yang user-friendly memudahkan pengguna untuk memesan tiket dengan cepat dan mudah."
    },
    {
      title: "Event Organizer Locomotive Ticketing",
      description: "Sistem pemesanan tiket online untuk event organizer dengan antarmuka pengguna yang responsif dan user-friendly. Menyediakan fitur pembuatan dan verifikasi tiket.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Sistem pemesanan tiket online yang dikembangkan untuk event organizer. Aplikasi ini memiliki antarmuka pengguna yang responsif dan user-friendly, memudahkan pengguna untuk memesan tiket dengan cepat. Fitur utama termasuk pembuatan tiket, verifikasi tiket, dan manajemen event yang terintegrasi."
    },
    {
      title: "Jastip App Papua – Makassar",
      description: "Aplikasi jasa titip dengan fitur tracking visual pengiriman dan interface pembayaran yang responsif. Terintegrasi dengan API untuk real-time status update.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "Filament", "MySQL"],
      link: "#",
      category: "Business",
      status: "offline" as const,
      detailDescription: "Aplikasi jasa titip yang dirancang untuk memfasilitasi pengiriman barang antara Papua dan Makassar. Sistem ini memiliki fitur tracking visual pengiriman yang memungkinkan pengguna memantau status pengiriman secara real-time. Interface pembayaran yang responsif dan terintegrasi dengan API untuk update status secara real-time memberikan pengalaman pengguna yang optimal."
    },
  ]
};

// Function to get projects based on language
export const getProjects = (language: 'en' | 'id' = 'id'): Project[] => {
  const projectsData = projectsDataBilingual[language];
  return projectsData.map((project, index) => ({
    ...project,
    id: index + 1
  }));
};

// Default export for backward compatibility (Indonesian)
export const projects: Project[] = getProjects('id');

export const categories = [
  "All",
  "Portfolio",
  "E-Commerce",
  "Business",
  "CMS",
  "Education"
];

export const links = [

];
