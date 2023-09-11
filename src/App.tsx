import "./App.css";
import { Section } from "./components/Section/Section";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";

function App() {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader />
      </SectionContainer>
    </Section>
  );
}

export default App;
