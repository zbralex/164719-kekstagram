'use strict';
(function () {
  // функция с глобальной областью видимости и переданнами и двумя переданными аргументами uploadFilterForm, applyFilter
  window.initializeFilters = function (uploadFilterForm, applyFilter) {
    var prevFilterClass;
    var prevAreaPressedLabel;
    var ENTER_KEY_CODE = 13;
    // пресловутый чейндж - выбор нужного фильтра
    uploadFilterForm.addEventListener('change', onFilterChange);

    // функция выбора фильтра - код оптимизирован из отдельных переменных в отдельную ф-ю
    function onFilterChange() {
      // ниже переменная для поиска по инпутам, в них добавляются значения value (или имена фильтров)
      var selectedFilter = uploadFilterForm['upload-filter'].value;
      // ниже присваиваем значению новой переменной filterCssClass значение переменной selectedFilter
      var filterCssClass =  selectedFilter;
      // ниже идет переменная, объявленная в файле form.js, которая является функцией с переданными агрументами
      // filterCssClass, prevFilterClass || newFilter, oldFilter
      applyFilter(filterCssClass, prevFilterClass);
      // ниже присваваем значению переменной prevFilterClass зачение переменной filterCssClass
      prevFilterClass = filterCssClass;
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
