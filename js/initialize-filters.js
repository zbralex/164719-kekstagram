'use strict';
(function () {
  window.initializeFilters = function () {
    var filterImagePreview = document.querySelector('.filter-image-preview');
    var uploadFilterForm = document.querySelector('.upload-filter');
    var onFilterChange;
    var prevAreaPressedLabel;
    var ENTER_KEY_CODE = 13;
    var selectedFilter = uploadFilterForm['upload-filter'].value;


    var applyFilter = function (newFilter, oldFilter) {
      filterImagePreview.classList.remove('filter-' + oldFilter);
      filterImagePreview.classList.add('filter-' + newFilter);
      toggleAreaPressed(selectedFilter);
      initializeFilters(onFilterChange, applyFilter);
    };
    uploadFilterForm.addEventListener('change', onFilterChange);
    function toggleAreaPressed() {
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
  }
})();
