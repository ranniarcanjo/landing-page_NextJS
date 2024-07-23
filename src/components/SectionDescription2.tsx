import Image from "next/image";
import { Container } from "@/components/Container";
import ApImage2 from '@/assets/ap-2-.png';


export function SectionDescription2() {
    return(
        <section className="bg-gray-300">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="w-[600px]">
                        <Image 
                        src={ApImage2} 
                        alt="" 
                        />
                    </div>
                    <div className="ml-20 max-w-[594px]">
                        <h2 className="text-amber-600 text-2xl font-bold leading-relaxed text-justify mb-2">Design elegante e funcionalidade avançada
                        </h2>
                        <p className="font-semibold leading-relaxed text-justify text-lg">O luxuoso Titanium gold é um triunfo de design e inovação. Com suas placas alisadoras decoradas com detalhes em titânio dourado e acabamento lateral em ouro Titanium, esta alisadora transcende a funcionalidade, tornando-se uma peça de decoração requintada. Seu design não é apenas estético, mas também reflete o compromisso com a qualidade e durabilidade, garantindo alisamento perfeito. um toque de glamour</p><br></br>
                        <h2 className="text-amber-600 text-2xl font-bold leading-relaxed text-justify mb-2">Desempenho excepcional e tecnologia de ponta</h2>
                        <p className="font-semibold leading-relaxed text-justify text-lg">A tecnologia avançada incorporada no luxuoso ouro titânio garante um alisamento eficaz e seguro. As placas de titânio distribuem o calor uniformemente, protegendo o cabelo contra danos e garantindo um acabamento suave e sedoso com uma aparência naturalmente lisa. O alisador oferece uma experiência de alisamento otimizada combinando eficiência e cuidado para resultados que impressionam a cada utilização</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}