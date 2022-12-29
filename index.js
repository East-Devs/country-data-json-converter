const countries = require('./countries.json');

// console.log(countries);

const reqData = [];

for (const country of countries) {
    const newCountry = {
        "Name": country["official_name_en"],
        "Code": country["ISO3166-1-Alpha-2"],
        "Currency": country["ISO4217-currency_alphabetic_code"],
        "Language": country["Languages"]?.split(',')[0].split("-")[0] ?? "en",
    };
    reqData.push(newCountry);
    // console.log(reqData);
}

const fs = require('fs')
fs.writeFile('./country-data.json', JSON.stringify(reqData), err => {
    if (err) {
        console.error(err);
    }
});