class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency')
        this.dictionary = {
            USD: "$",
            EUR: "€"
        }
    }

    get currencyValue() {
        console.log(this.currency.value)
        return this.currency.value;
    }

    getCurrencySymbol() {
        return this.dictionary[this.currencyValue]
    }
}

const currencyUI = new CurrencyUI()
export default currencyUI
