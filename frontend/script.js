const container = document.getElementById('user-list');

fetch('http://localhost:3000/api/users')
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${user.picture}" width="100" />
        <h3>${user.name}</h3>
        <p><strong>Género:</strong> ${user.gender}</p>
        <p><strong>Ubicación:</strong> ${user.location}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Fecha Nac.:</strong> ${user.dob}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    container.innerHTML = "<p>Error al cargar usuarios.</p>";
    console.error(err);
  });
