import { SectionHero } from "@/components/SectionHero";
import { Footer } from "@/components/Footer";
import { SectionDescription1 } from "@/components/SectionDescription1";
import { SectionDescription2 } from "@/components/SectionDescription2";
import { SectionDescription3 } from "@/components/SectionDescription3";
import { SectionDescription4 } from "@/components/SectionDescription4";
import { SectionDescription5 } from "@/components/SectionDescription5";
import { SectionDescription6 } from "@/components/SectionDescription6";


export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionDescription1 />
      <SectionDescription2 />
      <SectionDescription3 />
      <SectionDescription4 />
      <SectionDescription5 />
      <SectionDescription6 />
      <Footer />
    </>
  );
}
