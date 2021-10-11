class ScoreLevel{
  score:number = 0;
  level:number = 1;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;
   //  满级
  maxLevel:number;
  //  多少经验升一级
  upScore:number;

  constructor(maxLevel:number = 10, upScore:number = 10) {
    this.levelEle = document.getElementById('level')!;
    this.scoreEle = document.getElementById('score')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + " ";
    if(this.score % this.upScore === 0) {
      this.addLevel()
    }
  }

  addLevel() {
    if(this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + " ";
    }
  }
}

export default ScoreLevel;


// let f = new ScoreLevel
// for(let i = 0; i<100; i++) {
//   f.addScore()
// }