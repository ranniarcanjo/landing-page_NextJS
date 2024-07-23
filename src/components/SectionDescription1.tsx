import Image from "next/image";
import { Container } from "./Container";
import ApImage1 from '@/assets/ap-1.png';

export function SectionDescription1() {
    return (
        <section className="flex justify-between items-center h-[965px] bg-black">
            <Container>
                <div className="top-0 max-w-[594px]">
                    <h2 className="text-gray-100 text-[25px] font-normal leading-relaxed text-justify mb-4">Temos o orgulho de apresentar a <span className="text-amber-600 font<-semibold">Chapinha Alisadora Luxury Titanium Gold</span>, uma inovação revolucionária no mundo do alisamento capilar.</h2>
                    <h2 className="text-gray-100 text-[25px] font-normal leading-relaxed text-justify">Projetada para ser a melhor chapinha e a mais avançada tecnologicamente do mundo, alia alto desempenho a um design elegante, atendendo às necessidades dos mais exigentes profissionais e amantes da beleza.</h2>
                </div>
                <div className="">
                    <Image 
                    src={ApImage1} 
                    alt="" 
                    />
                </div>
            </Container>
        </section>
    )
}