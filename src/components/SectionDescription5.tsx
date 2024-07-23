import Image from "next/image";
import ApPro from "@/assets/ap-4.jpeg";


export function SectionDescription5 (){
    return (
        <section>
                <div className="">
                    <Image 
                    className="w-full"
                    src={ApPro}
                    alt=""
                    />
                </div>
        </section>
    )
}