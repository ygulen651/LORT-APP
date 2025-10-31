import React from 'react';
import styles from './premium-styles.module.css';

export const metadata = {
  title: 'Premium Abonelik ve İade Politikası | LORT APP',
  description: 'LORTAPP Premium Abonelik ve İade Politikası',
};

export default function PremiumAbonelikPolitikasi() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>LORTAPP PREMIUM ABONELİK VE İADE POLİTİKASI</h1>
        
        <h2>1. Premium Abonelik Türleri</h2>
        <p>LortApp tarafından sunulan Premium abonelik paketleri şunlardır:</p>
        <ul>
          <li><strong>LortApp Premium Career:</strong> Kişisel ticari ağınızı büyütmek, eşleşme fırsatlarını artırmak ve gelişmiş görünürlük elde etmek için.</li>
          <li><strong>LortApp Premium Business:</strong> Firma hesabı sahipleri için gelişmiş eşleşme, analiz, reklam ve bağlantı araçlarını içerir.</li>
          <li><strong>LortApp Premium Şirket Sayfası:</strong> Şirket profilleri için özel istatistikler, mesajlaşma ve marka vitrini araçlarını içerir.</li>
          <li><strong>LortApp Recruiter Lite:</strong> İşe alım yapan kullanıcılar için aday bulma ve filtreleme araçlarını sağlar.</li>
          <li><strong>LortApp Sales Navigator:</strong> Satış fırsatlarını takip etmek ve hedef firmalara ulaşmak için geliştirilmiş profesyonel sürümdür.</li>
          <li><strong>LortApp Learning:</strong> Dış ticaret, satış, pazarlama ve dijital dönüşüm eğitimlerine erişim sağlar.</li>
        </ul>

        <h2>2. İptal ve İade Koşulları</h2>
        <h3>2.1 Genel İade Politikası</h3>
        <ul>
          <li>Premium abonelikler, dijital hizmet kapsamında olduğu için ödeme tamamlandığında anında aktif edilir.</li>
          <li>Bu nedenle, Türk mevzuatına göre (Mesafeli Sözleşmeler Yönetmeliği 15/1-ğ) abonelik aktif hale geldikten sonra otomatik cayma hakkı bulunmamaktadır.</li>
          <li>Ancak abonelik kullanılmamışsa, ödeme tarihinden itibaren 7 gün içinde iade talebinde bulunabilirsiniz.</li>
          <li>Kullanım tespiti; Premium özelliklerin (ör. mesajlaşma, eşleşme, analiz ekranı vb.) kullanılıp kullanılmadığına göre yapılır.</li>
        </ul>
        <p>İade talebi için:<br />
        📧 <a href="mailto:info@lortapp.com.tr" className={styles.link}>info@lortapp.com.tr</a> adresine, ödeme dekontunuzu ve kullanıcı adınızı içeren bir e-posta gönderebilirsiniz.</p>

        <h3>2.2 Abonelik İptali</h3>
        <ul>
          <li>Aboneliğinizi dilediğiniz zaman hesap ayarları &gt; abonelik yönetimi menüsünden iptal edebilirsiniz.</li>
          <li>İptal işlemi, mevcut fatura döneminin sonunda yürürlüğe girer.</li>
          <li>İptal ettiğinizde, mevcut fatura döneminiz bitene kadar Premium özelliklerden (ör. Eşleşme Kredileri, İstatistikler, InMail mesajları vb.) yararlanabilirsiniz.</li>
        </ul>

        <h2>3. Özel Durumlar</h2>
        <h3>3.1 Mobil Uygulama Üzerinden Alımlar</h3>
        <p>LortApp iOS veya Android uygulamaları üzerinden yapılan aboneliklerde, ödeme işlemleri ilgili mağazalar (Apple App Store, Google Play Store) tarafından yürütülür.</p>
        <p>Bu nedenle, iade talepleri için ilgili mağaza politikaları geçerlidir:</p>
        <ul>
          <li><strong>Apple iOS kullanıcıları:</strong> Apple Destek üzerinden iade talebinde bulunmalıdır.</li>
          <li><strong>Google Play kullanıcıları:</strong> Google Play "Satın Alma Geçmişi" bölümünden iade isteği oluşturabilir.</li>
        </ul>
        <p>LortApp, bu platformlardan yapılan ödemelerde doğrudan iade işlemi gerçekleştiremez.</p>

        <h3>3.2 İşlem Başına Ödeme Ürünleri</h3>
        <ul>
          <li>Bazı dijital ürünler "işlem başına ödeme" modeline tabidir (ör. Reklam Görüntülemeleri, Sponsorlu Ürünler, Tıklama Başına Ödeme).</li>
          <li>Bu tür ürünlerde gerçekleşmiş işlemler iade edilmez.</li>
        </ul>
        <p>Örneğin:</p>
        <ul>
          <li>Bir reklam gösterimi gerçekleşmişse,</li>
          <li>Bir eşleşme kredisi kullanılmışsa,</li>
          <li>Bir sponsorlu gönderi yayına alınmışsa</li>
        </ul>
        <p>ücret iadesi yapılmaz.</p>

        <h2>4. Avrupa Birliği ve Diğer Ülkeler için Ek Haklar</h2>
        <p>Yasal düzenlemelere bağlı olarak aşağıdaki istisnalar uygulanabilir:</p>
        <ul>
          <li><strong>AB Vatandaşları:</strong> Abonelik başladıktan sonraki 14 gün içinde tam iade hakkına sahiptir (eğer hizmet kullanılmamışsa).</li>
          <li><strong>Almanya:</strong> Yıllık aboneliklerin ilk yılı hariç, kalan dönem için 1 ay öncesinden bildirimle iade mümkündür.</li>
          <li><strong>Danimarka / Hollanda:</strong> 1 ay önceden bildirilen iptallerde, kalan dönem için kısmi iade yapılabilir.</li>
          <li><strong>SEPA (Avrupa Tek Ödeme Alanı):</strong> Bankanız aracılığıyla, ödeme tarihinden itibaren 8 hafta içinde geri ödeme talep etme hakkınız olabilir.</li>
        </ul>

        <h2>5. İade Başvurusu Süreci</h2>
        <ol>
          <li>Aboneliğinize ait kullanıcı adı, ödeme tarihi, ödeme yöntemi ve gerekçenizi belirterek e-posta gönderin: 📧 <a href="mailto:info@lortapp.com.tr" className={styles.link}>info@lortapp.com.tr</a></li>
          <li>Talebiniz 5 iş günü içinde değerlendirilir.</li>
          <li>Uygun görülen iadeler, ödemenin yapıldığı aynı yöntemle 7–14 iş günü içinde yapılır.</li>
        </ol>

        <h2>6. Uyuşmazlık Çözümü</h2>
        <ul>
          <li>İade politikasıyla ilgili anlaşmazlıklar öncelikle LortApp destek birimi üzerinden çözülmeye çalışılır.</li>
          <li>Çözüm sağlanamazsa, Karaman Tüketici Hakem Heyeti ve Karaman Mahkemeleri yetkilidir.</li>
        </ul>

        <div className={styles.contactInfo}>
          <p>📍 © 2025 IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ. Tüm hakları saklıdır.</p>
          <p>📧 <a href="mailto:info@lortapp.com.tr" className={styles.link}>info@lortapp.com.tr</a></p>
          <p>🌐 <a href="https://www.lort.app" className={styles.link}>www.lort.app</a></p>
          <p>Karaman / Türkiye</p>
        </div>
      </div>
    </div>
  );
}
