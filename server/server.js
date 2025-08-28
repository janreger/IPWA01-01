const express = require("express")
const app = express()

//Simulate an API
app.get("/list/polution", (req, res) => {
    res.json([
        {
            "land": "Deutschland",
            "unternehmen": "AutoTech GmbH",
            "branche": "Automobil",
            "jahr": 2022,
            "emissionen_tonnen": 1250000
        },
        {
            "land": "Deutschland",
            "unternehmen": "GreenChem AG",
            "branche": "Chemie",
            "jahr": 2022,
            "emissionen_tonnen": 820000
        },
        {
            "land": "Deutschland",
            "unternehmen": "Nordstrom Energie",
            "branche": "Energie",
            "jahr": 2021,
            "emissionen_tonnen": 5400000
        },
        {
            "land": "Frankreich",
            "unternehmen": "Paris Transport",
            "branche": "Transport",
            "jahr": 2022,
            "emissionen_tonnen": 730000
        },
        {
            "land": "Frankreich",
            "unternehmen": "Alpes Steel",
            "branche": "Stahl",
            "jahr": 2021,
            "emissionen_tonnen": 3100000
        },
        {
            "land": "Italien",
            "unternehmen": "Roma Energie",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 4100000
        },
        {
            "land": "Italien",
            "unternehmen": "Milano Fashion Group",
            "branche": "Textil",
            "jahr": 2022,
            "emissionen_tonnen": 95000
        },
        {
            "land": "Spanien",
            "unternehmen": "Solar Iberia",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 150000
        },
        {
            "land": "Spanien",
            "unternehmen": "Madrid Logistics",
            "branche": "Transport",
            "jahr": 2021,
            "emissionen_tonnen": 450000
        },
        {
            "land": "USA",
            "unternehmen": "Global Oil Corp",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 12500000
        },
        {
            "land": "USA",
            "unternehmen": "Silicon Valley Tech",
            "branche": "IT",
            "jahr": 2022,
            "emissionen_tonnen": 320000
        },
        {
            "land": "USA",
            "unternehmen": "US Steelworks",
            "branche": "Stahl",
            "jahr": 2021,
            "emissionen_tonnen": 7200000
        },
        {
            "land": "Kanada",
            "unternehmen": "Maple Mining Ltd",
            "branche": "Bergbau",
            "jahr": 2022,
            "emissionen_tonnen": 2100000
        },
        {
            "land": "Kanada",
            "unternehmen": "Arctic Logistics",
            "branche": "Transport",
            "jahr": 2021,
            "emissionen_tonnen": 370000
        },
        {
            "land": "Brasilien",
            "unternehmen": "Amazon Agro",
            "branche": "Landwirtschaft",
            "jahr": 2022,
            "emissionen_tonnen": 2800000
        },
        {
            "land": "Brasilien",
            "unternehmen": "Rio Steel",
            "branche": "Stahl",
            "jahr": 2021,
            "emissionen_tonnen": 1900000
        },
        {
            "land": "China",
            "unternehmen": "Beijing Power",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 21000000
        },
        {
            "land": "China",
            "unternehmen": "Shenzhen Electronics",
            "branche": "Elektronik",
            "jahr": 2022,
            "emissionen_tonnen": 850000
        },
        {
            "land": "China",
            "unternehmen": "Shanghai Transport",
            "branche": "Transport",
            "jahr": 2021,
            "emissionen_tonnen": 1250000
        },
        {
            "land": "Japan",
            "unternehmen": "Tokyo Steel",
            "branche": "Stahl",
            "jahr": 2022,
            "emissionen_tonnen": 6200000
        },
        {
            "land": "Deutschland",
            "unternehmen": "Berlin Logistics",
            "branche": "Transport",
            "jahr": 2022,
            "emissionen_tonnen": 560000
        },
        {
            "land": "Deutschland",
            "unternehmen": "Hamburg Shipyards",
            "branche": "Schiffbau",
            "jahr": 2021,
            "emissionen_tonnen": 2250000
        },
        {
            "land": "Frankreich",
            "unternehmen": "Côte d’Azur Airlines",
            "branche": "Luftfahrt",
            "jahr": 2022,
            "emissionen_tonnen": 980000
        },
        {
            "land": "Frankreich",
            "unternehmen": "Lyon Textiles",
            "branche": "Textil",
            "jahr": 2021,
            "emissionen_tonnen": 135000
        },
        {
            "land": "Italien",
            "unternehmen": "Napoli Steelworks",
            "branche": "Stahl",
            "jahr": 2022,
            "emissionen_tonnen": 2700000
        },
        {
            "land": "Italien",
            "unternehmen": "Veneto Agro",
            "branche": "Landwirtschaft",
            "jahr": 2021,
            "emissionen_tonnen": 420000
        },
        {
            "land": "Spanien",
            "unternehmen": "Barcelona Chemicals",
            "branche": "Chemie",
            "jahr": 2022,
            "emissionen_tonnen": 880000
        },
        {
            "land": "Spanien",
            "unternehmen": "Sevilla Foods",
            "branche": "Lebensmittel",
            "jahr": 2021,
            "emissionen_tonnen": 95000
        },
        {
            "land": "USA",
            "unternehmen": "Texas Energy Corp",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 13400000
        },
        {
            "land": "USA",
            "unternehmen": "New York Transit",
            "branche": "Transport",
            "jahr": 2021,
            "emissionen_tonnen": 2100000
        },
        {
            "land": "USA",
            "unternehmen": "Midwest Agriculture",
            "branche": "Landwirtschaft",
            "jahr": 2022,
            "emissionen_tonnen": 1750000
        },
        {
            "land": "Kanada",
            "unternehmen": "Toronto Steel Group",
            "branche": "Stahl",
            "jahr": 2022,
            "emissionen_tonnen": 2900000
        },
        {
            "land": "Kanada",
            "unternehmen": "Vancouver Airlines",
            "branche": "Luftfahrt",
            "jahr": 2021,
            "emissionen_tonnen": 640000
        },
        {
            "land": "Brasilien",
            "unternehmen": "São Paulo Transport",
            "branche": "Transport",
            "jahr": 2022,
            "emissionen_tonnen": 950000
        },
        {
            "land": "Brasilien",
            "unternehmen": "Brasil Cement",
            "branche": "Baustoffe",
            "jahr": 2021,
            "emissionen_tonnen": 2200000
        },
        {
            "land": "China",
            "unternehmen": "Wuhan Steel",
            "branche": "Stahl",
            "jahr": 2022,
            "emissionen_tonnen": 12500000
        },
        {
            "land": "China",
            "unternehmen": "Hong Kong Airlines",
            "branche": "Luftfahrt",
            "jahr": 2021,
            "emissionen_tonnen": 2700000
        },
        {
            "land": "China",
            "unternehmen": "Guangzhou Plastics",
            "branche": "Chemie",
            "jahr": 2022,
            "emissionen_tonnen": 1750000
        },
        {
            "land": "Japan",
            "unternehmen": "Osaka Electronics",
            "branche": "Elektronik",
            "jahr": 2022,
            "emissionen_tonnen": 520000
        },
        {
            "land": "Japan",
            "unternehmen": "Kyoto Foods",
            "branche": "Lebensmittel",
            "jahr": 2021,
            "emissionen_tonnen": 120000
        },
        {
            "land": "Indien",
            "unternehmen": "Delhi Energy",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 18700000
        },
        {
            "land": "Indien",
            "unternehmen": "Mumbai Transport",
            "branche": "Transport",
            "jahr": 2021,
            "emissionen_tonnen": 2700000
        },
        {
            "land": "Indien",
            "unternehmen": "Bangalore IT",
            "branche": "IT",
            "jahr": 2022,
            "emissionen_tonnen": 410000
        },
        {
            "land": "Australien",
            "unternehmen": "Sydney Mining",
            "branche": "Bergbau",
            "jahr": 2022,
            "emissionen_tonnen": 3100000
        },
        {
            "land": "Australien",
            "unternehmen": "Melbourne Airlines",
            "branche": "Luftfahrt",
            "jahr": 2021,
            "emissionen_tonnen": 750000
        },
        {
            "land": "Südafrika",
            "unternehmen": "Cape Town Energy",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 5400000
        },
        {
            "land": "Südafrika",
            "unternehmen": "Johannesburg Steel",
            "branche": "Stahl",
            "jahr": 2021,
            "emissionen_tonnen": 2600000
        },
        {
            "land": "Russland",
            "unternehmen": "Moscow Power",
            "branche": "Energie",
            "jahr": 2022,
            "emissionen_tonnen": 16000000
        },
        {
            "land": "Russland",
            "unternehmen": "Siberia Mining",
            "branche": "Bergbau",
            "jahr": 2021,
            "emissionen_tonnen": 4800000
        },
        {
            "land": "Russland",
            "unternehmen": "St. Petersburg Transport",
            "branche": "Transport",
            "jahr": 2022,
            "emissionen_tonnen": 1800000
        }
    ])
})

app.listen(8000, () => {console.log("Server is listening on port 8000")})