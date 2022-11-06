import { default as NextImage } from "next/image"
import type { ImageProps } from "@typings/Image"
import type { ComponentType } from "@typings/Component"


const Image: ComponentType<ImageProps> = ({ src, alt, height, width }: ImageProps) => {

    return <NextImage src={src} alt={alt} height={height} width={width} />
}

export default Image