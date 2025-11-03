document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const error = document.getElementById("error");

      if (!name || !email.includes("@")) {
        error.textContent = "⚠️ Vui lòng nhập thông tin hợp lệ!";
        return;
      }

      const list = JSON.parse(localStorage.getItem("participants")) || [];
      list.push({ name, email });
      localStorage.setItem("participants", JSON.stringify(list));

      window.location.href = "confirm.html";
    });
  }

  const table = document.getElementById("listTable");
  if (table) {
    const list = JSON.parse(localStorage.getItem("participants")) || [];
    const tbody = table.querySelector("tbody");
    list.forEach((p, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${i + 1}</td><td>${p.name}</td><td>${p.email}</td>`;
      tbody.appendChild(row);
    });
  }
});
