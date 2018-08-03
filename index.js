function append(header, ret) {
    const h = document.createElement("h3");
    const p = document.createElement("p");
    let k = document.createTextNode(header);
    let n = document.createTextNode(ret);
    h.appendChild(k);
    document.body.appendChild(h);
    p.appendChild(n);
    document.body.appendChild(p)
  }

const singleDigit = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = [" ", "eleven", "twelve","thirteen","fourteen","fifthteen","sixteen","seventeen","eighteen","nineteen"];
const tenName = [" ", "ten", "twenty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundredName = [" ", "one hundred", "two hundred", "three hundred","four hundred", "five hundred","six hundred", "seven hundred", "eight hundred","nine hundred"];
const thousand = "one-thousand";
append("count", Countfun())
function Countfun(){
let numbers=" ";

    for(let h=0; h<hundredName.length; h++){

      for(let i=0; i<tenName.length; i++){

        for(let n=0; n< singleDigit.length; n++){
            if(i ==1 && n!==0){
                numbers += hundredName[h]+ " "+ teens[n];
            }else
                numbers += hundredName[h]+" "+tenName[i]+" "+singleDigit[n] + " ";
        
    }
}
    } numbers += thousand;
return numbers;
}