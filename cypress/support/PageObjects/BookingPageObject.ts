export class BookingPageObject {
    originInput = 'fromSelect'
    destinationInput = 'toSelect'
    datePicker = 'departureDate'
    searchButton = 'book-button'
    bookTripButton = 'bookTrip'
    bookWithoutSights = 'confirm'
    bookWithSights = 'confirmAction'
    emailInput = '#lead-passenger-email'
    completeBookingButton = 'saveAndContinue'

    searchForTrip(origin: string, destination: string) {
        const today = new Date();

        cy.getByDataCy(this.datePicker).first().click()
        const dayOfTheMonth = today.getDate().toString()
        cy.contains('td', dayOfTheMonth).click()

        cy.getByDataCy(this.originInput).first().type(origin)
        cy.contains('div', origin).click()
        cy.getByDataCy(this.destinationInput).first().type(destination)
        cy.contains('div', destination).click()

        cy.wait(1000)

        cy.getByDataCy(this.searchButton).first().click();
    }

    bookTripWithOrWithoutSights(withSights: boolean) {
        cy.getByDataCy(this.bookTripButton).filter(':visible').click()
        if(withSights) {
            cy.getByDataCy(this.bookWithSights).click()
        } else {
            cy.getByDataCy(this.bookWithoutSights).click()

        }
    }

    completeBooking(emailAddress: string) {
        cy.get(this.emailInput).type(emailAddress)
        cy.getByDataCy(this.completeBookingButton).click()
    }
}

export const bookingPage = new BookingPageObject();