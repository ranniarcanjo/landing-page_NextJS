import Image from "next/image"
import Hero from "@/assets/ap-.png"

export function SectionHero() {
    return (
        <section className="bg-gray-950">
            <div className="flex items-center justify-center">
                <Image 
                    src={Hero}
                    alt=""
                />
            </div>
        </section>
    )
}