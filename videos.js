const videos = [
  {
    "id": "senza-app",
    "thumb": "thumbs/senza-app.jpg",
    "url": "https://senzadev.net/streams/senza-app/senza-app.mpd",
    "title": "Senza App",
    "description": "Explore what Senza can do by trying out the Senza App, featuring an informative slideshow, a sample TV experience, and some demo apps that demonstrate the advanced capabilities of the platform."
  },
  {
    "id": "developer-overview",
    "thumb": "thumbs/developer-overview.jpg",
    "url": "https://senzadev.net/streams/developer-overview/developer-overview.mpd",
    "title": "Developer Overview",
    "description": "An overview of the Senza developer tools, including the Senza Console, Device Simulator, Remote Debugger and developer documentation."
  },
  {
    "id": "simulator",
    "thumb": "thumbs/simulator.jpg",
    "url": "https://senzadev.net/streams/simulator-v2/simulator-v2.mpd",
    "title": "Using the Device Simulator",
    "description": "See how you can use the device simulator to preview how your app will run on a physical cloud connector device."
  },
  {
    "id": "debugger",
    "thumb": "thumbs/debugger.jpg",
    "url": "https://senzadev.net/streams/debugger-v2/debugger-v2.mpd",
    "title": "Using the Remote Debugger",
    "description": "Learn how you can use the Remote Debugger to interact with your cloud connector device and debug your web app. You'll also learn how to use the debugger to run a sample app by changing the URL location."
  },
  {
    "id": "sample-app",
    "thumb": "thumbs/sample-app.jpg",
    "url": "https://senzadev.net/streams/sample-app/sample-app.mpd",
    "title": "Running a Sample App",
    "description": "Learn how to run a sample app that lets you switch back and forth between playing video in the web app and streaming video directly to the device. You'll also learn how to use ngrok to run an app on your computer in the simulator."
  },
  {
    "id": "sample-apps-tour",
    "thumb": "thumbs/sample-apps-tour.jpg",
    "url": "https://senzadev.net/streams/sample-apps-tour/sample-apps-tour.mpd",
    "title": "Sample Apps Tour",
    "description": "Come take a tour of all the sample code apps available on the Senza developer portal! We'll highlight each app in the documentation and give a quick demo of the app in the Simulator."
  },
  {
    "id": "zoom",
    "thumb": "thumbs/zoom.jpg",
    "url": "https://senzadev.net/streams/zoom/zoom.mpd",
    "title": "Picture in Picture",
    "description": "This video tutorial shows how to write an app that plays two videos, one picture-in-picture and the other fullscreen, with animations to switch them back and forth."
  },
  {
    "id": "flags",
    "thumb": "thumbs/flags.jpg",
    "url": "https://senzadev.net/streams/flags/flags.mpd",
    "title": "Geolocation",
    "description": "This video tutorial shows how to geolocate the viewer’s cloud connector by getting its IP address from the Senza client library. Warning: contains terrible fake accents."
  },
  {
    "id": "speech-recognition",
    "thumb": "thumbs/speech-recognition.jpg",
    "url": "https://senzadev.net/streams/speech-recognition/speech-recognition.mpd",
    "title": "Speech Recognition",
    "description": "This video tutorial shows how to use a QR code to pair a mobile phone, capture voice input using WebKit speech recognition, send the input to the TV app using Socket.IO, and generate images using OpenAI."
  },
  {
    "id": "authentication",
    "thumb": "thumbs/authentication.jpg",
    "url": "https://senzadev.net/streams/authentication/authentication.mpd",
    "title": "Device Authentication",
    "description": "Learn how you can use device-based authentication, so your users never need to think about usernames and passwords. Alternatively you can show a QR code that lets users sign in on a mobile phone the first time they use a device."
  },
  {
    "id": "remote",
    "thumb": "thumbs/remote.jpg",
    "url": "https://senzadev.net/streams/remote/remote.mpd",
    "title": "Smart Remote",
    "description": "Learn how to make a smart remote control that runs on a mobile phone. It emulates the buttons on the standard Bluetooth remote, and adds a trackpad for gesture input, a keyboard for text input, and a microphone for voice input."
  },
  {
    "id": "zombies",
    "thumb": "thumbs/zombies.jpg",
    "url": "https://senzadev.net/streams/zombies/zombies.mpd",
    "title": "Emergency Alerts",
    "description": "Learn how to send emergency alerts to Senza devices using the Group Messaging API, in the event of a zombie apocalypse or tsunami."
  },
  {
    "id": "popup-ads",
    "thumb": "thumbs/popup-ads.jpg",
    "url": "https://senzadev.net/streams/popup-ads/popup-ads.mpd",
    "title": "Popup Ads",
    "description": "In this video you'll learn how you can write an app that displays popup ads on top of the video, using Senza's Alarm Manager to schedule them."
  },
  {
    "id": "gateway",
    "thumb": "thumbs/gateway.jpg",
    "url": "https://senzadev.net/streams/gateway/gateway.mpd",
    "title": "Device Gateway",
    "description": "Learn how to implement a gateway that routes traffic from each device to a different link. Includes a REST API for setting the link and a script that integrates with ngrok."
  },
  {
    "id": "metro",
    "thumb": "thumbs/metro.jpg",
    "url": "https://senzadev.net/streams/metro/metro.mpd",
    "title": "Metro",
    "description": "A simple digital signage app that shows realtime train arrivals for stations on the Washington Metro."
  },
  {
    "id": "flights",
    "thumb": "thumbs/flights.jpg",
    "url": "https://senzadev.net/streams/flights/flights.mpd",
    "title": "Flights",
    "description": "Learn how to make a digital signage application showing flight departure information. Built as a full-stack app that loads schedule data using APIs from a backend server. Also shows how to use CSS animations, custom fonts, and multi-lingual content."
  },
  {
    "id": "tv-guide",
    "thumb": "thumbs/tv-guide.jpg",
    "url": "https://senzadev.net/streams/tv-guide/tv-guide.mpd",
    "title": "TV Guide",
    "description": "Vibe coding a retro-style TV guide program grid."
  },
];
