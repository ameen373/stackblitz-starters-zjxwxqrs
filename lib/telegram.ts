declare global {
  interface Window {
    Telegram?: any;
  }
}

export const getTelegramApp = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.Telegram?.WebApp || null;
};

export const initTelegram = () => {
  const telegram = getTelegramApp();

  if (!telegram) return;

  telegram.ready();

  telegram.expand();

  if (telegram.enableClosingConfirmation) {
    telegram.enableClosingConfirmation();
  }

  document.body.style.backgroundColor =
    telegram.backgroundColor || "#0f172a";
};

export const getTelegramUser = () => {
  const telegram = getTelegramApp();

  if (!telegram) return null;

  return telegram.initDataUnsafe?.user || null;
};

export const getTelegramTheme = () => {
  const telegram = getTelegramApp();

  if (!telegram) return "dark";

  return telegram.colorScheme || "dark";
};
