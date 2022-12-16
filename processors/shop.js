const axios = require('axios');
const dbo=require("../connectors/conn")

const processPendingTicket = async (message) => {
  const q = message.body.tickets[0].quantity
  const c=message.body.tickets[0].category
  const m=message.body.matchNumber
  axios.patch(`http://localhost:5000/update/${m}/${c}/${q}`,{
    
   }).then(function (response) {
    // console.log(response)
     console.log("UPDATED DATABASE")
   })
   .catch(function (error) {
     console.log("BITCH")
     console.log(error);
   });
  
 // console.log(q)
  //console.log(test)
  return Promise.resolve('[processPendingTicket]')

};

const processReservedTicket = async (message) => {
  console.log('[processReservedTicket]', message)
  return Promise.resolve('[processReservedTicket]')
};

module.exports = {
  processPendingTicket,
  processReservedTicket
};


/**/