// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

// const allTvsStock = inventory.map((tv) => {
//   return tv.originalStock - tv.sold
// })
//
// let totalStock = 0
// for (let i = 0; i < allTvsStock.length; i++) {
//   totalStock += allTvsStock[i]
// }

let totalStock = 0
for (const tv of inventory) {
  const stock = tv.originalStock - tv.sold
  totalStock += stock
}

// Test:
console.log(totalStock)


// Opdracht 1b: Zorg ervoor dat dit aantal in het rood wordt weergegeven op de pagina
const stockCount = document.getElementById("stock")
stockCount.textContent = totalStock

// Opdracht 2a: Gebruik een array-methode om een array te maken met alle tv-type namen.
let allTvTypes = []
for (const tv of inventory) {
  const type = tv.type
  allTvTypes.push(type)
}

console.log(allTvTypes)

// Opdracht 2b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
function getSoldOutObjects (objectList) {
  const tvsSoldOut = objectList.filter((tv) => {
    return (tv.originalStock === tv.sold)
  })
  const tvInfos = getTvInfos(tvsSoldOut)

  const allTvStrings = document.getElementById("tvs")
  allTvStrings.innerHTML = tvInfos

  return tvInfos
}

console.log(getSoldOutObjects(inventory))

// Opdracht 2c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
function getAmbilightObjects (objectList) {
  const tvsAmbi = objectList.filter((tv) => {
    return (tv.options.ambiLight === true)
  })
  const tvInfos = getTvInfos(tvsAmbi)

  const allTvStrings = document.getElementById("tvs")
  allTvStrings.innerHTML = tvInfos

  return tvInfos
}

console.log(getAmbilightObjects(inventory))

// Opdracht 2d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
function getObjectsSortedbyPrice (objectList) {
  const sortedList =  objectList.sort((a, b) => {
    return a.price - b.price
  })

  const tvInfos = getTvInfos(sortedList)

  const allTvStrings = document.getElementById("tvs")
  allTvStrings.innerHTML = tvInfos

  return tvInfos
}
console.log(getObjectsSortedbyPrice(inventory))

// Opdracht 3a: Wat is onze doel-opbrengst? Bereken wat de totale opbrengst is, als we alle exemplaren van ieder type
// zouden verkopen. Geef dit in het blauw weer op de pagina.
let totalExpectedRevenue = 0
for (const tv of inventory) {
  totalExpectedRevenue += tv.price * ( tv.originalStock - tv.sold)
}
const expectedRevenue = document.getElementById("revenue-goal")
expectedRevenue.textContent = totalExpectedRevenue.toLocaleString("nl-NL", {
  style: 'currency',
  currency: 'EUR'
})

let totalCurrentRevenue = 0
for (const tv of inventory) {
  totalCurrentRevenue += tv.price * tv.sold
}

// Opdracht 3b: Hoeveel hebben we tot nu toe verdient? Bereken hoeveel we tot nu toe verdient hebben met het aantal
// verkochte tv's. Geef dit weer in het groen weer op de pagi
const currentRevenue = document.getElementById("revenue-now")
currentRevenue.textContent = totalCurrentRevenue.toLocaleString("nl-NL", {
  style: 'currency',
  currency: 'EUR'
})

// Geef de type-namen van twee tv's weer op de pagina. Welke tv's dat precies zijn, maakt niet zoveel uit. Voor nu
// betekent dit dat je het appenden van de nodes twee keer moet uitschrijven, dat is niet erg!
const tv1 = document.getElementById("tv1")
tv1.textContent = inventory[0].type
const tv2 = document.getElementById("tv2")
tv2.textContent = inventory[1].type

// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
// tv-object als parameter verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals
// Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Zorg ervoor dat je deze functie voor iedere tv
// zou kunnen gebruiken.
function getTvString (tvObject) {
  return `${tvObject.brand} ${tvObject.type} - ${tvObject.name}`
}

// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
// parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Zorg ervoor dat je deze functie voor
// iedere tv zou kunnen gebruiken.
function getTvPriceString (price) {
  return `€${price},-`
}

// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv in zowel
// inches als cm Maak een functie die één screen-sizes array verwacht en de groottes op de volgende manier samenvoegt:
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Dus een input van [32] geeft 32 inch (81 cm) en een input van [43, 50, 55, 58] geeft
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Zorg ervoor dat je deze functie voor iedere tv zou kunnen
// gebruiken, zowel voor tv's met maar één schermgrootte als met tientallen schermgroottes.

function getTvSizeString (sizes) {
  const inchToCm = 0.39370
  let sizeString = ``
  for (let i = 0; i < sizes.length; i++) {
    const cmSize = Math.round(sizes[i]/inchToCm)
    sizeString += `${sizes[i]} inch (${cmSize} cm) | `
  }
  return sizeString.slice(0, sizeString.length-3)
}

// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je natuurlijk
// niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200! Gebruik in deze
// functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. Deze
// "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!
function getTvInfos (tvObjects) {
  let tvInfos = ""
  for (const tv of tvObjects) {
    const name = getTvString(tv)
    const price = getTvPriceString(tv.price)
    const size = getTvSizeString(tv.availableSizes)
    tvInfos += `${name}\n<br />${price}\n<br />${size}\n\n<br /><br />`
  }

  const allTvStrings = document.getElementById("tvs")
  allTvStrings.innerHTML = tvInfos

  return tvInfos
}

console.log(getTvInfos(inventory))

// const tvInfos = getTvInfos(inventory)
//
// const allTvStrings = document.getElementById("tvs")
// allTvStrings.innerHTML = tvInfos