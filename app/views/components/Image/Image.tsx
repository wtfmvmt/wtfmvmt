import { CustomPlaceholder } from 'react-placeholder-image';


export type Image = {
    src: string,
    alt?: string,
    height?: number | string,
    width?: number | string,
    className?: string,
}

const Image = ({ src, alt, height, width, className }: Image) => {

    return (
        <img
            className="h-16"
            src={favicon.src}
            alt=""
            width={width}
        />
    )
}

export default Image