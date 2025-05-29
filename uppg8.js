function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  // över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument
  let people = [
    {
      name: "José", age: 32, },{name: "Fredrika", age: 29,},{name: "Axel", age: 28, },{name: "Alex",age: 35,},{name: "Isak",age: 28,},];
  /**
   * @param {Array} peopleArr
   */
  function showOver30(peopleArr) {
    for (let i = 0; i < peopleArr.length; i++) {
      if (peopleArr[i].age > 30) {
        console.log(peopleArr[i].name);
      }
    }
  }

  showOver30(people);
}

module.exports = { uppg8 };
