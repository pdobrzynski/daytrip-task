import { bookingPage } from "../support/PageObjects/BookingPageObject"
import { checkoutPage } from "../support/PageObjects/CheckoutPageObject";

describe('Booking flow', () => {
  context('trip booked less than 36 hours in advance', () => {
    it('redirects to the urgent-booking page', () => {
      cy.visit('/')

      bookingPage.searchForTrip('Gdansk', 'Warsaw');
      bookingPage.bookTripWithOrWithoutSights(false);
      bookingPage.completeBooking('test@test.com');

      checkoutPage.fillCheckoutInformation('John', 'Smith', '10', '1', '1990', '12345678900');
      checkoutPage.choosePaymentMethod('Cash');
      checkoutPage.confirmBooking();

      cy.url().should('include', '/urgent-booking')
      cy.get('h1')
        .should('be.visible')
        .should('contain','We’re looking for a driver...')
    })
  })
})