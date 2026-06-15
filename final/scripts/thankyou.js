const results = document.querySelector('#results');
const params = new URLSearchParams(window.location.search);

const fields = ['name', 'email', 'phone', 'subject', 'message', 'timestamp'];

fields.forEach(field => {
  if (params.get(field)) {
    const p = document.createElement('p');
    p.innerHTML = `<strong>${field}:</strong> ${params.get(field)}`;
    results.appendChild(p);
  }
});