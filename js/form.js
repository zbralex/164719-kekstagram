'use strict';
var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var uploadOverlay = document.querySelector('.upload-overlay');
uploadOverlay.classList.add('invisible');
var uploadSelectImage = document.querySelector('#upload-select-image');
uploadSelectImage.classList.remove('invisible');
var uploadFile = document.querySelector('#upload-file');
uploadFile.addEventListener('change', function () {

});
var uploadFormCancel = document.querySelector('.upload-form-cancel');
uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});
// функция показа элемента
function showElement() {
  uploadSelectImage.classList.add('invisible');
  uploadOverlay.classList.remove('invisible');
}
// функция скрытия элемента
function hideElement() {
  uploadSelectImage.classList.remove('invisible');
  uploadOverlay.classList.add('invisible');
  document.removeEventListener('keydown', tryHideElement);
}
// функция попытыки скрытия элемента
function tryHideElement(evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    hideElement();
  }
}
uploadSelectImage.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    showElement();
    document.addEventListener('keydown', function (evt) {
      tryHideElement();
    });
  }
});

// применение фильтров
var filterImagePreview = document.querySelector('.filter-image-preview');
var uploadFilterForm = document.querySelector('.upload-filter');
var prevFilterClass;
var prevAreaPressedLabel;

// пресловутый чейндж - выбор нужного фильтра
uploadFilterForm.addEventListener('change', onFilterChange);

// функция выбора фильтра - код оптимизирован из отдельных переменных в отдельную ф-ю
function onFilterChange() {
  var selectedFilter = uploadFilterForm['upload-filter'].value;
  var filterCssClass = 'filter-' + selectedFilter;
  if (prevFilterClass) {
    filterImagePreview.classList.remove(prevFilterClass);
  }
  prevFilterClass = filterCssClass;
  filterImagePreview.classList.add(filterCssClass);
  toggleAreaPressed(selectedFilter);
}
// обновляем атрибуты area-pressed
function toggleAreaPressed(selectedFilter) {
  if (prevAreaPressedLabel) {
    prevAreaPressedLabel.setAttribute('area-pressed', 'false');
  }
  var labelElement = document.querySelector('.upload-filter-label-' + selectedFilter);
  labelElement.setAttribute('area-pressed', 'true');
  prevAreaPressedLabel = labelElement;
}

// применение фильтров клавишей enter
var uploadFilterControls = document.querySelector('.upload-filter-controls');
uploadFilterControls.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    var inputElement = event.target.previousElementSibling;
    uploadFilterForm['upload-filter'].value = inputElement.getAttribute('value');
    onFilterChange();
  }
});

// РЕСАЙЗ
var resizeButtonDec = document.querySelector('.upload-resize-controls-button-dec');
var resizeButtonInc = document.querySelector('.upload-resize-controls-button-inc');
var valueElement = document.querySelector('.upload-resize-controls-value');

resizeButtonDec.addEventListener('click', function () {
  var newScale = getElementScaleValue() - 25;
  if (newScale <= 25) {
    newScale = 25;
  }
  setScaleToElement(newScale);
  updatePreviewScale();
});
resizeButtonInc.addEventListener('click', function () {
  var newScale = getElementScaleValue() + 25;
  if (newScale >= 100) {
    newScale = 100;
  }
  setScaleToElement(newScale);
  updatePreviewScale();
});

function updatePreviewScale() {
  filterImagePreview.style.transform = 'scale(' + (getElementScaleValue() / 100) + ')';
}

function getElementScaleValue() {
  return parseInt(valueElement.value, 10);
}

function setScaleToElement(value) {
  valueElement.value = value + '%';
}
