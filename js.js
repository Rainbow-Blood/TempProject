let count = 0;
let tag = document.getElementById('title');
const messages = [
    "You press first time 😒",
    "You press second time 🤨",
    "You press third time 🙄"
];
function ChangeTitle(){
    tag.textContent = messages[count];
    count = (count + 1) % messages.length;
}
