// NavLinks.tsx
"use client";

import { ROLE } from "@/common/role.enums";
import Link from "next/link";
import ButtonLogout from "./ButtonLogout";
import { useSession } from "next-auth/react";

export default function NavLinks() {
  const { data: session, status } = useSession();

  if (session?.profile?.role === ROLE.ADMIN) {
    return (
      <>
        <Link className="p-2" href="/home">
          Home
        </Link>
        <>
        <Link className="p-2" href="/">
          Users
        </Link>
        <Link className="p-2" href="/">
          AdminName {session?.profile?.name}
        </Link>
        <ButtonLogout />
        </>
      </>
    );
  } else if (session?.profile?.role === ROLE.USER) {
    return (
      <>
        <Link className="p-2" href="/home">
          Home
        </Link>
        <>
        <Link className="p-2" href="/">
          UserName {session?.profile?.name}
        </Link>
        <ButtonLogout />
        </>
      </>
    );
  } else {
    return (
      <>
        <Link className="p-2" href="/">
          Home
        </Link>
        <Link className="p-2" href="/">
          Default
        </Link>
        <Link className="p-2" href="/login">
          Login
        </Link>
      </>
    );
  }
}
