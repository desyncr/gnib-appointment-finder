class UISelectCategory {
  constructor() {
    this.select = document.getElementById('category');
  }

  disable() {
    this.select.disabled = true;
  }

  value() {
    return this.select.value;
  }
}

export default UISelectCategory;
