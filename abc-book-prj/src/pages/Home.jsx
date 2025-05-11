import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import BookSection from "../components/BookSection";
import PromoBanner from "../components/PromoBanner";
import FeaturedSection from "../components/FeaturedSection";
import "../index.css";
import BestSellingSection from "../components/BestSellingSection";
import booksData from "../data/booksData"; // Dữ liệu sách từ file booksData.js
import Footer from "../components/Footer";

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
      <Footer/>
    </div>
  );
}