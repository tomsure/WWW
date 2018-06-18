const shutter = document.querySelector('.shutter');
const btn = document.querySelector('button');

btn.onclick=function(){
  shutter.classList.toggle('open');
};