'use strict';
var ESCAPE_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var uploadOverlay = document.querySelector('.upload-overlay');
uploadOverlay.classList.add('invisible');
var uploadSelectImage = document.querySelector('#upload-select-image');
uploadSelectImage.classList.remove('invisible');
var uploadFile = document.querySelector('#upload-file');
uploadFile.addEventListener('change', function () {
  uploadOverlay.classList.remove('invisible');
});
var uploadFormCancel = document.querySelector('.upload-form-cancel');
uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});

// добавляем кейкод на клавишу enter для кнопки выбора фото
uploadSelectImage.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    uploadSelectImage.classList.add('invisible');
    uploadOverlay.classList.remove('invisible');

    // если окно открыто, то при нажатии на esc окно закрывается
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESCAPE_KEY_CODE) {
        uploadSelectImage.classList.remove('invisible');
        uploadOverlay.classList.add('invisible');
      }
    })
  }
});

// применение фильтров
  var filterImagePreview = document.querySelector('.filter-image-preview');
  var uploadFilterForm = document.querySelector('.upload-filter');
  var prevFilterClass;
  uploadFilterForm.addEventListener('change', function () {
    var selectedFilter = uploadFilterForm['upload-filter'].value;
    var filterCssClass = 'filter-' + selectedFilter;
    if (prevFilterClass) {
      filterImagePreview.classList.remove(prevFilterClass);
    }
    prevFilterClass = filterCssClass;
    filterImagePreview.classList.add(filterCssClass);
  });


// применение фильтров клавишей enter
uploadFilterForm.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    var selectedFilter = uploadFilterForm['upload-filter'].value;
    var filterCssClass = 'filter-' + selectedFilter;
    if (prevFilterClass) {
      filterImagePreview.classList.remove(prevFilterClass);
    }
    prevFilterClass = filterCssClass;
    filterImagePreview.classList.add(filterCssClass);
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
