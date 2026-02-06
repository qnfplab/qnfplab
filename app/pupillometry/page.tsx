import PageTemplate from "../components/PageTemplate";

export default function Pupillometry() {
  return (
    <PageTemplate title="Pupillometry">
      <div className="space-y-8 text-sm leading-relaxed">

        {/* 아이트래킹 영상 (안정 버전, 사이즈만 축소) */}
        <div className="flex justify-center mb-15">
          <video
            src="/videos/pupil.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[200px] rounded-2xl opacity-88"
          />
        </div>

        <p>
          동공 연구는 QnFP Lab의 핵심 프로젝트 중 하나입니다.
        </p>

        <p>
          동공의 미세한 변화를 통해 인지와 정서 과정을 정밀하게 탐구합니다.
        </p>
      </div>
    </PageTemplate>
  );
}