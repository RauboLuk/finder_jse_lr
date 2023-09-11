import "./Section.css";

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return <section className="section">{children}</section>;
};

export { Section };
