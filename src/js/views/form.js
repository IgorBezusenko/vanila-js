import {getAutocompleteInstance, getDatepickerInstance} from "../plugins/materialize";

class FormUI {
    constructor(autocompleteInstance, datepickerInstance) {
        this._form = document.forms['locationControls']
        this.origin = document.getElementById('autocomplete-origin')
        this.destination = document.getElementById('autocomplete-destination')
        this.depart = document.getElementById('datepicker-depart')
        this.return = document.getElementById('datepicker-return')

        this.originAutocomplite = autocompleteInstance(this.origin)
        this.destinationAutocomplite = autocompleteInstance(this.destination)
        this.departDatepicker = datepickerInstance(this.depart)
        this.returnDatepicker = datepickerInstance(this.return)
    }

    get form() {
        return this._form
    }

    get originValue() {
        return this.origin.value;
    }

    get destinationValue() {
        return this.destination.value;
    }

    get departDateValue() {
        return this.departDatepicker.toString();
    }

    get returnDateValue() {
        return this.returnDatepicker.toString();
    }

    setAutocompleteDate(data) {
        this.originAutocomplite.updateData(data)
        this.destinationAutocomplite.updateData(data)
    }

}

const formUI = new FormUI(getAutocompleteInstance, getDatepickerInstance)
export default formUI
