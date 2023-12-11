const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
let userMessage;
const MODEL_NAME = "models/chat-bison-001";
const API_KEY = "AIzaSyBLHcn5fWxtmSDCVHiWnRV14bZVg0yRl3E";


const createChatLi =(message,className)=>{
    const chatLi=document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent= className ==="outgoing" ?  `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p> ${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;

}
const generateResponse=()=>{
const API_KEY="";


const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
        model:MODEL_NAME,
        messages: [{role: "user", content: userMessage}],
    })


}}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if(!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    setTimeout(()=>{
    chatbox.appendChild(createChatLi("Thinking...", "incoming"));
    generateResponse();
    },600);
   
}

sendChatBtn.addEventListener("click", handleChat);