export class PersonEmail{
  value: string;

  constructor(value: string) {
    this.value = value;
    this.valueIsValid();
  }

  private valueIsValid() {
    if (!this.value.includes("@") || !this.value.includes(".")) {
      throw new Error('Value is invalid, Email must be a valid address');
    }
  }
}