const countries = require('./countries.json');

// console.log(countries);

const reqData = [];

for (const country of countries){
    const comma = ","
    const newCountry = {
        "Name" : country["official_name_en"],
        "Code" : country["ISO3166-1-Alpha-2"],
        "Currency" : country["ISO4217-currency_alphabetic_code"],
        "Language" : country["Languages"]?.split(comma)[0]
    };
    reqData.push(newCountry);
    // console.log(reqData);
}

const fs = require('fs')
fs.writeFile('./countryDataFormatted.json', JSON.stringify(reqData), err =>{
    if(err){
        console.error(err);
    }
});