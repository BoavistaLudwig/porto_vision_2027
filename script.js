const api_key = "keygZV2qObBgGvq5e";
const api_url =
  "https://api.airtable.com/v0/app4xpXB83zUpWDns/Content?api_key=";
const App = document.getElementById("app");

async function prepData() {
  const response = await fetch(api_url + api_key);
  const data = await response.json();
  const { records } = data;

  console.log(records);

  const cards = records.map((record) => {
    return {
      ID: record.fields.ID,
      Title: record.fields.Title,
      Desc: record.fields.Desc,
      Url: record.fields.Url,
    };
  });
  console.log(cards);
  console.log(cards[0].Title);

  function cardTemplate(card) {
    return `
  <div class="card max-w-sm bg-white rounded-lg border border-gray-200 shadow-md text-center">
    <h2 
    class="text-2xl text-slate-700 font-bold leading-normal my-4">${card.Title}</h2>
    <img class="w-full aspect-video object-cover my-4"
    src="${card.Url}">
  </img>
    <p 
    class="font-light leading-relaxed text-slate-600 px-4 mb-4 text-l">${card.Desc}</p>
    </p>
  </div>
</div>
`;
  }

  function petTemplate(pet) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${pet.photo}">
      <h2 class="pet-name">${pet.name} <span class="species">(${
      pet.species
    })</span></h2>
      <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
      ${pet.favFoods ? foods(pet.favFoods) : ""}
      </div>
    `;
  }

  document.getElementById("app").innerHTML = `
  ${cards.map(cardTemplate).join("")}
`;
}

prepData();
