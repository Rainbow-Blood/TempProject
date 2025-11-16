let count = 0;
let count2 = 0;
let tag = document.getElementById('title');
let tag2 = document.getElementById('secondTitle');
const messages = [
    "You press first time 😒",
    "You press second time 🤨",
    "You press third time 🙄"
];

const messages2 = [
    "Why press second title 😐",
    "Why press again 😶",
    "Why press again, common 😑"
];
function ChangeTitle(){
    tag.textContent = messages[count];
    count = (count + 1) % messages.length;
}
function ChangeSecondTitle(){
    tag2.textContent = messages2[count2];
    count2 = (count2 + 1) % messages2.length;
}
