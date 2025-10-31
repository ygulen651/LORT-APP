'use client';

import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './contact-styles.module.css';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>İletişim</h1>
        <p className={styles.subtitle}>Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize ulaşın</p>
      </header>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiMail />
            </div>
            <h3>E-posta</h3>
            <a href="mailto:info@lortapp.com.tr" className={styles.infoLink}>info@lortapp.com.tr</a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiPhone />
            </div>
            <h3>Telefon</h3>
            <a href="tel:+905325094599" className={styles.infoLink}>+90 532 509 45 99</a>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiMapPin />
            </div>
            <h3>Adres</h3>
            <h3>IHLAMUR EĞİTİM VE DANIŞMANLIK LTD. ŞTİ.</h3>
            <p>Alavardı Mahallesi Söke Sokak, Uçan Balonlar Kreş ve Bakım Evi No:18/1, Meram/KONYA</p>
          </div>

          <div className={styles.socialLinks}>
            <h3>Sosyal Medya</h3>
            <div className={styles.socialIcons}>
              <a href="https://linkedin.com/company/lortapp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/lortapp" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/lortapp" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://youtube.com/@lortapp" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contactFormContainer}>
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <FiCheckCircle className={styles.successIcon} />
              <h3>Mesajınız başarıyla gönderildi!</h3>
              <p>En kısa sürede size dönüş yapacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <h2>Bize Yazın</h2>
              <div className={styles.formGroup}>
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-posta Adresi</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-posta adresiniz"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Konu</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Konu seçiniz</option>
                  <option value="genel">Genel Soru</option>
                  <option value="destek">Teknik Destek</option>
                  <option value="isbirligi">İş Birliği</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : (
                  <>
                    <FiSend className={styles.buttonIcon} />
                    Gönder
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.123456789012!2d32.12345678901234!3d37.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA3JzI0LjQiTiAzMsKwMDcnMjQuNCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LORT APP Konum"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
