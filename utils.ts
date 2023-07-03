import { Loyalty, Permissions } from "./enums.js"
import { Review } from "./interfaces.js"

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function totalReviews(res: number, name: string, loyaltyType: Loyalty) {
    const displayStar = loyaltyType == Loyalty.GOLD ? "⭐" : ""
    if (reviewTotalDisplay != null)
    {
        reviewTotalDisplay.innerHTML = `${res.toString()} review${makeMultiple(res)} | latest reviewer ${name} ${displayStar}`
    }
}

export function populateUser(isReturning : boolean, userName : string ) {
    if (returningUserDisplay != null && userNameDisplay != null) {
        if (isReturning){
            returningUserDisplay.innerHTML = 'back'
        }
        userNameDisplay.innerHTML = userName  
    }
}

export function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (authorityStatus || authorityStatus == Permissions.ADMIN) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = `${price}$/night`
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number): string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews : Review[]) : Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
}