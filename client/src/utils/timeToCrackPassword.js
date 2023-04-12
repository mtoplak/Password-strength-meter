export const timeToCrackPassword = (password) => {
  let time;
  console.log(password);
  const passwordLength = password.length;

  const numRegex = /^\d+$/;
  const lowerCaseRegex = /^[a-z\u0080-\uFFFF]*$/; // /^[\p{L}a-z]+$/u   // = /^[\p{Ll}]+$/u;
  const upperCaseRegex = /^[a-zA-Z\u0080-\uFFFF]*$/; // /^[\p{L}A-Z]+$/u
  const letterNumberRegex = /^[a-zA-Z0-9\u0080-\uFFFF]*$/; ///^[\p{L}0-9]+$/u
  const letterNumberSymbolRegex = /^[\p{L}0-9\W]+$/u;

  // check which kind of characters are in the password with each if statement

  if (numRegex.test(password)) {
    if (passwordLength < 12) {
      time = "takoj";
      return time;
    }
    switch (passwordLength) {
      case 12:
        return "2 sekundi";
      case 13:
        return "19 sekundi";
      case 14:
        return "3 minute";
      case 15:
        return "32 minut";
      case 16:
        return "5 ur";
      case 17:
        return "2 dneva";
      case 18:
        return "3 tedne";
      default:
        return "ogromno časa";
    }
  }

  if (lowerCaseRegex.test(password)) {
    if (passwordLength < 9) {
      return "takoj";
    }
    switch (passwordLength) {
      case 9:
        return "10 sekund";
      case 10:
        return "4 minute";
      case 11:
        return "2 uri";
      case 12:
        return "2 dneva";
      case 13:
        return "2 meseca";
      case 14:
        return "4 leta";
      case 15:
        return "100 let";
      case 16:
        return "3k let";
      case 17:
        return "69k let";
      case 18:
        return "2m let";
      default:
        time = "ogromno časa";
    }
  }

  if (upperCaseRegex.test(password)) {
    if (passwordLength < 7) {
      time = "takoj";
      return time;
    }
    switch (passwordLength) {
      case 7:
        return "2 sekundi";
      case 8:
        return "2 minuti";
      case 9:
        return "1 uro";
      case 10:
        return "3 dni";
      case 11:
        return "5 mesecev";
      case 12:
        return "24 let";
      case 13:
        return "1k let";
      case 14:
        return "64k let";
      case 15:
        return "3m let";
      case 16:
        return "173m let";
      case 17:
        return "9bn let";
      case 18:
        return "467bn let";
      default:
        time = "ogromno časa";
    }
  }

  if (letterNumberRegex.test(password)) {
    if (passwordLength < 7) {
      time = "takoj";
      return time;
    }
    switch (passwordLength) {
      case 7:
        return "7 sekund";
      case 8:
        return "7 minut";
      case 9:
        return "7 ur";
      case 10:
        return "3 tedne";
      case 11:
        return "3 leta";
      case 12:
        return "200 let";
      case 13:
        return "12k let";
      case 14:
        return "750k let";
      case 15:
        return "46m let";
      case 16:
        return "3bn let";
      case 17:
        return "179bn let";
      case 18:
        return "11tn let";
      default:
        time = "ogromno časa";
    }
  }

  if (letterNumberSymbolRegex.test(password)) {
    if (passwordLength < 7) {
      return "takoj";
    }
    switch (passwordLength) {
      case 7:
        return "31 sekund";
      case 8:
        return "39 minut";
      case 9:
        return "2 dneva";
      case 10:
        return "5 mesecev";
      case 11:
        return "34 let";
      case 12:
        return "3k let";
      case 13:
        return "202k let";
      case 14:
        return "16m let";
      case 15:
        return "1bn let";
      case 16:
        return "92bn let";
      case 17:
        return "7tn let";
      case 18:
        return "438tn let";
      default:
        time = "ogromno časa";
    }

    return time;
  }
};
