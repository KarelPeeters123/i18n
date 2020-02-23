function replaceText(id, language) {
    $('#' + id).replaceWith($("<p id='" + id + "'></p>").text(DATA[language][id]))
}
