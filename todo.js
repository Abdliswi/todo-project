alert("hello dears")
var username = prompt("please enter your name" )
console.log(username)

var gender = prompt("what`s your gender (female/male)")
console.log(gender)

var age = prompt("please enter your age")
if (age <= 0) {
    alert( "your age is invaid") ;
}
console.log(age)


welcoming = confirm("do you like to conitnue welcoming you or skip it?")

    if(welcoming == true)
{
  if (gender ==  "male"  )  {
    namevar =  alert( `welcome Mr. ${username}`) ;
    }   else if   ( gender == "female" ) {
    namevar =  alert( `welcome Ms. ${username}`) ;
    }    else {
    namevar = alert( "welcome to our website "+username) ;
      }
      console.log(namevar)
    }



  
    

alert("Now you can enjoy browsering our website")

