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
const tenName = [" ", "ten", "twenty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundredName = [" ", "One hundred", "two hundred", "three hundred","four hundred", "five hundred","six hundred", "seven hundred", "eight hundred","nine hundred"];
append("count", Countfun())
function Countfun(){
let numbers=" ";

    for(let h=0; h<hundredName.length; h++){

      for(let i=0; i<tenName.length; i++){

        for(let n=0; n< singleDigit.length; n++){
    
            numbers += hundredName[h]+" "+tenName[i]+" "+singleDigit[n] + ", ";
        }
    }}

    return numbers;
}