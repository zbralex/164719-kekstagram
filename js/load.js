'use strict';
(function () {
  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  window.load = function (onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (evt) {
      if (evt.target.status >= 200) {
        onLoad(evt.target.response);
      }
    });
    xhr.responseType = 'json';
    xhr.open('GET', DATA_URL);
    xhr.send();
  };
})();
