import "./CategoryTiles.css";
import { CategoryTile } from "../CategoryTile/CategoryTile";
import { tiles } from "./tiles";

const CategoryTiles = () => {
  return (
    <div className="category__tiles">
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
  );
};

export { CategoryTiles };
