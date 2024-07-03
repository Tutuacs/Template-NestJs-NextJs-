import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main>
      <Navbar />
      <div className="flex flex-col min-h-full mb-10">
        <section className="w-full">
          <div className="flex flex-col items-center bg-gray-200">
            <h1 className="mb-10 text-6xl font-bold text-center text-black animate-pulse">
              Home
            </h1>
          </div>
        </section>
      </div>
    </main>
  );
}
