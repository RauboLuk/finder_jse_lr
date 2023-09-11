import "./App.css";
import { CategoryTile } from "./components/CategoryTile/CategoryTile";
import { Section } from "./components/Section/Section";
import { SectionContainer } from "./components/SectionContainer/SectionContainer";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
import { SectionSubheading } from "./components/SectionSubheading/SectionSubheading";

import creditCards from "./assets/credit-cards.svg";

function App() {
  return (
    <Section>
      <SectionContainer>
        <SectionHeader />
        <SectionSubheading />
        <CategoryTile
          href="https://www.finder.com.au/"
          src={creditCards}
          alt="Credit Cards"
          title="Credit Cards"
        />
      </SectionContainer>
    </Section>
  );
}

export default App;
