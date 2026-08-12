const socket = io();
const clientsTotal = document.getElementById("clientCount");
const sendBtn = document.getElementById("sendButton");
const msgInput = document.getElementById("messageInput");
const nameInput = document.getElementById("nameInput");
const messageContainer = document.querySelector(".messages");

socket.on("clients-total", (data) => {
  clientsTotal.innerText = data;
});

sendBtn.addEventListener("click", (e) => {
  sendMessage();
});

msgInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const data = {
    name: nameInput.value,
    message: msgInput.value,
    date: new Date(),
  };

  socket.emit("message", data);
  addMessageToUi(data);
  msgInput.value = "";
}

socket.on("chat-message", (data) => {
  console.log(data);
  addMessageToUi(data);
});

function addMessageToUi(data) {
  const element = `  
     <div class="message">
                <strong>${data.name}</strong>
                <p>${data.message}</p>
              <small>${moment(data.date).fromNow()}</small>
            </div>`;

  messageContainer.innerHTML += element;
}
