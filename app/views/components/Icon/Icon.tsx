import icons from "@configs/icons"

export type IconProps = {
    name?: string
}

const Icon = ({ name }: IconProps) => {

    const IconComponent = icons()[name ? name : "VISIBILITY"]

    return <IconComponent />

}

export default Icon


