Telegram.WebApp.ready();

const userData = {
  initData: Telegram.WebApp.initData,
  initDataUnsafe: Telegram.WebApp.initDataUnsafe,
  theme: Telegram.WebApp.themeParams,
  platform: Telegram.WebApp.platform,
};

Telegram.WebApp.sendData(JSON.stringify(userData));