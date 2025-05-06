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
const bookingInputs = document.querySelectorAll('.booking-input input');

bookButton?.addEventListener('click', (e) => {
    let invalid = false; // variabel til at tjekke om input er valid
    // for loop som iterere alle bookingTimeItems elementer
    for (let i = 0; i < bookingInputs?.length; i++) {
        const bookingInput = bookingInputs[i];
        if (!bookingInput?.value?.length || bookingInput.value.length < 2) {
            invalid = true; // input er valid
            console.log('bookingInput:', bookingInput);
            alert('Udfyld venligst alle felter');
            break;
        }
        bookingInput?.classList.add('booking-hide');
    }
    
    if (invalid) return; // returner hvis input ikke er valid
    bookInfoAfter?.classList.add('book-info-after-show');
});

