import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [kontaktlar, setKontaktlar] = useState([]);
  const [ism, setIsm] = useState("");
  const [familiya, setFamiliya] = useState("");
  const [kategoriya, setKategoriya] = useState("oilaviy");
  const [telefon, setTelefon] = useState("");
  const [sevimli, setSevimli] = useState(false);
  const [kategoriyaFiltr, setKategoriyaFiltr] = useState("");

  useEffect(() => {
    const saqlanganKontaktlar =
      JSON.parse(localStorage.getItem("kontaktlar")) || [];
    setKontaktlar(saqlanganKontaktlar);
  }, []);

  const saqlash = (yangiKontakt) => {
    const yangilanganKontaktlar = [...kontaktlar, yangiKontakt];
    localStorage.setItem("kontaktlar", JSON.stringify(yangilanganKontaktlar));
    setKontaktlar(yangilanganKontaktlar);
  };

  const yuborish = (e) => {
    e.preventDefault();
    const yangiKontakt = { ism, familiya, kategoriya, telefon, sevimli };
    saqlash(yangiKontakt);
    setIsm("");
    setFamiliya("");
    setTelefon("");
    setSevimli(false);
  };

  const kategoriyaOzgartirish = (e) => {
    setKategoriyaFiltr(e.target.value);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>Kontakt Formasi</h2>
        <form onSubmit={yuborish}>
          <input
            type="name"
            value={ism}
            onChange={(e) => setIsm(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="name"
            value={familiya}
            onChange={(e) => setFamiliya(e.target.value)}
            placeholder="Lastname"
            required
          />
          <select
            value={kategoriya}
            onChange={(e) => setKategoriya(e.target.value)}
          >
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="relatives">Relatives</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            placeholder="Telefon"
            required
          />
          <label>
            Favorite
            <input
              type="checkbox"
              checked={sevimli}
              onChange={() => setSevimli(!sevimli)}
            />
          </label>
          <button type="submit">Kontaktni qo'shish</button>
        </form>
      </div>

      <div className="filters">
        <input type="text" placeholder="To'liq Ismni Qidirish" />
        <select value={kategoriyaFiltr} onChange={kategoriyaOzgartirish}>
          <option value="">All</option>
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="relatives">Relatives</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default App;
