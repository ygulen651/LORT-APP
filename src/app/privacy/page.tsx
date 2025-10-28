'use client';

import React from 'react';
import { FiMail, FiMapPin, FiPhoneCall, FiGlobe } from 'react-icons/fi';
import styles from './privacy-styles.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Gizlilik Politikası</h1>
        <p className={styles.meta}>
          Son Güncelleme: 28 Ekim 2025
        </p>
      </header>

      <div className={styles.highlightBox}>
        <p className={styles.paragraph}>
          Bu Gizlilik Politikası ("Politika"), IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ. ("<strong>Şirket</strong>", "<strong>biz</strong>", "<strong>bize</strong>", "<strong>bizim</strong>") tarafından sunulan tüm ürün ve hizmetlerin kullanımı sırasında kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklar.
        </p>
      </div>

      <hr />

      <section id="tanimlar" className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Topladığımız Veriler</h2>
        
        <h3 className={styles.sectionSubtitle}>1.1 Bize Verdiğiniz Veriler</h3>
        <p className={styles.paragraph}>
          Bir hesap oluşturmak için bize bazı bilgiler verirsiniz.
        </p>
        
        <h4 className={styles.subsectionTitle}>Kayıt</h4>
        <p className={styles.paragraph}>
          Bir hesap oluşturmak için adınız ve soyadınız, e-posta adresiniz ve/veya cep telefonu numaranız, genel konumunuz (ör. şehir) ve bir şifre gibi bilgileri vermeniz gerekir. Eğer premium bir Hizmete kaydolursanız, ödeme (örn. kredi kartı) ve faturalandırma bilgilerinizi vermeniz gerekecektir.
        </p>
        
        <h4 className={styles.subsectionTitle}>Profil</h4>
        <p className={styles.paragraph}>
          Eğitiminiz, iş deneyiminiz, becerileriniz, fotoğrafınız, şehir veya bölgeniz, onaylarınız ve profilinizdeki bilgilerin isteğe bağlı doğrulamaları (kimliğinizin veya iş yerinizin doğrulaması gibi) gibi profilinizdeki bilgilere ilişkin seçenekleriniz vardır. Profilinizde hiçbir ek bilgi vermek zorunda değilsiniz; bununla birlikte profil bilgileri, işe alım uzmanlarının ve iş fırsatlarının sizi bulması da dâhil, Hizmetlerimizden en iyi şekilde faydalanmanıza yardımcı olur. Hassas bilgileri profilinize eklemek ve bu hassas bilgileri herkese açık olarak göstermek sizin tercihinizdir. Lütfen, herkese açık olmasını istemediğiniz kişisel verileri yayınlamayın ve profil bilgilerinize eklemeyin.
        </p>
        
        <h4 className={styles.subsectionTitle}>Yayınlama ve Yükleme</h4>
        <p className={styles.paragraph}>
          Takviminizi senkronize etme gibi işlemlerle bize başka veriler verebilirsiniz. Hizmetlerimizde, bir form doldurma (örn. demografik veriler veya maaş), bir anket yanıtlama, özgeçmiş yükleme veya bir iş başvurusunu doldurma gibi işlemlerle verdiğiniz, yayınladığınız veya yüklediğiniz kişisel bilgilerinizi toplarız.
        </p>
        <p className={styles.paragraph}>
          Takvimlerinizi Hizmetlerimizle senkronize ederseniz; size ve diğer kişilere bağlantı önererek ve etkinlikler (ör. zaman, yer, katılımcılar ve kişiler) hakkında bilgi vererek ağınızı genişletmek için takvim toplantı bilgilerinizi toplarız.
        </p>
        <p className={styles.paragraph}>
          Kişisel bilgilerinizi yayınlamak ve yüklemek zorunda değilsiniz; ancak bunu yapmazsanız Hizmetlerimiz üzerinden ağınızı genişletme ve ağınızla iletişim kurma gücünüz sınırlanabilir.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.2 Diğer Kişilerden Alınan Veriler</h3>
        <h4 className={styles.subsectionTitle}>İçerik ve Haberler</h4>
        <p className={styles.paragraph}>
          Hizmetlerimizde siz veya diğer kişiler tarafından, sizinle ilgili bilgiler içeren bir içerik paylaşılabilir (makalelerin, gönderilerin, yorumların ve videoların bir parçası olarak). Ayrıca sizinle ilgili, profesyonel içerikli haberler ve başarılar gibi herkese açık bilgileri toplayabilir ve ayarlarınızda izin verdiğiniz ölçüde "haberlerde bahsedildi" niteliğindeki bildirimlerle Hizmetlerimizin bir parçası olarak diğer kullanıcılara gösterebiliriz.
        </p>
        
        <h4 className={styles.subsectionTitle}>Kişi ve Takvim Bilgileri</h4>
        <p className={styles.paragraph}>
          Diğer kişiler, takvimlerini Hizmetlerimizle senkronize ettiğinde, kişilerini Üye profilleri ile ilişkilendirdiğinde, kartvizit taradığında ve yüklediğinde veya Hizmetlerimizi kullanarak mesaj gönderdiğinde (davetiyeler ve bağlantı kurma talepleri dâhil), sizinle ilgili bazı kişisel bilgileri (iletişim bilgileri dâhil) edinmiş oluruz. Ayrıca siz veya diğer kişiler e-posta hesaplarını Hizmetlerimizle senkronize etmeyi kabul ederse, Üye profilleri ile eşleştirebileceğimiz "e-posta başlıklarını" da toplarız.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.3 Hizmet Kullanımı</h3>
        <p className={styles.paragraph}>
          Mobil uygulamalar dâhil olmak üzere, Hizmetlerimizi ziyaretinizi ve kullanımınızı kaydederiz.
        </p>
        <p className={styles.paragraph}>
          Sitelerimiz, uygulamalarımız ve platform teknolojilerimiz dâhil olmak üzere Hizmetlerimizi ziyaret ettiğiniz; içerikleri (ör. eğitim videosu) veya reklamları (site ve uygulamaların içinde veya dışında) görüntülediğiniz ya da tıkladığınız; arama yaptığınız; mobil uygulamalarımızdan birini yüklediğiniz; makale paylaştığınız veya iş ilanına başvurduğunuzda kullanım verilerini kaydederiz. Sizi tanımlamak ve kullanımınızı kaydetmek için oturumlar, çerezler, cihaz bilgileri ve IP adreslerini kullanırız.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.4 Çerezler ve Benzer Teknolojiler</h3>
        <p className={styles.paragraph}>
          Çerez Politikamızda belirtildiği üzere, sizin ve/veya cihazınızın aktif olup olmadığını anlamak üzere veri toplamak (örn. cihaz kimliği) ve Hizmetlerimizle etkileşim kurduğunuzda, farklı hizmetler ve cihazlarda sizi tanımlamak için çerezleri ve benzeri teknolojileri (ör. pikseller ve reklam etiketleri) kullanırız. Çerez Politikamızda açıklandığı üzere, bazı üçüncü tarafların çerezleri kullanmasına da izin veririz. Belirlenmiş Ülkelerin dışında ikamet ediyorsanız, Hizmetlerimizle (ör. reklam kimliği, IP adresi, işletim sistemi ve tarayıcı bilgileri) etkileşime geçmediğiniz yerlerden cihazınızla ilgili bilgi toplayabiliriz (veya bilgi toplayan diğerlerine itibar edebiliriz). Bu sayede Üyelerimize ilgili reklamları sağlar ve etkinliğini daha iyi anlarız. Reklam hedefleme ve diğer reklamlarla ilgili amaçlar için diğer sitelerdeki davranışlarınızı izleyen çerez ve benzer teknolojileri kullanmamızı da devre dışı bırakabilirsiniz.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.5 Cihazınız ve Konumunuz</h3>
        <p className={styles.paragraph}>
          Hizmetlerimizi (bazı eklentilerimiz, diğer sitelerdeki çerezlerimiz ve benzer teknolojiler dahil) ziyaret ettiğiniz veya ayrıldığınızda, hem geldiğiniz hem de gittiğiniz sitelerin URL adreslerini ve ziyaret saatinizi almış oluruz. Ayrıca, ağınız ve cihazınız (ör. IP adresiniz, proxy sunucunuz, web tarayıcınız ve eklentileri, cihaz tanımlayıcınız ve özellikleri, çerez kimlikleri ve/veya internet servis sağlayıcınız veya mobil hattınız) ile ilgili bilgileri de alırız. Eğer Hizmetlerimizi mobil bir cihazdan kullanıyorsanız, telefonunuzun ayarlarına göre, o cihaz bize konumunuzla ilgili bilgi iletebilir. Kesin konumunuzu belirlemek için GPS veya diğer araçları kullanmadan önce onayınızı isteriz.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.6 İletişimler</h3>
        <p className={styles.paragraph}>
          Hizmetlerimiz aracılığıyla başkalarıyla iletişim kurduğunuzda (örneğin pazarlama iletişimlerimiz dâhil olmak üzere mesajlar, etkinlikler veya bağlantı talepleri gönderdiğinizde, aldığınızda veya bunlarla etkileşim kurduğunuzda) hakkınızda bilgi toplarız. Bu, kiminle ve ne zaman iletişim kurduğunuzu gösteren bilgileri içerebilir. Ayrıca sitemizi desteklemek ve korumak için otomatik sistemler kullanıyoruz. Örneğin mesajlara olası yanıtları önermek ve Kullanıcı Anlaşmamızı veya Topluluk Politikalarımızı ihlal eden içerikleri yönetmek veya engellemek için bu sistemleri kullanıyoruz.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.7 İşyeri ve Okul Tarafından Verilen Bilgiler</h3>
        <p className={styles.paragraph}>
          Kurumunuz (örn. işveren veya okul), sizin kullanmanız için premium bir Hizmet satın aldığı zaman bize sizinle ilgili bazı bilgiler verebilir. İşvereniniz veya okulunuz gibi, sizin kullanımınız için Hizmetlerimizi satın alan diğer kişiler, sizinle ilgili bazı kişisel bilgileri ve çalışanları, öğrencileri veya mezunları için satın aldıkları Hizmetleri kullanma ayrıcalığınızı bize iletebilirler. Örneğin, şirket sayfası yöneticileri ve işe alım, satış veya eğitim ürünlerimizin kullanıcılarını yetkilendirmek için iletişim bilgilerini alırız.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.8 Diğerlerine Ait Siteler ve Hizmetler</h3>
        <p className={styles.paragraph}>
          Reklamlarımızı, çerezlerimizi veya eklentilerimizi içeren ya da diğer hizmetlerde LORTAPP hesabınızla oturum açtığınız zaman, bilgi almış oluruz. "LORTAPP ile Başvur" veya "LORTAPP ile Paylaş" gibi eklentiler üzerinden gerçekleşen ziyaret ve etkileşimlere ilişkin verileri toplayabiliriz.
        </p>
        
        <h3 className={styles.sectionSubtitle}>1.9 Diğer</h3>
        <p className={styles.paragraph}>
          Hizmetlerimizi sürekli iyileştiriyoruz; bu da yeni veriler aldığımız ve verileri kullanmak için yeni yöntemler oluşturduğumuz anlamına gelir. Hizmetlerimiz dinamik bir yapıdadır ve Hizmetlerimize sık sık, yeni bir bilgi seti ihtiyacı da duyabilen yeni özellikler ekleriz. Eğer net bir şekilde farklı bir kişisel bilgi toplar veya verilerinizi kullanım şeklimizde belirgin bir değişiklik yaparsak, size bildirim gönderir ve bu Gizlilik Politikası'nı güncelleriz.
        </p>
      </section>

      <section id="veri-sorumlusu" className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Veri Sorumlusu</h2>
        
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionSubtitle}>IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ.</h3>
          
          <div className={styles.contactItem}>
            <FiMapPin className={styles.contactIcon} />
            <span>Alavardı Mahallesi Söke Sokak, Uçan Balonlar Kreş ve Bakım Evi No:18/1, Meram/KONYA</span>
          </div>
          
          <div className={styles.contactItem}>
            <FiPhoneCall className={styles.contactIcon} />
            <a href="tel:+905325094599" className={styles.link}>0532 509 45 99</a>
          </div>
          
          <div className={styles.contactItem}>
            <FiMail className={styles.contactIcon} />
            <a href="mailto:lortapp01@gmail.com" className={styles.link}>lortapp01@gmail.com</a>
          </div>
          
        </div>
        
        <p className={styles.paragraph}>
          Bu Politika kapsamındaki taleplerinizi yukarıdaki iletişim bilgilerimiz aracılığıyla veya aşağıdaki <strong>Haklarınız</strong> bölümünde açıklanan yöntemlerle iletebilirsiniz.
        </p>
      </section>

      {/* Diğer bölümler aynı şekilde devam eder */}
      
      <section id="iletisim" className={styles.section}>
        <h2 className={styles.sectionTitle}>15. Bize Ulaşın</h2>
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionSubtitle}>İletişim Bilgileri</h3>
          <div className={styles.contactItem}>
            <FiGlobe className={styles.contactIcon} />
            <a href="https://www.lort.app/" target="_blank" rel="noopener noreferrer" className={styles.link}>www.lort.app</a>
          </div>
          <div className={styles.contactItem}>
            <FiMail className={styles.contactIcon} />
            <a href="mailto:lortapp01@gmail.com" className={styles.link}>lortapp01@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <FiMapPin className={styles.contactIcon} />
            <span>Alavardı Mahallesi Söke Sokak, Uçan Balonlar Kreş ve Bakım Evi No:18/1, Meram/KONYA</span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
