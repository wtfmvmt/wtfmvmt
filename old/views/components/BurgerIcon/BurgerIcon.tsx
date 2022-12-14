import type { ComponentType } from "@typings/Component"
import type { IconProps } from "@typings/Icon"

const BurgerIcon = ({ action }: IconProps) => (

    <a onClick={() => action() || null} className="flex items-center px-8 group" >
        <svg
            width={24}
            height={24}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18 15.4688H0V17.7207H18V15.4688Z" fill="white" />
            <path className="group-hover:scale-120" d="M11.0226 7.87402H0V10.126H11.0226V7.87402Z" fill="white" />
            <path d="M18 0.279297H0V2.53127H18V0.279297Z" fill="white" />
        </svg>
    </a >
)

export default BurgerIcon