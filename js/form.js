'use strict';
var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;


var uploadOverlay = document.querySelector('.upload-overlay');
uploadOverlay.classList.add('invisible');
var uploadSelectImage = document.querySelector('#upload-select-image');
uploadSelectImage.classList.remove('invisible');
var uploadFile = document.querySelector('#upload-file');
uploadFile.addEventListener('change', showElementOverlay);
var uploadFormCancel = document.querySelector('.upload-form-cancel');
uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
});
// функция показа элемента
function showElementOverlay() {
  uploadSelectImage.classList.add('invisible');
  uploadOverlay.classList.remove('invisible');
}
// функция скрытия элемента
function hideElementOverlay() {
  uploadSelectImage.classList.remove('invisible');
  uploadOverlay.classList.add('invisible');
  document.removeEventListener('keydown', tryHideElementOverlay);
}

function tryHideElementOverlay(evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    hideElementOverlay();
  }
}
uploadSelectImage.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    showElementOverlay();
    document.addEventListener('keydown', tryHideElementOverlay);
  }
});
