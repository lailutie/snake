import Food from "./Food"
import ScoreLevel from "./ScoreLevel"
import Snake from "./Snake"

class GameControl {
  food: Food;
  scoreLevel: ScoreLevel;
  snake: Snake;

  direction: string = '';

  isLive: boolean = true;

  constructor() {
    this.food = new Food();
    this.scoreLevel = new ScoreLevel();
    this.snake = new Snake();

    this.init()
  }

  init() {
    document.addEventListener('keydown', this.keyDownHandle.bind(this));
    this.run()
  }

  keyDownHandle(event: KeyboardEvent) {
    this.direction = event.key;
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10
        break
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    this.checkEat(X, Y)

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    }catch(e:any) {
      alert(e.message + "GAME OVER!!!")
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scoreLevel.level - 1) * 30)
  }

  //用来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物的位置要进行重置
      this.food.change();
      // 分数增加
      this.scoreLevel.addScore();
      // 蛇要增加一节
      this.snake.addBodies();
    }
  }


}

export default GameControl;