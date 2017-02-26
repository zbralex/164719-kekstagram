'use strict';

(function () {
  var pictures = [];
  var comments = [];

  function onLoad(data) {
    pictures = data;

    var templateElement = document.querySelector('#picture-template');
    var picturesContainerElement = document.querySelector('.pictures.container');


    comments.forEach(function (){
      var elementToClone = templateElement.content.querySelector('.gallery-overlay-controls-comments');
      var commentElement = elementToClone.cloneNode(true);
      commentElement.setAttribute('.comments-count');
    })

    pictures.forEach(function (pictureData) {
      var elementToClone = templateElement.content.querySelector('.picture');
      var pictureElement = elementToClone.cloneNode(true);
      pictureElement.setAttribute('href', pictureData.url);
      pictureElement.querySelector('img').setAttribute('src', pictureData.url);
      //todo количество лайков из поля likes, количество комментариев — из длины массива comments.
      pictureElement.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.showGallery(pictureData);
      })

      picturesContainerElement.appendChild(pictureElement);
    })
  }

  function onError(error) {
    // todo
  }

  window.load()(onLoad, onError);
})();
