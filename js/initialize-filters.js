'use strict';
(function () {

  window.initializeFilters = function (uploadFilterForm, applyFilter) {
    var prevFilterClass;
    var prevAreaPressedLabel;
    var ENTER_KEY_CODE = 13;

    uploadFilterForm.addEventListener('change', onFilterChange);

    function onFilterChange() {

      var selectedFilter = uploadFilterForm['upload-filter'].value;

      var filterCssClass = selectedFilter;

      applyFilter(filterCssClass, prevFilterClass);

      prevFilterClass = filterCssClass;
      toggleAreaPressed(selectedFilter);
    }

    function toggleAreaPressed(selectedFilter) {
      if (prevAreaPressedLabel) {
        prevAreaPressedLabel.setAttribute('area-pressed', 'false');
      }
      var labelElement = document.querySelector('.upload-filter-label-' + selectedFilter);
      labelElement.setAttribute('area-pressed', 'true');
      prevAreaPressedLabel = labelElement;
    }

    var uploadFilterControls = document.querySelector('.upload-filter-controls');
    uploadFilterControls.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEY_CODE) {
        var inputElement = event.target.previousElementSibling;
        uploadFilterForm['upload-filter'].value = inputElement.getAttribute('value');
        onFilterChange();
      }
    });
  };
})();
