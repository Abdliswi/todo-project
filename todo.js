//var username = prompt("please enter your name" )

//console.log(username)



questionsadded = ["are are you interested in our website? (yes/no)", "do you have a car? (yes/no)", "do you like messi? (yes/no)"]


function questionsaddfunction ( asking ) {
 let printedAnswer;

  for (let i = 0 ; i < asking.length; i++ ){ 
    printedAnswer = useranswer (  prompt(  asking[i]) )
}
  let print =outputAns( printedAnswer )   // لطباعة اجوبة ال اراي 
}


let array1 = [];   // من اجل عرض الاجوبة على شكل اراي 
 
function useranswer (answer){                                                // نعمل فنكشن للاسئلة  2 نعمل سويتش للاجوبة عشان نطبعهم 3 فنكشن طبعاة الاجوبة 
  switch (answer) {
    case "no":
      array1.push("no");  
      break;
    case "yes":
        array1.push("yes");
        break;
    case "":   // فراغ يعني لا شيء 
        array1.push("invalid");
        break;
    default:
      break;
  }
  return array1
}
function outputAns(printAsnwer) {
  for(let i = 0 ; i < printAsnwer.length ; i++  ){
    console.log (printAsnwer[i]);
  }
}
questionsaddfunction (questionsadded);

// here task 06








alert("hello dear")
var username = prompt("please enter your name" )
console.log(username)

var gender = prompt("what`s your gender (Female/Male)")
gender     = gender.toLowerCase
if (gender !== "Male" || gender !== "Female" ) {
}

console.log(gender)

var age = prompt("please enter your age")
if (age <= 0) {
    alert( "your age is invaid") ;
}
console.log(age)


welcoming = confirm("do you like to conitnue welcoming you or skip it?")

    if(welcoming == true)
{
  if (gender ==  "male" || "Male"  )  {
    namevar =  alert( `welcome Mr. ${username}`) ;
    }   else if   ( gender == "female" ||"Female") {
    namevar =  alert( `welcome Ms. ${username}`) ;
    }    else {
    namevar = alert( "welcome to our website "+ username) ;
      }
      console.log(namevar)
    }


alert("Now you can enjoy browsering our website")






/*
this is my trials for somethings not considered in this assignment

/*
var freinds = ["abd", "abood", ""];

for ( i= 0;  i < freinds.length ;  i++) {
   
    console.log (  freinds[ i ])
}
*/