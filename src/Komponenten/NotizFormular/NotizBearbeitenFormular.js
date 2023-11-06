import React, { useState } from 'react';

const NotizBearbeitenFormular = ({ notiz, aktualisierenNotiz }) => {
  const [titel, setTitel] = useState(notiz.title);
  const [inhalt, setInhalt] = useState(notiz.content);

  const handleTitelChange = (e) => {
    setTitel(e.target.value);
  };

  const handleInhaltChange = (e) => {
    setInhalt(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    aktualisierenNotiz(notiz.id, { title: titel, content: inhalt });
  };

  return (
    <div>
      <h2>Notiz bearbeiten</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input type="text" value={titel} onChange={handleTitelChange} />
        </label>
        <br />
        <label>
          Inhalt:
          <textarea value={inhalt} onChange={handleInhaltChange} />
        </label>
        <br />
        <button type="submit">Notiz aktualisieren</button>
      </form>
    </div>
  );
};

export default NotizBearbeitenFormular;
