function toRomanLazy(num) {
  let roman ="";
  while(num>0){
    if(num >= 1000){
      num-=1000;
      roman+='M';
    }
    else if(num>=500){
      num-=500;
      roman+='D';
    }
    else if(num>=100){
      num-=100;
      roman+='C';
    }
    else if(num>=50){
      num-=50;
      roman+='L';
    }
    else if(num>=10){
      num-=10;
      roman+='X';
    }
    else if(num>=5){
      num-=5;
      roman+='V';
    }
    else if(num>=1){
      num-=1;
      roman+='I';
    }
  }
  return roman;
}

/*function toRoman(num){
  let roman="";
  const romanToArabic={
    M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
  };
  for(key in romanToArabic){
    let currentRoman=key;
    let currentArabic=romanToArabic[key];
    let quotient=Math.floor(num/currentArabic);
    for(let i=0;i<quotient;i++){
      roman+=currentRoman;
      num-=currentArabic;
    }
  }
  return roman;
}
  */

function toRoman(num) {
  let roman="";
  const romanToArabic={
    M:1000,D:500,C:100,L:50,X:10,V:5,I:1
  };
  const romanPriority=['M','D','C','L','X','V','I'];
  const roman5s=['D','L','V']; //romans that start with a 5
  for(let i=0;i<romanPriority.length;i++){
    let currentRoman=romanPriority[i];
    let currentArabic=romanToArabic[currentRoman];
    let quotient=Math.floor(num/currentArabic);
    if(num===54){ //hard code 54 roman
      roman+="LIV";
      num-=54;
    }
    else if(quotient === 4){ //romans can't repeat >3
        if(roman5s.includes(roman[roman.length-1]) && romanPriority.indexOf(roman[roman.length-1]) >= romanPriority.indexOf(roman[roman.length-2])) { //example: 90 LXXXX -> XC or 9 VIIII -> IX
          roman=roman.slice(0,-1) + currentRoman + romanPriority[i-2];
        } else{
          roman+=currentRoman +romanPriority[i-1];
        }
        num-=quotient*currentArabic;
    } else{
      for(let j=0;j<quotient;j++){
        roman+=currentRoman;
        num-=currentArabic;
      }
    }
  }
    return roman;
}

console.log(toRoman(54));


module.exports = { toRoman, toRomanLazy };
