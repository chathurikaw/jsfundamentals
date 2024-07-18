let str = "Hello World"
console.log(str.charAt(0));
console.log(str.charAt(10));
console.log(str.length);

console.log("**************");

/**
 * Creating a String
 * 1. Literals
 * - Single Quote
 * - Double Quote
 * - Template Literals
 * 2. Objects
 */

let str1 = 'Hello World'
let str2 = "Hello World"
let str3 = `Hello World`
let str4 = String('Hello World')

console.log(str1 === str4);

//concatination and interpolation
var price = 50
var itemName = 'Cup'
//concatination
var messageToPrint1 = "The price for your " +itemName+ " is " +price +'$'
//interpolation
var messageToPrint2 = `The price for your ${itemName} is ${price}$`
console.log(messageToPrint1)
console.log(messageToPrint2)

console.log("**************");

/**
 * Comparing Strings
 * 1. Full Match
 * 2. Partial Match
 * - includes()
 * - startsWith()
 * - endsWith()
 */

let fileName = "invoice_123.pdf"

// Full Match
if(fileName == "invoice_123.pdf"){
    console.log("File Name Matches");
}

// Dealing with case sensitivity and spaces
if(fileName.toUpperCase().trim() == "INVOICE_123.PDF"){
    console.log("File Name Matches");
}

// Partial Match
if(fileName.startsWith("invoice")){
    console.log("File Name Starts with invoice");
}

if(fileName.endsWith("pdf")){
    console.log("File Name ends with pdf");
}

if(fileName.includes("pdf")){
    console.log("File Name includes pdf");
}

console.log("**************");
/**
 * Extract Substring - slice method
 */

let date = "2024-01-02"

//only start
let yymmdd = date.slice(2);
console.log(yymmdd);

let year = date.slice(0,4);
console.log(year);

let month = date.slice(5,7);
console.log(month);

let day = date.slice(8,10);
console.log(day);

//negative index, starts from end
let day1 = date.slice(-2);
console.log(day1);

console.log("**************");
/**
 * Replace and replace all
 */

let filename = "invoice_123.pdf"
let query_template = "SELECT * FROM {{table_name}}"
let dt = "2022-02-09"

let onlyFileName = filename.replace(".pdf", "txt")
console.log(onlyFileName)

let txtFile = filename.replace(".pdf", "")
console.log(txtFile)

let query = query_template.replace("{{table_name}}", "Account")
console.log(query)

//replace all
let updatedDate = dt.replace(/-/g, "")
console.log(updatedDate)  

console.log("**************");
/**
 * Split method
 */

let timeStamp = "2022-02-02T10:56:43.3765"

//get only the date
let arr = timeStamp.split("T")
console.log(arr[0]);

let strarr = str.split("H")
console.log(strarr); // first element will be ""

console.log("**************");
/**
 * IndexOf method
 */

let strval = "Application # {12345} submitted"

let start = strval.indexOf("{")
let end = strval.lastIndexOf("}") //starts searching from end
let output = strval.slice(start+1, end)
console.log(output);


console.log("**************");
/**
 * Use of backslash
 */

let str5 = 'Hello World!. It\'s me..'
console.log(str5);