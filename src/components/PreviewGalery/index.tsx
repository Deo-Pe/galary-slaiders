import React, { useEffect, useMemo, useRef } from "react";
import { CommonClassProps, Photos } from "../../types";
import cl from "classnames";
import s from "./index.module.css";

interface PreviewGaleryProps extends CommonClassProps {
  activePhotoIndex: number;
  photos: Photos[];
}

export const PreviewGalery: React.FC<PreviewGaleryProps> = ({
  activePhotoIndex,
  photos,
  className,
}) => {
  if (!photos.length) {
    return null;
  }
  const previewContainer = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (!previewContainer.current) {
      return;
    }
    previewContainer.current.style.transform = `translate3d(-${activePhotoIndex * 164
      }px, 0, 0)`;
  }, [activePhotoIndex]);
  return (
    <div className={cl(s.previewGallery, className)}>
      {useMemo(
        () => (
          <ul className={s.previewGalleryTrack} ref={previewContainer}>
            {photos.map((photo) => (
              <li key={photo.id} className={s.previewGalleryPreview}>
                <img
                  src={photo.preview}
                  alt={photo.description}
                  className={s.previewGalleryImage}
                />
              </li>
            ))}
          </ul>
        ),
        [],
      )}
      <div className={s.previewGalleryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};
