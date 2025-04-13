import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import BookSection from "../components/BookSection";
import PromoBanner from "../components/PromoBanner";
import FeaturedSection from "../components/FeaturedSection";
import "../index.css";
import BestSellingSection from "../components/BestSellingSection";
import booksData from "../data/booksData"; // Dữ liệu sách từ file booksData.js

// Hàm lấy ngẫu nhiên sách từ danh sách
function getRandomBooks(data, count) {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Home() {
  const newBooks = getRandomBooks(booksData, 6); // Lấy 6 sách ngẫu nhiên cho "SÁCH MỚI"
  const featuredBooks = getRandomBooks(booksData, 2); // Lấy 4 sách ngẫu nhiên cho "SÁCH NỔI BẬT"
  const bestSellingBooks = getRandomBooks(booksData, 8); // Lấy 8 sách ngẫu nhiên cho "SÁCH BÁN CHẠY"

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-hidden">
      <Header />
      <main className="w-full">
        <HeroSlider />

        <BookSection title="SÁCH MỚI" books={newBooks} />

        <PromoBanner
          backgroundImage="../assets/cung-con-khon-lon.jpg"
          link="/sach-cho-tre"
        />

        <FeaturedSection
          title="SÁCH NỔI BẬT"
          quote="Không bao giờ bạn có thể thoát khỏi trái tim mình. Vì vậy, tốt hơn hết là hãy lắng nghe những gì nó nói."
          books={featuredBooks}
        />

        <BestSellingSection
          title="SÁCH BÁN CHẠY"
          books={bestSellingBooks}
        />
      </main>

      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="container-fluid mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ADC BOOK</h3>
              <p className="text-gray-300">Nhà sách trực tuyến hàng đầu Việt Nam</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Thông tin</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Điều khoản sử dụng
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Hướng dẫn mua hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Phương thức thanh toán
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Chính sách đổi trả
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
              <p className="text-gray-300">Hotline: 1900 xxxx</p>
              <p className="text-gray-300">Email: contact@adcbook.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 ADC BOOK. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}