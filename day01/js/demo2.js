// 函数
function sayhi() {
    return 'haahahah';
}
var res = sayhi();
console.log(res);
console.log('hahaccccccccc');
// ts 中实参和形参的类型必须一致，数量也必须一致
function jump(position) {
    return 'ahhaha' + position;
}
console.log(jump('p城'));
// 可选参数 在形参后面加个问号，表示可传可不传
function jump2(position) {
    return 'kkkk';
}
// 默认值,带默认值的参数，本身就是可选参数
function jump3(position) {
    if (position === void 0) { position = 'Pcheng'; }
    return '去不?';
}
// 剩余参数 ...
// 只能有一个，只能定义为数组，只能放最后
function jump4() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
