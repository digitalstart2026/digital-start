/**
 * Light mode only: full-viewport ambient canvas (purple brand identity).
 * Dark mode is unchanged — this component is hidden when `.dark` is on <html>.
 */
export default function AmbientPageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden dark:hidden"
    >
      {/* Base wash — warm lavender, not flat grey */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FAF8FC_0%,#F3EFF8_38%,#EDE8F4_72%,#E8E2EF_100%)]" />

      {/* Top light pool — soft studio key light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_65%_at_50%_-8%,rgba(255,255,255,0.92),transparent_58%)]" />

      {/* Primary brand glow — logo purple */}
      <div className="absolute -left-[20%] -top-[12%] h-[min(85vw,42rem)] w-[min(85vw,42rem)] rounded-full bg-[radial-gradient(circle_at_42%_38%,rgba(186,129,238,0.38),rgba(73,40,253,0.12)_42%,rgba(186,129,238,0.04)_55%,transparent_72%)] blur-[100px]" />
      <div className="absolute -right-[18%] top-[8%] h-[min(75vw,38rem)] w-[min(75vw,38rem)] rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(73,40,253,0.22),rgba(186,129,238,0.1)_48%,transparent_70%)] blur-[90px]" />

      {/* Secondary accents — depth without rainbow noise */}
      <div className="absolute bottom-[-10%] left-[5%] h-[min(70vw,36rem)] w-[min(70vw,36rem)] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(112,181,255,0.16),transparent_68%)] blur-[85px]" />
      <div className="absolute bottom-[15%] right-[-5%] h-[min(55vw,30rem)] w-[min(55vw,30rem)] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,136,154,0.12),transparent_65%)] blur-[80px]" />
      <div className="absolute left-1/2 top-[42%] h-[min(90vw,44rem)] w-[min(110vw,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,129,238,0.08),transparent_62%)] blur-[110px]" />

      {/* Horizontal luxury band — ties sections together */}
      <div className="absolute inset-x-0 top-[28%] h-[48%] bg-[linear-gradient(102deg,transparent_4%,rgba(73,40,253,0.04)_18%,rgba(186,129,238,0.07)_50%,rgba(112,181,255,0.05)_82%,transparent_96%)]" />

      {/* Floor shadow — grounding, premium depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_100%,rgba(27,29,30,0.06),transparent_52%)]" />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 240px",
        }}
      />

      {/* Edge vignette — focus toward center content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_80%_at_50%_45%,transparent_40%,rgba(245,243,250,0.55)_100%)]" />
    </div>
  );
}
