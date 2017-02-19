'use strict';
(function () {

  window.initializeScale = function (controlsContainer, step, initScale, newScaleCallBack) {

    controlsContainer.addEventListener('click', function (evt) {
      if (evt.target === resizeButtonDec || evt.target === resizeButtonInc) {
        var stepSign;
        if (evt.target === resizeButtonDec) {
          stepSign = -1;
        }
        else {
          stepSign = 1;
        }

        var newScale = getElementScaleValue() + stepSign * step;
        if (newScale >= step && newScale <= 100) {
          setScaleToValueElement(newScale);
          newScaleCallBack(newScale / 100);
        }
      }
    });
    setScaleToValueElement(initScale * 100);
    newScaleCallBack(initScale);
  }
})();
