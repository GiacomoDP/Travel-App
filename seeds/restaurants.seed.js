//
const restaurants = [
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Al Squero',
        address: 'Dorsoduro, 943, 30123 Venezia VE',
        picture: '../../images/Venice/Squero-Venezia.jpg',
        description: 'Traditional wines and small dishes are served in a cosy canal-side restaurant with a rustic atmosphere.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Al Timon',
        address: 'Fondamenta dei Ormesini, 2754, 30121 Venezia VE, Italia',
        picture: '../../images/Venice/timon-venezia.jpg',
        description: 'Informal restaurant in a rustic setting offering fish, steaks and pasta, as well as wine and outdoor tables.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Paradiso Perduto',
        address: 'Fondamenta della Misericordia, 2540, Fondamenta Cannaregio, 30100 Venezia VE',
        picture: '../../images/Venice/Paradiso-perduto-venezia.jpg',
        description: 'Typical neighbourhood tavern offering hearty servings of Venetian recipes, plus readings and live music.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Al Remer',
        address: 'Cannaregio, 5701, 30121 Venezia VE',
        picture: '../../images/Venice/alremer-venezia.jpg',
        description: 'Brick-vaulted tavern on the Grand Canal with buffet lunch and live music evenings.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Da`a Marisa',
        address: 'Fondamenta S. Giobbe, 652, 30121 Venezia VE, Italia',
        picture: '../../images/Venice/ai do zemei-venezia.jpg',
        description: 'Intimate canal-side restaurant with a cosy atmosphere, terrace and regional cuisine.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Tonnarello',
        address: 'Via della Paglia, 1/2/3, 00153 Roma RM',
        picture: '../../images/Roma/carbonara-roma-1.jpg',
        description: 'Informal restaurant with pasta, meatballs and other simple Roman dishes, plus outdoor tables and an acoustic guitar.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Hostaria Romana',
        address: 'Via del Boccaccio, 1, 00187 Roma RM',
        picture: '../../images/Roma/Roma-vaccinara-5.jpg',
        description: 'Small rustic trattoria with typical Roman cuisine, where the writing on the walls is appreciated.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Da Gino al Parlamento',
        address: 'Vicolo Rosini, 4, 00186 Roma RM',
        picture: '../../images/Roma/Roma-carciofigiudea-4.jpg',
        description: 'Small old-style trattoria with frescoed vaulted ceiling and typical Roman dishes.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Bonci Pizzarium',
        address: 'Via della Meloria, 43, 00136 Roma RM',
        picture: '../../images/Roma/Roma-cacioepepe-3.jpg',
        description: 'This restaurant offers pizza by the slice, fried food and arancini made with organic flour and refined ingredients.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Osteria Bonelli',
        address: 'Viale dell`Acquedotto Alessandrino, 172/174, 00177 Roma RM',
        picture: '../../images/Roma/Roma-ravioli-2.jpg',
        description: 'Cacio e pepe, ravioli and fritto misto di pesce in an essential Roman restaurant.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'Friggitoria Vomero',
        address: 'Via Domenico Cimarosa, 44, 80129 Napoli NA',
        picture: '../../images/Neapel/napoli-Cuoppo-3.jpg',
        description: 'Neapolitan fried delicacies displayed in the glass counter of a small, brightly-lit, historic restaurant.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'O` Cuzzotiello',
        address: 'Via Rimini, 51, 80143 Napoli NA',
        picture: '../../images/Neapel/napoli-Cuzzetiello-5.jpeg',
        description: 'Original Neapolitan sandwiches filled with Neapolitan ragu` and other local products',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'L’antica pizzeria da Michele',
        address: 'Via Cesare Sersale, 1, 80139 Napoli NA, Italia',
        picture: '../../images/Neapel/Napoli-pizza-1.jpg',
        description: 'Margherita and marinara pizzas served between marble tables and tiled walls in a small, lively venue.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'Antico forno delle sfogliatelle calde Attanasio',
        address: 'Vico Ferrovia, 1-2-3-4, 80142 Napoli NA',
        picture: '../../images/Neapel/Napoli-pastiera-2.jpg',
        description: 'Sober bakery popular for its sfogliatelle filled with ricotta and custard, and Neapolitan pastiera',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Neapel',
        country: 'Italy',
        name: 'Trattoria da Nennella',
        address: 'Vico Lungo Teatro Nuovo, 103/104/105, 80134 Napoli NA, Italia',
        picture: '../../images/Neapel/Napoli-pizzafritta-4.jpg',
        description: 'Cheerful restaurant with dancing and singing by the waiters, known for its cheese pasta with potatoes, as well as for its grilled meat.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'All`Antico Vinaio',
        address: 'Via dei Neri, 74, Via Ricasoli, 121, 50122 Firenze FI',
        picture: '../../images/Florence/lampredotto.jpg',
        description: 'Sandwiches and flatbreads with a choice of fillings and self-service wine in a small sandwich bar with a lively atmosphere.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'L`Osteria di Giovanni',
        address: 'Via del Moro, 22r, 50123 Firenze FI',
        picture: '../../images/Florence/peposo.jpg',
        description: 'Bruschette, steaks and pasta, accompanied by wine, in a cosy osteria with vintage furniture and a vaulted cellar.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'Trattoria dall’Oste Chianineria',
        address: 'Via dei Cerchi, 40/R, 50122 Firenze FI',
        picture: '../../images/Florence/carne.jpg',
        description: 'Certified Italian and international meat from the open counter of a contemporary cork-walled restaurant.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'Osteria Antica Mescita San Niccolo’',
        address: 'Via di S. Niccolò, 60 r, 50125 Firenze FI',
        picture: '../../images/Florence/ribollita.jpg',
        description: 'Tuscan dishes, such as Florentine steak and wild boar, in a charming brick-vaulted restaurant.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Florence',
        country: 'Italy',
        name: 'Trattoria delle  Mossacce',
        address: 'Via del Proconsolo, 55/R, 50122 Firenze FI',
        picture: '../../images/Florence/pici.jpg',
        description: 'Simple homemade dishes and Chianti in a cosy trattoria with an open kitchen and hanging cold cuts.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Osteria Vineria CasaCiabotto',
        address: '•	P.za Canonico Borgna Don Pietro, 12060 Verduno CN',
        picture: '../../images/Turin/agnolotti.jpg',
        description: 'traditional osteria with sophisticated dishes, panoramic views of the Langhe and a wide choice of wines',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Barbagusto',
        address: 'Via Belfiore, 36, 10125 Torino TO',
        picture: '../../images/Turin/bagnacauda.jpg',
        description: 'Small trattoria with traditional piemontesi dishes and a good selection of wines',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'La Piola d’le 2 Sorele',
        address: 'Str. del Pascolo, 61, 10156 Torino TO',
        picture: '../../images/Turin/fassona.jpg',
        description: 'Traditional and seasonal Piedmontese dishes served in a simple, family-run restaurant.',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Trapizzino',
        address: 'Piazza Carlo Emanuele II, 17, 10123 Torino TO, Italia',
        picture: '../../images/Turin/risotto.jpg',
        description: 'Comfortable restaurant with hearty sandwiches and arancini, plus drinks and desserts.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Turin',
        country: 'Italy',
        name: 'Ristorante Solferino',
        address: 'Piazza Solferino, 3/B, 10121 Torino TO',
        picture: '../../images/Turin/vitellotonnato.jpg',
        description: 'Refined restaurant in elegant premises serving carefully plated Piedmontese pasta, meat and fish dishes.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Hambourg',
        country: 'Germany',
        name: 'Bullerei',
        address: 'Lagerstraße 34b, 20357 Hamburg',
        picture: '../../images/Hambourg/Hambourg1.jpg',
        description: 'Steaks with sauces, chips and salads as well as beer and cocktails in popular restaurant in chic industrial style',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Hambourg',
        country: 'Germany',
        name: 'Clouds Haven’s Bar & Kitchen',
        address: 'Reeperbahn 1, 20359 Hamburg',
        picture: '../../images/Hambourg/Hambourg2.jpg',
        description: 'Sophisticated starters, steaks and cocktails in a chic rooftop bar with a terrace and sweeping city views.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Hambourg',
        country: 'Germany',
        name: 'Bianc',
        address: 'Am Sandtorkai 50, 20457 Hamburg',
        picture: '../../images/Hambourg/Hambourg3.jpg',
        description: 'Fixed menus with Mediterranean cuisine and wine, served in a trendy dining room with wood and tiles.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Hambourg',
        country: 'Germany',
        name: 'The Table | Kevin Fehling',
        address: 'Shanghaiallee 15, 20457 Hamburg',
        picture: '../../images/Hambourg/Hambourg4.jpg',
        description: 'Upscale international cuisine in a stylish restaurant with a long, curved table and open kitchen.',
        price: '$$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Hambourg',
        country: 'Germany',
        name: 'East',
        address: 'Simon-von-Utrecht-Straße 31, 20359 Hamburg',
        picture: '../../images/Hambourg/Hambourg5.jpg',
        description: 'Cool restaurant for sushi, steaks and snacks in a former iron foundry with a high ceiling.',
        price: '$$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Dresden',
        country: 'Germany',
        name: 'Stresa',
        address: 'Augsburger Str. 85, 01277 Dresden',
        picture: '../../images/Dresden/Dresden1.png',
        description: 'Cool restaurant for sushi, steaks and snacks in a former iron foundry with a high ceiling.',
        price: '$$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Dresden',
        country: 'Germany',
        name: 'Genuss-Atelier',
        address: 'Bautzner Str. 149, 01099 Dresden',
        picture: '../../images/Dresden/Dresden2.png',
        description: 'Tasting menus of unusual German dishes in a stylish restaurant with natural stone walls.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Dresden',
        country: 'Germany',
        name: 'Mamma mia',
        address: 'Kreuzstraße 1-3, 01067 Dresden',
        picture: '../../images/Dresden/Dresden3.jpg',
        description: 'Traditional Italian restaurant with homemade pasta and a family atmosphere..',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Dresden',
        country: 'Germany',
        name: 'Schmidt’s',
        address: 'Moritzburger Weg 67, 01109 Dresden',
        picture: '../../images/Dresden/Dresden4.jpg',
        description: 'Creative regional and seasonal dishes and a tasting menu in a modern restaurant with a terrace.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Dresden',
        country: 'Germany',
        name: 'Estancia Steakhouse Striesen',
        address: 'Fetscherstraße 30, 01309 Dresden',
        picture: '../../images/Dresden/Dresden6.jpg',
        description: 'Modern steakhouse in a lounge ambience with open show kitchen, wine advice and catering service.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Munich',
        country: 'Germany',
        name: 'Hans im Glück',
        address: 'Isartorpl. 8, 80331 München',
        picture: '../../images/Munich/Munich1.jpg',
        description: 'Enjoy incomparable culinary moments of happiness with your loved ones in a relaxed atmosphere in Munichs Birch Forest.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Munich',
        country: 'Germany',
        name: 'Vinaiolo',
        address: 'Steinstraße 42, 81667 München',
        picture: '../../images/Munich/Munich2.jpg',
        description: 'Elegant retro-style trattoria with creative antipasti, pasta and main courses, and extensive wine list.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Munich',
        country: 'Germany',
        name: 'La Boheme',
        address: 'Leopoldstraße 180, 80804 München',
        picture: '../../images/Munich/Munich3.jpg',
        description: 'French classics like Chateaubriand platters and flambéed steaks in an elegant urban bistro',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Munich',
        country: 'Germany',
        name: 'Chopan',
        address: 'Rosenheimer Str. 8, 81669 München',
        picture: '../../images/Munich/Munich4.jpg',
        description: 'Afghan stews and grilled meats in a cosy place with red walls and Moorish accents.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Munich',
        country: 'Germany',
        name: 'Trattoria da Fausto',
        address: 'Helmtrudenstraße 1, 80805 München',
        picture: '../../images/Munich/Munich5.jpg',
        description: 'Italian cuisine and "Tiramisu speciale" in a restaurant with wall frescoes, climbing plants and chandeliers.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Luebeck',
        country: 'Germany',
        name: 'L`Osteria',
        address: 'An d. Untertrave 111, 23552 Lübeck',
        picture: '../../images/Luebeck/Luebeck1.png',
        description: 'Through the Holsten Gate to the south. L`Osteria brings Mediterranean flair to the north.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Luebeck',
        country: 'Germany',
        name: 'Das Köstlich',
        address: 'Kaiserallee 2, 23570 Lübeck',
        picture: '../../images/Luebeck/Luebeck2.jpg',
        description: 'Typical dishes in a casual restaurant with original décor and outdoor seating.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Luebeck',
        country: 'Germany',
        name: 'Kartoffelkeller',
        address: 'Koberg 8, 23552 Lübeck',
        picture: '../../images/Luebeck/Luebeck3.jpg',
        description: 'North German fish dishes, schnitzel and potato variations in a Gothic cellar with a vaulted ceiling.',
        price: '$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Luebeck',
        country: 'Germany',
        name: 'Lübecker Hanse',
        address: 'Kolk 7, 23552 Lübeck',
        picture: '../../images/Luebeck/Luebeck4.jpg',
        description: 'Inviting restaurant for schnitzel, grilled fish and Holstein steak in a dining room with wooden beams.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Luebeck',
        country: 'Germany',
        name: 'Fangfrisch',
        address: 'An d. Untertrave 51, 23552 Lübeck',
        picture: '../../images/Luebeck/Luebeck5.jpg',
        description: 'Modern restaurant with a straightforward philosophy and fresh, regional fish dishes.',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Freiburg',
        country: 'Germany',
        name: 'Enchilada',
        address: 'Auf d. Zinnen 1, 79098 Freiburg im Breisgau',
        picture: '../../images/Freiburg/Freiburg1.png',
        description: 'Dishes typical of the country, such as tacos, burritos or fajitas, which unfold their full flavour with their colourful ingredients and Mexican spice',
        price: '$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Freiburg',
        country: 'Germany',
        name: 'Yepa Yepa',
        address: 'Merianstraße 30, 79104 Freiburg im Breisgau',
        picture: '../../images/Freiburg/Freiburg2.png',
        description: 'Simple taqueria with typical dishes, seats at the counter and colourful wrestling masks on the walls',
        price: '$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Freiburg',
        country: 'Germany',
        name: 'Wolfsöhle',
        address: 'Konviktstraße 8, 79098 Freiburg im Breisgau',
        picture: '../../images/Freiburg/Freiburg3.png',
        description: 'Elegant restaurant offering exclusive 5-course menus with seasonal ingredients.',
        price: '$$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Freiburg',
        country: 'Germany',
        name: 'Das Blümchen',
        address: 'Unterdorf 2, 79112 Freiburg im Breisgau',
        picture: '../../images/Freiburg/Freiburg4.jpg',
        description: 'Pleasure can also be different',
        price: '$$$$',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Freiburg',
        country: 'Germany',
        name: 'Kartoffelhaus',
        address: 'Basler Str. 10, 79100 Freiburg im Breisgau',
        picture: '../../images/Freiburg/Freiburg6.jpg',
        description: 'Pleasure can also be different',
        price: '$$',
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