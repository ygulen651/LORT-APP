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

      <section id="veri-kullanim" className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Verilerinizi Nasıl Kullanıyoruz</h2>
        
        <p className={styles.paragraph}>
          LortApp olarak verilerinizi, hizmetlerimizi sunmak, desteklemek, kişiselleştirmek ve geliştirmek için kullanıyoruz.
          Kişisel verilerinizi nasıl kullandığımız; hangi hizmetleri kullandığınıza, bu hizmetleri nasıl kullandığınıza ve yaptığınız tercihlere göre değişir.
        </p>
        
        <p className={styles.paragraph}>
          Verilerinizi;
        </p>
        <ul className={styles.list}>
          <li>Uygulamamızın ve web platformumuzun performansını geliştirmek,</li>
          <li>Kullanıcı deneyimini kişiselleştirmek,</li>
          <li>Firmalar arası ticari eşleşmeleri daha doğru hale getirmek,</li>
          <li>Güvenli iletişimi ve doğrulamayı sağlamak,</li>
          <li>Hizmetlerimizi ve reklamlarımızı geliştirmek</li>
        </ul>
        <p className={styles.paragraph}>amacıyla işleriz.</p>

        <h3 className={styles.sectionSubtitle}>2.1 Hizmetler</h3>
        <h4 className={styles.subsectionTitle}>Bağlantı Kurma ve Eşleşme</h4>
        <p className={styles.paragraph}>
          LortApp'in temel amacı, ihracat yapmak isteyen kişi ve firmaları güvenli ve verimli biçimde bir araya getirmektir.
        </p>
        <p className={styles.paragraph}>
          Verilerinizi;
        </p>
        <ul className={styles.list}>
          <li>Profilinizi oluşturmak ve doğrulamak,</li>
          <li>Potansiyel ticari partnerlerle (örneğin ithalatçı, ihracatçı, tedarikçi firmalarla) sizi eşleştirmek,</li>
          <li>İlgili sektör, ülke ve ürün kategorilerine göre öneriler sunmak,</li>
          <li>Uygulama içinde bağlantı kurma, mesajlaşma ve davet gönderme işlemlerini yürütmek</li>
        </ul>
        <p className={styles.paragraph}>için kullanırız.</p>
        
        <p className={styles.paragraph}>
          Sizin paylaştığınız bilgiler (ör. şirket adı, ülke, faaliyet alanı, ticaret hacmi, sertifikalar) diğer kullanıcılar tarafından profesyonel bağlantı kurmak ve iş fırsatlarını değerlendirmek amacıyla görüntülenebilir.
        </p>

        <h4 className={styles.subsectionTitle}>Haberdar Olun</h4>
        <p className={styles.paragraph}>
          LortApp, üyelerini ilgilendiren sektör haberleri, ticari etkinlikler ve iş fırsatları hakkında bilgilendirir.
          Bu amaçla verilerinizi, size özel bildirimler ve içerik önerileri sunmak için kullanabiliriz (ör. "Rusya'da gıda fuarı başlıyor", "yeni ithalatçı firma kayıt oldu" gibi).
        </p>

        <h4 className={styles.subsectionTitle}>Kariyer ve İş Fırsatları</h4>
        <p className={styles.paragraph}>
          Verileriniz, yeni iş fırsatlarını önermek veya firmanızın ilanlarını öne çıkarmak amacıyla kullanılabilir.
          Profiliniz, LortApp'te işe alım yapan firmalar veya ticari ortak arayan kullanıcılar tarafından görüntülenebilir.
        </p>

        <h4 className={styles.subsectionTitle}>Üretkenlik ve İletişim</h4>
        <p className={styles.paragraph}>
          LortApp, kullanıcılarının birbirleriyle doğrudan iletişim kurabilmesini, toplantı planlayabilmesini ve teklifler oluşturabilmesini sağlar.
          Mesajlarınız, yalnızca iletişim kurduğunuz kişi veya kurumlar tarafından görülür.
          Sistem güvenliği veya dolandırıcılık önleme amacıyla, mesaj içerikleri otomatik sistemler tarafından kötüye kullanım tespiti için taranabilir.
        </p>

        <h3 className={styles.sectionSubtitle}>2.2 Premium Hizmetler</h3>
        <p className={styles.paragraph}>
          Premium kullanıcılar; daha fazla eşleşme, sektör bazlı arama, hedefli iletişim ve analiz araçlarına erişim sağlar.
          Premium hizmetlerde profilinizin genel bilgileri (ör. firma adı, sektör, ülke, iletişim e-postası) belirli koşullarda diğer firmalara görünür olabilir.
          Ancak hiçbir şekilde kişisel iletişim bilgilerinizi rızanız olmadan paylaşmayız.
        </p>

        <h3 className={styles.sectionSubtitle}>2.3 İletişim</h3>
        <p className={styles.paragraph}>
          Sizinle, e-posta, SMS, mobil bildirim veya uygulama içi mesajlarla iletişim kurabiliriz.
          Bu mesajlar; sistem güncellemeleri, güvenlik duyuruları, yeni eşleşme veya teklif bildirimleri, kampanyalar ve etkinlik duyurularını içerebilir.
          Dilediğiniz zaman iletişim tercihlerinizi değiştirebilirsiniz.
        </p>

        <h3 className={styles.sectionSubtitle}>2.4 Reklam</h3>
        <p className={styles.paragraph}>
          LortApp'te ve dış platformlarda size uygun reklamlar gösterebiliriz.
          Reklam hedefleme; sektör, ülke, ürün kategorisi, kullanım alışkanlıkları veya ilgi alanları gibi verilere dayanabilir.
          Kişisel bilgileriniz, açık rızanız olmadan hiçbir reklamverenle paylaşılmaz.
        </p>

        <h3 className={styles.sectionSubtitle}>2.5 Pazarlama</h3>
        <p className={styles.paragraph}>
          Verilerinizi;
        </p>
        <ul className={styles.list}>
          <li>LortApp'in yeni özelliklerini tanıtmak,</li>
          <li>Uygulamayı kullanmanız için davetler göndermek,</li>
          <li>Kampanya veya fuar duyurularını iletmek</li>
        </ul>
        <p className={styles.paragraph}>amacıyla kullanabiliriz.</p>

        <h3 className={styles.sectionSubtitle}>2.6 Hizmetleri Geliştirme ve Araştırma</h3>
        <p className={styles.paragraph}>
          Verilerinizi;
        </p>
        <ul className={styles.list}>
          <li>Uygulamanın performansını artırmak,</li>
          <li>Kullanıcı davranışlarını analiz ederek öneri sistemlerini geliştirmek,</li>
          <li>Ticaret trendlerini (ör. ülke bazlı ithalat-ihracat ilişkileri) anlamak</li>
        </ul>
        <p className={styles.paragraph}>için anonimleştirilmiş şekilde kullanırız.</p>
        <p className={styles.paragraph}>
          Zaman zaman, toplu veriler üzerinden sektör raporları veya içgörüler oluşturabiliriz; bu içerikler kişisel bilgilerinizi içermez.
        </p>

        <h3 className={styles.sectionSubtitle}>2.7 Müşteri Hizmetleri</h3>
        <p className={styles.paragraph}>
          Destek ekibimiz, kullanıcıların sorunlarını çözmek, hata raporlarını değerlendirmek ve geri bildirimleri analiz etmek için iletişim bilgilerinizi kullanabilir.
        </p>

        <h3 className={styles.sectionSubtitle}>2.8 Anonim İçgörüler</h3>
        <p className={styles.paragraph}>
          Kullanıcı verilerinden, kimliği belli olmayan istatistiksel analizler üretebiliriz (ör. "Türkiye-Almanya arası en aktif sektörler", "en çok aranan ürün kategorileri" gibi).
          Bu veriler yalnızca toplu ve anonim biçimde paylaşılır.
        </p>

        <h3 className={styles.sectionSubtitle}>2.9 Güvenlik ve Soruşturma</h3>
        <p className={styles.paragraph}>
          Verilerinizi; dolandırıcılığı önlemek, yasa dışı faaliyetleri tespit etmek, hesap güvenliğini sağlamak ve yasal yükümlülükleri yerine getirmek amacıyla kullanabiliriz.
          LortApp, bu süreçlerde bağlı şirketleri ve iş ortaklarıyla gizlilik anlaşmaları kapsamında çalışabilir.
        </p>
      </section>

      <section id="veri-paylasimi" className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Bilgileri Nasıl Paylaşıyoruz</h2>
        
        <p className={styles.paragraph}>
          LortApp olarak, kişisel verilerinizi yalnızca bu Gizlilik Politikasında belirtilen amaçlar doğrultusunda ve yasal sınırlar içinde paylaşırız.
          Amacımız; kullanıcılar arasında güvenli, şeffaf ve verimli bir ticari ağ oluşturmak, hizmetlerimizi geliştirmek ve güvenliği sağlamaktır.
        </p>

        <h3 className={styles.sectionSubtitle}>3.1 Hizmetlerimiz</h3>
        <h4 className={styles.subsectionTitle}>Profil ve Görünürlük</h4>
        <p className={styles.paragraph}>
          LortApp'te oluşturduğunuz firma profili, ayarlarınıza bağlı olarak diğer kullanıcılar, ticari ortaklar ve platform ziyaretçileri tarafından görüntülenebilir.
          Profilinizde yer alan bilgiler (ör. şirket adı, ülke, sektör, ürün kategorisi, iletişim e-posta adresi, logo vb.) potansiyel iş ortakları tarafından B2B iletişim ve ticaret amacıyla görülebilir.
          Dilerseniz, profilinizin görünürlüğünü sınırlandırabilir veya belirli bilgileri gizleyebilirsiniz.
        </p>

        <h4 className={styles.subsectionTitle}>Gönderiler, Etkileşimler ve Mesajlar</h4>
        <p className={styles.paragraph}>
          Platformda paylaştığınız gönderiler, görseller, yorumlar ve beğeniler, ayarlarınıza bağlı olarak diğer kullanıcılar tarafından görüntülenebilir.
          Bir içeriği beğendiğinizde, yorum yaptığınızda veya paylaştığınızda, bu etkileşimler adınız ve profilinizle ilişkilendirilerek görüntülenebilir.
          LortApp mesajlaşma sistemi, kullanıcılar arasında ticari iletişim kurulmasına olanak tanır.
          Mesaj içerikleriniz gizlidir ve yalnızca iletişim kurduğunuz kullanıcı tarafından görülebilir. Ancak, güvenlik ve dolandırıcılığı önleme amacıyla sistem tarafından otomatik analiz edilebilir.
        </p>

        <h4 className={styles.subsectionTitle}>Kurumsal Hesaplar</h4>
        <p className={styles.paragraph}>
          Eğer bir firma hesabı oluşturduysanız, yetkili çalışanlarınız profil bilgilerini görüntüleyebilir, bağlantı isteklerini yönetebilir veya Premium araçlara erişebilir.
          Firmalar, ekip üyelerinin hesap erişimlerini yönetme ve istatistikleri görüntüleme yetkisine sahip olabilir.
        </p>

        <h3 className={styles.sectionSubtitle}>3.2 İletişim Arşivi</h3>
        <p className={styles.paragraph}>
          Bazı sektörlerdeki kullanıcılar (örneğin dış ticaret aracı kurumları veya danışmanlık firmaları), yasal gereklilikler nedeniyle yazışmalarını arşivlemek zorunda olabilir.
          LortApp, kullanıcıların iletişim geçmişlerini güvenli biçimde dışa aktarmalarına veya arşivlemelerine imkân tanır.
          Bu işlem tamamen kullanıcının tercihine bağlıdır.
        </p>

        <h3 className={styles.sectionSubtitle}>3.3 Başka Hizmetler ile Entegrasyon</h3>
        <p className={styles.paragraph}>
          LortApp hesabınızı diğer hizmetlerle (örneğin WhatsApp Business, e-posta, CRM sistemleri veya ödeme altyapıları) entegre etmeyi seçebilirsiniz.
          Bu durumda, entegrasyon yaptığınız hizmetler belirli bilgilere (ör. firma adı, e-posta, ülke, ticaret kategorisi) erişebilir.
          Her entegrasyon öncesinde, hangi verilerin paylaşılacağını açıkça gösteren bir izin ekranı sunulur.
          Üçüncü taraf hizmetlerin verilerinizi nasıl işlediği, kendi gizlilik politikalarına tabidir.
          Dilerseniz, bu bağlantıları istediğiniz zaman kaldırabilirsiniz.
        </p>

        <h3 className={styles.sectionSubtitle}>3.4 İlgili Hizmetler ve Grup Şirketleri</h3>
        <p className={styles.paragraph}>
          LortApp, aynı çatı altında faaliyet gösteren grup şirketleri veya teknik altyapı sağlayıcılarla sınırlı şekilde veri paylaşabilir.
          Bu paylaşım, yalnızca hizmet kalitesini artırmak, sistem güvenliğini sağlamak ve kullanıcı deneyimini geliştirmek amacıyla yapılır.
          Örneğin; öneri algoritmalarını geliştirmek, dolandırıcılık önleme sistemlerini eğitmek veya performans analizleri yapmak için anonimleştirilmiş veriler kullanılabilir.
        </p>

        <h3 className={styles.sectionSubtitle}>3.5 Hizmet Sağlayıcılar</h3>
        <p className={styles.paragraph}>
          LortApp, hizmetlerini sunmak ve desteklemek amacıyla belirli üçüncü taraf sağlayıcılarla (ör. sunucu barındırma, ödeme, güvenlik, analiz, müşteri destek hizmetleri) çalışabilir.
          Bu sağlayıcılar, yalnızca görevlerini yerine getirmek için gerekli bilgilere erişir ve verilerinizi başka bir amaçla kullanamazlar.
          Tüm hizmet sağlayıcılarımızla gizlilik sözleşmeleri yapılır.
        </p>

        <h3 className={styles.sectionSubtitle}>3.6 Hukuki Bildirimler</h3>
        <p className={styles.paragraph}>
          Aşağıdaki durumlarda kişisel verilerinizi yasal mercilerle veya ilgili taraflarla paylaşabiliriz:
        </p>
        <ul className={styles.list}>
          <li>Yasal yükümlülüklerin yerine getirilmesi,</li>
          <li>Resmî bir makamdan gelen geçerli talep,</li>
          <li>Dolandırıcılık, kara para aklama, sahtecilik veya yasa dışı faaliyetlerin araştırılması,</li>
          <li>LortApp'in, kullanıcılarının veya üçüncü kişilerin haklarını, güvenliğini veya mülkiyetini koruma gerekliliği.</li>
        </ul>
        <p className={styles.paragraph}>
          Bu tür durumlarda, paylaşım yalnızca mevzuata uygun şekilde ve gerekli asgari bilgiyle yapılır.
          Yasal olarak engellenmediği sürece, sizi bu talepler hakkında bilgilendirmeye çalışırız.
        </p>

        <h3 className={styles.sectionSubtitle}>3.7 Şirketin Devri veya Yeniden Yapılanma</h3>
        <p className={styles.paragraph}>
          LortApp'in satılması, birleşmesi, yeniden yapılanması veya başka bir şekilde devredilmesi durumunda, kişisel verileriniz yeni yönetime devredilebilir.
          Ancak yeni yönetim, verilerinizi bu Gizlilik Politikası'nda belirtilen koşullar çerçevesinde kullanmakla yükümlüdür.
          Bu tür bir durum oluştuğunda, kullanıcılarımızı bilgilendiririz ve yasal haklarını koruruz.
        </p>
      </section>

      <section id="tercih-ve-yukumlulukler" className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Tercih ve Yükümlülükleriniz</h2>
        
        <h3 className={styles.sectionSubtitle}>4.1 Veri Muhafazası</h3>
        <p className={styles.paragraph}>
          Hesabınız açık olduğu sürece, hizmeti sunmak ve meşru amaçlarımız için gerekli kişisel verilerinizi saklarız. Buna sizin sağladığınız veriler (profil, firma bilgileri, iletiler) ve kullanımınızdan üretilen veriler (kayıt/oturum bilgileri, güvenlik kayıtları, eşleşme/ardı-işlemler) dahildir.
        </p>
        <p className={styles.paragraph}>
          <strong>Gereklilik ilkesi:</strong> Verileri yalnızca amaçla orantılı süre boyunca tutarız.
        </p>
        <p className={styles.paragraph}>
          <strong>Yasal zorunluluklar:</strong> Vergi/immünizasyon, mali denetim, uyuşmazlık çözümü, dolandırıcılık önleme ve güvenlik için gerekli kayıtlar yasal süreler boyunca saklanabilir.
        </p>
        <p className={styles.paragraph}>
          <strong>Anonimleştirme/Toplulaştırma:</strong> Hizmet kullanımına ilişkin içgörüleri kişisel detaylardan arındırılmış veya toplulaştırılmış biçimde daha uzun süre tutabiliriz.
        </p>
        <div className={styles.note}>
          <p><strong>Not:</strong> LortApp'i seyrek kullansanız dahi, hesabınızı kapatmadığınız müddetçe temel hesap verileri aktif kalır.</p>
        </div>

        <h3 className={styles.sectionSubtitle}>4.2 Kişisel Verilerinize Erişim ve Kontrol Hakkı</h3>
        <p className={styles.paragraph}>
          LortApp, kişisel verileriniz üzerinde kontrol imkânı sunar. Ayarlar bölümünden veya bize yazarak aşağıdaki haklarınızı kullanabilirsiniz:
        </p>
        <ul className={styles.list}>
          <li><strong>Verileri Silme:</strong> Kişisel verilerinizin tamamının veya bir kısmının silinmesini isteyebilirsiniz (ör. hizmet sunumu için artık gerekli değilse veya rızanızı geri aldıysanız).</li>
          <li><strong>Düzeltme/Güncelleme:</strong> Hesabınız üzerinden birçok bilgiyi kendiniz güncelleyebilirsiniz; ayrıca yanlış veya eksik verilerin düzeltilmesini talep edebilirsiniz.</li>
          <li><strong>İtiraz / Kısıtlama:</strong> Meşru menfaat dayanağıyla işlenen verilere itiraz edebilir; belirli hallerde işlemenin sınırlandırılmasını talep edebilirsiniz (ör. doğruluk ihtilafı, hukuka aykırılık iddiası).</li>
          <li><strong>Erişim / Veri Taşınabilirliği:</strong> Hakkınızdaki verilere erişim ve teknik olarak mümkünse makinece okunabilir bir kopyasını talep edebilirsiniz.</li>
          <li><strong>Pazarlama Tercihleri:</strong> Ticari iletilere ilişkin tercihlerinizi dilediğiniz an değiştirebilir; rızaya dayalı işlemlerde rızanızı geri alabilirsiniz (geri alma, geri alma öncesi işlemenin hukuka uygunluğunu etkilemez).</li>
        </ul>
        <p className={styles.paragraph}>
          Taleplerinizi uygulama içinden, <strong>Ayarlar ▸ Gizlilik</strong> bölümünden veya <a href="mailto:privacy@lort.app" className={styles.link}>privacy@lort.app</a> adresine yazarak iletebilirsiniz. LortApp, talepleri mevzuata uygun şekilde ve makul süre içinde sonuçlandırır.
        </p>
        <p className={styles.paragraph}>
          Bölgenize göre (Türkiye: KVKK, AB/AEA/UK: GDPR/UK GDPR) ek haklarınız bulunabilir.
        </p>

        <h3 className={styles.sectionSubtitle}>4.3 Hesabın Kapatılması</h3>
        <p className={styles.paragraph}>
          Hesabınızı kapatmanız hâlinde:
        </p>
        <ul className={styles.list}>
          <li>Profiliniz ve çoğu genel görünür içerik, kapanıştan itibaren genellikle 24 saat içinde platform görünürlüğünden kaldırılır.</li>
          <li>Kapatılan hesaba ait kişisel veriler, yasal yükümlülükler ve meşru amaçlar (uyuşmazlıkların çözümü, güvenlik/dolandırıcılık önleme, kayıt tutma yükümlülükleri, muhasebe/denetim) gerektirdiği ölçüde saklanabilir; aksi hâlde genellikle 30 gün içinde silinir.</li>
          <li><strong>İçerik kalıntıları:</strong> Diğer kullanıcılarla paylaştığınız veya onların kopyaladıkları içerikler (ör. mesajlarda alıntılar, grup paylaşımları) karşı tarafça görülebilir olmaya devam edebilir.</li>
          <li><strong>Önbellek/Arama Motorları:</strong> Haricî arama/önbellek hizmetleri, kendi yenileme döngülerine kadar eski önbellekleri gösterebilir.</li>
          <li><strong>Anonim veriler:</strong> Kişisel olmayan/anonimleştirilmiş veriler (istatistikler, trend analizleri) saklanmaya devam edebilir.</li>
        </ul>
        <p className={styles.paragraph}>
          Hesabınızı uygulama içinden <strong>Ayarlar ▸ Hesabı Kapat</strong> adımlarını izleyerek kapatabilir veya <a href="mailto:info@lortapp.com.tr" className={styles.link}>info@lortapp.com.tr</a> üzerinden destek talep edebilirsiniz. Ayrıca, veri sorumlusu olarak şirketimizle <a href="#veri-sorumlusu" className={styles.link}>iletişim</a> kurabilirsiniz.
        </p>
      </section>

      <section id="diger-onemli-bilgiler" className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Diğer Önemli Bilgiler</h2>
        
        <h3 className={styles.sectionSubtitle}>5.1 Güvenlik</h3>
        <p className={styles.paragraph}>
          LortApp, kullanıcı verilerinin güvenliğini korumak için teknik, idari ve fiziksel güvenlik önlemleri uygular.
          Veri aktarımı sırasında HTTPS (SSL/TLS) şifrelemesi, sunucu tarafında güncel güvenlik yamaları, erişim denetimleri ve yetkilendirme sistemleri kullanılır.
          Olası açıkları tespit etmek amacıyla sistemlerimiz düzenli olarak izlenir ve test edilir.
        </p>
        <p className={styles.paragraph}>
          Ancak hiçbir çevrimiçi sistemin tamamen güvenli olduğunu garanti etmek mümkün değildir. Bu nedenle kullanıcıların da:
        </p>
        <ul className={styles.list}>
          <li>Güçlü şifreler belirlemesi,</li>
          <li>Şifrelerini paylaşmaması,</li>
          <li>Uygulamada mevcut olan iki aşamalı doğrulama ve benzeri güvenlik özelliklerini etkinleştirmesi</li>
        </ul>
        <p className={styles.paragraph}>
          önerilir.
          Herhangi bir güvenlik ihlali tespit edilirse, etkilenen kullanıcıları yasal sürelere uygun şekilde bilgilendiririz.
        </p>

        <h3 className={styles.sectionSubtitle}>5.2 Ülkeler Arası Veri Aktarımı</h3>
        <p className={styles.paragraph}>
          LortApp, küresel bir ticari eşleşme platformudur. Bu nedenle, verileriniz Türkiye dışındaki ülkelerde bulunan sunucular veya iş ortakları tarafından da işlenebilir.
          Veri aktarımı yapılırken, KVKK ve GDPR gibi uluslararası gizlilik mevzuatlarına uygun koruma önlemleri uygulanır.
        </p>
        <p className={styles.paragraph}>
          Verileriniz yalnızca:
        </p>
        <ul className={styles.list}>
          <li>Hizmetin sunulması (ör. Avrupa veya Orta Doğu'daki eşleşme sistemleri),</li>
          <li>Barındırma ve yedekleme altyapısının yönetimi,</li>
          <li>Destek hizmetlerinin sağlanması</li>
        </ul>
        <p className={styles.paragraph}>
          amaçlarıyla yurt dışına aktarılır.
          Aktarım yapılan taraflar, veri gizliliği taahhüdü altındadır ve LortApp tarafından denetlenir.
        </p>

        <h3 className={styles.sectionSubtitle}>5.3 Veri İşleme İçin Yasal Dayanak</h3>
        <p className={styles.paragraph}>
          LortApp, kişisel verileri yalnızca meşru, açık ve yasal dayanaklara dayanarak işler. Bu dayanaklar şunlardır:
        </p>
        <ul className={styles.list}>
          <li><strong>Sözleşme Gerekliliği:</strong> Uygulamayı kullanmanız, hesabınızı yönetmemiz veya ticari bağlantılar kurabilmemiz için verilerin işlenmesi zorunlu olduğunda.</li>
          <li><strong>Açık Rıza:</strong> Pazarlama iletişimi almak, konum paylaşmak veya ek özellikleri kullanmak için izin verdiğiniz durumlarda.</li>
          <li><strong>Yasal Yükümlülük:</strong> Muhasebe, vergi, yasal bildirim ve denetim yükümlülüklerimizi yerine getirmek için.</li>
          <li><strong>Meşru Menfaat:</strong> Platformun güvenliğini sağlamak, dolandırıcılığı önlemek, sistemleri geliştirmek veya kullanıcı deneyimini iyileştirmek için.</li>
        </ul>
        <p className={styles.paragraph}>
          Rızaya dayalı işlemlerde rızanızı dilediğiniz zaman geri çekebilir, meşru menfaat dayanaklı işlemlere itiraz edebilirsiniz.
          Veri işleme gerekçeleriyle ilgili sorularınızı <a href="mailto:privacy@lort.app" className={styles.link}>privacy@lort.app</a> adresine iletebilirsiniz.
        </p>

        <h3 className={styles.sectionSubtitle}>5.4 Doğrudan Pazarlama ve "İzlenmeme" Talepleri</h3>
        <p className={styles.paragraph}>
          LortApp, kişisel verilerinizi izin vermediğiniz sürece doğrudan pazarlama amacıyla üçüncü taraflarla paylaşmaz.
          Kullanıcıların pazarlama iletilerini (e-posta, SMS, bildirim vb.) diledikleri an devre dışı bırakma hakkı vardır.
        </p>
        <p className={styles.paragraph}>
          Tarayıcılardan gönderilen "Do Not Track" (İzlenmeme) sinyallerini tanımaya çalışırız ancak tüm tarayıcı ve platformlarda bu sistemler standartlaşmadığı için her zaman tam yanıt verilemeyebilir.
        </p>
      </section>
      
      <section id="iletisim" className={styles.section}>
        <h2 className={styles.sectionTitle}>Bize Ulaşın</h2>
        <div className={styles.contactInfo}>
          <h3 className={styles.sectionSubtitle}>İletişim Bilgileri</h3>
          <p className={styles.companyName}>IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ.</p>
          <div className={styles.contactItem}>
            <FiGlobe className={styles.contactIcon} />
            <a href="https://www.lort.app/" target="_blank" rel="noopener noreferrer" className={styles.link}>www.lort.app</a>
          </div>
          <div className={styles.contactItem}>
            <FiMail className={styles.contactIcon} />
            <a href="mailto:info@lortapp.com.tr" className={styles.link}>info@lortapp.com.tr</a>
          </div>
          <div className={styles.contactItem}>
            <FiMapPin className={styles.contactIcon} />
            <span>Alavardı Mahallesi Söke Sokak, Uçan Balonlar Kreş ve Bakım Evi No:18/1, Meram/KONYA</span>
          </div>
        </div>
      </section>

      <section id="veri-sorumlusu" className={styles.section}>
        <h2 className={styles.sectionTitle}>Veri Sorumlusu</h2>
        
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
            <a href="mailto:info@lortapp.com.tr" className={styles.link}>info@lortapp.com.tr</a>
          </div>
        </div>
        
        <p className={styles.paragraph}>
          Bu Politika kapsamındaki taleplerinizi yukarıdaki iletişim bilgilerimiz aracılığıyla veya bu belgede açıklanan yöntemlerle iletebilirsiniz.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
