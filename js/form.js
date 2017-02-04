'use strict';
 var uploadOverlay = document.querySelector('.upload-overlay');
 uploadOverlay.classList.add('invisible');
 var uploadSelectImage = document.querySelector('#upload-select-image');
 uploadSelectImage.classList.remove('invisible');
 var uploadFileChange = document.querySelector('#upload-file');
 uploadFileChange.addEventListener('click', function () {
   uploadSelectImage.classList.add('invisible');
 });
