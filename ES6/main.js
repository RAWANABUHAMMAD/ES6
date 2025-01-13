//////////1//////////
const string = "Orange Jordan";
const arr = (str) => str.split(" ");
console.log(arr(string));


  //////////2/////////
  const phone = (num) => `******${num.slice(-3)}`;
  console.log(phone("0776807777"));

//////////3//////////
const hideEmail = (email) => {
  const [username, domain] = email.split("@");
  return `${username.slice(0, 6)}...@${domain}`;
};
console.log(hideEmail("orange_academy@orange.jo"));

  //////////4//////////
  const capital = (sentence) => 
    sentence.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(capital("coding academy by orange"));

   //////////6//////////

   const reverseNumber = (num) => num.toString().split("").reverse().join("");
 console.log(reverseNumber(92485));

  //////////7//////////
  const swap = (a, b) => ({ a: b, b: a });
console.log(swap(3, 4));

  //////////8//////////
  function remove(str, index) {
    let arr = str.split(''); 
    arr.splice(index, 1); 
    return arr.join(''); 
  }
  console.log(remove("Orange", 3));

//////////9//////////
const mergeStrings = (str1, str2) => str1.slice(1) + str2.slice(1);
console.log(mergeStrings("lora", "inge"));
  

  //////////10//////////
  const charCheck = (char, str) => str.startsWith(char) || str.endsWith(char);
console.log(charCheck("o", "orange")); 
console.log(charCheck("z", "orange"));

  //////////11//////////
  const stringToArrayWithCapitalization = (str) =>
    str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  console.log(stringToArrayWithCapitalization("Coding Academy by Orange"));

//////////12//////////
const sortStringAlphabetically = (str) => str.toLowerCase().split("").sort().join("");
console.log(sortStringAlphabetically("Orange"));

  //////////13////////////
  const measureTime = (func) => {
    const start = performance.now(); 
    func(); 
    const end = performance.now(); 
    return `${(end - start).toFixed(2)} ms`; 
  };

  const example = () => {
    for (let i = 0; i < 1e6; i++) {} 
  };
  
  const executionTime = measureTime(Function);
  console.log(`Execution Time: ${executionTime}`);