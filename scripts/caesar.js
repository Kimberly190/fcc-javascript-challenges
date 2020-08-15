function incrementChar(c, loopAlpha = false) {
  if (loopAlpha && (c == 'Z')) {
    return 'A';
  }
  let code = c.charCodeAt();
  return String.fromCharCode(++code);
}

function rot13(str) {
  return str.split('').map(c => {
    if (/[A-Z]/.test(c)) {
      for (let i = 0; i < 13; i++) {
        c = incrementChar(c, true);
      }
    }
    return c;
  }).join('');
}

export { rot13 };

//console.log(rot13("SERR PBQR PNZC"));
//console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));