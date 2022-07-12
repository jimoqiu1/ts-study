
// 定义积分盘
class ScorePanel {
  // score 和 level 代表用户的分数
  score = 0
  level = 1
  // 这两个属性代表分数和等级所在的元素
  scoreEle: HTMLElement
  levelEle: HTMLElement

  // 设置一个变量限制等级
  maxLevel: number

  // 设置一个变量表示多少分升级
  upScore: number

  constructor(maxLevel: number= 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 设置一个加分的方法
  addScore() {
    // 分数自增
    this.score++
    this.scoreEle.innerHTML = this.score + ''

    // 判断分数是多少时升级
    if(this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 提升等级
  levelUp() {
    if(this.level<this.maxLevel) {
      this.level++
      this.levelEle.innerHTML = this.level + ''
    }
  }
}

export default ScorePanel