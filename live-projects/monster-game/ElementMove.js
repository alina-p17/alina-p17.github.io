class ElementMove {
  moveRight() {
    const oldLeft = parseInt(this.element.style.left);
    const newLeft = oldLeft + 10;
    if (newLeft <= 360) {
      this.element.style.left = newLeft + "px";
    }
  }

  moveDown() {
    const oldTop = parseInt(this.element.style.top);
    const newTop = oldTop + 10;
    if (newTop <= 360) {
      this.element.style.top = newTop + "px";
    }
  }

  moveLeft() {
    const oldLeft = parseInt(this.element.style.left);
    const newLeft = oldLeft - 10;
    if (newLeft >= 0) {
      this.element.style.left = newLeft + "px";
    }
  }
  moveUp() {
    const oldTop = parseInt(this.element.style.top);
    const newTop = oldTop - 10;
    if (newTop >= 0) {
      this.element.style.top = newTop + "px";
    }
  }
}

export default ElementMove;
