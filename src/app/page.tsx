import { Suspense } from "react";
import { Home as Page } from "./ui/home";

export default function Home() {
  return (
    <Suspense>
      <Page></Page>
    </Suspense>
  );
}
