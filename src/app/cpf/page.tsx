import { Suspense } from "react";
import { Home } from "../ui/home";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function CPF() {
  return (
    <Suspense>
      <ViewTransition>
        <Home></Home>
      </ViewTransition>
    </Suspense>
  );
}
