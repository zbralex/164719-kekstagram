'use strict';

(function () {

  var galleryOverlay = document.querySelector('.gallery-overlay');
  var galleryOverlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
  var galleryOverlayControlsComments = galleryOverlay.querySelector('.gallery-overlay-controls-comments');
  var likesCount = galleryOverlay.querySelector('.likes-count');

  galleryOverlayClose.addEventListener('click', hideGallery);


  function hideGallery() {
    galleryOverlay.classList.add('invisible');
  }

  window.showGallery = function (pictureData) {
    galleryOverlay.classList.remove('invisible');

    galleryOverlay.querySelector('img').setAttribute('src', pictureData.url);
    likesCount.innerText = pictureData.likes;
    galleryOverlayControlsComments.innerText = pictureData.comments.length;
  }
})();
