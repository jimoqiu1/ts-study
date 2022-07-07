// 函数
function sayhi(): string{
  return 'haahahah'
}
let res = sayhi()
console.log(res)
console.log('hahaccccccccc');


// ts 中实参和形参的类型必须一致，数量也必须一致

function jump(position: string) {
  return 'ahhaha' + position
}
console.log(jump('p城'))
// 可选参数 在形参后面加个问号，表示可传可不传
function jump2(position?:string) {
  return 'kkkk'
}
// 默认值,带默认值的参数，本身就是可选参数
function jump3(position: string = 'Pcheng') {
  return '去不?'
}
// 剩余参数 ...
// 只能有一个，只能定义为数组，只能放最后
function jump4(...args:[]) {

}

let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

