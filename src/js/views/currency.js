class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency')
    }

    get currencyValue() {
        console.log(this.currency.value)
        return this.currency.value;
    }
}

const currencyUI = new CurrencyUI()
export default currencyUI
