import React from 'react';

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-orange-500 sm:text-5xl">LORT Plans</h2>
          <p className="mt-4 text-xl text-gray-400">Clear options for visibility and trust in exports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Normal Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 relative overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                Normal
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white">Normal Membership</h3>
            <p className="mt-2 text-gray-400">For SMEs focused on entry and growth</p>
            
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-white">
                $7 <span className="text-xl font-medium text-gray-400">/month</span>
              </p>
              <p className="mt-2 text-gray-400">or $69/year</p>
            </div>
            
            <ul className="mt-8 space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Ad-free experience</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Unlimited messaging</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300"><strong>10 active listings</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Advanced search & filters (country, category, manufacturer/wholesaler, MOQ, certification, delivery time, etc.)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Basic statistics (product & profile views)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Favorites list</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Multi-language showcase (automatic translation)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Online status visibility</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Company badge: <span className="font-medium">Professional Seller</span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300"><span className="font-medium">+20% priority</span> in AI recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-gray-300">Support: Email</span>
              </li>
            </ul>
            
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white">
                Recommended • Premium
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white">Premium Membership</h3>
            <p className="mt-2 text-white/90">For exporters seeking maximum visibility</p>
            
            <div className="mt-8">
              <p className="text-4xl font-extrabold text-white">
                $99 <span className="text-xl font-medium text-white/90">/year</span>
              </p>
              <p className="mt-2 text-white/90">One-time annual payment</p>
            </div>
            
            <div className="text-sm text-white/80 mb-4 font-medium">All Normal features, plus:</div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">Verified Member Badge (<span className="font-medium">✅ Verified Business</span>)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90"><span className="font-medium">Top rankings</span> in search results</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90"><span className="font-medium">Unlimited listings</span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">Instant message translation (TR ↔ EN ↔ AR, etc.)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90"><span className="font-medium">LORT Verified Gold Badge</span> (profile showcase)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90"><span className="font-medium">100% priority</span> in AI recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-3 text-white/90">Support: Email</span>
              </li>
            </ul>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;
