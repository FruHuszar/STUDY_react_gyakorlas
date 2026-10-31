/* Adat réteg, adatbázis helyett */

export interface CoffeeType {
    name: string,
    price: Number,
    src: string,
    tags: Array<string>,
}

export const COFFEELIST:CoffeeType[] = [
    {
        name: 'Ice coffee',
        price: 2.0,
        src: 'ice-coffee.jpg',
        tags: ['refreshing', 'milk-based-coffee'],
    },
    {
        name: 'Frappe',
        price: 3.5,
        src: 'frappe.jpg',
        tags: ['refreshing', 'milk-based-coffee']
    },
    {
        name: 'Cream Coffee',
        price: 2.0,
        src: 'cream.jpg',
        tags: ['sweet-without-sugar', 'dark-aroma']
    },
    {
        name: 'Caramel Frappuchino',
        price: 4.5,
        src: 'caramel-frappe.jpg',
        tags: ['refreshing', 'milk-based-coffee']
    },
    {
        name: 'Espresso Macchiato',
        price: 1.5,
        src: 'macchiato.jpg',
        tags: ['milk-based-coffee', 'traditional']
    },
    {
        name: 'Espresso Cream',
        price: 1.5,
        src: 'espresso-cream.jpg',
        tags: ['sweet-without-sugar', 'dark-aroma']
    },
    {
        name: 'Ice Cream Coffee',
        price: 4.0,
        src: 'icecream.jpg',
        tags: ['refreshing', 'milk-based-coffee']
    },
    {
        name: 'Triple choco Coffee',
        price: 3.0,
        src: 'tripple-choco.jpg',
        tags: ['milk-based-coffee']
    },
]