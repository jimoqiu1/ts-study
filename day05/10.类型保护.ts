// is
function isNumber(padding: any): padding is number {
  return typeof padding === 'number'
}



// typeof
function padLeft(value: string, padding: number | string): string {
  if(typeof padding === 'string') {
    return padding + value
  }
  if(typeof padding === 'number') {
    return padding.toString() + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

let value = padLeft('haha', 12)
console.log(value)


// instanceof
interface Padder {
  getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) { }
  getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
      return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5 ?
      new SpaceRepeatingPadder(4) :
      new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder; // 类型细化为'StringPadder'
}