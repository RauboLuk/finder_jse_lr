import "./App.css";
import { CategoryTiles } from "./components/CategoryTiles/CategoryTiles";
import { Section } from "./components/Section/Section";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
import { SectionSubheading } from "./components/SectionSubheading/SectionSubheading";

function App() {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader />
        <SectionSubheading />
        <CategoryTiles />
      </SectionContainer>
    </Section>
  );
}

export default App;
