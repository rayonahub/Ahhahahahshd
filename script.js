
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#send-btn:hover {
    background-color: #3e8e41;
}

#chat-log {
    padding: 10px;
    border: 1px solid #ddd;
    height: 200px;
    overflow-y: auto;
}

const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatLog = document.getElementById('chat-log');

sendBtn.addEventListener('click', () => {
    const message = chatInput.value;
    chatLog.innerHTML += `<p>${message}</p>`;
    chatInput.value = '';
});
