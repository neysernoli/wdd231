const params = new URLSearchParams(window.location.search);

const results = document.querySelector("#results");

results.innerHTML = `
  <p><strong>First Name:</strong> ${params.get("firstname")}</p>
  <p><strong>Last Name:</strong> ${params.get("lastname")}</p>
  <p><strong>Email:</strong> ${params.get("email")}</p>
  <p><strong>Mobile Phone:</strong> ${params.get("phone")}</p>
  <p><strong>Organization:</strong> ${params.get("organization")}</p>
  <p><strong>Date Submitted:</strong> ${params.get("timestamp")}</p>
`;