const axios = require('axios');
const dbo=require("../connectors/conn")

const processPendingTicket = async (message) => {
  const q = message.body.tickets.quantity
  const c=message.body.tickets.category
  const m=message.body.matchNumber
  console.log(m)
  axios.patch(`http://localhost:5000/update/${m}/${c}/${q}`,{
    
   }).then(function (response) {
    // console.log(response)
     console.log("UPDATED DATABASE")
   })
   .catch(function (error) {
    console.log("ERROR IN PENDING MESSAGE")
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

const processCancelledTicket = async (message) => {
  const q = message.body.tickets.quantity
  const c=message.body.tickets.category
  const m=message.body.matchNumber
  axios.patch(`http://localhost:5000/cancel/${m}/${c}/${q}`,{
    
   }).then(function (response) {
    // console.log(response)
     console.log("ADDED DATABASE")
   })
   .catch(function (error) {
    console.log("ERROR IN RESERVATION MESSAGE")
     console.log(error);
   });
  
 // console.log(q)
  //console.log(test)
  return Promise.resolve('[processCancelledTicket]')

};
module.exports = {
  processPendingTicket,
  processReservedTicket,
  processCancelledTicket
};


/**/