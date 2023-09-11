import { useState } from "react";
import arrowDown from "../../assets/toggle-arrow-down.svg";
import arrowUp from "../../assets/toggle-arrow-up.svg";
import { CategoryTile } from "../CategoryTile/CategoryTile";
import "./CategoryTiles.css";
import { tiles } from "./tiles";

const CategoryTiles = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
  }

  function getTileClass() {
    return `category__tiles ${isExpanded ? " category__tiles--expanded" : ""}`;
  }

  return (
    <div className="categories">
      <div className={getTileClass()}>
        {tiles.map((tile) => (
          <CategoryTile
            key={tile.title}
            href={tile.href}
            src={tile.src}
            alt={tile.alt}
            title={tile.title}
          />
        ))}
      </div>
      <button onClick={toggleExpand} className="category__button">
        {isExpanded ? "Show less categories" : "Show more categories"}
        <img
          src={isExpanded ? arrowUp : arrowDown}
          className="category__toggleArrow"
          alt="toggle arrow"
        />
      </button>
    </div>
  );
};

export { CategoryTiles };
