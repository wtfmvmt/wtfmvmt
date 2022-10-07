import icons from "@configs/icons"

export type IconProps = {
    icon?: string
}

const Icon = ({ icon }: IconProps) => {

    const data = icons()

    const IconComponent = (() => data[icon ? icon : "coffee"])()

    return <IconComponent sx={{ height: '24px'}}  /> ?? <>❌</>

}

export default Icon


