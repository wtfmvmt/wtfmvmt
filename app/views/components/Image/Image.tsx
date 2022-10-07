import { default as NextImage } from "next/image"
import type { ImageProps } from "@typings/Image"
import type { IComponent } from "@typings/Component"


const Image: IComponent<ImageProps> = ({ src, alt, height, width }: ImageProps) => {

    return <NextImage src={src} alt={alt} height={height} width={width} />
}

export default Image