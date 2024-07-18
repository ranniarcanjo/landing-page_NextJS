import Image from "next/image"
import Logo from "@/assets/logo__ap.png"
import { ShopCart } from "./ShopCart"


export function Header () {
    return (
        <header className="flex items-center w-full h-20 bg-black border-b border-gray-600">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div className="flex flex-1 items-center justify-between">
                    <div className="">
                        <Image
                        className="w-24 h-12"
                        src={Logo}
                        alt="Logo"
                        />
                    </div>
                    <div>
                        <ShopCart />
                    </div>
                </div>
            </div>
        </header>
    )
}