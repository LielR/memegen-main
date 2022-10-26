'use strict';

function onInit() {
  renderGallery();
}

function onSelectedImage(el) {
  hideMemes();
  hideGallery();
  initEditor(el);
}