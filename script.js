const quotes = [
    "All warfare is based on deception.",
    "Opportunities multiply as they are seized.",
    "The greatest victory is that which requires no battle.",
    "The supreme art of war is to subdue the enemy without fighting.",
    "In war, the way is to avoid what is strong and to strike at what is weak.",
    "A leader leads by example, not by force.",
    "Can you imagine what I would do if I could do all I can?",
    "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.",
    "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.",
    "Supreme excellence consists of breaking the enemy’s resistance without fighting.",
    "To know your Enemy, you must become your Enemy.",
    "You have to believe in yourself.",
    "It is only the enlightened ruler and the wise general who will use the highest intelligence of the army for the purposes of spying, and thereby they achieve great results.",
    "All warfare is based on deception. Hence, when able to attack, we must seem unable; when using our forces, we must seem inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.",
    "Engage people with what they expect; it is what they are able to discern and confirms their projections. It settles them into predictable patterns of response, occupying their minds while you wait for the extraordinary moment — that which they cannot anticipate.",
    "If your enemy is secure at all points, be prepared for him. If he is in superior strength, evade him. If your opponent is temperamental, seek to irritate him. Pretend to be weak, that he may grow arrogant. If he is taking his ease, give him no rest. If his forces are united, separate them. If sovereign and subject are in accord, put division between them. Attack him where he is unprepared, appear where you are not expected.",
    "Move swift as the Wind and closely-formed as the Wood. Attack like the Fire and be still as the Mountain.",
    "The supreme art of war is to subdue the enemy without fighting.",
    "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win."

];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote-button");

newQuoteButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
