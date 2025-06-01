// import { Suspense } from "react";
import { Home as Page } from "./ui/home";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Home() {
  return (
    // <Suspense>
    <ViewTransition default="slow-fade">
      <Page></Page>
    </ViewTransition>
    // </Suspense>
  );
}
