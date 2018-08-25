class UIButtonToggler {
  constructor() {
    this.button = document.getElementById('button');
  }

  onclick(callback) {
    let self = this;
    self.button.onclick = function () {
      self.button.disabled = true;
      callback();
    };
  }
}

export default UIButtonToggler;
