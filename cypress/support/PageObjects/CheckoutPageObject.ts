export class CheckoutPageObject {
    firstNameInput = '#adult_0_firstName'
    lastNameInput = '#adult_0_lastName'
    dateDayInput = '#date-input'
    dateMonthSelector = 'monthSelector'
    dateYearInput = 'yearInput'
    countryCallingCode = '#calling_code'
    phoneNumberInput = '#phone'
    confirmPaymentButton = 'confirmPayment'

    fillCheckoutInformation(firstName: string, lastName: string, day: string, month: string, year: string, phoneNumber: string) {
        cy.get(this.firstNameInput).type(firstName)
        cy.get(this.lastNameInput).type(lastName)
        cy.get(this.dateDayInput).type(day)
        cy.get(`#month-option-${month}`).click()
        cy.getByDataCy(this.dateYearInput).type(year)
        cy.get(this.phoneNumberInput).type(phoneNumber)
    }

    choosePaymentMethod(paymentMethod: string) {
        cy.contains('button', paymentMethod).click()
    }

    confirmBooking() {
        cy.getByDataCy(this.confirmPaymentButton).click()
    }
}

export const checkoutPage = new CheckoutPageObject();