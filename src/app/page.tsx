import { 
  School, 
  Hospital, 
  Pill, 
  Flower2, 
  ChefHat, 
  Sparkles, 
  Store, 
  Shirt, 
  Recycle, 
  Church, 
  HandHelping,
  Baby,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

const categories = [
  { name: "학원 (국.영.수)", icon: School, description: "전문 강사진의 맞춤형 교육" },
  { name: "유치원", icon: Baby, description: "아이들의 꿈이 자라는 곳" },
  { name: "병원", icon: Hospital, description: "최첨단 의료 서비스와 정성" },
  { name: "약국", icon: Pill, description: "친절한 복약 지도와 건강 상담" },
  { name: "꽃집", icon: Flower2, description: "특별한 날을 빛내는 아름다운 꽃" },
  { name: "제과점", icon: ChefHat, description: "매일 아침 갓 구운 신선한 빵" },
  { name: "뷰티/미용", icon: Sparkles, description: "당신의 아름다움을 찾아드립니다" },
  { name: "정육점", icon: Store, description: "엄선된 고품질 신선육 전문" },
  { name: "의류/패션", icon: Shirt, description: "트렌디한 스타일의 완성" },
  { name: "재활용 센터", icon: Recycle, description: "지구를 살리는 현명한 소비" },
  { name: "종교시설", icon: Church, description: "평안과 안식을 주는 공간" },
  { name: "사회복지시설", icon: HandHelping, description: "함께 나누는 따뜻한 이웃 사랑" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 p-2 text-white">
              <Store size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">우리동네 생활포털</h1>
          </div>
          <nav className="hidden space-x-8 md:flex">
            <a href="#" className="text-gray-600 hover:text-blue-600">홈</a>
            <a href="#categories" className="text-gray-600 hover:text-blue-600">카테고리</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">문의하기</a>
          </nav>
          <button className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-colors">
            제휴문의
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl">
              우리 동네 모든 정보를 한눈에!
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
              학원부터 재활용 센터까지, 군주님의 생활에 꼭 필요한 지역 시설 정보를 실시간으로 확인하세요.
            </p>
            <div className="flex justify-center gap-4">
              <input 
                type="text" 
                placeholder="찾으시는 시설을 검색해 보세요" 
                className="w-full max-w-md rounded-full px-6 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-blue-50">
                검색
              </button>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section id="categories" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h3 className="text-3xl font-bold text-gray-900">홍보 카테고리</h3>
              <p className="mt-4 text-gray-600">필요한 정보를 선택하여 상세 내용을 확인하세요.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="group relative rounded-2xl bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-6 inline-block rounded-xl bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <cat.icon size={32} />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900">{cat.name}</h4>
                  <p className="text-gray-600">{cat.description}</p>
                  <button className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-800">
                    상세보기 →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Info Section */}
        <section id="contact" className="bg-gray-100 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h3 className="mb-8 text-3xl font-bold text-gray-900">군주님을 위한 맞춤 정보</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">위치 안내</h5>
                      <p className="text-gray-600">전북특별자치도 군산시 조촌동 일대</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">대표 번호</h5>
                      <p className="text-gray-600">063-000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-bold text-gray-900">운영 시간</h5>
                      <p className="text-gray-600">평일 09:00 - 18:00 (주말 휴무)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-10 shadow-lg">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">이름</label>
                      <input type="text" className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">연락처</label>
                      <input type="text" className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">문의내용</label>
                    <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 transition-colors">
                    문의 보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-gray-500">© 2026 우리동네 생활포털. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
