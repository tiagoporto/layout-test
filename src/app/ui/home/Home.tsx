"use client";
import { useEffect, useRef, useState } from "react";

import styles from "./Home.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { CNPJ } from "../CNPJ";
import { CPF } from "../CPF";
import Link from "next/link";

export const Home = () => {
  const pathname = usePathname();
  const queryString = useSearchParams();
  const router = useRouter();
  const [top, setTop] = useState(Number(queryString.get("top")));
  const refMain = useRef<HTMLDivElement>(null);
  const refCpf = useRef<HTMLDivElement>(null);
  const refCnpj = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<"cpf" | "cnpj">(
    pathname === "/cnpj" ? "cnpj" : "cpf"
  );
  const [removeCPFDOM, setRemoveCPFDOM] = useState(false);
  const [removeCNPJDOM, setRemoveCNPJDOM] = useState(false);
  const [showCPF, setShowCPF] = useState(true);
  const [showCNPJ, setShowCNPJ] = useState(true);

  useEffect(() => {
    const current = pathname === "/cnpj" ? "cnpj" : "cpf";

    setActive(() => current);
  }, [pathname]);

  useEffect(() => {
    refCpf.current?.scrollTo({ top });
    refCnpj.current?.scrollTo({ top });
  }, [top]);

  // CPF
  const handleAnimationStartCPF = () => {
    if (refMain.current && refCpf.current) {
      refMain.current.style.pointerEvents = "none";
      refCpf.current.style.overflowY = "hidden";
    }

    setShowCPF(false);
    setRemoveCPFDOM(false);
    setShowCNPJ(true);
    setRemoveCNPJDOM(false);
  };
  const handleAnimationEndCPJ = () => {
    if (refMain.current && refCpf.current) {
      refMain.current.style.pointerEvents = "auto";
      refCpf.current.style.overflowY = "scroll";
    }

    setShowCPF(true);
    setShowCNPJ(false);
    setRemoveCNPJDOM(true);
  };

  const handleScrollCPF = () => {
    if (refCpf.current) {
      setTop(refCpf.current.scrollTop);
    }
  };

  // CNPJ
  const handleAnimationStartCNPJ = () => {
    if (refMain.current && refCnpj.current) {
      refMain.current.style.pointerEvents = "none";
      refCnpj.current.style.overflowY = "hidden";
    }

    setShowCPF(true);
    setRemoveCPFDOM(false);
    setShowCNPJ(false);
    setRemoveCPFDOM(false);
  };
  const handleAnimationEndCNPJ = () => {
    if (refMain.current && refCnpj.current) {
      refMain.current.style.pointerEvents = "auto";
      refCnpj.current.style.overflowY = "scroll";
    }

    setShowCPF(false);
    setRemoveCPFDOM(true);
    setShowCNPJ(true);
  };

  const handleScrollCNPJ = () => {
    if (refCnpj.current) {
      setTop(refCnpj.current.scrollTop);
    }
  };

  return (
    <div className={styles.page} ref={refMain}>
      <div className={styles.main} style={{ top: `-${top}px` }}>
        <h1>Home</h1>
        <h2>sub Home</h2>
        <h2>sub Home</h2>
        <Link
          href="/cpf"
          className={styles.button}
          onNavigate={(e) => {
            e.preventDefault();

            router.push("/cpf?top=" + refCnpj.current?.scrollTop);
          }}
        >
          CPF
        </Link>
        <Link
          href="/cnpj"
          className={styles.button}
          onNavigate={(e) => {
            e.preventDefault();
            router.push("cnpj/?top=" + refCpf.current?.scrollTop);
          }}
        >
          CNPJ
        </Link>
      </div>

      <div
        className={`${styles.cpf} ${active === "cpf" ? styles.cpfActive : ""}`}
        onAnimationStart={handleAnimationStartCPF}
        onAnimationEnd={handleAnimationEndCPJ}
        onWheel={handleScrollCPF}
        ref={refCpf}
      >
        {removeCPFDOM || <CPF showContent={showCPF}></CPF>}
      </div>

      <div
        className={`${styles.cnpj} ${
          active === "cnpj" ? styles.cnpjActive : ""
        }`}
        onAnimationStart={handleAnimationStartCNPJ}
        onAnimationEnd={handleAnimationEndCNPJ}
        ref={refCnpj}
        onWheel={handleScrollCNPJ}
      >
        {removeCNPJDOM || <CNPJ showContent={showCNPJ}></CNPJ>}
      </div>
    </div>
  );
};
