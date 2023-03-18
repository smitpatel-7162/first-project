



let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
let name=prompt('enter your name');
namasteBtn.textContent='put name:'+name;

}