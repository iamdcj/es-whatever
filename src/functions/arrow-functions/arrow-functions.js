// === CONTEXT BINDING: REGULAR VS ARROW

// Regular Function Expression
const user = {
  username: "David",
  logUser() {
    console.log("NAME: ", this.username);

    function doubleLog() {
      console.log(this.username);
    }

    doubleLog();
  }
};

// NAME: David
// undefined

// Arrow Function Expression
const user1 = {
  username: "David",
  logUser() {
    console.log("NAME: ", this.username);

    const doubleLog = () => {
      console.log(this.username);
    };

    doubleLog();
  }
};
// NAME: David
// David
