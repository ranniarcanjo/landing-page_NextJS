import Image from "next/image";
import { Container } from "./Container";
import Gold from "@/assets/chapinha-gold-.png";
import Black from "@/assets/chapinha-black-.png";

export function SectionDescription4 (){
    return(
        <section className="bg-white">
            <div className="mt-10 ">
                <h1 className="text-black font-bold text-2xl">Quando se trata de realinhamento capilar, é importante escolher uma chapinha que combine qualidade, luxo e estilo. Temos duas opções excepcionais para você:</h1>
            </div>
            <Container>
                <div className="">
                    <div className="relative max-md:text-center flex flex-col lg:flex-row lg:justify-center shadow-amber-300 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
                        <Image 
                        className=""
                        src={Gold}
                        alt=""
                        />
                        <div className="lg:w-[45%] max-w-lg relative">
                            <h2 className="font-semibold text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl mt-4 sm:mt-10 !leading-[1.13] tracking-tight">Luxury Titanium Gold</h2>
                            <span className="text-xl block mt-4 text-slate-800 text-justify">A Chapinha Gold é a escolha perfeita para quem deseja um toque de sofisticação. Com placas de titânio douradas, esta chapinha não só oferece um desempenho excepcional, como também adiciona um toque de glamour ao seu ritual de beleza. A tecnologia de titânio garante um alisamento uniforme e duradouro, deixando seus cabelos lisos e brilhantes.</span>
                        </div>
                    </div>
                    <div className="relative max-md:text-center flex flex-col lg:flex-row lg:justify-center shadow-amber-300 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
                        <div className="lg:w-[45%] max-w-lg relative">
                            <h2 className="font-semibold text-xl sm:text-2xl xl:text-2xl 2xl:text-3xl mt-4 sm:mt-10 !leading-[1.13] tracking-tight">Luxury Titanium Black</h2>
                            <span className="text-xl block mt-4 text-slate-800 text-justify">Para aqueles que preferem um visual mais clássico e elegante, a Chapinha Black é a opção ideal. Com as mesmas placas de titânio de alta qualidade, esta chapinha proporciona os mesmos resultados de excelência. A cor preta adiciona um toque de modernidade e estilo ao seu dia a dia.</span>
                        </div>
                        <Image 
                        className=""
                        src={Black}
                        alt=""
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}