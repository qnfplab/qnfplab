"use client";

import Link from "next/link";
import { chakra } from "./layout";

export default function Home() {
  return (
<main className="max-w-6xl mx-auto px-8 h-screen flex flex-col justify-between pt-24 pb-24">
{/* ===== Header: Tree + Logo + Green Path + Postbox ===== */}
<div className="relative mb-28">
  {/* 로고 */}
  <h1
  className={`${chakra.className} text-[10rem] font-[600] tracking-wide text-center`}
>
  QnFP Lab
</h1>

  {/* 길 + 오브젝트를 감싸는 래퍼 */}
  <div className="relative mt-10">
    {/* 🌱 초록색 길 (기준선) */}
    <div
      className="w-full h-4 rounded-full opacity-80"
      style={{ backgroundColor: "#008000" }}
    />

    {/* 🌳 나무 – 길 중앙 기준, 더 크게 */}
    <div className="absolute left-0 top-1/2 -translate-y-[100%]">
  <span className="text-8xl">🌳</span>
    </div>

    {/* 📮 우편함 – 길 중앙 기준 */}
    <Link
      href="/contact"
      className="absolute right-0 top-1/2 -translate-y-[100%] flex flex-col items-center group"
      aria-label="Go to Contact Page"
    >
      <span
        className={`${chakra.className} font-[300] text-sm text-gray-500 mb-4 opacity-0 group-hover:opacity-100 transition`}
      >
        Click the Postbox to Contact Us!
      </span>
      <span className="text-6xl group-hover:scale-110 transition">
        📮
      </span>
    </Link>
  </div>
</div>

      {/* ===== Icon Launcher ===== */}
      <section className="flex-1 flex items-center">
        <div className="w-full grid grid-cols-3 gap-y-24 text-center">
          <Link href="/vision" className="flex flex-col items-center gap-6">
            <span className="text-6xl hover:scale-110 transition">💭</span>
            <span
              className={`${chakra.className} font-[300] text-lg`}
            >
              Vision
            </span>
          </Link>

          <Link href="/members" className="flex flex-col items-center gap-6">
            <span className="text-6xl hover:scale-110 transition">🙂</span>
            <span
              className={`${chakra.className} font-[300] text-lg`}
            >
              Members
            </span>
          </Link>

          <Link href="/research" className="flex flex-col items-center gap-6">
            <span className="text-6xl hover:scale-110 transition">🔍</span>
            <span
              className={`${chakra.className} font-[300] text-lg`}
            >
              Research
            </span>
          </Link>

          <Link href="/alumni" className="flex flex-col items-center gap-6">
            <span className="text-6xl hover:scale-110 transition">🎓</span>
            <span
              className={`${chakra.className} font-[300] text-lg`}
            >
              Alumni
            </span>
          </Link>

          <Link
            href="/pupillometry"
            className="flex flex-col items-center gap-6"
          >
            <span className="text-6xl hover:scale-110 transition">👀</span>
            <span
              className={`${chakra.className} font-[300] text-lg`}
            >
              Pupillometry
            </span>
          </Link>

          <Link
            href="/publications"
            className="flex flex-col items-center gap-6"
          >
            <span className="text-6xl hover:scale-110 transition">📚</span>
            <span
              className={`${chakra.className} font-[300] text-lg`}
            >
              Publications
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}