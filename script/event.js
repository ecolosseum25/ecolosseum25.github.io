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
    banner : "https://img.freepik.com/premium-photo/people-cyber-reality_622301-1398.jpg",
    description : "A vibrant showcase where students transform e-waste into futuristic wearable tech, creatively demonstrating real-world applications and components to champion sustainability and innovation.",
    participants: 1,
    url: "https://forms.cloud.microsoft/r/qTwh7UqFuJ",
  },
  {
    name: "INFOEXPRESS",
    eligibility: [5, 6],
    description : "A dynamic storytelling challenge where students craft original AI-themed tales using PowerPoint, enhanced with visuals and audio, and presented as short videos.",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI9obEIzcjU0nDbg-r28asdztvKV5w95dSg&usqp=CAU",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/7V6AJ3KdkU",
  },
  {
    name: "CODECRUSADE",
    eligibility: [6, 8],
    description : "A game design challenge where students develop original, SDG-themed games that spark creativity, collaboration, and critical thinking.",
    banner: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frockymountevents.com%2Fwp-content%2Fuploads%2F2019%2F11%2FPerson-playing-an-arcade-game.jpg&f=1&nofb=1&ipt=8b1500372364ff77de787dc2b43555a66c9ead59c5ec12b13cb07cff4eb15330&ipo=images",
    participants: "Solo or 2-3",
    url: "https://forms.cloud.microsoft/r/dqt2eH1zDb",
  },
  {
    name: "BOT-BRAWL",
    eligibility: [8, 10],
    description : "A thrilling robot face-off where student-built bots battle it out with strategy and skill, all within safety limits and the spirit of friendly competition.",
    banner: "https://t3.ftcdn.net/jpg/01/80/97/92/360_F_180979216_dsMX0jqo0MrflzwSs86rQuIrxVHbbPW5.jpg",
    participants: "3",
    url: "https://forms.cloud.microsoft/r/eE98udsSBh",
  },
  {
    name: "TECHTIDE",
    eligibility: [8, 9],
    description :"A web design challenge where students create impactful sites on neuromorphic computing and its role in reducing e-waste.",
    banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkC8WAQAfGvX5rep_llJ8K8KnaeZ1yYpaIOw&s",
    participants: 4,
    url: "https://forms.cloud.microsoft/r/ZnXikJYfu5",
  },
  {
    name: "TERRAFORGED3D",
    eligibility: [8, 10],
    description : "A 3D design challenge where students create sustainable, innovative product packaging that blends function, form, and eco-conscious thinking.",
    banner: "https://cdn.dribbble.com/users/4823084/screenshots/18863071/media/78f0367c4d388ee5e37524cee27cf1ee.png?compress=1&resize=400x300",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/bZcnSdWxgg",
  },
  {
    name: "PIXELPALLETE",
    eligibility: [3, 4],
    description :"A digital art contest where young minds illustrate the importance of cyber hygiene through creative visuals using basic paint tools.",
    banner: "https://pics.craiyon.com/2023-06-11/14e83a7e2958467ca0a7ccd4318f86fe.webp",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/T8jyvmTq8R",
  },
  {
    name: "CLICK AND CREATE",
    eligibility: [9, 12],
    description : "An AI app challenge where students design no-code apps tackling real-world issues, showcasing creativity and practical AI use." ,
    banner: "https://file.aiquickdraw.com/imgcompressed/img/compressed_fef06de4c2a418399a44fc7cda826aeb.webp",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/BeZvK7UwDg",
  },
  {
    name: "PERSPECTIVE",
    eligibility: [9, 12],
    description : "Teams showcase AI and IoT prototypes presenting innovative, sustainable solutions with clear impact and technical execution.",
    banner: "https://www.electronicaembajadores.com/datos/fotos/articulos/grandes/lc/lca1/lca1k81.jpg",
    participants: 2,
    url: "https://forms.cloud.microsoft/r/AwUcs0M21U",
  },
  {
    name: "CODE & CONQUER",
    eligibility: [9, 12],
    description : "A Python game development contest where participants create error-free, SDG-themed games showcasing creativity and smooth gameplay.",
    banner: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2018%2F08%2FEscape-room.jpg&f=1&nofb=1&ipt=c7750d7e9aa0efa5aa1e358aa6d50dd57e402b1a0db1a6a07fc7477e91f0b6c1&ipo=images",
    participants: "Solo or 2-3",
    url: "https://forms.cloud.microsoft/r/ZuFmCtfnfE",
  },
  {
    name: "PLAYOFFS",
    eligibility: [9, 12],
    description : "An online knockout team tournament testing focus and coordination through competitive gaming matches.", 
    banner: "https://i.ytimg.com/vi/Zfsg3oiPXGc/maxresdefault.jpg",
    participants: "5",
    url: "https://forms.cloud.microsoft/r/yuNNhZCDuv",
  },
    {
    name: "ROADSHOW",
    eligibility: [6, 10],
    description : "A group performance event where teams creatively express the theme “Click for Change” using props and powerful storytelling.",
    banner: "https://images.squarespace-cdn.com/content/v1/5b398fb2f793925040070b55/1569641447663-TJBR28Y4GYAYFI1WIITL/What%2Bis%2BDrama%2BTherapy.jpg?format=1500w",
    participants: "8-12",
    url: "https://forms.cloud.microsoft/r/C7eV80zy5F",
  },
  {
    name: "ECOVERSE",
    eligibility: [6, 8],
    description :"An online Scratch game challenge for young creators to design SDG-themed games using AI tools, showcasing creativity and meaningful gameplay.", 
    banner: "https://techcrunch.com/wp-content/uploads/2019/01/ProjectEditor.png",
    participants: "2",
    url: "https://forms.cloud.microsoft/r/xaEAcXN6aP",
  },
  {
    name: "CYBER GROOVE",
    eligibility: [8, 12],
    description : "A tech-inspired group performance blending robotics, VR, and eco-tech themes with creative choreography and striking visuals.", 
    banner: "https://www.noblemotiondance.com/wp-content/uploads/2022/01/NobleMotion-Dance-MAN-OVERBOARD-Photographer-Lynn-Lane-WEB-4-600x400.jpg",
    participants: "8-12",
    url: "https://forms.cloud.microsoft/r/2Un2Hu5VYB",
  },
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
