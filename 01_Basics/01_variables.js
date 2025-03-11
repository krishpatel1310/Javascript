const accountId = 12345;
let accountEmail = "krish@gmail.com";
var accountPassword = "Krish@123";
accountCity = "Surat";
let accountState;
//accountId = 2

accountEmail = "patel@gmail.com";
accountPassword = "619";
accountCity = "Ahemdabad";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
