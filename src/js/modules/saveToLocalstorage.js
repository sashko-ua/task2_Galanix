function saveToLocalStorage(name, items) {
    localStorage.setItem(name, JSON.stringify(items));
}

export default saveToLocalStorage;