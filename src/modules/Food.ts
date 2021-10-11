class Food {
  element: HTMLElement;

  constructor() {
    // ！ 表示不用担心找不到这个id的情况
    this.element = document.getElementById('food')!
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    let left = Math.round(Math.random() * 29) * 10;
    let top = Math.floor(Math.random() * 30) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;

// let f = new Food
// f.change()
// console.log(f.X, f.Y);
