const formStorage = {
  title: '',
  author: '',
};

export function populateStorage(title, author) {
  formStorage.title = title;
  formStorage.author = author;
  const storeData = JSON.stringify(formStorage);
  localStorage.setItem('data', storeData);
}

export function populateNewForm() {
  const storeData = JSON.parse(localStorage.getItem('data'));
  return [storeData.title, storeData.author];
}
