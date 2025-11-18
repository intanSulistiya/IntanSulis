export interface Project {
  id: number; // ID di-generate otomatis
  title: string;
  description: string;
  image: string;
  images?: string[]; // Array of images for detail slide
  technologies: string[];
  link?: string;
  category: string;
  status: "online" | "offline";
  url?: string;
  detailDescription?: string; // Additional description for detail page
}

// Data proyek tanpa ID (akan di-generate otomatis)
const projectsData: Omit<Project, 'id'>[] = [
  {
    title: "Website Portfolio Personal",
    description: "Website portfolio personal dengan desain modern dan responsive. Menggunakan Next.js dan Tailwind CSS untuk tampilan yang elegan dan user-friendly.",
    image: "/api/placeholder/400/250",
    images: ["/api/placeholder/800/500", "/api/placeholder/800/500", "/api/placeholder/800/500"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    category: "Portfolio",
    status: "online",
    url: "#",
    detailDescription: "Website portfolio personal yang dibangun dengan teknologi modern Next.js dan TypeScript. Desain yang clean dan minimalis dengan fokus pada user experience. Fitur-fitur utama termasuk animasi smooth, responsive design untuk semua device, dan optimasi SEO."
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
    status: "offline",
    detailDescription: "Website menu online cafe yang dikembangkan untuk cafe di Jeneponto. Sistem ini menampilkan menu lengkap dengan kategori makanan dan minuman yang terorganisir dengan baik. Desain yang responsive memastikan pengalaman pengguna yang optimal di semua perangkat. Dibangun dengan Laravel dan Filament untuk manajemen konten yang mudah."
  },
  {
    title: "Sayang Rakyat App",
    description: "Sistem prediksi suara pada PEMILU berdasarkan inputan data pemilih. Aplikasi berbasis web untuk analisis dan prediksi hasil pemilihan umum.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "Filament", "MySQL"],
    link: "#",
    category: "Business",
    status: "offline",
    detailDescription: "Aplikasi sistem prediksi suara pemilu yang dikembangkan untuk membantu analisis hasil pemilihan umum. Sistem ini memungkinkan input data pemilih dan menghasilkan prediksi suara berdasarkan data yang dimasukkan. Dibangun dengan Laravel dan Filament untuk interface admin yang powerful dan mudah digunakan."
  },
  {
    title: "Youtive Inspire Educamp Ticketing",
    description: "Aplikasi pemesanan tiket untuk acara pendidikan dan seminar berbasis web. Menyediakan fitur pembuatan dan verifikasi tiket digital.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "MySQL"],
    link: "#",
    category: "Business",
    status: "offline",
    detailDescription: "Sistem pemesanan tiket online yang dikembangkan khusus untuk acara pendidikan dan seminar. Aplikasi ini menyediakan fitur lengkap untuk pembuatan tiket, verifikasi tiket, dan manajemen peserta. Interface yang user-friendly memudahkan pengguna untuk memesan tiket dengan cepat dan mudah."
  },
  {
    title: "DepresiCheck",
    description: "Sistem pendukung keputusan diagnosis depresi menggunakan metode Certainty Factor dan Forward Chaining. Membantu tenaga medis mengevaluasi gejala pasien dengan tingkat kepercayaan yang akurat.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "JavaScript", "MySQL"],
    link: "#",
    category: "Education",
    status: "offline",
    detailDescription: "Sistem pendukung keputusan yang dibangun untuk membantu tenaga medis dalam diagnosis depresi. Menggunakan metode Certainty Factor dan Forward Chaining untuk menghasilkan evaluasi gejala dengan tingkat kepercayaan yang akurat. Interface responsif dengan form input gejala, dashboard visualisasi hasil, dan integrasi API JavaScript untuk menampilkan diagnosis secara interaktif dengan grafik dan color-coding."
  },
  {
    title: "Event Organizer Locomotive Ticketing",
    description: "Sistem pemesanan tiket online untuk event organizer dengan antarmuka pengguna yang responsif dan user-friendly. Menyediakan fitur pembuatan dan verifikasi tiket.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "MySQL"],
    link: "#",
    category: "Business",
    status: "offline",
    detailDescription: "Sistem pemesanan tiket online yang dikembangkan untuk event organizer. Aplikasi ini memiliki antarmuka pengguna yang responsif dan user-friendly, memudahkan pengguna untuk memesan tiket dengan cepat. Fitur utama termasuk pembuatan tiket, verifikasi tiket, dan manajemen event yang terintegrasi."
  },
  {
    title: "Jastip App Papua – Makassar",
    description: "Aplikasi jasa titip dengan fitur tracking visual pengiriman dan interface pembayaran yang responsif. Terintegrasi dengan API untuk real-time status update.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "Filament", "MySQL"],
    link: "#",
    category: "Business",
    status: "offline",
    detailDescription: "Aplikasi jasa titip yang dirancang untuk memfasilitasi pengiriman barang antara Papua dan Makassar. Sistem ini memiliki fitur tracking visual pengiriman yang memungkinkan pengguna memantau status pengiriman secara real-time. Interface pembayaran yang responsif dan terintegrasi dengan API untuk update status secara real-time memberikan pengalaman pengguna yang optimal."
  },
  {
    title: "Jendig BPDAS",
    description: "Sistem persuratan digital berbasis web untuk BPDAS dengan Content Management System (CMS) terintegrasi. Mendigitalisasi proses administrasi surat-menyurat.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "JavaScript", "MySQL", "Bootstrap 5"],
    link: "#",
    category: "CMS",
    status: "offline",
    detailDescription: "Sistem persuratan digital yang dikembangkan untuk BPDAS (Balai Pengelolaan Daerah Aliran Sungai) dengan Content Management System (CMS) terintegrasi. Sistem ini bertujuan untuk mendigitalisasi dan mempermudah proses administrasi surat-menyurat. Fitur utama termasuk sistem 2 level akses (adminPI, super admin), navbar responsif dengan struktur menu intuitif, sidebar navigasi dengan menu hierarki, dan validasi form yang optimal untuk user experience yang baik."
  },
  {
    title: "Stone House QR Menu",
    description: "Sistem informasi layanan berbasis Progressive Web Application (PWA) terintegrasi dengan QR Code dan algoritma Prophet untuk Kafe Stone House di Makassar.",
    image: "/api/placeholder/400/250",
    technologies: ["PHP Native", "JavaScript", "MySQL", "Bootstrap 5"],
    link: "#",
    category: "Business",
    status: "offline",
    detailDescription: "Sistem informasi layanan berbasis Progressive Web Application (PWA) yang terintegrasi dengan QR Code dan algoritma Prophet untuk Kafe Stone House di Makassar. Sistem ini mengatasi permasalahan waktu tunggu pemesanan yang lama dengan menyediakan platform pemesanan digital langsung dari meja pelanggan. Fitur utama termasuk antarmuka pemesanan dengan QR Code scanner, form pemesanan interaktif, tampilan menu digital responsif, dashboard multi-role untuk Owner dan Karyawan, manajemen menu & stok, laporan penjualan, visualisasi data prediksi menggunakan Chart.js, dan optimasi PWA dengan fitur offline-ready dan real-time update menggunakan AJAX."
  },

];

// Generate ID otomatis berdasarkan index array
export const projects: Project[] = projectsData.map((project, index) => ({
  ...project,
  id: index + 1
}));

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
