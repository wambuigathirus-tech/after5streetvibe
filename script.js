const upcomingEvents = [];

const pastEvents = [
  {
    title: "IEBC ECVR Civic Activation",
    date: "April 2026",
    recap: "A major street activation supporting Enhanced Continuous Voter Registration in Nakuru with local creatives and community partners.",
  },
  {
    title: "Creative Showcase: Talent & Technology",
    date: "March 2026",
    recap: "A dynamic gathering that combined music, content creation, and community outreach in Nakuru.",
  },
];

const campusTourImages = [
  { src: "assets/CAMPUS TOUR/541194482_17938559406062430_4992249309041693619_n..webp" },
  { src: "assets/CAMPUS TOUR/542544440_17938559388062430_6710231376940439270_n..webp" },
  { src: "assets/CAMPUS TOUR/543095258_17939176140062430_5283441486134424522_n..webp" },
];

const iecbImages = [
  { src: "assets/IEBC/587468286_17947726659062430_3306529639504182272_n..webp" },
  { src: "assets/IEBC/587606318_17947726698062430_6492431665744764455_n..webp" },
  { src: "assets/IEBC/589073824_17947726650062430_7877575866603839303_n..webp" },
];

const eventsImages = [
  { src: "assets/events/588544645_17948026263062430_3644321818260037615_n..webp" },
  { src: "assets/events/588624184_17947742268062430_4374657725660120238_n..webp" },
  { src: "assets/events/588986738_17948347968062430_6116669197533043711_n..webp" },
  { src: "assets/events/589695987_17948127024062430_5159837195880790465_n..webp" },
  { src: "assets/events/590646393_17948809557062430_7314099016860446807_n..webp" },
];

function renderEvents(list, containerId, isUpcoming = true) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <article class="card">
        <h3>No upcoming events yet</h3>
        <p>Follow our Instagram profile for the latest announcements and event dates.</p>
      </article>
    `;
    return;
  }

  container.innerHTML = list
    .map((event) => {
      const fields = isUpcoming
        ? [`<p>${event.description}</p>`, `<p><strong>Location:</strong> ${event.location}</p>`]
        : [`<p>${event.recap}</p>`];

      return `
        <article class="card">
          <h3>${event.title}</h3>
          <p class="event-meta"><strong>${event.date}</strong></p>
          ${fields.join("\n")}
        </article>
      `;
    })
    .join("");
}

function renderAutoScrollGallery(images, containerId) {
  const container = document.getElementById(containerId);
  if (!container || images.length === 0) return;

  container.innerHTML = images
    .map((image) => `<img src="${image.src}" alt="" loading="lazy" />`)
    .join("");
  
  // Duplicate the images for seamless looping
  const htmlContent = container.innerHTML;
  container.innerHTML = htmlContent + htmlContent;
}
renderEvents(pastEvents, "pastEvents", false);
renderAutoScrollGallery(campusTourImages, "campusTourGallery");
renderAutoScrollGallery(iecbImages, "iecbGallery");
renderAutoScrollGallery(eventsImages, "eventsGallery");

const videoButton = document.getElementById("videoButton");
const videoLinks = document.getElementById("videoLinks");
if (videoButton && videoLinks) {
  videoButton.addEventListener("click", (event) => {
    event.preventDefault();
    videoLinks.classList.toggle("hidden");
    videoButton.textContent = videoLinks.classList.contains("hidden") ? "Videos" : "Hide Videos";
  });
}
