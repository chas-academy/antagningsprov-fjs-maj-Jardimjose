function uppg9() {
  // skapa en funktion som heter sort och tar in en array av siffror som argument
  // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
  // i if-sattsen skriv ut i konsolen resultatet
  // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

  // anropa funktionen och skicka med en array som argument

  let numbers = [0, 2, 5, 8, 10, 15, 24, 30];
  /**
   * @param {Array} numbers
   */
  function sort(numArr) {
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
        console.log(numArr[i], "jämt");
      } else {
        console.log(numArr[i], "udda");
      }
    }
  }

  sort(numbers);
}

module.exports = { uppg9 };
