'use strict';
var uploadOverlay = document.querySelector('.upload-overlay');
uploadOverlay.classList.add('invisible');
var uploadSelectImage = document.querySelector('#upload-select-image');
uploadSelectImage.classList.remove('invisible');
var uploadFileChange = document.querySelector('#upload-file');
uploadFileChange.addEventListener('click', function () {
  uploadOverlay.classList.remove('invisible');
});
var uploadFormCancel = document.querySelector('.upload-form-cancel');
uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});
var filterImagePreview = document.querySelector('.upload-filter');
filterImagePreview.addEventListener('click', function () {
  filterImagePreview.classList.add('filter-chrome');
});
