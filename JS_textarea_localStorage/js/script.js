const form = document.querySelector(".add_text");
const textArea = document.getElementById("inter_text");

function saved_local(inter_text) {
   localStorage.setItem("text-item", JSON.stringify(inter_text));
}

function recieve_local() {
   return JSON.parse(localStorage.getItem("text-item") ?? "");
}

textArea.defaultValue = recieve_local();

form.addEventListener("input", (event) => {
   event.preventDefault();
   const inter_text = event.target.value;
   saved_local(inter_text);
});