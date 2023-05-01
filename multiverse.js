//create a class Hospital Employee and add a constructure with the argument of name. Add the this. method to instantiate the remaining vacation days
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  //get method applied to the name
  get name() {
    return this._name;
  }
  //get remaining vacation days from this. method which is the instance of the class
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  //get remaining vacation days from this. method which is the instance of the class
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  //create a static method of the class generate password that can only be called on the class itself
  static generatePassword() {
    return Math.floor(Math.random() * 10000); //using math.floor and math.random, return a random integer between zero and 10,000 to generate a password
  }
}
//create a sub-class nurse from the class Hospital employee, add the constructor function with the name and certifications as arguments.
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
  //add the super class to call the function name to the class Nurse. Using the this. method, declare the certifications function
    super(name);
    this._certifications = certifications;
  } 
  //using the get method, return the certifications function
  get certifications() {
    return this._certifications;
  }
  //create a function called add certification and add the argument new certification so the nurse or any hospital employee can add certifications as they get them
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
//create a nurse class called object called Nurse Olynyk and she will be in the Pediatrics trauma department
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
//using the Nurse Olynyk object, calculate how many vacation days she will be taking
nurseOlynyk.takeVacationDays(5);
//print the vacation days of Nurse Olynyk
console.log(nurseOlynyk.remainingVacationDays);
//using the constructor argument, I add a certification of genetics to the object Nurse Olynyk
nurseOlynyk.addCertification('Genetics');
//log the certifications of the object Nurse Olynyk
console.log(nurseOlynyk.certifications);
