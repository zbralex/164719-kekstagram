'use strict';

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
