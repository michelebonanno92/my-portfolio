export function Header() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <a href="#home">Home</a>
        <a href="#progetti">Progetti</a>
        <a href="#contatti">Contatti</a>
      </nav>

      {/* Sezioni */}
      <section id="home" style={{ height: "100vh", backgroundColor: "lightblue" }}>
        <h1>Home</h1>
      </section>
      <section id="progetti" style={{ height: "100vh", backgroundColor: "lightgreen" }}>
        <h1>Progetti</h1>
      </section>
      <section id="contatti" style={{ height: "100vh", backgroundColor: "lightcoral" }}>
        <h1>Contatti</h1>
      </section>
    </div>
  );
}
