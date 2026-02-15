import React from 'react';

const PortalPage = () => {
  const sites = [
    {
      name: '클로 세탁소',
      description: '깨끗함의 시작, 소중한 옷을 새 옷처럼 관리해 드립니다.',
      url: 'https://web-laundry.pages.dev',
      icon: '👔',
      color: 'bg-blue-500'
    },
    {
      name: 'K-피자 마스터',
      description: '최고의 재료로 만든 화끈하고 맛있는 프리미엄 피자.',
      url: 'https://web-pizza-2as.pages.dev',
      icon: '🍕',
      color: 'bg-orange-500'
    },
    {
      name: '명가 만두',
      description: '속이 꽉 찬 손맛 그대로, 정성을 다한 수제 만두 전문점.',
      url: 'https://web-mandu.pages.dev',
      icon: '🥟',
      color: 'bg-emerald-500'
    },
    {
      name: '든든 김밥',
      description: '신선한 재료로 꽉 채운 건강하고 든든한 한 끼 식사.',
      url: 'https://web-gimbap.pages.dev',
      icon: '🍙',
      color: 'bg-yellow-500'
    },
    {
      name: '클로 카페',
      description: '향긋한 커피와 달콤한 디저트가 있는 도심 속 휴식처.',
      url: 'https://web-cafe.pages.dev',
      icon: '☕',
      color: 'bg-amber-600'
    },
    {
      name: '불타는 치킨',
      description: '겉바속촉의 정석, 신선한 닭으로 튀긴 최고의 치킨.',
      url: 'https://web-chicken.pages.dev',
      icon: '🍗',
      color: 'bg-red-500'
    },
    {
      name: '클로 헤어샵',
      description: '당신의 스타일을 완성하는 트렌디한 헤어 스타일링.',
      url: 'https://web-hair.pages.dev',
      icon: '✂️',
      color: 'bg-pink-400'
    },
    {
      name: '광속 세차장',
      description: '전문가의 손길로 내 차를 새 차처럼 깨끗하게.',
      url: 'https://web-carwash.pages.dev',
      icon: '🚿',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">우리 동네 홍보 포털</h1>
          <p className="text-xl text-gray-600">군주님의 모든 사업체를 한곳에서 확인하세요.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sites.map((site) => (
            <a 
              key={site.url} 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className={`w-14 h-14 ${site.color} rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform text-white shadow-inner`}>
                  {site.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h2>
                <p className="text-sm text-gray-600 mb-6 line-clamp-2">{site.description}</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  사이트 방문하기
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400">
          <p>&copy; 2026 로컬 비즈니스 포털. Powered by Claw.</p>
        </footer>
      </div>
    </div>
  );
};

export default PortalPage;
