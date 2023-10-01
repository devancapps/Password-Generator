function generatePassword() {

    // Create arrays for each character type
  
    var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var numbers = "0123456789".split("");
    var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
    // Prompt user for password length
    var length = window.prompt(
      "Please enter the length of your password (must be between 8 and 128 characters)"
    );
  
    // Validate input
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Password length must be a number between 8 and 128 characters");
      return;
    }
    // Ask for character types to include
    var useLowerCase = confirm(
      "Do you want to include lowercase letters in your password?"
    );
    var useUpperCase = confirm(
      "Do you want to include uppercase letters in your password?"
    );
    var useNumbers = confirm(
      "Do you want to include numbers in your password?");
    var useSpecialCharacters = confirm(
      "Do you want to include special characters in your password?"
    );
  
    // Validate that at least one character type was selected
  
    if (
      !useLowerCase &&
      !useUpperCase &&
      !useNumbers &&
      !useSpecialCharacters
    ) {
  
      alert("Please select at least one character type for your password");
      return;
    }
  
    // Create an array to store the selected character types
  
    var selectedCharacters = [];
    // Add character types to the array based on user input
    if (useLowerCase) {
      selectedCharacters = selectedCharacters.concat(lowerCase);
    }
    if (useUpperCase) {
      selectedCharacters = selectedCharacters.concat(upperCase);
    }
    if (useNumbers) {
      selectedCharacters = selectedCharacters.concat(numbers);
    }
    if (useSpecialCharacters) {
      selectedCharacters = selectedCharacters.concat(specialCharacters);
    }
  
    // variable to store the generated password
  
    var password = "";
  
    // Generate random characters from the selected array per user choice length
  
    for (var i = 0; i < length; i++) {
      password += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    }
  
    // Display generated password in an alert
  
    alert("Your secure password is: " + password);
  }
  
  // event listener to the generate button
  document.getElementById("generate").addEventListener("click", generatePassword);
  