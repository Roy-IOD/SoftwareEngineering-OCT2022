import React from "react";
class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "John Doe",
      age: 14,
    };
  }
}

export default Person;