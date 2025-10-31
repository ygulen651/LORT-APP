'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'normal';
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const planDetails = {
    normal: {
      name: 'Normal Üyelik',
      price: '$7',
      period: '/ay',
      yearlyPrice: '$69',
      color: 'orange-500'
    },
    premium: {
      name: 'Premium Üyelik',
      price: '$99',
      period: '/yıl',
      yearlyPrice: '$99',
      color: 'orange-600'
    }
  };

  const currentPlan = planDetails[plan as keyof typeof planDetails];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || value;
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').match(/.{1,2}/g)?.join('/') || value;
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ödeme Bilgileri:', formData);
    alert('Ödeme işlemi demo modunda. Gerçek ödeme entegrasyonu yapılacak.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Ödeme</h1>
          <p className="text-gray-400">Güvenli ödeme ile üyeliğinizi başlatın</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ödeme Formu */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Ödeme Bilgileri</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Kişisel Bilgiler */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Kişisel Bilgiler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Ad
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Soyad
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Kart Bilgileri */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Kart Bilgileri</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Kart Numarası
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Kart Üzerindeki İsim
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        placeholder="AD SOYAD"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white uppercase focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Son Kullanma Tarihi
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="AA/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          maxLength={3}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
                >
                  Ödemeyi Tamamla
                </button>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm text-gray-400">Güvenli SSL şifreli ödeme</p>
                </div>
              </form>
            </div>
          </div>

          {/* Sipariş Özeti */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 sticky top-8">
              <h2 className="text-xl font-bold text-white mb-6">Sipariş Özeti</h2>
              
              <div className="space-y-4">
                <div className={`bg-gradient-to-br from-${currentPlan.color} to-amber-600 rounded-lg p-4`}>
                  <h3 className="text-lg font-semibold text-white">{currentPlan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-white">{currentPlan.price}</span>
                    <span className="text-white/80 ml-1">{currentPlan.period}</span>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-4 space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Ara Toplam</span>
                    <span className="font-medium">{currentPlan.yearlyPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>KDV (%20)</span>
                    <span className="font-medium">
                      ${plan === 'normal' ? '13.80' : '19.80'}
                    </span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 flex justify-between text-white">
                    <span className="font-semibold text-lg">Toplam</span>
                    <span className="font-bold text-xl">
                      ${plan === 'normal' ? '82.80' : '118.80'}
                    </span>
                  </div>
                </div>

                <div className="mt-6 bg-gray-900 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Paket İçeriği:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {plan === 'normal' ? (
                      <>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          10 aktif ilan
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Reklamsız kullanım
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Professional Seller rozeti
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Sınırsız ilan
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Verified Business rozeti
                        </li>
                        <li className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          %100 AI öncelik
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="mt-4 text-xs text-gray-400 text-center">
                  <p>Ödeme yaparak <a href="/mesafeli-satis-sozlesmesi" className="text-orange-500 hover:underline">Mesafeli Satış Sözleşmesi</a> ve <a href="/privacy" className="text-orange-500 hover:underline">Gizlilik Politikası</a>&apos;nı kabul etmiş olursunuz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OdemePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center"><div className="text-white text-xl">Yükleniyor...</div></div>}>
      <CheckoutContent />
    </Suspense>
  );
}
