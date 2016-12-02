var countries = require("./countries.js");
var cities = require("./cities.js");

var i = 0; // début du tableau countries
var l = countries.countries.length - 1; // fin du tableau countries

var j = 0; // début du tableau cities
var m = cities.cities.length - 1; // fin du tableau cities

for (i = 0; i <= l; i++) {
    for (j = 0; j <= m; j++) {
        if (countries.countries[i].code == cities.cities[j].country) {
          console.log(countries.countries[i].country + ' : ' + cities.cities[j].name);
        }
    };
};
