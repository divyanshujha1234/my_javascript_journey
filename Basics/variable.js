const accountID=2345;
let accountEmail="dj@gmail.com";
var accountPssword="12345";
accountCity="jaipur";

// accountID=3; not allowed
//prefer not to use var - issue in scope and functional scope
let accountState; // it is undefined

accountEmail="as@gmail.com";
accountPssword="123345";
accountCity="Gajraula";

console.table([accountEmail,accountID,accountPssword,accountCity]);
