function replaceText(idParagraph) {
    const text = document.getElementById('textToReplace');
    const paragraph = document.getElementById(idParagraph);

    text.classList.remove('visible');
    setTimeout(() => {
        text.innerHTML=paragraph.innerHTML;
        text.classList.add('visible');
    }, 300);
}
