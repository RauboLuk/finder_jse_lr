import "./App.css";
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
      </SectionContainer>
    </Section>
  );
}

export default App;
