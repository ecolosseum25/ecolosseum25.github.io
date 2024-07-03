const main = document.getElementsByClassName("main")[0];

function addCard(name, eligibility, description, banner, participants, url) {
  const query = `
<div class="p-4 md:w-1/3">
  <div class="card h-full border-2 border-white border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${banner}" alt="banner" />
    <div class="p-6">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        GRADES: ${eligibility.join(" - ")}
      </h2>
      <h1 class="title-font text-lg font-medium text-gray-300 mb-3">${name}</h1>
      <p class="leading-relaxed mb-3 text-gray-400 description">${description}</p>
      <div class="flex items-center flex-wrap register">
        <a class="text-purple-600 inline-flex items-center md:mb-2 lg:mb-0" href="${url}" target="_blank">
          Register Now
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <span class="text-gray-400 inline-flex items-right lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
          <i class="px-2 fa-regular fa-user"></i>${participants}
        </span>
      </div>
    </div>
  </div>
</div>
`;

  main.innerHTML += query;
}

const events = [
  {
    name: "Tech Attire",
    eligibility: [2, 3],
    description:
      "Participants craft costumes inspired by e-waste, merging creativity with tech, judged on innovation and thematic relevance to electronic waste.",
    banner:
      "https://img.freepik.com/premium-photo/people-cyber-reality_622301-1398.jpg",
    participants: 1,
    url: "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRUOTVYTFQ0NTlDQVQyOVVZMTdYV1UyUE1BUy4u",
  },
  {
    name: "DOCUDRAMA",
    eligibility: [4, 5],
    description:
      "Unleash your creativity! Join our film making competition and let your story shine",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI9obEIzcjU0nDbg-r28asdztvKV5w95dSg&usqp=CAU",
    participants: 2,
    url: "https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAHf2GwRURFpGWDZHUlNaWksxTTA1OE42SkVEQlVBNS4u",
  },
  // Add more events as needed
];

events.forEach((event) => {
  addCard(
    event.name,
    event.eligibility,
    event.description,
    event.banner,
    event.participants,
    event.url
  );
});

// Event delegation on .main for mouseenter and mouseleave
main.addEventListener("mouseenter", function (event) {
  const card = event.target.closest(".card");
  if (card) {
    card.querySelector(".description").classList.add("show");
    card.querySelector(".register").classList.add("show");
  }
});

main.addEventListener("mouseleave", function (event) {
  const card = event.target.closest(".card");
  if (card) {
    card.querySelector(".description").classList.remove("show");
    card.querySelector(".register").classList.remove("show");
  }
});
