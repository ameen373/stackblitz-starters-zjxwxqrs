"use client";

import Link from "next/link";

import { useAuthStore } from "../stores/auth.store";

export default function HomePage() {
  const { user } = useAuthStore();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4">
      {/* Header */}

      <div className="flex items-center gap-3 mb-6">
        <img
          src={user?.photoUrl || "/logo.png"}
          alt="avatar"
          className="w-14 h-14 rounded-full border border-slate-700"
        />

        <div>
          <h1 className="text-xl font-bold">
            {user?.firstName || "Telegram User"}
          </h1>

          <p className="text-sm text-slate-400">
            @{user?.username || "username"}
          </p>
        </div>
      </div>

      {/* Wallet Card */}

      <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-6">
        <p className="text-slate-400 text-sm mb-2">
          Wallet Balance
        </p>

        <h2 className="text-3xl font-bold">
          0.00 USDT
        </h2>
      </div>

      {/* Navigation */}

      <div className="grid grid-cols-2 gap-4">
        <Link href="/wallet">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="font-semibold mb-1">
              Wallet
            </h3>

            <p className="text-sm text-slate-400">
              Deposits & Withdrawals
            </p>
          </div>
        </Link>

        <Link href="/campaigns">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="font-semibold mb-1">
              Campaigns
            </h3>

            <p className="text-sm text-slate-400">
              Active Ads
            </p>
          </div>
        </Link>

        <Link href="/advertiser">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="font-semibold mb-1">
              Advertiser
            </h3>

            <p className="text-sm text-slate-400">
              Create Campaigns
            </p>
          </div>
        </Link>

        <Link href="/publisher">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800">
            <h3 className="font-semibold mb-1">
              Publisher
            </h3>

            <p className="text-sm text-slate-400">
              Earn Rewards
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
