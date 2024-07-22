import Image from "next/image";
import { Container } from "./Container";
import ApImage from '@/assets/ap-1.png';

export function SectionDescription1() {
    return (
        <section className="flex justify-between items-center h-[965px] bg-black">
            <Container>
                <div className="top-0 max-w-[594px]">
                    <h2 className="text-gray-100 text-[25px] font-semibold leading-relaxed text-justify">Temos o orgulho de apresentar a Chapa Alisadora Luxury Titanium Gold, uma inovação revolucionária no mundo do alisamento capilar. Projetada para ser a melhor chapinha e a mais avançada tecnologicamente do mundo, alia alto desempenho a um design elegante, atendendo às necessidades dos mais exigentes profissionais e amantes da beleza.</h2>
                </div>
                <div className="">
                    <Image 
                    src={ApImage} 
                    alt="" 
                    />
                </div>
            </Container>
        </section>
    )
}