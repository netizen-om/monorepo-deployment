import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { client } from "@repo/db/client"

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};



export default async function Home() {

  const user = await client.user.findFirst();

  return (
    <div>
        {user?.username}
        {user?.password}
    </div>
  );
}
