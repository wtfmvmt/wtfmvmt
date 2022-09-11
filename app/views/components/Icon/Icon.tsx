import dynamic from 'next/dynamic';

const ICONS = {
    'VISIBILITY': dynamic(() => import('@mui/icons-material/Visibility'), {
        ssr: false
    }),
    'STORE': dynamic(() => import('@mui/icons-material/Store'),  {
        ssr: false
    }),
    'COLOR_LENS': dynamic(() => import('@mui/icons-material/ColorLens'), {
        ssr: false
    }),
    'LIBRARY_BOOKS': dynamic(() => import('@mui/icons-material/LibraryBooks'), {
        ssr: false
    }),
    'EVENT': dynamic(() => import('@mui/icons-material/Event'), {
        ssr: false
    }),
    'HANDSHAKE': dynamic(() => import('@mui/icons-material/Handshake'), {
        ssr: false
    }),
    'DIVERSITY': dynamic(() => import('@mui/icons-material/Diversity1'), {
        ssr: false
    }),
    'MEDIA': dynamic(() => import('@mui/icons-material/PermMedia'), {
        ssr: false
    }),
    'NEW': dynamic(() => import('@mui/icons-material/FiberNew'), {
        ssr: false
    }),
    'DOMAIN': dynamic(() => import('@mui/icons-material/Domain'), {
        ssr: false
    }),
    'VENDOR': dynamic(() => import('@mui/icons-material/StoreFront'), {
        ssr: false
    }),
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


