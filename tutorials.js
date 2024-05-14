let selected = 0;
const videos = [
  "https://senza-developer.s3.amazonaws.com/streams/simulator/simulator.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/debugger/debugger.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/sample-app/sample-app.mpd"
];

window.addEventListener("load", async () => {
  try {
    await hs.init();

    hs.remotePlayer.addEventListener("ended", () => {
      hs.lifecycle.moveToForeground();
    });

    hs.uiReady();
  } catch (error) {
    console.error(error);
  }
});

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
  link.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
}

async function toggleVideo() {
  const currentState = await hs.lifecycle.getState();
  if (currentState == "background" || currentState == "inTransitionToBackground") {
    hs.lifecycle.moveToForeground();
  } else {
    await playVideo(videos[selected]);
  }
}

async function playVideo(url) {
  try {
    await hs.remotePlayer.load(url);
  } catch (error) {
    console.log("Couldn't load remote player.");
  }
  hs.remotePlayer.play();
}
