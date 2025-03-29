function writeCards(namesArray) {
    const messages = namesArray.map(name => {
      return `Thank you, ${name}, for the wonderful surprise gift!`;
    });
    return messages;
  }

  function countDown(startNumber) {
    for (let i = startNumber; i >= 0; i--) {
      console.log(i);
    }
  }

  