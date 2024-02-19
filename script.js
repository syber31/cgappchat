function sendMessage() {
    var message = document.getElementById("message").value;
    if (message.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        var newMessage = document.createElement("div");
        newMessage.innerText = message;
        chatBox.appendChild(newMessage);
        document.getElementById("message").value = "";
    }
}
