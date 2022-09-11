import dynamic from 'next/dynamic';

const ICONS = {
    'VISIBILITY': dynamic(() => import('@mui/icons-material/Visibility')),
    'STORE': dynamic(() => import('@mui/icons-material/Store')),
    'COLOR_LENS': dynamic(() => import('@mui/icons-material/ColorLens')),
    'LIBRARY_BOOKS': dynamic(() => import('@mui/icons-material/LibraryBooks')),
    'EVENT': dynamic(() => import('@mui/icons-material/Event')),
    'HANDSHAKE': dynamic(() => import('@mui/icons-material/Handshake')),
    'DIVERSITY': dynamic(() => import('@mui/icons-material/Diversity1')),
    'MEDIA': dynamic(() => import('@mui/icons-material/PermMedia')),
    'NEW': dynamic(() => import('@mui/icons-material/FiberNew')),
    'DOMAIN': dynamic(() => import('@mui/icons-material/Domain')),
    'VENDOR': dynamic(() => import('@mui/icons-material/StoreFront')),
}


export type IconProps = {
    id?: string
}

const Icon = ({ id }: IconProps) => {

 return  id ?  Object.keys(ICONS).filter((key) => key === id).map((key, index) => {
    const IconComponent = ICONS[key];
    return <IconComponent key={index} />
})[0] : <ICONS.VISIBILITY className='text-white hvr-pop' />

}

export default Icon


