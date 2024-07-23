import Image from "next/image"
import Hero from "@/assets/ap-hero.jpeg"
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
                <div className="absolute z-10 top-52 left-44 -translate-y-2/4">
                    <h1 className="text-5xl font-black uppercase mb-4">A nova era chegou!</h1>
                    <h3 className="text-3xl font-bold text-amber-600 mb-4">Chapa Alisadora Luxury Titanium Gold</h3>
                    <p className="text-2xl font-semibold">Excelência em alisamento capilar</p>
                </div>
            </div>
        </section>
    )
}