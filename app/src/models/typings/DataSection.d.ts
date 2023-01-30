import type { CallToActionProps } from "@models/typings/CallToAction"
import type { ImageProps } from "@typings/Image"


export type Content = {
  cover?: ImageProps,
  title: string,
  tags?: string[],
  url?: string,
  cta?: CallToActionProps

}
export type Filter = {
  name?: string,
  url?: string,
}

export type DataSectionProps = {

  heading?: string,
  title?: string,
  description?: string,
  filters?: Filter[],
  data?: Content[]
}