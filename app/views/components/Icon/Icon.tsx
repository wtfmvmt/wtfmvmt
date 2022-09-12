import ICONS from "@configs/icons"

export type IconProps = {
    id?: string
}

const Icon = ({ id }: IconProps) => {

    return id ? Object.keys(ICONS).filter((key) => key === id).map((key, index) => {
        const IconComponent = ICONS[key];
        return <IconComponent key={index} />
    })[0] : <ICONS.VISIBILITY className='text-white hvr-pop' />

}

export default Icon


