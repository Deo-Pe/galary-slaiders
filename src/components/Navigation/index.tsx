import React from "react";
import cl from "classnames";
import s from "./index.module.css";
import { CommonClassProps } from "../../types";

interface NavigationProps extends CommonClassProps {
  disabledPrev: boolean;
  disabledNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  disabledPrev,
  disabledNext,
  onPrevClick,
  onNextClick,
  className,
}) => {
  return (
    <div className={cl(s.navigation, className)}>
      <button
        disabled={disabledPrev}
        className={cl(s.navigationBtn, s.navigationBtnLeft)}
        onClick={onPrevClick}
      >
        Previous
      </button>
      <button
        disabled={disabledNext}
        className={cl(s.navigationBtn, s.navigationBtnRight)}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
};
