import Image from "next/image";

import bgImage from "@/app/background.jpg";
import Hero from "./hero";
import Gallery from "./gallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-svh flex items-center justify-center overflow-hidden bg-linear-to-r from-pink-100 to-purple-100"
        aria-label="Phần giới thiệu chính"
      >
        <Image
          src={bgImage}
          alt=""
          placeholder="blur"
          fill
          className="object-cover object-center blur scale-105 brightness-50"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <Hero />
      </section>

      {/* Categories Section - Redesigned */}
      <section
        className="py-20 px-4 bg-linear-to-br from-slate-50 via-white to-pink-50"
        aria-labelledby="categories-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              id="categories-heading"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Danh Mục Món Ăn
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá thế giới hương vị đa dạng với các món ăn và thức uống
              tuyệt vời
            </p>
          </div>

          <div className="-mx-4 lg:-mx-8 -my-4 lg:-my-6">
            <div className="px-4 lg:px-8 py-4 lg:py-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div
                className="flex gap-4 lg:gap-8 *:flex-[1_0_300px]"
                role="list"
                aria-label="Danh mục món ăn"
              >
                {/* Trà Sữa */}
                <article
                  className="group snap-center snap-always relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 focus-within:outline-none"
                  role="listitem"
                  tabIndex={0}
                >
                  <div
                    className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative p-4 lg:p-8">
                    <div
                      className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span
                        className="i-hugeicons-bubble-tea-02 text-4xl text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      Trà Sữa
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Đa dạng hương vị từ truyền thống đến hiện đại, topping
                      phong phú và chất lượng cao
                    </p>
                    <div
                      className="mt-6 flex justify-center"
                      aria-hidden="true"
                    >
                      <div className="w-12 h-1 bg-linear-to-r from-pink-400 to-rose-400 rounded-full" />
                    </div>
                  </div>
                </article>

                {/* Mỳ Cay */}
                <article
                  className="group snap-center snap-always relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 focus-within:outline-none"
                  role="listitem"
                  tabIndex={0}
                >
                  <div
                    className="absolute inset-0 bg-linear-to-br from-red-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative p-4 lg:p-8">
                    <div
                      className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span
                        className="i-hugeicons-noodles text-4xl text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      Mỳ Cay
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Nhiều cấp độ cay từ nhẹ đến siêu cay, thỏa mãn mọi khẩu vị
                    </p>
                    <div
                      className="mt-6 flex justify-center"
                      aria-hidden="true"
                    >
                      <div className="w-12 h-1 bg-linear-to-r from-red-400 to-orange-400 rounded-full" />
                    </div>
                  </div>
                </article>

                {/* Ăn Vặt */}
                <article
                  className="group snap-center snap-always relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 focus-within:outline-none"
                  role="listitem"
                  tabIndex={0}
                >
                  <div
                    className="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative p-4 lg:p-8">
                    <div
                      className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span
                        className="i-hugeicons-french-fries-02 text-4xl text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                      Ăn Vặt
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Các món ăn vặt hấp dẫn, giòn tan và đậm đà hương vị
                    </p>
                    <div
                      className="mt-6 flex justify-center"
                      aria-hidden="true"
                    >
                      <div className="w-12 h-1 bg-linear-to-r from-yellow-400 to-orange-400 rounded-full" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section
        className="py-20 px-4 bg-linear-to-bl from-indigo-50 via-white to-pink-50 relative overflow-hidden"
        aria-labelledby="features-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2
              id="features-heading"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những lý do khiến chúng tôi trở thành lựa chọn hàng đầu của bạn
            </p>
          </div>

          <div className="-mx-4 lg:-mx-8 -my-4 lg:-my-6">
            <div className="px-4 lg:px-8 py-4 lg:py-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              <div
                className="flex gap-4 lg:gap-8 *:flex-[1_0_240px] *:snap-center *:snap-always *:bg-white"
                role="list"
                aria-label="Tính năng và lợi ích"
              >
                <article
                  className="group text-center focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 focus-within:outline-none rounded-lg"
                  role="listitem"
                  tabIndex={0}
                >
                  <div className="relative mb-6">
                    <div
                      className="w-20 h-20 mx-auto bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <span
                        className="i-hugeicons-star text-3xl text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span
                        className="text-white text-sm font-bold"
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Chất Lượng Cao
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nguyên liệu tươi mới, quy trình chế biến chuẩn quốc tế
                  </p>
                </article>

                <article
                  className="group text-center focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:outline-none rounded-lg"
                  role="listitem"
                  tabIndex={0}
                >
                  <div className="relative mb-6">
                    <div
                      className="w-20 h-20 mx-auto bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <span
                        className="i-hugeicons-falling-star text-3xl text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span
                        className="text-white text-sm font-bold"
                        aria-hidden="true"
                      >
                        ⚡
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Phục Vụ Nhanh
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Đặt hàng nhanh chóng, giao hàng tận nơi trong 15-30 phút
                  </p>
                </article>

                <article
                  className="group text-center focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:outline-none rounded-lg"
                  role="listitem"
                  tabIndex={0}
                >
                  <div className="relative mb-6">
                    <div
                      className="w-20 h-20 mx-auto bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <span
                        className="i-hugeicons-money-saving-jar text-3xl text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span
                        className="text-white text-sm font-bold"
                        aria-hidden="true"
                      >
                        $
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Giá Cả Hợp Lý
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chất lượng cao với mức giá phù hợp với mọi đối tượng khách
                    hàng
                  </p>
                </article>

                <article
                  className="group text-center focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 focus-within:outline-none rounded-lg"
                  role="listitem"
                  tabIndex={0}
                >
                  <div className="relative mb-6">
                    <div
                      className="w-20 h-20 mx-auto bg-linear-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300"
                      aria-hidden="true"
                    >
                      <span
                        className="i-hugeicons-gift text-3xl text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span
                        className="text-white text-sm font-bold"
                        aria-hidden="true"
                      >
                        🎁
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Ưu Đãi Hấp Dẫn
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nhiều chương trình khuyến mãi và quà tặng hấp dẫn mỗi tuần
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-16 px-4 bg-white"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="gallery-heading"
            className="text-3xl font-bold text-center mb-12"
          >
            Thư Viện Ảnh
          </h2>
          <Gallery />
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section
        className="py-20 px-4 bg-linear-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden"
        aria-labelledby="contact-heading"
      >
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-pink-200/20 to-rose-200/20 rounded-full -translate-y-48 translate-x-48"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tr from-rose-200/20 to-pink-200/20 rounded-full translate-y-40 -translate-x-40"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sẵn sàng phục vụ bạn mọi lúc, mọi nơi. Hãy liên hệ ngay hôm nay!
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8"
            role="list"
            aria-label="Thông tin liên hệ"
          >
            {/* Phone */}
            <a
              href="tel:0372440541"
              className="group focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 rounded-2xl"
              aria-label="Gọi ngay để đặt món 0372 440 541"
              role="listitem"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-focus:-translate-y-2">
                <div
                  className="absolute inset-0 bg-linear-to-br from-pink-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="relative p-8 text-center">
                  <div
                    className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <span
                      className="i-hugeicons-telephone text-3xl text-white"
                      aria-hidden="true"
                    />
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
              target="map"
              rel="noopener noreferrer"
              className="group focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 rounded-2xl"
              aria-label="Xem vị trí của chúng tôi trên bản đồ: Cổng chào xã Hòa Đồng (đối diện Studio Thương cũ), Tây Hòa, Phú Yên"
              role="listitem"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-focus:-translate-y-2">
                <div
                  className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="relative p-8 text-center">
                  <div
                    className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <span
                      className="i-hugeicons-maps-search text-3xl text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Địa Chỉ
                  </h3>
                  <address className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors leading-relaxed not-italic">
                    Cổng chào xã Hòa Đồng (đối diện Studio Thương cũ), Tây Hòa,
                    Phú Yên
                  </address>
                  <p className="text-sm text-gray-500 mt-2">
                    Click để xem bản đồ
                  </p>
                </div>
              </div>
            </a>

            {/* Fanpage */}
            <a
              href="https://www.facebook.com/tiemtrabaco"
              target="messenger"
              rel="noopener noreferrer"
              className="group focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 rounded-2xl"
              aria-label="Truy cập fanpage Facebook của chúng tôi: Tiệm Trà BaCo"
              role="listitem"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-focus:-translate-y-2">
                <div
                  className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="relative p-8 text-center">
                  <div
                    className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <span
                      className="i-hugeicons-facebook-02 text-3xl text-white"
                      aria-hidden="true"
                    />
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
