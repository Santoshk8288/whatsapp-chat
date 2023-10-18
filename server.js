const whatsapp = require('whatsapp-chat-parser');
 
whatsapp
  .parseFile('file.txt')
  .then(messages => {
  	console.log(messages)
    // Do whatever you want with messages
  })
  .catch(err => {
  	console.log(err)
    // Something went wrong
  });