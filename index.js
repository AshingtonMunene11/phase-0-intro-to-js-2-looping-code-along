// Code your solutions in this file
function writeCards(names, occasion) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
        messages.push(message);
    }
    return messages;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--; 
    }
}
countDown(10);
