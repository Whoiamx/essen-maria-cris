import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import { memo } from "react";

export const Carrousel = memo(() => {
  const images = [
    {
      original: "/src/assets/31f36aa99ec692965773177fe4434f58d772f486.jpeg",
    },
    {
      original: "/src/assets/30aefba1ee46162c37f9be35cff2fca0e0a5f722.jpeg",
    },
    {
      original: "/src/assets/ff81137a66d82b90bd82f7295cb9b3fd9e3daac8.jpeg",
    },
  ];
  return (
    <div style={{ height: "50vh", margin: "auto" }}>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        autoPlay={true}
        slideInterval={6000}
        showBullets={true}
        slideDuration={1500}
        showNav={false}
      />
    </div>
  );
});
