import Image from 'next/image';

import bg from '@/app/background.png';
import Gallery from './gallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-svh flex items-center justify-center overflow-hidden bg-gradient-to-r from-pink-100 to-purple-100">
        <Image
          src={bg}
          alt="Background BaCo"
          placeholder="blur"
          fill
          className="object-cover object-center blur scale-105 brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Tiệm Trà BaCo</h1>
          <p className="text-xl md:text-2xl mb-6">Trà sữa - Mỳ cay - Ăn vặt</p>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Hương vị tuyệt vời - Giá cả phải chăng
          </p>
          <a
            href="https://www.facebook.com/tiemtrabaco"
            target="_fb"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Gọi món
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Danh Mục Món Ăn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trà Sữa */}
            <div className="bg-pink-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-3xl">🥤</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trà Sữa</h3>
              <p className="text-gray-600">
                Đa dạng hương vị, topping phong phú
              </p>
            </div>

            {/* Ăn Vặt */}
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-3xl">🍟</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ăn Vặt</h3>
              <p className="text-gray-600">Các món ăn vặt hấp dẫn</p>
            </div>

            {/* Mỳ Cay */}
            <div className="bg-red-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 bg-red-200 rounded-full flex items-center justify-center">
                <span className="text-3xl">🍜</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mỳ Cay</h3>
              <p className="text-gray-600">Nhiều cấp độ cay cho bạn lựa chọn</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-semibold mb-2">Chất Lượng</h3>
              <p className="text-gray-600">Nguyên liệu tươi mới</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Phục Vụ Nhanh</h3>
              <p className="text-gray-600">Không phải chờ đợi lâu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Giá Cả Hợp Lý</h3>
              <p className="text-gray-600">Phù hợp với mọi người</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="font-semibold mb-2">Ưu Đãi</h3>
              <p className="text-gray-600">Nhiều chương trình khuyến mãi</p>
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

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Liên Hệ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <a href="tel:0372440541" className="group">
              <div className="bg-pink-50 rounded-lg p-6 text-center hover:shadow-lg transition-all group-hover:bg-pink-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-semibold mb-2">Điện Thoại</h3>
                <p className="text-gray-600 group-hover:text-pink-600">
                  0372 440 541
                </p>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/3Ww4WrnMZ1mu3uzB9"
              target="_map"
              className="bg-purple-50 rounded-lg p-6 text-center group hover:shadow-lg transition-all group-hover:bg-purple-100"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold mb-2">Địa Chỉ</h3>
              <p className="text-gray-600 group-hover:text-purple-600">
                Cổng chào xã Hòa Đồng (đối diện Studio Thương cũ), Tây Hòa, Phú
                Yên
              </p>
            </a>

            {/* Fanpage */}
            <a
              href="https://www.facebook.com/tiemtrabaco"
              target="_fb"
              className="group"
            >
              <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-all group-hover:bg-blue-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold mb-2">Fanpage</h3>
                <p className="text-gray-600 group-hover:text-blue-600">
                  Tiệm Trà BaCo
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
