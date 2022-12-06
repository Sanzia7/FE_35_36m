const form = document.querySelector('.add_text');

const exterText = document.querySelector('.external_text');

const interText = document.querySelector('#inter_text');

function saved_textarea(interText) {
   localStorage.setItem('text-item', JSON.stringify(interText));
}
saved_textarea();
function write_textarea() {
   return localStorage.getItem('text-item');
}
write_textarea(exterText);

form.addEventListener('submit', (event) => {
   event.preventDefault();
   interText.value = exterText.innerText;
   console.log(interText);
   console.log(exterText);
   saved_textarea();
   write_textarea('text-item');
})
