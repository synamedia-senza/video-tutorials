let selected = 0;
const videos = [
  "https://senza-developer.s3.amazonaws.com/streams/simulator/simulator.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/debugger/debugger.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/sample-app/sample-app.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/zoom/zoom.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/flags/flags.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/speech-recognition/speech-recognition.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/authentication/authentication.mpd",
  "https://senza-developer.s3.amazonaws.com/streams/remote/remote.mpd",
];

window.addEventListener("load", async () => {
  try {
    await senza.init();

    senza.remotePlayer.addEventListener("ended", () => {
      senza.lifecycle.moveToForeground();
    });

    senza.uiReady();
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
  link.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}

async function toggleVideo() {
  const currentState = await senza.lifecycle.getState();
  if (currentState == "background" || currentState == "inTransitionToBackground") {
    senza.lifecycle.moveToForeground();
  } else {
    await playVideo(videos[selected]);
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
