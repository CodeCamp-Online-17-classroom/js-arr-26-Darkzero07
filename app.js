const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

const indexFine = tasks.findIndex((element) => {
    return element.id === 2
}) 

console.log(indexFine)