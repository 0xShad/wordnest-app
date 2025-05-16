import Navbar from "./Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function NavbarWrapper() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  const safeUser = user
    ? {
        given_name: user.given_name ?? undefined,
        picture: user.picture ?? undefined,
      }
    : null;

  return <Navbar user={safeUser} />;
}
