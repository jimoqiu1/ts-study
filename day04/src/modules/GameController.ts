// 引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制类
class GameController {
  // 定义三个属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 分数盘
  scorePanel: ScorePanel;
  // 设置一个变量存储蛇的移动方向
  direction: string = "";

  // 设置一个变量表示游戏是否结束
  isLeave = true

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 5);
  }

  // 游戏初始化
  init() {
    // 绑定键盘按下事件
    // bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    // 创建键盘按下的响应函数
    this.run()
  }
  keydownHandler(event: KeyboardEvent) {
    // ArrowRight
    // ArrowDown
    // ArrowUp
    // ArrowLeft
    // console.log(event.key)
    // 修改方向
    // 这里要注意this的指向    没有加bind的时候（谁调用指向谁）---this指向了document
    // 加上bind 后改变了this的指向
    // console.log(this)   // document

    // 需要检查event.key的值是否合法

    this.direction = event.key;
  }
  // 创建一个让蛇移动的方法
  run() {
    /**
     * 根据direction 来使蛇的方向发生改变
     */
    // 获取蛇目前的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    // 根据方向来修改X和Y值
    switch (this.direction) {
      case "ArrowRight":
      case "Right":
        // 向右移动
        X += 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下移动
        Y += 10;
        break;
      case "ArrowUp":
      case "Up":
        // 向上移动
        Y -= 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左移动
        X -= 10;
        break;
    }

    // 检查蛇是否吃到了食物
    this.checkEat(X, Y)
    // 修改X和Y 
    try{
      this.snake.X = X
      this.snake.Y = Y
    }catch(e){
      // 进入了catch，说明出现了异常，弹出一个提示信息
      alert(e.message + 'GAME OVER!')
      // 将isLeave 设置为false
      this.isLeave = false
    }
    
    // 开启定时调用
    this.isLeave && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
  // 检查蛇是否吃到了食物
  checkEat(X:number, Y:number) {
    if(X === this.food.X && Y === this.food.Y) {
      // 吃到了食物
      // 食物的位置发生改变
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 蛇要增加一节
      this.snake.addBody()
    }
  }
}

export default GameController;
