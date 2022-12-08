/* First level: Необходимо реализовать интерфейс, с полем ввода(textarea). 
При обновлении страницы текст должен сохраняться в поле ввода. 
Реализуйте данное приложение через textarea и событие input. */
const exterText = document.querySelector('.external_text');

const form = document.querySelector('#inter_text');

const interText = document.querySelector('.textarea');


form.addEventListener('submit', (e) => {
   e.preventDefault();
   interText = v.target.interText.value;
   interText.value = exterText.innerText;

   localStorage.setItem('text_item', interText);
});

if (localStorage.getItem('text_item')) {
   interText.innerText = localStorage.getItem('text_item');
}
