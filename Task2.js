let person = {
    name: "John Doe",
    age: 25,
    address: "123 Main Street"
  };
  
  console.log(person.name); // Output: "John Doe"
  console.log(person.age); // Output: 25
  console.log(person.address); // Output: "123 Main Street"
  
  person.age = 30;
  console.log(person.age); // Output: 30
  
  person.email = "john.doe@example.com";
  console.log(person.email); // Output: "john.doe@example.com"
  
  delete person.address;
  console.log(person.address); // Output: undefin  