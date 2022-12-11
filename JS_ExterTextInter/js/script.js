
const form = document.querySelector('.add_text');
const exterText = document.querySelector('.exter_text');
const interText = document.querySelector('textarea');
const savedText = document.querySelector('#saved_text');

function saved_local(inter_text) {
   localStorage.setItem('text-item', JSON.stringify(inter_text))
};

function recieve_local() {
   return JSON.parse(localStorage.getItem('text-item'));
}


form.addEventListener('submit', (event) => {
   event.preventDefault();
   const inter_text = recieve_local();
   interText.value = exterText.innerText;
   savedText.innerText = interText.value;
   saved_local(inter_text);
   recieve_local();
})


