import Image from "next/image"
import Hero from "@/assets/ap-pro.jpeg"
// import { TimerCountdown } from "./TimerCountdown"



export function SectionHero() {
    return (
        <section className="">
            {/* <div>
                <TimerCountdown />
            </div> */}
            <div className="relative">
                <Image 
                    className="w-full"
                    src={Hero}
                    alt=""
                />
                <div className="absolute z-10 top-60 left-48 -translate-y-2/4">
                    <h1 className="text-6xl font-black uppercase mb-4">A nova era chegou!</h1>
                    <h3 className="text-4xl font-bold text-amber-600 mb-4">Chapa Alisadora Luxury Titanium Gold</h3>
                    <p className="text-3xl font-semibold">Excelência em alisamento capilar</p>
                </div>
            </div>
        </section>
    )
}