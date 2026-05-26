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
    src: "/images/gallery/seven.jpeg",
    alt: "School of Hard Knocks line introduction",
    caption: "School of Hard Knocks",
    span: "wide",
  },
  {
    src: "/images/gallery/six.jpeg",
    alt: "Brother abroad",
    caption: "Abroad",
    span: "tall",
  },
  {
    src: "/images/gallery/eight.jpeg",
    alt: "Brothers at convention",
    caption: "Convention",
    span: "auto",
  },
];
