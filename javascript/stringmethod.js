//substr()--it'll extract one string from the existing string
let subject ="javascript"
console.log(subject);

let newval=subject.substring(4)
console.log(newval);

let newval2=subject.substring(0,4)
console.log(newval2);

//trim()-it'll remove or cut extra space from both the side of string
let place= "       Bengluru  "
console.log(place);

let cutspace=place.trim()
console.log(cutspace);

//charAt()-->it will give the index where  value is present
let girl="sayli is good girl"
console.log(girl);
console.log(girl.charAt(4));



let msg="you're a good student"
console.log(msg);
//replace()-->this specifies method will replace the only specific string
let replaceval= msg.replace("good","awesome","greate")
console.log(replaceval);


let msg2 ="i love myself, i love you , i love everyone"
console.log(msg2);
//replaceAll()--> it repalce the al lstring in given string

let result=msg2.replaceAll("love","like")
let result2=msg2.replace("love","like")
console.log(result);
console.log(result2);

let sorry ="I'm sorry! "
let resultforwife=sorry.repeat(10,"")
console.log(resultforwife);


//padstart()--
let word="code"
let result3=word.padStart(10,"*")
console.log(result3);

let groom=" Atharv"
let wedding= groom.padStart(17,"sneha")
console.log(wedding);

//padend()
let trainer="pradeep "
let fullname=trainer.padEnd(11,"sir")
console.log(fullname);













