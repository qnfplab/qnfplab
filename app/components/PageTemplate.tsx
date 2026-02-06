import Link from "next/link";
import { chakra } from "../layout";

export default function PageTemplate({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-8 py-24 flex flex-col">
      {/* ===== 중앙 콘텐츠 영역 ===== */}
      <div className="flex-1 flex flex-col justify-center">
        {/* 페이지 제목 */}
        <h2
          className={`${chakra.className} font-[300] text-3xl text-center mb-16`}
        >
          {title}
        </h2>

        {/* 본문 */}
        <section className="text-lg leading-relaxed space-y-8 text-center">
          {children}
        </section>
      </div>

      {/* ===== 하단 Home 버튼 ===== */}
      <div className="flex justify-center mt-24">
        <Link
          href="/"
          className="group flex flex-col items-center"
          aria-label="Back to Home"
        >
          <span
            className={`${chakra.className} font-[300] text-sm text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition`}
          >
            Back to Home
          </span>
          <span className="text-4xl group-hover:scale-110 transition">
            🏡
          </span>
        </Link>
      </div>
    </main>
  );
}