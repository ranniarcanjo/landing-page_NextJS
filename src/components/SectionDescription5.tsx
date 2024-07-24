import Image from "next/image";
import ApPro from "@/assets/ap-4.png";


export function SectionDescription5 (){
    return (
        <section className="">
                <div className="relative">
                    <Image 
                    className="w-full"
                    src={ApPro}
                    alt=""
                    />
                    <div className="flex flex-col absolute inset-x-0 bottom-32 z-10 justify-items-center text-center">
                        <h1 className="text-7xl text-white font-bold mb-6">Qualidade, Sofisticação e Luxo</h1>
                        <span className="text-white text-xl text-justify max-w-[850px] mx-auto leading-normal">As chapinhas, Gold e Black, foram desenvolvidas para proporcionar a melhor experiência em realinhamento capilar. Com a mesma tecnologia avançada e materiais de alta qualidade, elas garantem resultados profissionais de excelência. Independentemente da cor que você escolher, você estará investindo em um produto luxuoso e eficiente.
                        </span>
                        <div className="text-white mt-6 max-w-[850px] mx-auto leading-normal">
                            <span className="text-xl">Escolha a chapinha que melhor reflete o seu estilo e desfrute de cabelos perfeitamente lisos todos os dias!</span>
                        </div>
                    </div>
                </div>
        </section>
    )
}