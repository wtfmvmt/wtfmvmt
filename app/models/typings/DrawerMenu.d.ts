export type Link = {
    name: string,
    url: string,
    icon?: string
}

export type DrawerMenuProps = {
    favicon?: Favicon,
    links?: Link[],
    cta?: CallToAction[]
}
