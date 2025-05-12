'use strict';
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
let text;
input.addEventListener('input', function (e) {
  text = e.target.value;
});
let task = [];
