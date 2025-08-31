export class PersonName {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.valueIsValid()
  }

  private valueIsValid() {
    if (this.value.length < 2) {
      throw new Error('Value is invalid, must be at least 2 characters long');
    }
  }
}