function reversestring(chr){

    let newstring = "";  
    let userInput = prompt("Enter your input:");
    console.log("You entered:", userInput); 

    if(chr == userInput ){   
    for(let i = chr.length - 1;i >= 0 ;i--){     
     newstring += chr[i];    
    }}
    else{        
  console.log("The string you entered is not ok")
  }
  return newstring;
  }
  console.log(reversestring("omar"));