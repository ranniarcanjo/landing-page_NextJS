import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Container({children}: Props) {
    return(
        <div className="flex items-center justify-center w-full max-w-[1546px] mx-auto">
            {children}
        </div>
    )
}