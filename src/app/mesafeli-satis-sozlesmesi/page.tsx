import React from 'react';
import Link from 'next/link';
import styles from './mesafeli-satis-styles.module.css';

export const metadata = {
  title: 'Mesafeli Satış Sözleşmesi | LORT APP',
  description: 'LORTAPP Dijital Hizmetler Mesafeli Satış Sözleşmesi',
};

export default function MesafeliSatisSozlesmesi() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>LORTAPP DİJİTAL HİZMETLER MESAFELİ SATIŞ SÖZLEŞMESİ</h1>
        <p className={styles.updateInfo}>
          Yürürlük Tarihi: 29.10.2025<br />
          Güncelleme Tarihi: 29.10.2025
        </p>
        
        <p>
          Bu Mesafeli Satış Sözleşmesi ("Sözleşme"), aşağıda bilgileri yer alan Hizmet Sağlayıcı ("LortApp") ile, LortApp platformu üzerinden dijital hizmet satın alan Kullanıcı ("Alıcı") arasında, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri uyarınca elektronik ortamda akdedilmiştir.
        </p>

        <h2>1. TARAFLAR</h2>
        <h3>1.1. Satıcı / Hizmet Sağlayıcı</h3>
        <p>
          <strong>Unvan:</strong> IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ.<br />
          <strong>Adres:</strong>  Türkiye<br />
          <strong>E-posta:</strong> info@lortapp.com.tr<br />
          <strong>Web:</strong> https://www.lort.app
        </p>

        <h3>1.2. Alıcı / Kullanıcı</h3>
        <p>
          LortApp web sitesi veya mobil uygulaması üzerinden dijital hizmet satın alan, üyelik oluşturan veya ödeme yapan gerçek veya tüzel kişidir.
          Kullanıcı, bu sözleşmeyi elektronik ortamda onaylayarak hükümlerini kabul etmiş sayılır.
        </p>

        <h2>2. SÖZLEŞMENİN KONUSU</h2>
        <p>
          Bu sözleşme, LortApp tarafından sağlanan dijital hizmetlerin (ör. Premium Üyelik, Eşleşme Kredisi, Doğrulanmış Hesap, Reklam Alanı, Görünürlük Arttırma Paketleri vb.) satışına ve kullanımına ilişkin hak ve yükümlülükleri kapsar.
        </p>

        <h2>3. HİZMETİN NİTELİĞİ</h2>
        <ul>
          <li>Satın alınan hizmet tamamen dijital olup herhangi bir fiziksel teslimat içermez.</li>
          <li>Hizmet, kullanıcının hesabına erişim yetkilerinin artırılması veya ek özelliklerin açılması şeklinde sağlanır.</li>
          <li>Kullanıcı, hizmetin detaylarını satın alma ekranında görür ve onaylayarak siparişi tamamlar.</li>
        </ul>

        <h2>4. HİZMET BEDELİ VE ÖDEME</h2>
        <ul>
          <li>Hizmet bedelleri KDV dâhil olarak gösterilir.</li>
          <li>Ödemeler, LortApp'in sunduğu güvenli sanal POS veya diğer dijital ödeme altyapıları üzerinden tahsil edilir.</li>
          <li>Ödeme tamamlandığında hizmet otomatik olarak etkinleştirilir.</li>
          <li>Fiyat değişiklikleri sadece yeni siparişlerde geçerlidir; aktif abonelikleri etkilemez.</li>
        </ul>

        <h2>5. TESLİMAT VE ERİŞİM</h2>
        <ul>
          <li>Dijital hizmetler, ödeme onayının ardından anında kullanıma açılır.</li>
          <li>Teslimat, fiziksel gönderim değil, dijital erişim şeklinde gerçekleşir.</li>
          <li>Hizmet, kullanıcının LortApp hesabına tanımlanır ve e-posta adresine doğrulama bilgisi gönderilir.</li>
        </ul>

        <h2>6. CAYMA HAKKI</h2>
        <ul>
          <li>Kullanıcı, satın alma sırasında hizmetin dijital olarak anında ifa edildiğini kabul eder.</li>
          <li>Bu nedenle Mesafeli Sözleşmeler Yönetmeliği'nin 15/1-ğ maddesi gereğince cayma hakkı bulunmamaktadır.</li>
          <li>LortApp, müşteri memnuniyeti amacıyla özel durumlarda isteğe bağlı iade değerlendirmesi yapabilir; bu uygulama, yasal cayma hakkı yerine geçmez.</li>
        </ul>

        <h2>7. KULLANICI YÜKÜMLÜLÜKLERİ</h2>
        <ul>
          <li>Kullanıcı, hizmeti yalnızca meşru ticari amaçlar için kullanır.</li>
          <li>Başkasının hesabını izinsiz kullanmak, spam veya dolandırıcılık faaliyeti yürütmek yasaktır.</li>
          <li>Hesap bilgileri kişiseldir, üçüncü kişilere devredilemez.</li>
          <li>Kullanıcı, profilinde yer alan bilgilerin doğruluğundan sorumludur.</li>
        </ul>

        <h2>8. HİZMETİN SONLANDIRILMASI</h2>
        <ul>
          <li>LortApp, sistem güvenliği, bakım, yasa ihlali veya kötüye kullanım durumlarında hizmeti askıya alabilir veya sonlandırabilir.</li>
          <li>Bu durumda kullanıcıya ücret iadesi yapılmaz; aksi, LortApp politikalarında belirtilmedikçe geçerli değildir.</li>
        </ul>

        <h2>9. FİKRİ MÜLKİYET</h2>
        <ul>
          <li>Tüm yazılım, tasarım, veri tabanı, içerik ve markalar LortApp Dijital Hizmetleri'ne aittir.</li>
          <li>Kullanıcı, bu içerikleri izinsiz çoğaltamaz, kopyalayamaz veya ticari amaçla kullanamaz.</li>
        </ul>

        <h2>10. KİŞİSEL VERİLERİN KORUNMASI</h2>
        <ul>
          <li>Kullanıcının kişisel verileri, LortApp Gizlilik Politikası'na uygun olarak işlenir.</li>
          <li>Politika: <Link href="/privacy" className={styles.link}>Gizlilik Politikası</Link></li>
          <li>Kullanıcı, hizmet satın alırken bu politikayı okuduğunu ve kabul ettiğini beyan eder.</li>
        </ul>

        <h2>11. UYUŞMAZLIKLAR</h2>
        <ul>
          <li>Taraflar öncelikle uzlaşma yoluna gitmeyi kabul eder.</li>
          <li>Anlaşmazlık hâlinde Karaman Tüketici Hakem Heyeti veya Karaman Mahkemeleri yetkilidir.</li>
          <li>Türkiye Cumhuriyeti mevzuatı uygulanır.</li>
        </ul>

        <h2>12. YÜRÜRLÜK</h2>
        <p>
          Kullanıcı, bu sözleşmeyi elektronik ortamda onaylayarak tüm şartları kabul eder.
          Sözleşme, onay anında yürürlüğe girer.
        </p>

        <div className={styles.contactInfo}>
          <p>📍 © 2025 IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ. Tüm hakları saklıdır.</p>
          <p>📧 info@lortapp.com.tr</p>
          <p>🌐 <a href="https://www.lort.app" className={styles.link}>www.lort.app</a></p>
        </div>
      </div>
    </div>
  );
}
