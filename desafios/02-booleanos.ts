// Boleanos

const getUserUniqueFromMemory = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
};

const minHeightUser = 130;

const currentTimeHour = new Date().getHours()

const parkHourOpen = 9;
const parkHourClosed = 18

const isParkOpen = currentTimeHour > parkHourOpen && currentTimeHour < parkHourClosed

if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

const isTicketApproved = getUserUniqueFromMemory.hasTicket

if (!isTicketApproved) {
  throw new Error('O Diego não possui um bilhete para entrar no parque!')
}

const isHeightAccept = getUserUniqueFromMemory.height > minHeightUser

if (!isHeightAccept) {
  throw new Error('O Diego não pode entrar no brinquedo!')
} 

console.log('O Diego se divertiu muito! :)')