export type Price = {
    rate?: string,
    unit?: string
}


export type Membership = {
    name?: string,
    description?: string,
    pricing?: Price
}

const memberships = [
    {
        name: 'Affiliate',
        description: 'Affiliate Membership',
        pricing: {
            rate: ''
        }
    }
]


export default memberships