function convertTemperature(t) {
    // t stands for the type of conversion, FC of CF
    
    //1. Get the number from the input box:
   
    var temp = document.getElementById('myTemp').value;
    temp = Number(temp); //convert myTemp tpo actual number
   //get h3 element that will hold te converted output
    var conversion = document.getElementById('conversion');
    var outputStr = ""; //a string for the entire output
    var convertedTemp = 0; //a var for the converted temp
    if(t == 'FC') { //if Convert Fair to Cels button was clicked
        convertedTemp = (temp - 32) * 5/9; //convert fahr to cels
        convertedTemp = convertedTemp.toFixed(2);
        //concatenate the full answer, &deg; is HTML special entity
        outputStr = `${temp}&deg; C = ${convertedTemp}&deg; F`;
    } else { // convert  Cels to Fahr button was clicked
        convertedTemp = convertedTemp.toFixed(2); // 2 decimals
        outputStr = `${temp}&deg; F = ${convertedTemp}&deg; C`;
    } //end if-else
    conversion.innerHTML = outputStr; // // output result
} // end function 
