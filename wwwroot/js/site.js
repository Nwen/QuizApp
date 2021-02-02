// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//const { signalR } = require("..\lib\signalr\signalr.js");

// Write your JavaScript code.

//connection signal r javascript
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

//send msg
/*document.getElementById("sendMessage").addEventListener("click", event => {
    const user = document.getElementById("userName").value;
    const message = document.getElementById("userMessage").value;

    connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    event.preventDefault();
});


//reception
connection.on("ReceiveMessage", (user, message) => {
    const rec_msg = user + ": " + message;
    const li = document.createElement("li");
    li.textContent = rec_msg;
    document.getElementById("messageList").appendChild(li);
})*/

//send question
document.getElementById("sendQuestion").addEventListener("click", event => {
    const message = document.getElementById("userQuestion").value;

    connection.invoke("SendQuestion", message).catch(err => console.error(err.toString()));
    connection.invoke("SendAnwser", "QUIZ: ", message).catch(err => console.error(err.toString()));
    event.preventDefault();
});

//send reponse
document.getElementById("sendAnwser").addEventListener("click", event => {
    const user = document.getElementById("userName").value;
    const message = document.getElementById("userAnwser").value;

    connection.invoke("sendAnwser", user, message).catch(err => console.error(err.toString()));
    event.preventDefault();
});

//reception question
connection.on("ReceiveQuestion", (message) => {
    const li = document.createElement("li");
    li.textContent = message;
    li.classList.add("text-center");
    li.classList.add("list-unstyled");
    li.classList.add("question");
    list = document.getElementById("questionList");
    if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
    list.appendChild(li);
})

//reception reponse
connection.on("ReceiveAnwser", (user, message) => {
    const rec_msg = user + ": " + message;
    const li = document.createElement("li");
    li.classList.add("list-unstyled")
    li.textContent = rec_msg;
    list = document.getElementById("anwserList");
    list.appendChild(li);
})

function setHost() {
    document.getElementById("player_button").style.display = "block";
    document.getElementById("host_button").style.display = "none";
    document.getElementById("player_tab").style.display = "none";
    document.getElementById("host_tab").style.display = "block";
    document.getElementById("player_anwser").style.display = "none";
    document.getElementById("host_question").style.display = "block";

}

function setPlayer() {
    document.getElementById("host_button").style.display = "block";
    document.getElementById("player_button").style.display = "none";
    document.getElementById("player_tab").style.display = "block";
    document.getElementById("host_tab").style.display = "none";
    document.getElementById("player_anwser").style.display = "block";
    document.getElementById("host_question").style.display = "none";
}

connection.start().catch(err => console.error.toString())