import { SectionHero } from "@/components/SectionHero";
import { Footer } from "@/components/Footer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionDescription2 } from "@/components/SectionDescription2";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionDescription />
      <SectionDescription2 />
      <Footer />
    </>
  );
}
