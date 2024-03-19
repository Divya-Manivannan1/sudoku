import { Time } from "./types";

export const time: Time = {
  minutes: 0,
  seconds: 0,
  asString: function () {
    let m: string = `${this.minutes}`;
    let s: string = `${this.seconds}`;

    if (this.minutes < 10) {
      m = "0" + m;
    }
    if (this.seconds < 10) {
      s = "0" + s;
    }

    return m + ":" + s;
  },
  incrementTime: function () {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
    }
  },
};
