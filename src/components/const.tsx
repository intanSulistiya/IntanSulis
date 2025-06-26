export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Portfolio Personal",
    description: "Website portfolio personal dengan desain modern dan responsive. Menggunakan Next.js dan Tailwind CSS untuk tampilan yang elegan dan user-friendly.",
    image: "/api/placeholder/400/250",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    category: "Portfolio"
  },
  {
    id: 2,
    title: "Menu Online GK Cafe",
    description: "Aplikasi menu online untuk cafe dengan fitur pemesanan digital, manajemen menu. Interface yang user-friendly untuk pelanggan dan admin.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    link: "#",
    category: "Business"
  },
  {
    id: 3,
    title: "Aplikasi Sayang Rakyat",
    description: "Sistem prediksi suara pemilu berbasis input data pemilih untuk analisis kampanye politik. Fitur dashboard analitik dan laporan real-time.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "Blade", "Filament", "MySQL"],
    link: "#",
    category: "Business"
  },
  {
    id: 4,
    title: "Aplikasi Tiket Youtive Inspire Educamp",
    description: "Aplikasi pemesanan tiket berbasis web untuk acara edukasi dan seminar dengan sistem pembuatan dan verifikasi tiket digital.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "Blade", "Filament", "MySQL"],
    link: "#",
    category: "Business"
  },
  {
    id: 5,
    title: "Sistem Pakar Deteksi Depresi",
    description: "Aplikasi sistem pakar untuk deteksi dini gejala depresi menggunakan metode forward chaining dan certainty factor. Fitur kuesioner interaktif dan analisis gejala dengan rekomendasi tindakan.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap", "JavaScript"],
    link: "#",
    category: "Education"
  },
  {
    id: 6,
    title: "Aplikasi Voting E-Musrenbang Kabupaten Gowa",
    description: "Sistem voting berbasis web untuk perencanaan pembangunan Kabupaten Gowa dengan sistem notifikasi feedback pengguna dan dashboard admin.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "MySQL", "JavaScript", "Docker", "Tailwind CSS"],
    link: "#",
    category: "Business"
  },
  {
    id: 7,
    title: "Sistem Tiket Event Organizer Locomotive",
    description: "Sistem pemesanan tiket online untuk event organizer dengan fitur pembuatan tiket dan verifikasi. Interface admin yang mudah digunakan.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "Blade", "Filament", "MySQL"],
    link: "#",
    category: "Business"
  },
  {
    id: 8,
    title: "Marajamedia",
    description: "Portal berita website yang menampilkan liputan berita lokal dan nasional dengan sistem registrasi pengguna, sistem manajemen konten, dan kategorisasi berita regional.",
    image: "/api/placeholder/400/250",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Filament"],
    link: "https://marajamedia.com/",
    category: "CMS"
  },

];

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
