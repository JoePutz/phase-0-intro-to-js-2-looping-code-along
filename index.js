function writeCards(names, event) {
    const cards = [];
    const newNames = [...names];
    for (let i = 0; i < newNames.length; i++) {
        cards.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number--);

    }
}