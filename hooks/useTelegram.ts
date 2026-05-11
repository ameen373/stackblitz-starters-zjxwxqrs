"use client";

import { useEffect, useState } from "react";

import {
  initTelegram,
  getTelegramUser,
  getTelegramTheme,
} from "@/lib/telegram";

export function useTelegram() {
  const [user, setUser] = useState<any>(null);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    initTelegram();

    const tgUser = getTelegramUser();

    const tgTheme = getTelegramTheme();

    setUser(tgUser);

    setTheme(tgTheme);
  }, []);

  return {
    user,
    theme,
  };
}
