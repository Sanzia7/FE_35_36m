const form = document.querySelector('.add_text');

function saved_textarea(text) {
   localStorage.setItem('text-item', JSON.stringify(text));
}

function write_textarea() {
   return localStorage.getItem('text-item');
}

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const text = event.target.text.value;
   console.log(text);
   saved_textarea(text);
   write_textarea(text);
})
