const readlineSync = require("readline-sync");

let passwordValid = false;

while (!passwordValid) {
  let password = readlineSync.question("Enter your password: ");

  // Check length
  let hasMinLength = password.length >= 8;

  // Check for uppercase letter
  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
      hasUppercase = true;
      break;
    }
  }

  // Check for number
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      hasNumber = true;
      break;
    }
  }

  // Validate all requirements
  if (hasMinLength && hasUppercase && hasNumber) {
    console.log("Yes. Password accepted! You have been successful.");
    passwordValid = true;
  } else {
    console.log(" No. Password does not meet requirements. Try again.");
    console.log("Requirements:");
    console.log("- At least 8 characters long");
    console.log("- At least one uppercase letter");
    console.log("- At least one number\n");
  }
}
