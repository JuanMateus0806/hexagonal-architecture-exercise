import { Person } from './Person';

export interface PersonRepository{
  savePerson(person: Person): Promise<void>;
  getAll(): Promise<Person[]>;
  getOneById(id: string): Promise<Person>;
  getByName(personName: string): Promise<Person[]>;
  getByLastName(lastName: string): Promise<Person[]>;
}