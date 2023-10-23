import React from "react";
import s from "./index.module.css";
import { CommonClassProps, Photos } from "../../types";
import cl from "classnames";

interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photos;
  curentPhoto: Photos;
  nextPhoto?: Photos;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
  prevPhoto,
  curentPhoto,
  nextPhoto,
  className,
}) => {
  return (
    <div className={cl(className, s.mainPhoto)}>
      <img
        className={s.mainPhotoImage}
        src={curentPhoto.src}
        alt={curentPhoto.description}
      />
      {prevPhoto && (
        <img
          className={s.mainPhotoPrev}
          src={prevPhoto.src}
          alt={prevPhoto.description}
        />
      )}
      {nextPhoto && (
        <img
          className={s.mainPhotoNext}
          src={nextPhoto.src}
          alt={nextPhoto.description}
        />
      )}
    </div>
  );
};
