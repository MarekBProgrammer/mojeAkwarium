import "./index.css";

function App() {
    return (
        <div className="welcome-page">

            {/* Nagłówek */}
            <header>
                <h1>Moje Akwarium — inteligentna pomoc w akwarystyce</h1>

                <h3>
                    Dobieraj ryby i rośliny, twórz biotopy,
                    prowadź planer i odkrywaj pochodzenie gatunków.
                </h3>

                <div className="header-buttons">
                    <button>Zarejestruj się</button>
                    <button>Zaloguj się</button>
                </div>
            </header>


            <main>

                {/* Funkcje aplikacji */}
                <section>
                    <h2>Co potrafi aplikacja?</h2>


                    <div className="feature">
                        <img src="image/encyklopedia.jpg" alt="Zdjęcie akwarium" />

                        <article>
                            <h3>Encyklopedia ryb i roślin</h3>

                            <p>
                                Znajdź informacje o ponad 1000 gatunkach ryb i roślin
                                akwariowych, ich wymaganiach środowiskowych,
                                kompatybilności oraz sposobie pielęgnacji.
                            </p>

                            <button>Przejdź do encyklopedii</button>
                        </article>
                    </div>


                    <div className="reverse-feature">

                        <img src="image/dobieranie.jpg" alt="Zdjęcie akwarium" />

                        <article>
                            <h3>Dobieranie obsady akwarium</h3>

                            <p>
                                Skorzystaj z narzędzia, które pomoże Ci dobrać
                                odpowiednie ryby i rośliny, tak aby stworzyć
                                zdrowy i harmonijny zbiornik.
                            </p>

                            <button>Dobierz obsadę</button>
                        </article>

                    </div>


                    <div className="feature">
                        <img src="image/biotop.jpg" alt="Zdjęcie akwarium" />

                        <article>
                            <h3>Mapa biotopów</h3>

                            <p>
                                Odkrywaj naturalne środowiska ryb z całego świata
                                i twórz akwaria inspirowane prawdziwymi biotopami.
                            </p>

                            <button>Odkryj pochodzenie ryb</button>
                        </article>
                    </div>

                </section>


                {/* Dla kogo jest aplikacja */}
                <section>
                    <h2>Dla kogo?</h2>


                    <div className="feature">
                        <img src="image/poczatkujacy.jpg" alt="Początkujący akwarysta" />

                        <article>
                            <h3>Początkujący akwaryści</h3>

                            <p>
                                Naucz się podstaw akwarystyki, unikaj najczęstszych
                                błędów i stwórz swoje pierwsze piękne akwarium.
                            </p>
                        </article>
                    </div>


                    <div className="reverse-feature">

                        <img src="image/zawansowany.jpg" alt="Średniozaawansowany akwarysta" />

                        <article>
                            <h3>Średniozaawansowani akwaryści</h3>

                            <p>
                                Rozwijaj swoje hobby dzięki bardziej zaawansowanym
                                narzędziom, planowaniu zbiorników i analizie gatunków.
                            </p>
                        </article>

                    </div>


                    <div className="feature">
                        <img src="image/specjalista.jpg" alt="Zaawansowany akwarysta" />

                        <article>
                            <h3>Zaawansowani akwaryści</h3>

                            <p>
                                Korzystaj z dokładnych danych o gatunkach,
                                biotopach i zaawansowanych metodach prowadzenia akwarium.
                            </p>
                        </article>
                    </div>

                </section>

            </main>


            {/* Stopka */}
            <footer>
                <p>© 2026 Moje Akwarium. Wszelkie prawa zastrzeżone.</p>
            </footer>

        </div>
    );
}

export default App;