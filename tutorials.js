let selected = 0;

window.addEventListener("load", async () => {
  try {
    await senza.init();

    updateVideos();

    senza.remotePlayer.addEventListener("ended", () => {
      senza.lifecycle.moveToForeground();
    });

    senza.uiReady();
  } catch (error) {
    console.error(error);
  }
});

function updateVideos() {
  videos.forEach((video, index) => {
    let rowClass = index == selected ? "row selected" : "row";
    table.innerHTML += `<tr class="${rowClass}">
      <td class="thumb">
        <img src="${video.thumb}">
      </td>
      <td class="text">
        <div class="title">${video.title}</div>
        <div class="description">${video.description}</div>
      </td>
    </tr>`;
  });
}

document.addEventListener("keydown", async function(event) {
	switch (event.key) {
    case "Enter": toggleVideo(); break;
    case "Escape": toggleVideo(); break;
    case "ArrowUp": up(); break;      
    case "ArrowDown": down(); break;
		default: return;
	}
	event.preventDefault();
});

function getRows() {
  return Array.from(document.getElementsByClassName("row"));
}

function up() {
  let rows = getRows();
  deselect(rows[selected]);
  selected = (selected - 1 + rows.length) % rows.length;
  select(rows[selected]);
 }

function down() {
  let rows = getRows();
  deselect(rows[selected]);
  selected = (selected + 1) % rows.length;
  select(rows[selected]);
}

function select(link) {
  link.classList.add("selected");
  scrollToMiddle(link);
  console.log('Selected: ' + link.innerHTML);
}

function deselect(link) {
  link.classList.remove("selected");
}

function scrollToMiddle(link) {
  link.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

async function toggleVideo() {
  const currentState = await senza.lifecycle.getState();
  if (currentState == "background" || currentState == "inTransitionToBackground") {
    senza.lifecycle.moveToForeground();
  } else {
    await playVideo(videos[selected].url);
  }
}

async function playVideo(url) {
  try {
    await senza.remotePlayer.load(url);
  } catch (error) {
    console.log("Couldn't load remote player.");
  }
  senza.remotePlayer.play();
}
