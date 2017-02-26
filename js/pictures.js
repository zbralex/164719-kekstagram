'use strict';

(function () {
  var pictures = [];
  var comments = [];

  function onLoad(data) {
    pictures = data;
    var templateElement = document.querySelector('#picture-template');
    var picturesContainerElement = document.querySelector('.pictures.container');
    comments.forEach(function () {
      var elementToClone = templateElement.content.querySelector('.gallery-overlay-controls-comments');
      var commentElement = elementToClone.cloneNode(true);
      commentElement.setAttribute('.comments-count');
    });

    pictures.forEach(function (pictureData) {
      var elementToClone = templateElement.content.querySelector('.picture');
      var pictureElement = elementToClone.cloneNode(true);
      pictureElement.setAttribute('href', pictureData.url);
      pictureElement.querySelector('img').setAttribute('src', pictureData.url);

      pictureElement.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.showGallery(pictureData);
      });

      picturesContainerElement.appendChild(pictureElement);
    });
  }

  window.load()(onLoad, onError);
})();
