import { SectionHero } from "@/components/SectionHero";
import { Footer } from "@/components/Footer";
import { SectionDescription1 } from "@/components/SectionDescription1";
import { SectionDescription2 } from "@/components/SectionDescription2";
import { SectionDescription3 } from "@/components/SectionDescription3";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionDescription1 />
      <SectionDescription2 />
      <SectionDescription3 />
      <Footer />
    </>
  );
}
