'use strict';
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
let text;

input.addEventListener('input', function (e) {
  text = e.target.value;
});
let task = [];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTask = {
    id: crypto.randomUUID(),
    tekst: text,
  };
  task.push(newTask);
  input.value = '';
  text = '';
  showLi();
});
function showLi() {
  list.innerHTML = '';
  task.forEach(function (t) {
    const li = document.createElement('li');
    li.id = t.id;
    li.textContent = `${t.tekst}`;
    li.classList.add('list-box');
    //
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.classList.add('button');
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"  className="size-6" >
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
</svg>
`;

    btn.addEventListener('click', function (e) {
      const listSelect = e.target.closest('.list-box');
      const listID = listSelect.id;
      task = task.filter(t => t.id !== listID);
      showLi();
    });

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('checkbox');
    check.addEventListener('input', function () {
      if (check.checked) {
        //check.style.backgroundColor = 'green';
        li.style.color = 'gray';
        li.style.textDecoration = 'line-through';
        check.style.accentColor = 'gray';
        li.style.borderTopColor = 'gray';
      } else {
        //check.style.backgroundColor = 'red';
        li.style.color = 'red';
        li.style.textDecoration = 'none';
        li.style.borderTopColor = 'red';
      }
    });

    li.appendChild(check);
    li.appendChild(btn);
    list.appendChild(li);
  });
}
