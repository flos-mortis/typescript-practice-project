import {totalReviews, populateUser, showDetails, getTopTwoReviews} from "./utils.js"
import {Permissions, Loyalty} from "./enums.js"
import {Review, Property} from "./interfaces.js"
import {MainProperty} from "./classes.js"

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('footer')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const mainImageContainer = document.querySelector('.main-image')

let isLoggedIn: boolean = true

const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyalty: Loyalty.GOLD,
        date: '01-04-2021',
        description: 'Great hosts'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyalty: Loyalty.BRONZE,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyalty: Loyalty.SILVER,
        date: '27-03-2021',
    },
]

const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 22,
    permission: Permissions.ADMIN,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}
const properties: Property[] = [
    {
        image: "https://steamuserimages-a.akamaihd.net/ugc/1844786736598507412/DE93F6718A0033F9EC915325A653579EEE7AB315/?imw=512&amp;imh=288&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
        title: "Imposter's home",
        price: 25,
        location: {
            firstLine: "Space",
            city: "Ship",
            code: 228,
            country: "Amogusland"
        },
        contact:["+11393004938", "sus@imposter.com"],
        isAvailable: true
    },
    {
        image: "https://i.pinimg.com/originals/bc/c4/ae/bcc4ae1d0e544d09bb2fe6542c74decc.jpg",
        title: "Aesthetic fairy cottage",
        price: 30,
        location: {
            firstLine: "Magic forest",
            city: "Small village",
            code: 7707,
            country: "Neverland"
        },
        contact: ["+31192", "Pigeon mail"],
        isAvailable: true
    },
    {
        image: "https://i.pinimg.com/originals/5a/51/3d/5a513dea31dc31292e2fc9786f891d81.jpg",
        title: "Hello kitty house",
        price: 45,
        location: {
            firstLine: "Toyhouse",
            city: "KittyLand",
            code: 1111,
            country: "Nakayoshi"
        },
        contact: ["+1300481550", "hellokitty@kitty.com"],
        isAvailable: false
    },
    {
        image: "https://andaman-hotel-langkawi.nochi.com/data/Photos/OriginalPhoto/12775/1277539/1277539264/The-Andaman-A-Luxury-Collection-Resort-Langkawi-Exterior.JPEG",
        title: "The andaman hotel",
        price: 35,
        location: {
            firstLine: "Jalan Teluk Datai",
            city: "Langkawi",
            code: 7000,
            country: "Malaysia"
        },
        contact: ["+1300481550", "hotel@gmail.com"],
        isAvailable: false
    }
]

totalReviews(reviews.length, reviews[0].name, reviews[0].loyalty)
populateUser(you.isReturning, you.firstName)

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    if (propertyContainer != null) {
        propertyContainer.appendChild(card)
    }
    showDetails(you.permission, card, properties[i].price)
}

let count = 0
function addReviews(array: Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ['Kazan', '16:30', 25]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`

let yourMainProperty = new MainProperty(reviews, 'https://almode.ru/uploads/posts/2021-07/1625495821_1-almode_ru-p-nebolshoi-domik-1.jpg', "Silu's house")

const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)
