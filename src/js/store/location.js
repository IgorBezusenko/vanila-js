import api from "../services/apiService";

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.shortCitiesList = null
    }

    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities(),
            this.api.airlines(),
        ])
        const [countries, cities] = response
        this.countries = this.serializeCountries(countries);
        this.cities = this.serializeCities(cities);
        this.shortCitiesList = this.createShortCitiesList(this.cities)
        return response;
    }

    getCityCodeByKey(key){
        return this.cities[key].code
    }

    createShortCitiesList(cities) {
        // {'City_name, Country_name: null}
        // Object.entries => [key: value]
        return Object.entries(cities).reduce((acc, [key, value]) => {
            acc[key] = null
            return acc
        }, {})
    }

    serializeCountries(countries) {
        // {'Country_code: {...countries}}
        return countries.reduce((acc, country) => {
            acc[country.code] = country
            return acc
        }, {})
    }

    serializeCities(cities) {
        // {'City_name, Country_name: {...cities}}
        return cities.reduce((acc, city) => {
            const country_name = this.getCountryNameByCode(city.country_code)
            const city_name = city.name || city.name_translations.en
            const key = `${city_name},${country_name}`
            acc[key] = city
            return acc
        }, {})
    }

    getCountryNameByCode(code) {
        // {'Country_code: {...countries}}
        return this.countries[code].name
    }

    async fetchTickets(params){
        const response = await this.api.prices(params)
        console.log(response)
    }

}

const locations = new Locations(api);

export default locations
