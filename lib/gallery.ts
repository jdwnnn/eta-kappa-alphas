/**
 * CHAPTER GALLERY MANIFEST
 *
 * To add new photos:
 *   1. Drop the .jpg / .png file into /public/images/gallery/
 *   2. Add an entry below — the order here controls the order on the page.
 *
 * `span` controls the visual size of the tile in the editorial grid:
 *   - "wide"  → spans 2 columns on desktop (great for hero shots)
 *   - "tall"  → spans 2 rows on desktop (great for portrait orientation)
 *   - "auto"  → standard 1×1 tile
 *
 * `caption` is shown on hover; `year` is optional.
 */

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  year?: string;
  span?: "wide" | "tall" | "auto";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/charter.jpeg",
    alt: "55th Charter Day Anniversary celebration",
    caption: "55th Charter Day Anniversary",
    year: "2026",
    span: "wide",
  },
  {
    src: "/images/gallery/alphaone.png",
    alt: "Eta Kappa brothers",
    caption: "Brotherhood",
    span: "wide",
  },
  {
    src: "/images/gallery/one.jpeg",
    alt: "Brothers on stage",
    caption: "On Stage",
    span: "auto",
  },
  {
    src: "/images/gallery/two.jpeg",
    alt: "Chapter unity",
    caption: "Unity",
    span: "auto",
  },
  {
    src: "/images/gallery/alphatwo.png",
    alt: "Eta Kappa brothers",
    caption: "Brotherhood",
    span: "tall",
  },
  {
    src: "/images/gallery/three.jpeg",
    alt: "Probate showcase",
    caption: "Probate",
    span: "auto",
  },
  {
    src: "/images/gallery/four.jpeg",
    alt: "Brothers strolling",
    caption: "Stroll Like An Alpha",
    span: "wide",
  },
  {
    src: "/images/gallery/alphathree.png",
    alt: "Eta Kappa brothers",
    caption: "Brotherhood",
    span: "auto",
  },
  {
    src: "/images/gallery/five.jpeg",
    alt: "Brother abroad",
    caption: "Beyond The Chapter",
    span: "auto",
  },
  {
    src: "/images/gallery/winarmy.jpg",
    alt: "Chapter moment",
    caption: "The Win Army",
    span: "wide",
  },
  {
    src: "/images/gallery/voters.jpeg",
    alt: "Voter engagement",
    caption: "Voter Engagement",
    span: "auto",
  },
  {
    src: "/images/gallery/track.jpeg",
    alt: "Track athlete",
    caption: "Excellence In Athletics",
    span: "tall",
  },
  {
    src: "/images/gallery/serviceone.jpg",
    alt: "Service event",
    caption: "Service In Action",
    span: "auto",
  },
  {
    src: "/images/gallery/servicefour.jpeg",
    alt: "Community service",
    caption: "Community Service",
    span: "wide",
  },
  {
    src: "/images/gallery/school.jpeg",
    alt: "Go-To-High-School, Go-To-College",
    caption: "Go-To-High-School",
    span: "auto",
  },
  {
    src: "/images/gallery/probate1.1.jpg",
    alt: "New initiates probate",
    caption: "New Initiates",
    span: "tall",
  },
  {
    src: "/images/gallery/missbandg.jpeg",
    alt: "Miss Black and Gold pageant",
    caption: "Miss Black & Gold",
    span: "wide",
  },
  {
    src: "/images/gallery/law.jpeg",
    alt: "Brothers in law",
    caption: "Alphas In Law",
    span: "auto",
  },
  {
    src: "/images/gallery/IMG_0040.jpeg",
    alt: "Chapter moment",
    caption: "Chapter Moment",
    span: "auto",
  },
  {
    src: "/images/gallery/IMG_0033.jpeg",
    alt: "Chapter moment",
    caption: "Chapter Moment",
    span: "tall",
  },
  {
    src: "/images/gallery/IMG_0031.jpeg",
    alt: "Chapter moment",
    caption: "Chapter Moment",
    span: "auto",
  },
  {
    src: "/images/gallery/IMG_0029.jpeg",
    alt: "Chapter moment",
    caption: "Chapter Moment",
    span: "wide",
  },
  {
    src: "/images/gallery/IMG_0024.jpeg",
    alt: "Chapter moment",
    caption: "Chapter Moment",
    span: "auto",
  },
  {
    src: "/images/gallery/graduate.jpeg",
    alt: "Graduation portrait",
    caption: "Graduation",
    span: "tall",
  },
  {
    src: "/images/gallery/graduatetwo.jpeg",
    alt: "Commencement",
    caption: "Commencement",
    span: "auto",
  },
];
