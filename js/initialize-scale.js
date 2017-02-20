'use strict';
(function () {
  var resizeButtonDec = document.querySelector('.upload-resize-controls-button-dec');
  var resizeButtonInc = document.querySelector('.upload-resize-controls-button-inc');
  var valueElement = document.querySelector('.upload-resize-controls-value');
  window.initializeScale = function (controlsContainer, step, initScale, newScaleCallBack) {
    setScaleToValueElement(initScale * 100);
    newScaleCallBack(initScale);
    controlsContainer.addEventListener('click', function (evt) {
      if (evt.target === resizeButtonDec || evt.target === resizeButtonInc) {
        var stepSign;
        if (evt.target === resizeButtonDec) {
          stepSign = -1;
        } else {
          stepSign = 1;
        }
        var newScale = getElementScaleValue() + stepSign * step;
        if (newScale >= step && newScale <= 100) {
          setScaleToValueElement(newScale);
          newScaleCallBack(newScale / 100);
        }
      }
    });
    function setScaleToValueElement(value) {
      valueElement.value = value + '%';
    }
    function getElementScaleValue() {
      return parseInt(valueElement.value, 10);
    }
  };
})();
