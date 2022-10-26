'use strict';

let gMemes = [];
let gFilterBy = '';

const gGallery = document.querySelector('.main-gallery');
const gSelection = document.querySelector('.selection');
const gMainMemes = document.querySelector('.main-memes');

const gImages = [
  { id: 1, keywords: ['public figure', 'politics'] },
  { id: 2, keywords: ['dog', 'animals'] },
  { id: 3, keywords: ['baby', 'dog', 'animals', 'friendship'] },
  { id: 4, keywords: ['cat', 'animals'] },
  { id: 5, keywords: ['baby', 'reaction'] },
  { id: 6, keywords: ['explain', 'reaction'] },
  { id: 7, keywords: ['baby', 'reaction'] },
  { id: 8, keywords: ['explain', 'reaction'] },
  { id: 9, keywords: ['baby', 'reaction', 'evil'] },
  { id: 10, keywords: ['public figure', 'politics', 'laugh', 'reaction'] },
  { id: 11, keywords: ['love', 'kiss', 'tussle'] },
  { id: 12, keywords: ['what', 'reaction'] },
  { id: 13, keywords: ['celeb', 'actor', 'sexy'] },
  { id: 14, keywords: ['celeb', 'actor'] },
  { id: 15, keywords: ['celeb', 'actor'] },
  { id: 16, keywords: ['facepalm', 'reaction', 'celeb', 'actor'] },
  { id: 17, keywords: ['public figure', 'politics', 'madman'] },
  { id: 18, keywords: ['explain', 'reaction'] },
];

function renderGallery() {
  const fImgs = getFilteredImages();

  const string = fImgs.map(
    (image) =>
      `<img src="img/memes/${image.id}.jpg" data-id="${image.id}" onclick="onSelectedImage(this)" />`
  );

  gSelection.innerHTML = string.join('');
}

function renderMemes() {
  const memes = loadFromStorage(KEY_MEMES);

  if (!memes) return (gSavedMemes.innerHTML = 'Not exists memes!');

  const string = memes.map(
    (meme) =>
      `<img src="${meme.img}" data-id="${meme.id}" onclick="onSelectedImage(this)" />`
  );

  gSavedMemes.innerHTML = string.join('');
}

function initGallery(ev) {
  ev.preventDefault();
  loadGallery();
}

function loadGallery() {
  gGallery.classList.remove('dn');
  document.body.classList.remove('unavailable');
  if (gFilterBy === '') {
    document.querySelector('.search-input').value = '';
    renderGallery();
  }
}

function hideGallery() {
  gGallery.classList.add('dn');
}

function loadMemes(ev) {
  gMainMemes.classList.remove('dn');
  document.body.classList.remove('unavailable');
}

function hideMemes() {
  gMainMemes.classList.add('dn');
}

function getFilteredImages() {
  if (gFilterBy === '') return gImages;

  return gImages;
}

function hideGallery() {
  gGallery.classList.add('dn');
}
