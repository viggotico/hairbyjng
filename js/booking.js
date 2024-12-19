const bookingTimeItems = document.getElementsByClassName('booking-section-times-item');

// for loop som iterere alle bookingTimeItems elementer
for (let i = 0; i < bookingTimeItems?.length; i++) {
    const bookingTimeItem = bookingTimeItems[i];
    bookingTimeItem?.addEventListener('click', (e) => {
        // skifter class navnet "booking-section-times-item-selected" mellem aktiv og ikke aktiv
        bookingTimeItem?.classList.toggle('booking-section-times-item-selected');
        e?.preventDefault();
    });
}

const bookButton = document.getElementById('book-button');
const bookInfoAfter = document.getElementById('book-info-after');
const bookingInputs = document.getElementsByClassName('booking-input');

bookButton?.addEventListener('click', (e) => {
    
    // for loop som iterere alle bookingTimeItems elementer
    for (let i = 0; i < bookingInputs?.length; i++) {
        const bookingInput = bookingInputs[i];
        bookingInput?.classList.add('booking-hide');
    }
    
    bookInfoAfter?.classList.add('book-info-after-show');
});

