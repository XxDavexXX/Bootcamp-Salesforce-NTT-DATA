function formatFecha(fecha) {
  const d = new Date(fecha);
  return d.toLocaleDateString('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

const container = document.getElementById('user-list');

fetch('http://localhost:3000/api/users')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${user.picture}" alt="Foto de ${user.name}" />
        <h3>${user.name}</h3>
        <p><strong>Género:</strong> ${user.gender}</p>
        <p><strong>Ubicación:</strong> ${user.location}</p>
        <p><strong>Email:</strong> <span style="word-break: break-all;">${user.email}</span></p>
        <p><strong>Fecha Nac.:</strong> ${formatFecha(user.dob)}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch((err) => {
    container.innerHTML = '<p>Error al cargar usuarios.</p>';
    console.error(err);
  });
