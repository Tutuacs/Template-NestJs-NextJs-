"use client";

import { Backend_URL } from "@/lib/Constants";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState<string>("");

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    const result = await fetch(Backend_URL + "/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (result?.status !== 200) {
      console.log(result);
      return;
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="p-8 bg-white rounded-t-lg w-96">
        <h1 className="mb-6 text-2xl font-bold text-center">Recuperar senha</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:border-red-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              placeholder="Digite seu email de login"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div>
        <div className="flex p-8 m-auto text-2xl text-white rounded-b-lg focus:shadow-outline hover:animate-pulse hover:bg-slate-800 bg-slate-900 w-96 hover:text-red-400">
          <div className="m-auto">Recuperar</div>
        </div>
      </div>
    </main>
  );
}
