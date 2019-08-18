// === REASSIGNMENT AND REDECLARATION === //
//* EXAMPLE 1 - Reassignment
{
  let name = "David";
  console.log(name); // David

  name = "David Jones";
  console.log(name); // David Jones
}

//* EXAMPLE 2 - Declaration w/o Initialization
{
  let chosenPerson;
  let people = ["David", "Dave", "Davy"];

  chosenPerson = people.find(person => person.length > 4);

  console.log(chosenPerson) // David
}

//* EXAMPLE 3 - Redeclaration
{
  {
    let foo = "bar"; {
      let foo = "baz";
      console.log(foo) // baz

      {
        let foo = "bazola";
        console.log(foo) // bazola
      }
    }

    {
      let foo = "quux";
      console.log(foo) // quux
    }
    console.log(foo) // bar
  }
}


// ==== SCOPE ==== //
//* Example - Global Scope
let Dave = "David";
console.log(window.Dave); //{}\ undefined

//* Example - Block Scope
{
  {
    let Dave = "David";
    console.log(Dave); //{} David
  }
  console.log(Dave); //! Uncaught ReferenceError: Dave is not defined
}

//* Example - Function Scope
{
  function test() {
    let foo = "bar"
    console.log(foo);

    function test2() {
      console.log(foo);

    }

    test2();
  }
  test();
  //{} bar
  //{} bar
}