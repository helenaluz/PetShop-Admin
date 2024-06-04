import Image from "next/image";
import Link from 'next/link';
import style from './page.module.css'
import { useState } from "react";

export default function Home() {
  return (
    <section className={style.section}>
    <main>  
      <div className="pb-4">
        <h1 className="display-5 p-3 texto">Quem Somos</h1>
        <blockquote className="blockquote ps-5">
          <p>
            Somos uma empresa focada em animais dométicos destinada a fazer o
            seu dia e o dia do seu bichinho melhor! <br />
            Criada em 2023 por uma aspirante em veterinária nós já mudamos a
            vida de diversos animais
          </p>
        </blockquote>
      </div>
    </main>
    </section>
  );
}