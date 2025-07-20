async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;
    appendMessage("You", message);
    input.value = "";
  
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  
    const data = await response.json();
    appendMessage("Gemini", data.reply);
  }
  
  function appendMessage(sender, message) {
    const box = document.getElementById("chat-box");
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }
  