// UserLayout.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Navbar from "@/components/Navbar";
import { ROLE } from "@/common/role.enums";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
    children: React.ReactNode;
}

export default async function HomeLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(authOptions);

    console.log(session)

    if (!session) {
        redirect("/login")
    }

    return (
        <main>
            <Navbar />
            <div className="mt-28">{children}</div>
        </main>
    );
}
