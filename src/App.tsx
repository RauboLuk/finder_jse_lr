import "./App.css";
import { CategoryTiles } from "./components/CategoryTiles/CategoryTiles";
import { Section } from "./components/Section/Section";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
import { SectionSubheading } from "./components/SectionSubheading/SectionSubheading";

function App() {
  return (
    <Section>
      <SectionHeader />
      <SectionSubheading />
      <CategoryTiles />
    </Section>
  );
}

export default App;
