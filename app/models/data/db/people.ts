import type { Image } from "@typings/Image"


export type Person = {
    firstName: string,
    lastName: string,
    role: string,
    covers: Image[]
}

const people: Person[] = [
    {
        firstName: 'Brandon',
        lastName: 'Barnes',
        role: 'CEO',
        covers: [
            {
                src: '/assets/images/brandon-barnes.jpg',
            },
            [
                src: '/assets/images/brandon-barnes.jpg',
            ]
        ]
    }
]

export default people