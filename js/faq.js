const faqQuestionButtons = document.getElementsByClassName('faq-question-button');
const faqQuestionContents = document.getElementsByClassName('faq-question-content');

// for loop som iterere alle faqQuestionButtons elementer
for (let i = 0; i < faqQuestionButtons?.length; i++) {
    // definerer variabler til de to forskellige faq elementer
    const buttonDiv = faqQuestionButtons?.[i];
    const contentDiv = faqQuestionContents?.[i];
    buttonDiv?.addEventListener('click', (e) => {
        // skifter class navnet "faq-question-content-active" mellem aktiv og ikke aktiv
        contentDiv?.classList.toggle('faq-question-content-active');
        e?.preventDefault();
    });
}