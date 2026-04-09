"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {

  return (
    <header>
        <Link href="/" className="logo">EFIVAL</Link>

        <nav className="navbar">
            <Link href="/">Início</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/Projetos">Projetos</Link>
            <Link href="/Contato">Contato</Link>
        </nav>

        <div className="fas fa-bars"></div>
    </header>
  );
}
