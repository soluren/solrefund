if (
    typeof Telegram === 'undefined' ||
    typeof Telegram.WebApp === 'undefined'
  ) {
    document.body.innerHTML = "<h2>Пожалуйста, откройте этот сайт через Telegram-бота.</h2>";
  } else {
    Telegram.WebApp.ready();
    console.log("Добро пожаловать из Telegram!");
  }