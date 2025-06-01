import { Suspense } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Home } from "../ui/home";

export default function CNPJ() {
  return (
    <Suspense>
      <ViewTransition>
        <Home></Home>
      </ViewTransition>
    </Suspense>
  );
}
