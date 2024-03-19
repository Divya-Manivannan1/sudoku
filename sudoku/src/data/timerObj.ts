import { Time } from "./types";

export const time: Time = {
  minutes: 0,
  seconds: 0,
  asString: () => {
    let m:number = this.minutes ;
    let  s:number = `${this.seconds}`;

      if(m==s){}
    return ``;
  },
};
