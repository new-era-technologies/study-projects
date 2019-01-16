'use strict';


let main = document.getElementById('main');
let dropzone = document.getElementById('dropzone');
let textDrop = document.querySelector('.inner__text_drop');
let textDone = document.querySelector('.inner__text_done');
let fileName = document.getElementById('file_name');
dropzone.setAttribute('ondrop', 'drop(event)');
dropzone.setAttribute('ondragover', 'dragOver(event)');

let drop = (e) => {
    e.preventDefault();
    textDrop.style.display = 'none';
    textDone.style.display = 'flex';
    funcColor(e.dataTransfer);
};

let dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
};

let funcColor = (array) => {
    for (let i = 0; i < array.files.length; i++) {
        let nameSpl = array.files[i].name.split('.');
        if ((nameSpl[1] === 'pdf') || (nameSpl[1] === 'xls')) {
            dropzone.style.border = '2px solid green';
        } else {
            dropzone.style.border = '2px solid red';
        }
        if (array.files[i].size < 2097152) {
            dropzone.style.border = '2px solid red';
        } else {
            dropzone.style.border = '2px solid green';
        }
        if (((nameSpl[1] === 'pdf') || (nameSpl[1] === 'xls')) && (array.files[i].size < 2097152)) {
            fileName.style.display = 'block';
            fileName.innerHTML = array.files[i].name;
        } else {
            fileName.style.display = 'none';
        }
    }
};