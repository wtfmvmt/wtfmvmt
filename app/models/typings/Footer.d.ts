import type { FaviconProps } from "@typings/Favicon"

export type FooterProps = {
  copyright?: string[],
  impressum?: string,
  socials?: Social[],
  links?: Link[],
  favicon?: FaviconProps
}
