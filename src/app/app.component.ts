import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularclasses';
  skill: string[] = ["R10", "R11", "R12"];
  address: Address = new Address("Bashbari", "mohammadpur", "Dhaka", 1215);
  user: User = new User(this.address, "100", "sss", "ss@gmail.com", "R12", "female", false, true);
  public m1(data): void {
    console.log(data);
  }
}
export class User {
  address: Address;
  id: string;
  name: string;
  email: string;
  round: string;
  gender: string;
  skilljava: boolean;
  skillcs: boolean;
  constructor(addrress: Address, id: string, name: string, email: string, round: string, gender: string, skilljava: boolean, skillcs: boolean) {
    this.address = addrress;
    this.id = id;
    this.name = name;
    this.email = email;
    this.round = round;
    this.gender = gender;
    this.skilljava = skilljava;
    this.skillcs = skillcs;
  }
}
export class Address {
  street: string;
  city: string;
  state: string;
  postalcode: number;
  constructor(street: string, city: string, state: string, postalcode: number) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.postalcode = postalcode;
  }
}