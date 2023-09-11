import "./SectionContainer.css";

interface Props {
  children: React.ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return <div className="section__container">{children}</div>;
};

export { SectionContainer };
