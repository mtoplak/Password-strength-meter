export const timeToCrackPassword = (password) => {
  let time;
  console.log(password);
  const passwordLength = password.length;

  const numRegex = /^\d+$/;
  const lowerCaseRegex = /^[\p{L}a-z]+$/u;
  const upperCaseRegex = /^[\p{L}A-Z]+$/u;
  const letterNumberRegex = /^[\p{L}0-9]+$/u;
  const letterNumberSymbolRegex = /^[\p{L}0-9\W]+$/u;

  let lettersNumbersAndSymbols = false;
  let lettersAndNumbersOnly = false;
  let lettersOnly = false;
  let lowercaseOnly = false;
  let numbersOnly = false;

  // check which kind of characters are in the password
  if (letterNumberSymbolRegex.test(password)) {
    lettersNumbersAndSymbols = true;
  } else if (letterNumberRegex.test(password)) {
    lettersAndNumbersOnly = true;
  } else if (numRegex.test(password)) {
    lettersOnly = true;
  } else if (lowerCaseRegex.test(password)) {
    lowercaseOnly = true;
  } else if (upperCaseRegex.test(password)) {
    numbersOnly = true;
  } else {
    return "Invalid Input";
  }

  if (lettersNumbersAndSymbols) {
    if (passwordLength < 7) {
      time = "instantly";
      return time;
    }
    switch (passwordLength) {
      case 7:
        time = "31 seconds";
        break;
      case 8:
        time = "39 minutes";
        break;
      case 9:
        time = "2 days";
        break;
      case 10:
        time = "5 months";
        break;
      case 11:
        time = "34 years";
        break;
      case 12:
        time = "3k years";
        break;
      case 13:
        time = "202k years";
        break;
      case 14:
        time = "16m years";
        break;
      case 15:
        time = "1bn years";
        break;
      case 16:
        time = "92bn years";
        break;
      case 17:
        time = "7tn years";
        break;
      case 18:
        time = "438tn years";
        break;
      default:
        time = "a lot of time";
    }

    if (lettersAndNumbersOnly) {
      if (passwordLength < 7) {
        time = "instantly";
        return time;
      }
      switch (passwordLength) {
        case 7:
          time = "7 seconds";
          break;
        case 8:
          time = "7 minutes";
          break;
        case 9:
          time = "7 hours";
          break;
        case 10:
          time = "3 weeks";
          break;
        case 11:
          time = "3 years";
          break;
        case 12:
          time = "200 years";
          break;
        case 13:
          time = "12k years";
          break;
        case 14:
          time = "750k years";
          break;
        case 15:
          time = "46m years";
          break;
        case 16:
          time = "3bn years";
          break;
        case 17:
          time = "179bn years";
          break;
        case 18:
          time = "11tn years";
          break;
        default:
          time = "a lot of time";
      }
    }

    if (lettersOnly) {
      if (passwordLength < 7) {
        time = "instantly";
        return time;
      }
      switch (passwordLength) {
        case 7:
          time = "2 seconds";
          break;
        case 8:
          time = "2 minutes";
          break;
        case 9:
          time = "1 hour";
          break;
        case 10:
          time = "3 days";
          break;
        case 11:
          time = "5 months";
          break;
        case 12:
          time = "24 years";
          break;
        case 13:
          time = "1k years";
          break;
        case 14:
          time = "64k years";
          break;
        case 15:
          time = "3m years";
          break;
        case 16:
          time = "173m years";
          break;
        case 17:
          time = "9bn years";
          break;
        case 18:
          time = "467bn years";
          break;
        default:
          time = "a lot of time";
      }
    }

    if (lowercaseOnly) {
      if (passwordLength < 9) {
        time = "instantly";
        return time;
      }
      switch (passwordLength) {
        case 9:
          time = "1o seconds";
          break;
        case 10:
          time = "4 minutes";
          break;
        case 11:
          time = "2 hours";
          break;
        case 12:
          time = "2 days";
          break;
        case 13:
          time = "2 months";
          break;
        case 14:
          time = "4 years";
          break;
        case 15:
          time = "100 years";
          break;
        case 16:
          time = "3k years";
          break;
        case 17:
          time = "69k years";
          break;
        case 18:
          time = "2m years";
          break;
        default:
          time = "a lot of time";
      }
    }

    if (numbersOnly) {
      if (passwordLength < 12) {
        time = "instantly";
        return time;
      }
      switch (passwordLength) {
        case 12:
          time = "2 seconds";
          break;
        case 13:
          time = "19 seconds";
          break;
        case 14:
          time = "3 minutes";
          break;
        case 15:
          time = "32 minutes";
          break;
        case 16:
          time = "5 hours";
          break;
        case 17:
          time = "2 days";
          break;
        case 18:
          time = "3 weeks";
          break;
        default:
          time = "a lot of time";
      }
    }

    return time;
  }
};
