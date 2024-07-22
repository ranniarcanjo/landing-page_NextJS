import  { Container } from "@/components/Container";
import Image from "next/image";
// import Video from "next-video"
import Handle from "@/assets/handle.png";
import Control from "@/assets/control.png";
import Titanium from "@/assets/titanium.png";
import Heating from "@/assets/heating.png";
import Animation from "@/assets/video/chapinha_animation.gif";


export function SectionDescription3 () {
    return (
        <section className="bg-black">
            <Container>
                <div className="w-[600px]">
                    <div>
                        <h2 className="text-amber-600 text-4xl font-semibold mb-8 mt-14">Características Principais</h2>
                    </div>
                    <ul>
                        <li>
                            <div className="flex flex-row items-center mb-8">
                                <Image 
                                className="w-40 h-40 rounded-full border-double border-8 border-amber-600"
                                src={Handle}
                                alt=""
                                />
                                <div className="ml-10 text-justify">
                                    <h3 className="text-white font-bold text-xl mb-2">Cabo giratório 360:</h3>
                                    <p className="text-white font-normal">
                                        O cabo flexível permite maior liberdade de movimentos, facilitando seu uso e evitando emaranhados, ideal para modelar os cabelos em diversos ângulos.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row items-center mb-8">
                                <Image 
                                className="w-40 h-40 rounded-full border-double border-8 border-amber-600"
                                src={Control}
                                alt=""
                                />
                                <div className="ml-10 text-justify">
                                    <h3 className="text-white font-bold text-xl mb-2">Controle preciso de temperatura:</h3>
                                    <p className="text-white font-normal">
                                        Equipado com botão de ajuste de temperatura, que permite escolher a temperatura mais adequada para cada tipo de cabelo, do mais fino ao mais grosso e resistente.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row items-center mb-8">
                                <Image 
                                className="w-40 h-40 rounded-full border-double border-8 border-amber-600"
                                src={Titanium}
                                alt=""
                                />
                                <div className="ml-10 text-justify">
                                    <h3 className="text-white font-bold text-xl mb-2">Placas de Titânio:</h3>
                                    <p className="text-white font-normal">
                                        Placas de alta qualidade garantem um deslizamento extremamente suave, reduzindo a fricção e protegendo o cabelo contra danos. Ideal para conseguir um alisamento perfeito preservando os cabelos.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row items-center mb-8">
                                <Image 
                                className="w-40 h-40 rounded-full border-double border-8 border-amber-600"
                                src={Heating}
                                alt=""
                                />
                                <div className="ml-10 text-justify">
                                    <h3 className="text-white font-bold text-xl mb-2">Aquecimento Ultrarrápido:</h3>
                                    <p className="text-white font-normal">
                                        Atinge rapidamente a temperatura ideal, que varia entre 320 e 480 F°, o que permite uma economia de tempo e aumenta a eficiência do penteado. Perfeito para salões movimentados, onde o tempo é essencial.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* <div>
                    <Video 
                    className=""
                    src={Animation}
                    alt=""
                    />
                </div> */}
            </Container>
        </section>
    )
}