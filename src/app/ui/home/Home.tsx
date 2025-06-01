"use client";
import { useEffect, useRef, useState } from "react";

import styles from "./Home.module.css";
import { usePathname, useRouter } from "next/navigation";

import { CNPJ } from "../CNPJ";
import { CPF } from "../CPF";
import Link from "next/link";
// import path from "path";

interface State {
  active: "cpf" | "cnpj" | undefined;
  cpfShowContent: boolean;
  cpfRemoveDom?: boolean;
  cnpjShowContent?: boolean;
  cnpjRemoveDom?: boolean;
}

export const Home = () => {
  const pathname = usePathname();
  // const queryString = useSearchParams();
  const router = useRouter();
  // const refMain = useRef<HTMLDivElement>(null);
  const refCpf = useRef<HTMLDivElement>(null);
  const refCnpj = useRef<HTMLDivElement>(null);
  // const [top, setTop] = useState(Number(queryString.get("top")));
  const [state, setState] = useState<State>({
    active: undefined,
    cpfShowContent: pathname === "/cnpj" ? false : true,
    cpfRemoveDom: pathname !== "/cnpj" ? false : true,
    cnpjShowContent: pathname === "/cnpj" ? true : false,
    cnpjRemoveDom: pathname === "/cnpj" ? false : true,
  });
  console.log("state: ", state);

  // useEffect(() => {
  //   refCpf.current?.scrollTo({ top });
  //   refCnpj.current?.scrollTo({ top });
  // }, [top]);

  useEffect(() => {
    document.body.style.backgroundColor =
      pathname === "/cnpj" ? "salmon" : "steelblue";
  }, [pathname]);

  // useEffect(() => {
  //   // refMain.current?.scrollTo({ top });
  //   if (refMain.current) {
  //     document.getElementsByTagName("body")[0].scrollTop = top;
  //     // refMain.current.style.top = `${top}px`;
  //   }
  // }, []);

  // CPF
  const handleAnimationStartCPF = () => {
    // document.getElementsByTagName("body")[0].style.overflow = "hidden";
    // if (refMain.current) {
    //   refMain.current.style.pointerEvents = "none";
    //   // refCpf.current.style.overflowY = "hidden";
    // }
    // setShowCPF(false);
    // setRemoveCPFDOM(false);
    // setShowCNPJ(true);
    // setRemoveCNPJDOM(false);
  };
  const handleAnimationEndCPJ = () => {
    // document.getElementsByTagName("body")[0].style.overflowY = "auto";
    // if (refMain.current) {
    //   refMain.current.style.pointerEvents = "auto";
    //   // refCpf.current.style.overflowY = "scroll";
    // }

    requestAnimationFrame(() => {
      // setState((prevState) => ({
      //   ...prevState,
      //   cpfShowContent: true,
      //   cnpjRemoveDom: true,
      //   cpfRemoveDom: false,
      // }));

      router.push("/cpf");
    });
  };

  // const handleScrollCPF = () => {
  //   if (refCpf.current) {
  //     setTop(refCpf.current.scrollTop);
  //   }
  // };

  // CNPJ
  const handleAnimationStartCNPJ = () => {
    // document.getElementsByTagName("body")[0].style.overflow = "hidden";
    // if (refMain.current) {
    //   refMain.current.style.pointerEvents = "none";
    // refCnpj.current.style.overflowY = "hidden";
    // }
    // setShowCPF(true);
    // setRemoveCPFDOM(false);
    // setShowCNPJ(false);
    // setRemoveCPFDOM(false);
  };
  const handleAnimationEndCNPJ = () => {
    // document.getElementsByTagName("body")[0].style.overflowY = "auto";
    // if (refMain.current) {
    //   refMain.current.style.pointerEvents = "auto";
    //   // refCnpj.current.style.overflowY = "scroll";
    // }

    requestAnimationFrame(() => {
      // setState((prevState) => ({
      //   ...prevState,
      //   cnpjShowContent: true,
      //   cnpjRemoveDom: false,
      //   cpfRemoveDom: true,
      // }));

      router.push("/cnpj");
    });
  };

  // const handleScrollCNPJ = () => {
  //   if (refCnpj.current) {
  //     setTop(refCnpj.current.scrollTop);
  //   }
  // };

  return (
    <>
      {/* <div className={styles.page} ref={refMain}>
       <div className={styles.main} style={{ top: `-${top}px` }}> */}
      <div className={styles.header}>
        <h1>Home</h1>
        <Link
          href="/cpf"
          className={styles.button}
          onNavigate={(e) => {
            e.preventDefault();

            setState((prevState) => ({
              ...prevState,
              active: "cpf",
              cpfRemoveDom: false,
              // cpfShowContent: false,
              // cnpjShowContent: true,
              cnpjRemoveDom: false,
            }));

            // router.push(
            //   "/cpf?top=" + document.getElementsByTagName("body")[0].scrollTop
            // );
          }}
        >
          CPF
        </Link>
        <Link
          href="/cnpj"
          className={styles.button}
          onNavigate={(e) => {
            e.preventDefault();

            setState((prevState) => ({
              ...prevState,
              active: "cnpj",
              cpfRemoveDom: false,
              // cpfShowContent: true,
              cnpjRemoveDom: false,
              // cnpjShowContent: false,
            }));
            // router.push(
            //   "cnpj/?top=" + document.getElementsByTagName("body")[0].scrollTop
            // );
          }}
        >
          CNPJ
        </Link>
      </div>

      {/* <div
        className={`${styles.cpf} ${active === "cpf" ? styles.cpfActive : ""}`}
        // onAnimationStart={handleAnimationStartCPF}
        // onAnimationEnd={handleAnimationEndCPJ}
        // onWheel={handleScrollCPF}
        ref={refCpf}
      > */}
      <CPF
        enter={state.active === "cpf"}
        showContent={!!state.cpfShowContent}
        ref={refCpf}
        className={styles.wrapper}
        onAnimationStart={handleAnimationStartCPF}
        onAnimationEnd={handleAnimationEndCPJ}
        removeDOM={!!state.cpfRemoveDom}
      ></CPF>
      {/* </div> */}

      {/* <div
        className={`${styles.cnpj} ${
          active === "cnpj" ? styles.cnpjActive : ""
        }`}
        // onAnimationStart={handleAnimationStartCNPJ}
        // onAnimationEnd={handleAnimationEndCNPJ}
        ref={refCnpj}
        // onWheel={handleScrollCNPJ}
      > */}
      <CNPJ
        enter={state.active === "cnpj"}
        showContent={!!state.cnpjShowContent}
        ref={refCnpj}
        className={styles.wrapper}
        onAnimationStart={handleAnimationStartCNPJ}
        onAnimationEnd={handleAnimationEndCNPJ}
        removeDOM={!!state.cnpjRemoveDom}
      ></CNPJ>
      {/* </div>
    </div>*/}
    </>
  );
};
