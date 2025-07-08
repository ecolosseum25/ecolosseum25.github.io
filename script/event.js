const main = document.getElementsByClassName("main")[0];

function addCard(name, eligibility, description, banner, participants, url) {
  const carder = document.createElement("div");
  carder.classList.add("p-4", "md:w-1/3", "card", "overflow-hidden");

  carder.innerHTML = `
    <div class="card-inner border-2 border-white border-opacity-60 rounded-lg hover:scale-105">
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${banner}" alt="banner" />
      <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            GRADES: ${eligibility.join(" - ")}
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-300 mb-3">${name}</h1>
          <p class="leading-relaxed mb-3 text-gray-400 description">${description}</p>
        <div class="flex items-center justify-between register">
          <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0" href="${url}" target="_blank">
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
    `;

  main.appendChild(carder);

  carder.addEventListener("mouseenter", function () {
    carder.querySelector(".description").classList.add("block");
    carder.querySelector(".register").classList.add("block");
  });

  carder.addEventListener("mouseleave", function () {
    carder.querySelector(".description").classList.remove("block");
    carder.querySelector(".register").classList.remove("block");
  });
}

const events = [
 {
    name: "TECHPARADE",
    eligibility: [2, 3],
    description: "Students will dress up as innovative charging stations ( i.e Mobile,Charging Booth, EV Charging Station, Solar Charging Station, Multi-Device Dock, Wireless Charger Stand) made from recycled e-waste components",
    banner: "https://img.freepik.com/premium-photo/people-cyber-reality_622301-1398.jpg",
    participants: 1,
    url: "https://forms.cloud.microsoft/r/qTwh7UqFuJ"
  },
  {
    name: "INFOEXPRESS",
    eligibility: [5, 6],
    description: "Unleash your creativity! Join our film making competition and let your story shine.",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI9obEIzcjU0nDbg-r28asdztvKV5w95dSg&usqp=CAU",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/7V6AJ3KdkUu"
  },
  {
    name: "CODECRUSADE",
    eligibility: [6, 8],
    description: "Competitors develop games on any SDG",
    banner: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frockymountevents.com%2Fwp-content%2Fuploads%2F2019%2F11%2FPerson-playing-an-arcade-game.jpg&f=1&nofb=1&ipt=8b1500372364ff77de787dc2b43555a66c9ead59c5ec12b13cb07cff4eb15330&ipo=images",
    participants: 3,
    url: "https://forms.cloud.microsoft/r/dqt2eH1zDb"
  },
  {
    name: "BOT-BRAWL",
    eligibility: [8, 10],
    description: "Seize the reins in electrifying robot showdowns, strategizing through each round to dominate and secure a thrilling path to the high-stakes final battles.",
    banner: "https://t3.ftcdn.net/jpg/01/80/97/92/360_F_180979216_dsMX0jqo0MrflzwSs86rQuIrxVHbbPW5.jpg",
    participants: "3",
    url: "https://forms.cloud.microsoft/r/eE98udsSBh"
  },
  {
    name: "TECHTIDE",
    eligibility: [8, 9],
    description: "Design a 3-page website and a 30-sec reel on neuromorphic computing's impact on e-waste using Microsoft tools.",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkC8WAQAfGvX5rep_llJ8K8KnaeZ1yYpaIOw&s",
    participants: 4,
    url: "https://forms.cloud.microsoft/r/ZnXikJYfu5"
  },
  {
    name: "TERRAFORGED3D",
    eligibility: [9, 10],
    description: " Students will design packaging for a consumer product that is not only aesthetically pleasing but also sustainable and functional. The packaging could be reusable, biodegradable, or help reduce carbon footprints",
    banner: "https://cdn.dribbble.com/users/4823084/screenshots/18863071/media/78f0367c4d388ee5e37524cee27cf1ee.png?compress=1&resize=400x300",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/bZcnSdWxgg"
  },
  {
    name: "PIXELPALLETE",
    eligibility: [3, 4],
    description: "A visual journey that inspires futuristic thinking and creativity by portraying how regular digital care—like secure passwords, updates, and mindful browsing—keeps our digital world healthy, resilient, and safe from cyber threats.",
    banner: "https://i.ytimg.com/vi/l7r4EdSGrbk/maxresdefault.jpg",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/T8jyvmTq8R"
  },
  {
    name: "CLICK AND CREATE",
    eligibility: [9, 12],
    description: "Students will build an app using AI on topics AI in Educations or AI for Sustainability or AI for Safety And Well being.",
    banner: "https://i.imgur.com/nuXeEj9.jpg",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/VBxwx1GbKY"
  },
  {
    name: "Perspective",
    eligibility: [9, 12],
    description: "Innovating solutions for any community problem using microcontroller and AI tool",
    banner: "https://www.electronicaembajadores.com/datos/fotos/articulos/grandes/lc/lca1/lca1k81.jpg",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/AwUcs0M21U"
  },
  {
    name: "CODE & CONQUER",
    eligibility: [9, 12],
    description: "Students engage their intellect in making a game coded solely in Python.",
    banner: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2018%2F08%2FEscape-room.jpg&f=1&nofb=1&ipt=c7750d7e9aa0efa5aa1e358aa6d50dd57e402b1a0db1a6a07fc7477e91f0b6c1&ipo=images",
    participants: 3,
    url: "https://forms.cloud.microsoft/r/ZuFmCtfnfE"
  },
  {
    name: "TECHTRIVIA",
    eligibility: [9, 12],
    description: "Students test their knowledge and problem-solving skills with a series of intense technology-related questions, aiming to prove their mastery in a competitive setting.",
    banner: "https://miro.medium.com/v2/resize:fit:3720/1*_PtTP7XVXZxPStTVMmvKRg.jpeg",
    participants: 1,
    url: "https://forms.office.com/r/AuYx57CHnW"
  },
  {
    name: "Playoffs",
    eligibility: [9, 12],
    description: "Show off your flow of ideas via your moves and let the world recognise your talent",
    banner: "https://i.ytimg.com/vi/Zfsg3oiPXGc/maxresdefault.jpg",
    participants: "5",
    url: "https://forms.cloud.microsoft/r/k1YRCfnhWA"
  },
  {
    name: "CYBER GROOVE",
    eligibility: [8, 12],
    description: "Show off your flow of ideas via your moves and let the world recognise your talent",
    banner: "https://www.noblemotiondance.com/wp-content/uploads/2022/01/NobleMotion-Dance-MAN-OVERBOARD-Photographer-Lynn-Lane-WEB-4-600x400.jpg",
    participants: "8-12",
    url: "https://forms.cloud.microsoft/r/2Un2Hu5VYB"
  }
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
