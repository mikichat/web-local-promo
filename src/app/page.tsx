'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D Background to avoid SSR issues
const Background3D = dynamic(() => import('../components/Background3D'), { ssr: false });

const PortalPage = () => {
  const sites = [
    {
      name: '댄스 학원',
      description: '열정이 빛나는 공간',
      url: 'https://web-dance.pages.dev',
      icon: '💃',
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      name: '태권도장',
      description: '몸과 마음을 단련하는 공간',
      url: 'https://web-tkd.pages.dev',
      icon: '🥋',
      color: 'bg-gradient-to-br from-blue-600 to-blue-800'
    },
    {
      name: '미술 학원',
      description: '창의력이 피어나는 공간',
      url: 'https://web-art.pages.dev',
      icon: '🎨',
      color: 'bg-gradient-to-br from-pink-400 to-rose-500'
    },
    {
      name: '피아노 학원',
      description: '감성을 연주하는 공간',
      url: 'https://web-piano.pages.dev',
      icon: '🎹',
      color: 'bg-gradient-to-br from-stone-700 to-stone-900'
    },
    {
      name: '아동 발달 센터',
      description: '우리 아이의 행복한 성장',
      url: 'https://web-childcare.pages.dev',
      icon: '👶',
      color: 'bg-gradient-to-br from-rose-300 to-pink-400'
    },
    {
      name: '심리상담소',
      description: '당신의 마음을 어루만지는 따뜻한 심리 상담 공간',
      url: 'https://web-counseling.pages.dev',
      icon: '🧠',
      color: 'bg-gradient-to-br from-purple-400 to-fuchsia-600'
    },
    {
      name: '임대 관리 서비스',
      description: '공실 걱정 없는 스마트한 임대 관리 서비스',
      url: 'https://web-rentcare.pages.dev',
      icon: '🔑',
      color: 'bg-gradient-to-br from-teal-500 to-emerald-600'
    },
    {
      name: '분양 대행사',
      description: '전국 아파트/상가 분양 상담 및 컨설팅 전문 대행사',
      url: 'https://web-presale.pages.dev',
      icon: '🏗️',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    },
    {
      name: '공인중개사',
      description: '신뢰와 정직의 공인중개사 - 당신의 꿈의 집을 찾아드립니다.',
      url: 'https://web-realty.pages.dev',
      icon: '🏠',
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    },
    {
      name: '회계사 사무소',
      description: '기업의 가치를 높이는 투명한 회계 및 감사 서비스',
      url: 'https://web-accounting.pages.dev',
      icon: '📊',
      color: 'bg-gradient-to-br from-blue-800 to-slate-900'
    },
    {
      name: '세무사 박세무',
      description: '꼼꼼한 세무 관리로 절세의 길을 찾아드립니다',
      url: 'https://web-tax.pages.dev',
      icon: '💰',
      color: 'bg-gradient-to-br from-green-500 to-emerald-700'
    },
    {
      name: '법무사 이법무',
      description: '빠르고 정확한 등기 및 법률 사무 서비스',
      url: 'https://web-legal.pages.dev',
      icon: '📜',
      color: 'bg-gradient-to-br from-indigo-600 to-violet-800'
    },
    {
      name: '변호사 김변호',
      description: '정직과 신뢰로 보답하는 법률 파트너',
      url: 'https://web-lawyer.pages.dev',
      icon: '⚖️',
      color: 'bg-gradient-to-br from-slate-700 to-gray-900'
    },
    {
      name: '클로 세탁소',
      description: '깨끗함의 시작, 소중한 옷을 새 옷처럼 관리해 드립니다.',
      url: 'https://web-laundry.pages.dev',
      icon: '👔',
      color: 'bg-gradient-to-br from-blue-400 to-sky-600'
    },
    {
      name: 'K-피자 마스터',
      description: '최고의 재료로 만든 화끈하고 맛있는 프리미엄 피자.',
      url: 'https://web-pizza-2as.pages.dev',
      icon: '🍕',
      color: 'bg-gradient-to-br from-orange-400 to-red-500'
    },
    {
      name: '명가 만두',
      description: '속이 꽉 찬 손맛 그대로, 정성을 다한 수제 만두 전문점.',
      url: 'https://web-mandu.pages.dev',
      icon: '🥟',
      color: 'bg-gradient-to-br from-emerald-400 to-green-600'
    },
    {
      name: '든든 김밥',
      description: '신선한 재료로 꽉 채운 건강하고 든든한 한 끼 식사.',
      url: 'https://web-gimbap.pages.dev',
      icon: '🍙',
      color: 'bg-gradient-to-br from-yellow-400 to-amber-500'
    },
    {
      name: '클로 카페',
      description: '향긋한 커피와 달콤한 디저트가 있는 도심 속 휴식처.',
      url: 'https://web-cafe.pages.dev',
      icon: '☕',
      color: 'bg-gradient-to-br from-amber-700 to-orange-800'
    },
    {
      name: '불타는 치킨',
      description: '겉바속촉의 정석, 신선한 닭으로 튀긴 최고의 치킨.',
      url: 'https://web-chicken.pages.dev',
      icon: '🍗',
      color: 'bg-gradient-to-br from-red-500 to-rose-600'
    },
    {
      name: '클로 헤어샵',
      description: '당신의 스타일을 완성하는 트렌디한 헤어 스타일링.',
      url: 'https://web-hair.pages.dev',
      icon: '✂️',
      color: 'bg-gradient-to-br from-pink-300 to-rose-400'
    },
    {
      name: '광속 세차장',
      description: '전문가의 손길로 내 차를 새 차처럼 깨끗하게.',
      url: 'https://web-carwash.pages.dev',
      icon: '🚿',
      color: 'bg-gradient-to-br from-cyan-400 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen font-sans text-white overflow-hidden relative">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Background3D />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-6">
        {/* Header */}
        <header className="text-center mb-20 backdrop-blur-sm bg-black/20 p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-down">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 drop-shadow-lg">
            Local Business Portal
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide">
            Explore <span className="font-bold text-white">Claw&apos;s</span> Network of Premium Services
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sites.map((site) => (
            <a 
              key={site.url} 
              href={site.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] backdrop-blur-md bg-white/5 border border-white/10"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${site.color}`} />
              
              <div className="p-8 h-full flex flex-col items-start relative z-10">
                <div className={`w-16 h-16 ${site.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  {site.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {site.name}
                </h2>
                
                <p className="text-sm text-gray-300 mb-8 leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
                  {site.description}
                </p>
                
                <div className="mt-auto flex items-center text-blue-300 font-medium text-sm group-hover:text-white transition-colors">
                  <span className="mr-2">Visit Site</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-400 text-sm backdrop-blur-sm bg-black/30 py-6 rounded-full inline-block px-10 mx-auto border border-white/5">
          <p>&copy; 2026 Local Business Portal. Powered by <span className="text-white font-bold">Claw 3D</span>.</p>
        </footer>
      </div>
    </div>
  );
};

export default PortalPage;
