class Food {
  // 定义食物对应的元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素并将其赋值给element
    // 叹号是指这个值不会是空值
    this.element = document.getElementById('food')!
  }
  
  // 获取食物x轴坐标
  get X() {
    return this.element.offsetLeft
  }
  // 获取食物y轴坐标
  get Y() {
    return this.element.offsetTop
  }
  // 修改食物的位置
  change() {
    // 生成随机的位置
    // 食物的位置范围0——290
    // 蛇移动一格是10px，所以食物的位置必须是整十的才行，不然蛇会吃不到食物
    let maxWidth = document.getElementById('stage')!.offsetWidth
    let maxHeight = document.getElementById('stage')!.offsetHeight
    let maxX =maxWidth - this.element.offsetWidth
    let maxY =maxHeight - this.element.offsetHeight
    let top = Math.round(Math.random()*maxX/10)*10
    let left = Math.round(Math.random()*maxY/10)*10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }

}

export default Food