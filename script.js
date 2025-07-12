if (Telegram.WebApp.platform === "unknown") {
    window.location.href = "https://www.google.com/"
  } else {
    Telegram.WebApp.ready();
    console.log("Добро пожаловать из Telegram!");
  }