export class PersonId {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.valueIsValid()
  }

  private valueIsValid() {
    if (this.value.length < 34) {
        throw new Error('Value is invalid, must be at least 34 characters long');
    }
  }
}