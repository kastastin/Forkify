import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this._toggleWindow.bind(this));
    this._overlay.addEventListener('click', this._toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (event) {
      event.preventDefault();

      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);

      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();

// git add .
// git commit -m 'Uploading a New Recipe - Part 1: addRecipeView, open/close modal, upload btn'
// git push
