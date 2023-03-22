import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "... @/styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [provinsi, setProvinsi] = useState(null);

  const getProvince = async () => {
    const res = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
    );
    const data = await res.json();

    setProvinsi(data);
  };

  const getDaerah = async () => {
    const res = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/regencies/11.json"
    );

    const data = await res.json();
    setProvinsi(data);
  };

  const getKabupaten = async () => {
    const res = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/regencies/11.json"
    );

    const data = await res.json();
    setProvinsi(data);
  };

  const getKecamatan = async () => {
    const res = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/districts/1103.json"
    );

    const data = await res.json();
    setProvinsi(data);
  };

  const getKelurahan = async () => {
    const res = await fetch(
      "https://www.emsifa.com/api-wilayah-indonesia/api/villages/1101021.json"
    );
    const data = await res.json();

    setProvinsi(data);
  };
  useEffect(() => {
    getProvince();
  }, [setProvinsi]);

  return provinsi ? (
    <>
      <div>
        <button onClick={getProvince}>Provinsi</button>
        <button onClick={getDaerah}>Daerah</button>
        <button onClick={getKabupaten}>Kabupaten</button>
        <button onClick={getKecamatan}>Kecamatan</button>
        <button onClick={getKelurahan}>Kelurahan</button>
      </div>
      {provinsi.map((pro) => (
        <h1 key={pro.name}>{pro.name}</h1>
      ))}
    </>
  ) : null;
}
