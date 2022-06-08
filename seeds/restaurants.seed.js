//
const restaurants = [
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Al Squero',
        address: 'Dorsoduro, 943, 30123 Venezia VE',
        picture: 'nice',
        description: 'Traditional wines and small dishes are served in a cosy canal-side restaurant with a rustic atmosphere.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Al Timon',
        address: 'Fondamenta dei Ormesini, 2754, 30121 Venezia VE, Italia',
        picture: 'nice',
        description: 'Informal restaurant in a rustic setting offering fish, steaks and pasta, as well as wine and outdoor tables.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Paradiso Perduto',
        address: 'Fondamenta della Misericordia, 2540, Fondamenta Cannaregio, 30100 Venezia VE',
        picture: 'nice',
        description: 'Typical neighbourhood tavern offering hearty servings of Venetian recipes, plus readings and live music.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Al Remer',
        address: 'Cannaregio, 5701, 30121 Venezia VE',
        picture: 'nice',
        description: 'Brick-vaulted tavern on the Grand Canal with buffet lunch and live music evenings.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Da`a Marisa',
        address: 'Fondamenta S. Giobbe, 652, 30121 Venezia VE, Italia',
        picture: 'nice',
        description: 'Intimate canal-side restaurant with a cosy atmosphere, terrace and regional cuisine.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Tonnarello',
        address: 'Via della Paglia, 1/2/3, 00153 Roma RM',
        picture: 'nice',
        description: 'Informal restaurant with pasta, meatballs and other simple Roman dishes, plus outdoor tables and an acoustic guitar.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Hostaria Romana',
        address: 'Via del Boccaccio, 1, 00187 Roma RM',
        picture: 'nice',
        description: 'Small rustic trattoria with typical Roman cuisine, where the writing on the walls is appreciated.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Da Gino al Parlamento',
        address: 'Vicolo Rosini, 4, 00186 Roma RM',
        picture: 'nice',
        description: 'Small old-style trattoria with frescoed vaulted ceiling and typical Roman dishes.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Bonci Pizzarium',
        address: 'Via della Meloria, 43, 00136 Roma RM',
        picture: 'nice',
        description: 'This restaurant offers pizza by the slice, fried food and arancini made with organic flour and refined ingredients.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Osteria Bonelli',
        address: 'Viale dell`Acquedotto Alessandrino, 172/174, 00177 Roma RM',
        picture: 'nice',
        description: 'Cacio e pepe, ravioli and fritto misto di pesce in an essential Roman restaurant.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'Friggitoria Vomero',
        address: 'Via Domenico Cimarosa, 44, 80129 Napoli NA',
        picture: 'nice',
        description: 'Neapolitan fried delicacies displayed in the glass counter of a small, brightly-lit, historic restaurant.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'O` Cuzzotiello',
        address: 'Via Rimini, 51, 80143 Napoli NA',
        picture: 'nice',
        description: 'Original Neapolitan sandwiches filled with Neapolitan ragu` and other local products',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'L’antica pizzeria da Michele',
        address: 'Via Cesare Sersale, 1, 80139 Napoli NA, Italia',
        picture: 'nice',
        description: 'Margherita and marinara pizzas served between marble tables and tiled walls in a small, lively venue.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'Antico forno delle sfogliatelle calde Attanasio',
        address: 'Vico Ferrovia, 1-2-3-4, 80142 Napoli NA',
        picture: 'nice',
        description: 'Sober bakery popular for its sfogliatelle filled with ricotta and custard, and Neapolitan pastiera',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'Trattoria da Nennella',
        address: 'Vico Lungo Teatro Nuovo, 103/104/105, 80134 Napoli NA, Italia',
        picture: 'nice',
        description: 'Cheerful restaurant with dancing and singing by the waiters, known for its cheese pasta with potatoes, as well as for its grilled meat.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'All`Antico Vinaio',
        address: 'Via dei Neri, 74, Via Ricasoli, 121, 50122 Firenze FI',
        picture: 'nice',
        description: 'Sandwiches and flatbreads with a choice of fillings and self-service wine in a small sandwich bar with a lively atmosphere.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'L`Osteria di Giovanni',
        address: 'Via del Moro, 22r, 50123 Firenze FI',
        picture: 'nice',
        description: 'Bruschette, steaks and pasta, accompanied by wine, in a cosy osteria with vintage furniture and a vaulted cellar.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'Trattoria dall’Oste Chianineria',
        address: 'Via dei Cerchi, 40/R, 50122 Firenze FI',
        picture: 'nice',
        description: 'Certified Italian and international meat from the open counter of a contemporary cork-walled restaurant.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'Osteria Antica Mescita San Niccolo’',
        address: 'Via di S. Niccolò, 60 r, 50125 Firenze FI',
        picture: 'nice',
        description: 'Tuscan dishes, such as Florentine steak and wild boar, in a charming brick-vaulted restaurant.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'Trattoria delle  Mossacce',
        address: 'Via del Proconsolo, 55/R, 50122 Firenze FI',
        picture: 'nice',
        description: 'Simple homemade dishes and Chianti in a cosy trattoria with an open kitchen and hanging cold cuts.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Osteria Vineria CasaCiabotto',
        address: '•	P.za Canonico Borgna Don Pietro, 12060 Verduno CN',
        picture: 'nice',
        description: 'traditional osteria with sophisticated dishes, panoramic views of the Langhe and a wide choice of wines',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Barbagusto',
        address: 'Via Belfiore, 36, 10125 Torino TO',
        picture: 'nice',
        description: 'Small trattoria with traditional piemontesi dishes and a good selection of wines',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'La Piola d’le 2 Sorele',
        address: 'Str. del Pascolo, 61, 10156 Torino TO',
        picture: 'nice',
        description: 'Traditional and seasonal Piedmontese dishes served in a simple, family-run restaurant.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Trapizzino',
        address: 'Piazza Carlo Emanuele II, 17, 10123 Torino TO, Italia',
        picture: 'nice',
        description: 'Comfortable restaurant with hearty sandwiches and arancini, plus drinks and desserts.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Ristorante Solferino',
        address: '•	Piazza Solferino, 3/B, 10121 Torino TO',
        picture: 'nice',
        description: 'Refined restaurant in elegant premises serving carefully plated Piedmontese pasta, meat and fish dishes.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
]


const mongoose = require("mongoose")

require('../db')

const restaurantsModel = require('../models/restaurantModel')

restaurantsModel.insertMany(restaurants)
    .then((allRestaurantsDB) => {
        console.log('All restaurants are seeded(added) in your DB', allRestaurantsDB)
            // return mongoose.connection.close()
    })
    // .then(() => {
    //     console.log('Your DB was closed')
    // })
    .catch((error) => {
        console.log('There is a problem with your seeding', error)

    })
    .finally(() => {
        console.log('Everything is okay and was closed')
        mongoose.connection.close()
    })