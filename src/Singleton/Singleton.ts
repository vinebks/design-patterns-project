export class Singleton {
  private static _instance: Singleton | null = null;
  anyData: any;

  private constructor() {
    this.anyData = {};
  }
  static get instance(): Singleton {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}

const intance1 = Singleton.instance;
const intance2 = Singleton.instance;

console.log(intance1 === intance2); // true
