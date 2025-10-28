'use client';

import React from 'react';
import styles from './privacy-styles.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>

      <header>
        <h1>LORTAPP GİZLİLİK POLİTİKASI</h1>
        <p className="meta">
          <strong>Geçerlilik Tarihi:</strong> 28 Ekim 2025<br/>
          <strong>Son Güncelleme:</strong> 28 Ekim 2025
        </p>
        <p>
          Bu Gizlilik Politikası (“Politika”), LORTAPP Teknoloji A.Ş. veya ilgili iştiraki/bağlı şirket(ler)i (“<strong>LORTAPP</strong>”, “<strong>biz</strong>”, “<strong>bize</strong>”, “<strong>bizim</strong>”), tarafından sunulan web sitesi <a href="https://www.lort.app/" target="_blank" rel="noopener noreferrer">https://www.lort.app/</a>, mobil uygulamalar, iletişim araçları ve reklam/analitik hizmetleri de dâhil olmak üzere tüm ürün ve hizmetlerimizin (hep birlikte “<strong>Hizmetler</strong>”) kullanımı sırasında kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklar. Bu Politika, <strong>tüm Üye ve Ziyaretçiler</strong> için geçerlidir.
        </p>
        <p className="blockquote">
          <strong>Kısa Özet:</strong> LORTAPP; profesyonellere yönelik bir sosyal ağ ve çevrimiçi platformdur. Kullanıcılar; hizmetlerini ve iş fırsatlarını sergiler, bulunur, diğer profesyoneller ile bağlantı kurar ve bilgiye erişir. Hesap açtığınızda ve Hizmetlerimizi kullandığınızda, bu Politikayı kabul etmiş olursunuz.
        </p>
      </header>

      <hr />

      <section id="tanımlar">
        <h2>1) Tanımlar ve Kapsam</h2>
        <ul>
          <li><strong>Üye:</strong> LORTAPP'a kayıtlı kullanıcılar.</li>
          <li><strong>Ziyaretçi:</strong> Kayıt olmaksızın Hizmetlerimizi görüntüleyen kişiler.</li>
          <li><strong>Belirlenmiş Ülkeler:</strong> Avrupa Birliği (AB), Avrupa Ekonomik Alanı (AEA) ülkeleri ve İsviçre. Belirlenmiş Ülkeler veya Birleşik Krallık'taki Üye ve Ziyaretçiler, <em>Avrupa Bölgesel Gizlilik Bildirisi</em>'mizi de incelemelidir.</li>
          <li><strong>KVKK:</strong> 6698 sayılı Kişisel Verilerin Korunması Kanunu.</li>
          <li><strong>GDPR:</strong> AB Genel Veri Koruma Tüzüğü.</li>
          <li><strong>CCPA/CPRA:</strong> Kaliforniya Tüketici Gizliliği Yasası ve değişiklikleri.</li>
        </ul>
        <p>Bu Politika; çerez kullanımımızı özetler; ayrıntılı bilgi için <strong>Çerez Politikası</strong>'na bakınız.</p>
      </section>

      <section id="veri-sorumlusu">
        <h2>2) Veri Sorumlusu</h2>
        <ul>
          <li><strong>Belirlenmiş Ülkeler/UK için:</strong> LORTAPP Ireland Limited (ticari unvan ve adres eklenecek) veri sorumlusudur.</li>
          <li><strong>Diğer bölgeler için:</strong> LORTAPP Teknoloji A.Ş. (adres: [adres ekleyin]) veri sorumlusudur.</li>
          <li><strong>İletişim:</strong> <a href="mailto:lortapp01@gmail.com">lortapp01@gmail.com</a></li>
          <li><strong>Veri Koruma Görevlisi (DPO):</strong> <a href="mailto:lortapp01@gmail.com">lortapp01@gmail.com</a></li>
        </ul>
        <p>Bu Politika kapsamındaki taleplerinizi aşağıdaki <strong>Haklarınız</strong> bölümünde açıklanan yöntemlerle iletebilirsiniz.</p>
      </section>

      {/* Diğer bölümler aynı şekilde devam eder */}
      
      <section id="iletisim">
        <h2>15) Bize Ulaşın</h2>
        <ul>
          <li><strong>Web Sitesi:</strong> <a href="https://www.lort.app/" target="_blank" rel="noopener noreferrer">https://www.lort.app/</a></li>
          <li><strong>E‑posta:</strong> <a href="mailto:lortapp01@gmail.com">lortapp01@gmail.com</a></li>
          <li><strong>Adres:</strong> [Şirket adresinizi ekleyin]</li>
          <li><strong>Türkiye için Başvuru:</strong> KVKK m.13 uyarınca yazılı veya KEP/kayıtlı e‑posta üzerinden kimlik doğrulamalı başvuru yapabilirsiniz.</li>
          <li><strong>Şikâyet:</strong> Çözülmeyen şikâyetler için ilgili veri koruma otoritesine başvurabilirsiniz (Türkiye'de KVKK/KVKK Kurumu; AB/UK için yerel otorite).</li>
        </ul>
      </section>

      <footer>
        <p><em>Bu belge bir taslaktır ve hukuki görüş yerine geçmez. Faaliyetinize, veri akışlarınıza ve bölgesel mevzuata göre hukuk danışmanınızla birlikte son hâle getiriniz.</em></p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
