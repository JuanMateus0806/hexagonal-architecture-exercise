import { PersonId } from './value-objects/PersonId';
import { PersonName } from './value-objects/PersonName';
import { PersonTypeDocument } from './value-objects/PersonTypeDocument';
import { PersonDocument } from './value-objects/PersonDocument';
import { PersonLastName } from './value-objects/PersonLastName';
import { PersonEmail } from './value-objects/PersonEmail';
import { PersonPhone } from './value-objects/PersonPhone';

export class Person {
  readonly id: PersonId;
  typeDocument: PersonTypeDocument;
  document: PersonDocument;
  name: PersonName;
  lastName: PersonLastName;
  email: PersonEmail;
  phone: PersonPhone;
  emergencyPhone: PersonPhone;

  constructor(id: PersonId, typeDocument: PersonTypeDocument, document: PersonDocument,
              name: PersonName, lastName: PersonLastName, email: PersonEmail, phone: PersonPhone, emergencyPhone: PersonPhone) {
    this.id = id;
    this.typeDocument = typeDocument;
    this.document = document;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.emergencyPhone = emergencyPhone;
  }
}