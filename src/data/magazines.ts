export interface MagazineEdition {
  id: string;
  title: string;
  year: number;
  description: string;
  department: string;
  institution: string;
  pageCount: number;
  pdfPath: string;
  pagesPath: string;
  isCurrent: boolean;
}

export const magazines: MagazineEdition[] = [
  {
    id: "edition-2026",
    title: "INTERFACE",
    year: 2026,
    description: "The official annual departmental magazine of the Department of Computer Applications, Kalyani Government Engineering College.",
    department: "Master of Computer Applications",
    institution: "Kalyani Government Engineering College",
    pageCount: 62,
    pdfPath: "/magazines/2026/INTERFACE-2026.pdf?v=20260912_3",
    pagesPath: "/magazines/2026/pages/",
    isCurrent: true,
  },
  {
    id: "edition-2025",
    title: "INTERAFACE",
    year: 2025,
    description: "The official annual departmental magazine of the Department of Computer Applications, Kalyani Government Engineering College.",
    department: "Master of Computer Applications",
    institution: "Kalyani Government Engineering College",
    pageCount: 42,
    pdfPath: "/magazines/2025/INTERFACE-2025.pdf",
    pagesPath: "/magazines/2025/pages/",
    isCurrent: false,
  },
  {
    id: "edition-2024",
    title: "INTERAFACE",
    year: 2024,
    description: "Foundations of data science and machine learning. A deep dive into the research and projects by the MCA students.",
    department: "Master of Computer Applications",
    institution: "Kalyani Government Engineering College",
    pageCount: 24,
    pdfPath: "",
    pagesPath: "",
    isCurrent: false,
  },
  {
    id: "edition-2023",
    title: "INTERAFACE",
    year: 2023,
    description: "The inaugural digital edition. Exploring software engineering practices and agile methodologies.",
    department: "Master of Computer Applications",
    institution: "Kalyani Government Engineering College",
    pageCount: 20,
    pdfPath: "",
    pagesPath: "",
    isCurrent: false,
  },
];

export const currentEdition = magazines.find(m => m.isCurrent) || magazines[0];
export const pastEditions = magazines.filter(m => !m.isCurrent).sort((a, b) => b.year - a.year);
