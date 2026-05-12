"use client";

import { useEffect } from "react";

import { usetelegram } from "../../hooks/usetelegram";
import { useAuthStore } from "../../stores/auth.store";
export default function TelegramAuth() {
  const { user } = useTelegram();

  const { setAuth } = useAuthStore();

  useEffect(() => {
    if (!user) return;

    const fakeToken = `telegram_${user.id}`;

    setAuth(fakeToken, {
      id: String(user.id),

      telegramId: String(user.id),

      username: user.username,

      firstName: user.first_name,

      lastName: user.last_name,

      photoUrl: user.photo_url,
    });
  }, [user, setAuth]);

  return null;
}
