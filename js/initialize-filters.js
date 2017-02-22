'use strict';
(function () {
  window.initializeFilters = function () {
    var filterImagePreview = document.querySelector('.filter-image-preview');
    var uploadFilterForm = document.querySelector('.upload-filter');
    var prevFilterClass;
    var prevAreaPressedLabel;
    var ENTER_KEY_CODE = 13;
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
  };
})();
