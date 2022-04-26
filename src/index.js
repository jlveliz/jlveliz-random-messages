const messages = [
    'Jorge',
    'Karen',
    "Samantha",
    "Fatima",
    "Abel",
    "Abel"
];


const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

module.exports = { randomMsg }