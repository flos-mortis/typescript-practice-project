import {Loyalty} from "./enums.js"
import {Price, Country} from "./aliases.js"

export interface Review {
    name: string,
    stars: number,
    loyalty: Loyalty,
    date: string,
    description?: string
}

export interface Property {
    image: string,
    title: string,
    price: Price,
    location: {
        firstLine: string,
        city: string,
        code: number,
        country: Country,
    },
    contact: [string, string],
    isAvailable: boolean
}
