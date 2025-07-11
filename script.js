const tg = Telegram.WebApp;

tg.ready()

const userData = {
  initData: Telegram.WebApp.initData,
  initDataUnsafe: Telegram.WebApp.initDataUnsafe,
  theme: Telegram.WebApp.themeParams,
  platform: Telegram.WebApp.platform,
};

tg.sendData(JSON.stringify(userData));