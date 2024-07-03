import { ROLE } from "@/common/role.enums";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.profile.role === ROLE.ADMIN) {
      return (
        <main>
          <Link href="/">Admin Home</Link>
          <Link href="/login">Admin page</Link>
          <Link href="/register">User</Link>
        </main>
      );
    }

    return (
      <main>
        <Link href="/">User Home</Link>
        <Link href="/login">Cart</Link>
        <Link href="/register">User</Link>
      </main>
    );
  }

  return (
    <main className="flex justify-between p-4 bg-green-500 shadow-lg">
      <div className="flex items-center">
        <Link className="p-2" href="/">
          <Image 
            src="/banner.png" 
            alt="home" 
            width={200} 
            height={50} 
          />
        </Link>
      </div>
      <div className="flex items-center">
        <Link className="p-2" href="/login">Login</Link>
        <Link className="p-2" href="/register">Register</Link>
      </div>
    </main>
  );
}
