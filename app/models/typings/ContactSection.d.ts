import type { CallToAction } from "@typings/CallToAction"

export type Social = {
    url: string,
    name: string
}

export type ContactSectionProps = {
    socials: Social[]
    phone: string,
    email: string,
    label: string,
    heading: string,
    description: string,
    cta: {
        primary: CallToAction,
        secondary: CallToAction
    }
}