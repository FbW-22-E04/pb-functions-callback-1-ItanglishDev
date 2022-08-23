function greetMessage(name) {

  console.log(`Good Morning, ${name}`);
}

greetMessage("John"); // print "Good Morning, John"


function greetUsers(list, funct) {
  for (let name of list) {
    funct(name)
  };
}

// const names = greetUsers()
greetUsers(["John", "Peter", "Mark"], greetMessage)

    // "Good Morning, John"
    // "Good Morning, Peter"
    // "Good Morning, Mark"