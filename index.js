import bookData from './modules/Books';
import { populateStorage, populateNewForm } from './modules/local_storage.js';
import dynamicLoad from './modules/list_books.js';
import { inputTitle, inputAuthor } from './modules/user_interface.js';

const awesome = new bookData();

if (!localStorage.getItem('data')) {
  populateStorage(inputTitle.value, inputAuthor.value);
} else {
  [inputTitle.value, inputAuthor.value] = populateNewForm();
}

if (localStorage.getItem('classData')) {
  awesome.restoreStorage();
}

dynamicLoad(awesome);
