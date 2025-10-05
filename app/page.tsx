import Image from 'next/image';

import bgImage from '@/app/background.jpg';
import Hero from './hero';
import Gallery from './gallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-svh flex items-center justify-center overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100">
        <Image
          src={bgImage}
          alt="Background BaCo"
          placeholder="blur"
          fill
          className="object-cover object-center blur scale-105 brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <Hero />
      </section>

      {/* Categories Section - Redesigned */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Danh Mục Món Ăn
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá thế giới hương vị đa dạng với các món ăn và thức uống
              tuyệt vời
            </p>
          </div>

          <div className="-mx-4 lg:-mx-8 -my-4 lg:-my-6">
            <div className="px-4 lg:px-8 py-4 lg:py-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex gap-4 lg:gap-8 *:flex-[1_0_300px]">
                {/* Trà Sữa */}
                <div className="group snap-center snap-always relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-4 lg:p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="i-hugeicons-bubble-tea-02 text-4xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      Trà Sữa
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Đa dạng hương vị từ truyền thống đến hiện đại, topping
                      phong phú và chất lượng cao
                    </p>
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Mỳ Cay */}
                <div className="group snap-center snap-always relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-4 lg:p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="i-hugeicons-noodles text-4xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      Mỳ Cay
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Nhiều cấp độ cay từ nhẹ đến siêu cay, thỏa mãn mọi khẩu vị
                    </p>
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Ăn Vặt */}
                <div className="group snap-center snap-always relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-4 lg:p-8">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="i-hugeicons-french-fries-02 text-4xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      Ăn Vặt
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Các món ăn vặt hấp dẫn, giòn tan và đậm đà hương vị
                    </p>
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section className="py-20 px-4 bg-gradient-to-bl from-indigo-50 via-white to-pink-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những lý do khiến chúng tôi trở thành lựa chọn hàng đầu của bạn
            </p>
          </div>

          <div className="-mx-4 lg:-mx-8 -my-4 lg:-my-6">
            <div className="px-4 lg:px-8 py-4 lg:py-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div className="flex gap-4 lg:gap-8 *:flex-[1_0_240px] *:snap-center *:snap-always *:bg-white">
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <span className="i-hugeicons-star text-3xl text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">★</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Chất Lượng Cao
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nguyên liệu tươi mới, quy trình chế biến chuẩn quốc tế
                  </p>
                </div>

                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <span className="i-hugeicons-falling-star text-3xl text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">⚡</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Phục Vụ Nhanh
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Đặt hàng nhanh chóng, giao hàng tận nơi trong 15-30 phút
                  </p>
                </div>

                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <span className="i-hugeicons-money-saving-jar text-3xl text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">$</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Giá Cả Hợp Lý
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chất lượng cao với mức giá phù hợp với mọi đối tượng khách
                    hàng
                  </p>
                </div>

                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <span className="i-hugeicons-gift text-3xl text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🎁</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Ưu Đãi Hấp Dẫn
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nhiều chương trình khuyến mãi và quà tặng hấp dẫn mỗi tuần
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Thư Viện Ảnh</h2>
          <Gallery />
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-rose-200/20 to-pink-200/20 rounded-full translate-y-40 -translate-x-40" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sẵn sàng phục vụ bạn mọi lúc, mọi nơi. Hãy liên hệ ngay hôm nay!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {/* Phone */}
            <a href="tel:0372440541" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="i-hugeicons-telephone text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Điện Thoại
                  </h3>
                  <p className="text-lg font-semibold text-pink-600 group-hover:text-pink-700 transition-colors">
                    0372 440 541
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Gọi ngay để đặt hàng
                  </p>
                </div>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/3Ww4WrnMZ1mu3uzB9"
              target="_map"
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="i-hugeicons-maps-search text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Địa Chỉ
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors leading-relaxed">
                    Cổng chào xã Hòa Đồng (đối diện Studio Thương cũ), Tây Hòa,
                    Phú Yên
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Click để xem bản đồ
                  </p>
                </div>
              </div>
            </a>

            {/* Fanpage */}
            <a
              href="https://www.facebook.com/tiemtrabaco"
              target="_fb"
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="i-hugeicons-facebook-02 text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Fanpage
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Tiệm Trà BaCo
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Theo dõi để cập nhật mới nhất
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
