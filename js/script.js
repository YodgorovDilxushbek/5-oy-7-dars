document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const ism = event.target.ism.value;
    const familiya = event.target.familiya.value;
    const telefon = event.target.telefon.value;
    const email = event.target.email.value;
    const rasmUrl = event.target.rasm_url.value;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="image">
        <img src="${rasmUrl}" alt="Profil rasmi" />
      </div>
      <div class="title">
        <h2>Ism: ${ism}</h2>
        <p>Familiya: ${familiya}</p>
        <p>Telefon: ${telefon}</p>
        <p>Email: ${email}</p>
      </div>
    `;

    document.getElementById("cardContainer").appendChild(card);

    event.target.reset();
      });
  