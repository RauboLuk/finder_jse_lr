import "./Section.css";

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <section className="section">
      <div className="section__container">{children}</div>
    </section>
  );
};

export { Section };
