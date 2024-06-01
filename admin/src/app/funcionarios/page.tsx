import Image from "next/image";
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { DataItem } from './types';

 function fetchData() {
  const filePath = path.join(process.cwd(), './data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data;
}

export default function Funcionarios() {
  const data =  fetchData();

  const renderDataItem = (item:DataItem) => {
    return (
      <div key={item.nome}>
        <h2>nome:{item.nome}</h2>
        <p>{item.email}</p>
        <Image src={item.foto} width={200} height={200} alt='' />
      </div>
    );
  };

  return (
    <main>
      <h1>Data from JSON:</h1>
      <div>
        {data.map(renderDataItem)}
      </div>
    </main>
  );
}

