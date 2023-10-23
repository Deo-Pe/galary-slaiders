import { useState } from "react";
import { Photos } from "../types";
import style from "./index.module.css";
import { MainPhoto } from "./MainPhoto";
import { PreviewGalery } from "./PreviewGalery";
import { Navigation } from "./Navigation";

interface WebElArtGalleryProps {
  photos: Photos[];
}
export const WebElArtGallery: React.FC<WebElArtGalleryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }
  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const curentPhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={style.webelarGallery}>
      <div className={style.webelarGalleryContainer}>
        <MainPhoto
          prevPhoto={prevPhoto}
          curentPhoto={curentPhoto}
          nextPhoto={nextPhoto}
          className={style.webelarMainPhoto}
        />
        <Navigation
          className={style.webelarNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGalery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.webelarPreviewList}
      />
    </div>
  );
};
