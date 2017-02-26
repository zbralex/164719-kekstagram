'use strict';

(function () {
  var originalData = [];

  var templateElement = document.querySelector('#picture-template');
  var elementToClone = templateElement.content.querySelector('.picture');
  var filterElement = document.querySelector('.filters');
  var picturesContainerElement = document.querySelector('.pictures.container');

  function onLoad(data) {
    originalData = data;
    filterElement.classList.remove('hidden');
    renderPictures(originalData);
  }

  function renderPictures(picturesData) {
    picturesContainerElement.innerHTML = '';

    picturesData.forEach(function (pictureData) {
      var pictureElement = elementToClone.cloneNode(true);
      pictureElement.setAttribute('href', pictureData.url);
      pictureElement.querySelector('img').setAttribute('src', pictureData.url);
      pictureElement.querySelector('.picture-comments').innerText = pictureData.comments.length;
      pictureElement.querySelector('.picture-likes').innerText = pictureData.likes;

      pictureElement.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.showGallery(pictureData);
      });

      picturesContainerElement.appendChild(pictureElement);
    });
  }


  filterElement.addEventListener('change', function () {
    switch (getFilterValue()) {
      case 'new':
        renderPictures(getRandomNewPictures());
        break;
      case 'discussed':
        renderPictures(getSortedByCommentsPictures());
        break;
      case 'popular':
        renderPictures(originalData);
        break;
    }
  });

  function getFilterValue() {
    for (var i = 0; i < filterElement['filter'].length; i++) {
      var inputElement = filterElement['filter'][i];
      if (inputElement.checked) {
        return inputElement.value;
      }
    }
    return null;
  }

  function getRandomNewPictures() {
    return shuffle(originalData).slice(0, 10);
  }

  function shuffle(a) {
    var shuffled = a.slice();
    var j;
    var x;
    var i;
    for (i = shuffled.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = shuffled[i - 1];
      shuffled[i - 1] = shuffled[j];
      shuffled[j] = x;
    }
    return shuffled;
  }

  function getSortedByCommentsPictures() {
    function compare(a, b) {
      if (a.comments.length < b.comments.length) {
        return 1;
      }
      if (a.comments.length > b.comments.length) {
        return -1;
      }
      return 0;
    }

    return originalData.slice().sort(compare);
  }

  window.load(onLoad);
})();
