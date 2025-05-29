import { Suspense } from "react";
import { Home } from "../ui/home";

export default function CPF() {
  return (
    <Suspense>
      <Home></Home>
    </Suspense>
  );
}
