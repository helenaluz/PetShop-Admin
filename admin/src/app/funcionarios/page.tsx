import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { DataItem } from "./types";
import styles from "./page.module.css";

function fetchData() {
  const filePath = path.join(process.cwd(), "./data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data;
}

export default function Funcionarios() {
  const data = fetchData();

  const renderDataItem = (item: DataItem) => (
    <div key={item.nome} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={item.foto} width={250} height={250} alt={item.nome} />
      </div>
      <h2 className={styles.nome}>{item.nome}</h2>
      <p className={styles.propriedade}>{item.subobjeto.propriedade1}</p>
      <p className={styles.propriedade}>{item.subobjeto.propriedade2}</p>
      <Link href={`mailto:${item.email}`}>
        <p className={styles.email}>{item.email}</p>
      </Link>
    </div>
  );

  return (
    <main className={styles.container}>
      <h1>Funcionários</h1>
      <div className={styles.grid}>{data.map(renderDataItem)}</div>
    </main>
  );
}
