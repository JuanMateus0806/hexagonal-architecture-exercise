export class PersonPhone{
  value: number;

  constructor(value: number) {
    this.value=value
    this.value = value;
  }

  private valueIsValid() {
    if (this.value.toString().length != 10){
      throw new Error("phone invalid");
    }
  }
}