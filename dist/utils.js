import { Loyalty, Permissions } from "./enums.js";
var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
export function totalReviews(res, name, loyaltyType) {
    var displayStar = loyaltyType == Loyalty.GOLD ? "⭐" : "";
    if (reviewTotalDisplay != null) {
        reviewTotalDisplay.innerHTML = res.toString() + " review" + makeMultiple(res) + " | latest reviewer " + name + " " + displayStar;
    }
}
export function populateUser(isReturning, userName) {
    if (returningUserDisplay != null && userNameDisplay != null) {
        if (isReturning) {
            returningUserDisplay.innerHTML = 'back';
        }
        userNameDisplay.innerHTML = userName;
    }
}
export function showDetails(authorityStatus, element, price) {
    if (authorityStatus || authorityStatus == Permissions.ADMIN) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price + "$/night";
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
export function getTopTwoReviews(reviews) {
    var sortedReviews = reviews.sort(function (a, b) { return b.stars - a.stars; });
    return sortedReviews.slice(0, 2);
}
