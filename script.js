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
    li.textContent = `${t.tekst}`;
    li.classList.add('list-box');
    list.appendChild(li);
  });
}
