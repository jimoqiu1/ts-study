class Snake {
  // 表示蛇头的元素
  head: HTMLElement
  // 蛇的身体包括了蛇头
  bodies: HTMLCollection
  // 获取蛇的容器
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector("#snake > div") as HTMLElement
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  // 设置蛇头的坐标
  set X(value: number) {
    // 如果新值与旧值相等，就不做修改了
    if(this.X === value) {
      return
    }
    // X的合法值
    let maxWidth = document.getElementById('stage')!.offsetWidth
    let maxX =maxWidth - this.head.offsetWidth
    
    if(value < 0 || value > maxX) {
      // 说明蛇撞墙了
      throw new Error('蛇撞墙了....')
    }

    // 蛇在水平上移动，在蛇不只一节，向左走的时候不能再向右掉头
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      // 水平方向发生了掉头
      // 如果蛇发生了掉头，应该让蛇向反方向走
      if(value > this.X) {
        // 如果设置的值大于旧值X，说明蛇在向左走，此时发生掉头，应该让蛇继续向左走
        value = this.X - 10
      }else {
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value: number) {
    // Y的合法值
    let maxHeight = document.getElementById('stage')!.offsetHeight
    let maxY =maxHeight - this.head.offsetHeight
    
    if(this.Y === value) return 
    if(value < 0 || value >maxY) {
      // 说明蛇撞墙了
      throw new Error('蛇撞墙了....')
    }
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.Y) {
        // 如果设置的值大于旧值X，说明蛇在向右走，此时发生掉头，应该让蛇继续向右走
        value = this.Y - 10
      }else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  // 添加身体
  addBody() {
    // 插入元素内部的最后一个子节点之后
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  // 身体移动方法
  moveBody() {
    /**
     * 将后边的身体设置为前一节身体的位置
     */
    // 遍历获取所有的身体，注意蛇头不需要进行设置，蛇头是在setX中进行传值设置的，这里设置的是身体的移动位置，所以i不能等于0
    for(let i =this.bodies.length - 1; i>0 ; i--) {
      // 获取前边的身体,将前边身体的位置赋给后一节身体
      // 注意bodies是HTMLCollection类型的，里面的元素是Element类型,而offsetLeft 需要的是HTMLElement的类型才能调用，所以这里需要加断言告诉编译器这里就是HTMLElement类型
      let X =(this.bodies[i-1] as HTMLElement).offsetLeft
      let Y =(this.bodies[i-1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }
  // 检查蛇头与身体是否发生碰撞
  checkHeadBody() {
    for(let i =1; i<this.bodies.length ;i++) {
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头已经撞到了身体
        throw new Error('撞到了自己！')
      }
    }
  }

}

export default Snake