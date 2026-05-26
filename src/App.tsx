import "./App.css";

function App() {
  return (
    <div
      className="app"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        event.currentTarget.style.setProperty("--mx", `${x * 34}px`);
        event.currentTarget.style.setProperty("--my", `${y * 34}px`);
      }}
    >
      <div className="luxury-bg" aria-hidden="true">
        <span className="gold-orb orb-one"></span>
        <span className="gold-orb orb-two"></span>
        <span className="gold-orb orb-three"></span>
        <span className="luxury-grid"></span>
        <span className="luxury-map">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <header className="hero">
        <nav className="navbar">
          <div className="brand">
            <span className="brand-mark">A</span>
            <div>
              <strong>ASEL PROJE</strong>
              <small>Yıkım • Hafriyat • Deniz Yapıları</small>
            </div>
          </div>

          <div className="nav-links">
            <a href="#hizmetler">Hizmetler</a>
            <a href="#projeler">Projeler</a>
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#iletisim">İletişim</a>
            <button className="lang">TR / EN</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow">İstanbul Geneli Profesyonel Saha Operasyonları</span>
            <h1>Kontrollü Yıkım, Hafriyat ve Deniz Yapıları Çözümleri</h1>
            <p>
              Asel Proje; bina yıkımı, temel kazısı, kaya kırımı, hafriyat ve
              marina/deniz yapıları alanlarında güvenli, planlı ve profesyonel
              operasyonlar yürütür.
            </p>

            <div className="hero-actions">
              <a href="#projeler" className="primary-btn">Projeleri İncele</a>
              <a href="#iletisim" className="secondary-btn">Teklif Al</a>
            </div>
          </div>

          <div className="hero-card">
            <span>Aktif Proje Alanı</span>
            <strong>Kalamış Marina</strong>
            <p>Deniz kenarı saha koordinasyonu ve iskele söküm operasyonları.</p>
          </div>
        </div>
      </header>

      <section className="stats">
        <div><strong>İstanbul</strong><span>Geneli Hizmet</span></div>
        <div><strong>Yıkım</strong><span>Kontrollü Operasyon</span></div>
        <div><strong>Hafriyat</strong><span>Kazı & Saha Hazırlığı</span></div>
        <div><strong>Marina</strong><span>Deniz Yapıları</span></div>
      </section>

      <section id="hizmetler" className="section">
        <div className="section-head">
          <span>Hizmet Alanlarımız</span>
          <h2>Sahada güçlü, görünümde kurumsal.</h2>
        </div>

        <div className="services-grid">
          <article>
            <h3>Kontrollü Yıkım</h3>
            <p>Şehir içi bina, yapı ve özel mülk yıkım operasyonları.</p>
          </article>
          <article>
            <h3>Hafriyat ve Temel Kazısı</h3>
            <p>Temel açma, saha düzenleme ve ağır hafriyat çalışmaları.</p>
          </article>
          <article>
            <h3>Kaya Kırımı</h3>
            <p>Kırıcı ekipmanlarla kontrollü kaya ve beton parçalama.</p>
          </article>
          <article>
            <h3>Deniz ve Marina Çalışmaları</h3>
            <p>İskele sökümü, kıyı operasyonları ve deniz yapıları desteği.</p>
          </article>
        </div>
      </section>

      <section className="equipment-section">
        <div className="section-head">
          <span>Makine & Saha Kabiliyeti</span>
          <h2>Doğru ekipman, doğru planlama, güvenli operasyon.</h2>
        </div>

        <div className="equipment-grid">
          <article>
            <strong>01</strong>
            <h3>Ekskavatör Operasyonları</h3>
            <p>Yıkım, kazı ve saha hazırlığı için ağır iş makinesi operasyonları.</p>
          </article>

          <article>
            <strong>02</strong>
            <h3>Kırıcı Ekipmanlar</h3>
            <p>Kaya, beton ve zemin kırımı için kontrollü kırıcı çalışmaları.</p>
          </article>

          <article>
            <strong>03</strong>
            <h3>Hafriyat Lojistiği</h3>
            <p>Saha içi malzeme yönetimi, yükleme ve nakliye koordinasyonu.</p>
          </article>

          <article>
            <strong>04</strong>
            <h3>Marina & Kıyı Sahası</h3>
            <p>Deniz kenarı çalışma alanlarında saha düzeni ve operasyon desteği.</p>
          </article>
        </div>
      </section>

      <section className="parallax-section">
        <div>
          <span>İstanbul Geneli</span>
          <h2>Sahada disiplinli, iş tesliminde güvenilir.</h2>
          <p>
            Asel Proje; yıkım, hafriyat ve deniz yapıları operasyonlarında planlama,
            güvenlik ve ekipman koordinasyonunu bir arada yürütür.
          </p>
        </div>
      </section>

      <section id="projeler" className="section dark-section">
  <div className="section-head">
    <span>Proje Portföyü</span>
    <h2>Gerçek saha, gerçek operasyon.</h2>
  </div>

  <div className="project-grid">
    <div className="project-card marina-card">
      <div className="marina-collage">
        <img src="/assets/marina-1.jpg" alt="Kalamış Marina saha ofisi" />
        <img src="/assets/marina-2.jpg" alt="Marina ofis toplantısı" />
        <img src="/assets/marina-3.jpg" alt="Deniz manzaralı saha ofisi" />
        <img src="/assets/marina-4.jpg" alt="Proje planlama süreci" />
        <img src="/assets/marina-5.jpg" alt="Teknik çizim inceleme" />
        <img src="/assets/marina-6.jpg" alt="Marina saha görünümü" />
      </div>

      <div className="project-overlay">
        <span>Marine Operations</span>
        <h3>Kalamış Marina Saha Koordinasyonu</h3>
        <a className="project-link" href="#iletisim">Projeyi İncele</a>
      </div>
    </div>

    <div className="project-card image-card demolition-card">
      <div className="project-overlay">
        <span>Demolition</span>
        <h3>Kontrollü Bina Yıkımı</h3>
        <a className="project-link" href="#iletisim">Projeyi İncele</a>
      </div>
    </div>

    <div className="project-card excavation-card">
      <div className="excavation-split">
        <img src="/assets/excavation-1.jpg" alt="Temel kazısı ve hafriyat" />
        <img src="/assets/excavation-2.jpg" alt="Kaya kırımı ve yıkım operasyonu" />
      </div>

      <div className="project-overlay">
        <span>Excavation</span>
        <h3>Temel Kazısı ve Hafriyat</h3>
        <a className="project-link" href="#iletisim">Projeyi İncele</a>
      </div>
    </div>
  </div>
</section>

      <section id="hakkimizda" className="about">
        <div>
          <span>Asel Proje</span>
          <h2>Yıkım, hafriyat ve saha operasyonlarında çözüm ortağınız.</h2>
        </div>
        <p>
          Asel Proje, İstanbul genelinde kontrollü yıkım, hafriyat, kaya kırımı
          ve deniz yapıları alanlarında faaliyet gösteren bir saha operasyon
          firmasıdır. Amacımız; her projede güvenlik, planlama ve doğru ekipman
          yönetimini bir araya getirmektir.
        </p>
      </section>

      <section id="iletisim" className="contact-section">
        <div className="contact-map" aria-hidden="true">
          <span className="map-line line-one"></span>
          <span className="map-line line-two"></span>
          <span className="map-line line-three"></span>
          <span className="map-dot dot-one"></span>
          <span className="map-dot dot-two"></span>
          <span className="map-dot dot-three"></span>
        </div>

        <div className="contact-content">
          <div className="contact-copy">
            <span>İletişim & Teklif</span>
            <h2>Operasyon için iletişime geçin.</h2>
            <p>
              İstanbul genelinde yıkım, hafriyat, kaya kırımı ve deniz yapıları
              operasyonları için saha keşfi ve teklif sürecini birlikte planlayalım.
            </p>

            <div className="contact-actions">
              <a className="contact-primary" href="https://wa.me/905464151885" target="_blank" rel="noreferrer">
                <svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16.04 3.2C9.05 3.2 3.36 8.76 3.36 15.6c0 2.18.58 4.3 1.69 6.16L3.2 28.8l7.28-1.78a12.9 12.9 0 0 0 5.56 1.25c6.99 0 12.68-5.56 12.68-12.4S23.03 3.2 16.04 3.2Zm0 22.9c-1.78 0-3.53-.45-5.07-1.3l-.36-.2-4.32 1.05 1.1-4.12-.24-.38a10.08 10.08 0 0 1-1.62-5.48c0-5.64 4.7-10.23 10.5-10.23s10.5 4.59 10.5 10.23-4.7 10.23-10.5 10.23Zm5.76-7.66c-.32-.16-1.88-.9-2.17-1-.29-.11-.5-.16-.72.16-.21.31-.83 1-.99 1.2-.18.2-.36.23-.67.08-.32-.16-1.34-.48-2.56-1.55-.95-.82-1.59-1.84-1.77-2.15-.18-.31-.02-.48.14-.64.14-.14.32-.36.47-.53.16-.18.21-.31.32-.52.1-.2.05-.39-.03-.55-.08-.16-.72-1.7-.99-2.32-.26-.61-.52-.52-.72-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.05-1.1 2.56s1.13 2.98 1.28 3.18c.16.2 2.22 3.32 5.38 4.65.75.32 1.34.51 1.8.65.76.24 1.45.2 1.99.12.61-.09 1.88-.75 2.14-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.2-.61-.36Z"/>
                </svg>
                WhatsApp ile Teklif Al
              </a>
              <a className="contact-secondary" href="mailto:info@aselproje.com">
                Mail Gönder
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <div className="panel-top">
              <span>ASEL PROJE</span>
              <strong>İstanbul Geneli Saha Operasyonları</strong>
            </div>

            <div className="contact-items">
              <div>
                <small>Çalışma Alanı</small>
                <strong>İstanbul Geneli</strong>
              </div>
              <div>
                <small>Telefon / WhatsApp</small>
                <strong>+90 546 415 18 85</strong>
              </div>
              <div>
                <small>Hizmetler</small>
                <strong>Yıkım • Hafriyat • Marina</strong>
              </div>
              <div>
                <small>E-posta</small>
                <strong>info@aselproje.com</strong>
              </div>
              <div>
                <small>Instagram</small>
                <strong>Yakında eklenecek</strong>
              </div>
              <div>
                <small>Teklif</small>
                <strong>Saha keşfi sonrası planlama</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <h2>Asel Proje</h2>
          <p>İstanbul geneli yıkım, hafriyat ve deniz yapıları çözümleri.</p>
        </div>
        <div>
          <strong>Telefon / WhatsApp</strong>
          <span>info@aselproje.com</span>
        </div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/905464151885" target="_blank" rel="noreferrer">
        <svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M16.04 3.2C9.05 3.2 3.36 8.76 3.36 15.6c0 2.18.58 4.3 1.69 6.16L3.2 28.8l7.28-1.78a12.9 12.9 0 0 0 5.56 1.25c6.99 0 12.68-5.56 12.68-12.4S23.03 3.2 16.04 3.2Zm0 22.9c-1.78 0-3.53-.45-5.07-1.3l-.36-.2-4.32 1.05 1.1-4.12-.24-.38a10.08 10.08 0 0 1-1.62-5.48c0-5.64 4.7-10.23 10.5-10.23s10.5 4.59 10.5 10.23-4.7 10.23-10.5 10.23Zm5.76-7.66c-.32-.16-1.88-.9-2.17-1-.29-.11-.5-.16-.72.16-.21.31-.83 1-.99 1.2-.18.2-.36.23-.67.08-.32-.16-1.34-.48-2.56-1.55-.95-.82-1.59-1.84-1.77-2.15-.18-.31-.02-.48.14-.64.14-.14.32-.36.47-.53.16-.18.21-.31.32-.52.1-.2.05-.39-.03-.55-.08-.16-.72-1.7-.99-2.32-.26-.61-.52-.52-.72-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.05-1.1 2.56s1.13 2.98 1.28 3.18c.16.2 2.22 3.32 5.38 4.65.75.32 1.34.51 1.8.65.76.24 1.45.2 1.99.12.61-.09 1.88-.75 2.14-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.2-.61-.36Z"/>
                </svg>
        Teklif Al
      </a>
    </div>
  );
}

export default App;