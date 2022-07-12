interface SquareConfig {
  color?: string,
  width?: number,
  [propName: string]: any
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  console.log('hahha')
  return {
    color: 'yellow',
    area: 1222
  }
}

// let mySquare = {colour: 'yellow', width: 133}

// let square = createSquare(mySquare)

let mySquare = createSquare({ colour: "red", width: 100 });


// 类类型
// interface ClockInterface {
//   currentTime: Date,
//   setTime: (d: Date) => void
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date()
//   setTime(d: Date) {
//     this.currentTime = d
//   }
//   constructor(h: number, m: number) { }
// }

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick: () => void
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
