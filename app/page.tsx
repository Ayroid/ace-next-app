import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import bgimage from "@/public/images/bgimage.jpg";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className="font-bold text-2xl my-5">Hello {session?.user?.name}</h1>
      <Link href={"/users"}>Users</Link>
      <br />
      <Link href={"/users/dynamic"}>Dynamic Users</Link>
      <br />
      <Link href={"/users/static"}>Static Users</Link>
      <br />
      <Link href={"/users/new"}>New Users</Link>
      <br />
      <Link href={"/admins"}>Admins</Link>
      <br />
      <Image
        src={bgimage}
        alt="BgImage"
        quality={100}
        className="object-cover"
        priority
      />
    </main>
  );
};

export default Home;
