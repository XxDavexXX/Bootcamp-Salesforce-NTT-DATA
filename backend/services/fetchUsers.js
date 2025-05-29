const axios = require('axios');

async function fetchUsers() {
  const response = await axios.get('https://randomuser.me/api/?results=10');
  return response.data.results.map(person => ({
    name: `${person.name.first} ${person.name.last}`,
    gender: person.gender,
    location: `${person.location.city}, ${person.location.country}`,
    email: person.email,
    dob: person.dob.date.split('T')[0],
    picture: person.picture.large
  }));
}

module.exports = fetchUsers;
