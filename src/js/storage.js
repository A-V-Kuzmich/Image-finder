function cleanStorage() {
  sessionStorage.clear();
}

function getStorage() {
  try {
    const serializedState = sessionStorage.getItem('settings');
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
}

function setStorage(array) {
  const ar = getStorage().concat(array);
  sessionStorage.setItem('settings', JSON.stringify(ar));
}

export { cleanStorage, getStorage, setStorage };
