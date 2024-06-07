import MobilenavBar from "@/components/MobilenavBar";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter

  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

  return (className={type === 'mobile'? 'footer_name_mobile' : "footer_name"}
    <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn} />

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        <div>
          <MobilenavBar user={loggedIn} />
        </div>
      </div>
      {children}
    </div>
  </main>
  );
}
