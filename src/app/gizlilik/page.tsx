import React from 'react';

const GizlilikPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          LORT APP olarak, gizliliğinize önem veriyoruz. Kişisel verilerinizin güvenliği bizim için önceliklidir.
          Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default GizlilikPage;
