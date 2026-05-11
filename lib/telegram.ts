declare global {
  interface Window {
    Telegram?: any;
  }
}

export const telegram =
  typeof window !== "undefined"
    ? window.Telegram?.WebApp
    : null;

export const initTelegram = () => {
  if (!telegram) return;

  telegram.ready();

  telegram.expand();

  telegram.enableClosingConfirmation();

  document.body.style.backgroundColor =
    telegram.backgroundColor || "#0f172a";
};

export const getTelegramUser = () => {
  if (!telegram) return null;

  return telegram.initDataUnsafe?.user || null;
};

export const getTelegramTheme = () => {
  if (!telegram) return "dark";

  return telegram.colorScheme || "dark";
};
