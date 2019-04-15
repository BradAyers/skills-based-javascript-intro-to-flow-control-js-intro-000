function basicTeenager(age) {

}

function teenager(age) {
  if (age>12 && age< 20) {
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age < 13) {
    return "You are a kid";
  }
  else if (age > 20){
    return "You are a grownup";
  }
  else {
    return "You are a teenager!";
  }
}

function ternaryTeenager(age) {
  return (age>12 && age< 20) ? "You are a teenager!" : "You are not a teenager";
}

function switchAge(age) {
var teenager = "You are a teenager!";
switch (age) {
  case 13 :
  console.log(teenager);
  break;
  case 14 :
  console.log(teenager);
  break;
  case 15 :
  console.log(teenager);
  break;
  case 16 :
  console.log(teenager);
  break;
  case 17 :
  console.log(teenager);
  break;
  case 18 :
  console.log(teenager);
  break;
  case 19 :
  console.log(teenager);
  break;
  default :
  console.log("You have an age");
}
}
