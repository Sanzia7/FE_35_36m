function write_text(texts) {
   localStorage.setItem('texts', JSON.stringify(texts))
} 

function read_text() {
   return JSON.parse(localStorage.getItem('texts')) ?? [];
}

let texts = read_text();

const form = document.querySelector('.add_texts');
const texts_container = document.querySelector('.text_areas');

form.addEventListener('submit', (event) => {
   event.preventDefault();
   const text = event.target.text.value;
   console.log(text);
   texts.push({text})
   write_text(texts);
   event.target.text.value = '';
   rerender()
});


function rerender() {
   texts_container.innerText = '';
   if (read_text().length === 0) {
      const p_elem = document.createElement('p')
      p_elem.innerText = 'There is no text!'
      texts_container.append(p_elem);
   } else {
      read_text().forEach(item => {
         const p_elem = document.createElement('p')
         p_elem.innerText = item.text;
         texts_container.append(p_elem)
      });
   }
}
rerender();