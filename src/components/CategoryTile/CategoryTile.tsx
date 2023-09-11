import "./CategoryTile.css";

interface Props {
  href: string;
  src: string;
  alt: string;
  title: string;
}

const CategoryTile = ({ href, src, alt, title }: Props) => {
  return (
    <a href={href} target="_blank" className="category__tile">
      <img src={src} className="category__image" alt={alt} />
      <h3 className="category__title">{title}</h3>
    </a>
  );
};

export { CategoryTile };
