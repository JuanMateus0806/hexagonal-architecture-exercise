export class PersonDocument{
  value:number;

  constructor(value:number) {
    this.value = value;
    this.valueIsValid()
  }

  private valueIsValid(){
    if (this.value.toString().length < 7){
      throw new Error(`Value is invalid, must be at least 7 characters long.`);
    }
  }
}