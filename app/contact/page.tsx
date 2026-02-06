import PageTemplate from "../components/PageTemplate";

export default function Contact() {
  return (
    <PageTemplate title="Contact">
      <div className="space-y-8 leading-relaxed">

        {/* 이메일: 기본 폰트 */}
        <p>
          ✉️ qnfplab@gmail.com
        </p>

        {/* 지도 (그대로 유지) */}
        <div className="flex justify-center my-8">
          <div className="w-[420px] aspect-[3/2] rounded-[5rem] overflow-hidden bg-white">
            <iframe
              src="https://www.google.com/maps?q=동국대학교%20만해관&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* 주소 / 교통: 작게 */}
        <div className="space-y-2 text-sm">
          <p>
            📍 동국대학교 만해관 1층 B116호
          </p>
          <p>
            🚌 충무로역 1번 출구 · 동대입구역 6번 출구
          </p>
        </div>

      </div>
    </PageTemplate>
  );
}