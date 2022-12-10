
const form = document.querySelector('.add_text');
const exterText = document.querySelector('.exter_text');
const interText = document.querySelector('textarea');

function saved_local(inter_text) {
   localStorage.setItem('text-item', JSON.stringify(inter_text))
};

function recieve_local() {
   return JSON.parse(localStorage.getItem('text-item'));
}


form.addEventListener('submit', (event) => {
   event.preventDefault();
   const inter_text = event.target.inter_text.value;
   interText.value = exterText.innerText;
   saved_local(inter_text);
   recieve_local();
})
