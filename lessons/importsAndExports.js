import { CustomerDetails } from "../helpers/printHelper.js";
// we can import only an instance of customerDetails too by specifying the instance name above. 
// export const customerDetails = new CustomerDetails() ----> add this in printHelper.js below to the class
// and use customerDetails in above curly braces


var customerdetails = new CustomerDetails();
customerdetails.printFirstName("john");
customerdetails.printLastName("Smith");