'use strict';
(function () {
  window.initializeScale = function (controlsContainer, step, initScale, newScaleCallBack) {
    var valueElement = controlsContainer.querySelector('.upload-resize-controls-value');
    var resizeButtonDec = controlsContainer.querySelector('.upload-resize-controls-button-dec');
    var resizeButtonInc = controlsContainer.querySelector('.upload-resize-controls-button-inc');
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
// все готово
