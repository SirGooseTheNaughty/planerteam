function setIsCollapsed(index) {
    const isClosing = accHeaders[index].parentElement.classList.contains('shown');
    console.log(isClosing);
    accHeaders.forEach((h, i) => {
        if (i === index && !isClosing) {
            h.parentElement.classList.add('shown');
        } else {
            h.parentElement.classList.remove('shown');
        }
    });
}

const accHeaders = document.querySelectorAll('.accordion-header');

accHeaders.forEach((header, i) => {
    header.addEventListener('click', () => setIsCollapsed(i));
});