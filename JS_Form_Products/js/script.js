const add_form = document.querySelector('.add_form');

const products = document.querySelector('.products');
const result_p = document.querySelector('.result');

let data = [
   {
      id: 1,
      title: 'Bicycle',
      price: 4500,
      quantity: 5,
      amount: 5 * 4500,
   },
   {
      id: 2,
      title: 'Roller',
      price: 2500,
      quantity: 7,
      amount: 7 * 2500,
   },
   {
      id: 3,
      title: 'Scooter',
      price: 1500,
      quantity: 10,
      amount: 10 * 1500,
   },
];

add_form.addEventListener('submit', (event) => {
   event.preventDefault();

   const id = Date.now();
   const title = add_form.title.value;
   const price = add_form.price.value;
   const quantity = add_form.quantity.value;
   const amount = add_form.amount.value;
   
   data.push({ id, title, price, quantity, amount });

   add_form.title.value = '';
   add_form.price.value = '';
   add_form.quantity.value = '';
   add_form.amount.value = '';

   rerender();
});

function deleteProduct(id) {
   data = data.filter(product => product.id !== id);
   rerender();
};

function createProductCard(id, title, price, quantity, amount) {
   const container = document.createElement('div');
   const title_p = document.createElement('p');
   const price_p = document.createElement('p');
   const quantity_p = document.createElement('p');
   const amount_p = document.createElement('p');
   const delete_btn = document.createElement('button');

   title_p.innerText = title;
   price_p.innerText = price;
   quantity_p.innerText = quantity;
   amount_p.innerText = amount;
   delete_btn.innerText = 'Delete';

   delete_btn.addEventListener('click', () => {
      deleteProduct(id);
   })

   container.classList.add('product');

   container.append(title_p, price_p, quantity_p, amount_p, delete_btn);

   return container
}

function rerender() {
   products.innerText = '';

   if (data.length === 0) {
      const info = document.createElement('p');
      info.innerText = 'There are no products';
      products.append(info);
   } else {
      data.forEach(({ id, title, price, quantity, amount }) => {
         const container = createProductCard(id, title, price, quantity, amount);
         products.append(container);
      })
   }
};
rerender();