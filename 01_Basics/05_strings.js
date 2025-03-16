const name = "Roman Reigns";
const anotherName = "Tribal Chief";

console.log(`Your ${anotherName} in god mode himself ${name}`);

const OTC = new String("Head-Of-The-Table");

console.log(OTC[0]);
console.log(OTC.indexOf("h"));

const newString = OTC.substring(0, 4);
console.log(newString);

const anotherString = OTC.slice(-16, 4);
console.log(anotherString);

const newStringOne = "Tribal";
const newStringTwo = "Chief";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tribalchief.com/otc%10romanreigns";
console.log(url.replace("%10", "-tc"));
console.log(url.includes("romanrg"));
console.log(OTC.split("-"));

console.log(newStringOne.concat("", newStringTwo));
console.log(newStringTwo.concat(",", newStringOne));
