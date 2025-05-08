let selected = 0;

window.addEventListener("load", async () => {
  try {
    await senza.init();

    updateVideos();
    down();
    
    senza.remotePlayer.addEventListener("ended", () => {
      senza.lifecycle.moveToForeground();
    });

    senza.uiReady();
  } catch (error) {
    console.error(error);
  }
});

function updateVideos() {
  table.innerHTML = '';
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  videos.forEach((video, index) => {
    // Create the row and set its class
    const tr = document.createElement('tr');
    tr.className = index === selected ? 'row selected' : 'row';

    // Create the thumbnail cell
    const thumbTd = document.createElement('td');
    thumbTd.className = 'thumb';
    const img = document.createElement('img');
    img.src = video.thumb;
    thumbTd.appendChild(img);

    // Create the text cell
    const textTd = document.createElement('td');
    textTd.className = 'text';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.textContent = video.title;

    const descDiv = document.createElement('div');
    descDiv.className = 'description';
    descDiv.textContent = video.description;

    textTd.appendChild(titleDiv);
    textTd.appendChild(descDiv);

    // Assemble the row
    tr.appendChild(thumbTd);
    tr.appendChild(textTd);
    tbody.appendChild(tr);
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
}

function deselect(link) {
  link.classList.remove("selected");
}

function scrollToMiddle(link) {
  link.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

async function toggleVideo() {
  const currentState = senza.lifecycle.state;
  if (currentState == "background" || currentState == "inTransitionToBackground") {
    senza.lifecycle.moveToForeground();
  } else {
    await playVideo(videos[selected].url);
  }
}

async function playVideo(url) {
  console.log("Playing", url);
  try {
    await senza.remotePlayer.load(url);
    await senza.remotePlayer.play();
    await senza.lifecycle.moveToBackground();
  } catch (error) {
    console.log("Couldn't load remote player: ", error);
  }
}
