const siteStack = ['Vite', 'React', 'Tailwind', 'GitHub Actions'];
const projectTags = ['Playwright', 'VGG', 'Automation', 'Scheduled Runs'];

const heroPanels = [
  {
    label: 'Focus',
    value: 'Automation-first engineering',
    detail: '把重复流程变成稳定、可复用的小系统。',
  },
  {
    label: 'Shipping',
    value: 'GitHub Pages + Actions',
    detail: '静态部署、自动构建、低维护成本。',
  },
  {
    label: 'Current Highlight',
    value: 'auto-bond-purchase',
    detail: '多账号、定时执行、失败重试与通知推送。',
  },
];

function Card({ as: Tag = 'section', id, className = '', children, delay = 0 }) {
  return (
    <Tag
      id={id}
      className={`card animate-fadeInUp ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip px-4 py-6 text-slate-100 sm:px-6 sm:py-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-24" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-32 size-96 animate-float rounded-full bg-blue-500/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 top-8 size-[26rem] animate-float rounded-full bg-violet-500/25 blur-3xl [animation-delay:1800ms]" />

      <main className="relative z-10 mx-auto grid w-full max-w-6xl gap-5 pb-8 sm:gap-6 sm:pb-10">
        <Card as="header" className="sticky top-4 z-20 flex items-center justify-between gap-4 px-4 py-3 sm:px-5" delay={20}>
          <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-white">
            SubtleSpark
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#featured-project">Project</NavLink>
            <NavLink href="#links">Links</NavLink>
          </nav>

          <a
            href="https://github.com/SubtleSpark"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-blue-200/25 bg-white/[0.03] px-4 py-2 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-blue-200/45 hover:bg-blue-500/10"
          >
            GitHub
          </a>
        </Card>

        <Card id="hero" className="hero-card relative overflow-hidden px-6 py-7 sm:px-8 sm:py-8" delay={50}>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-blue-300/25 to-violet-300/10 blur-2xl" />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.85fr)] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-200/90">Personal Homepage</p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
                SubtleSpark
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                building useful automation tools and reliable small systems.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {siteStack.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-xl border border-blue-200/30 bg-gradient-to-r from-blue-500/40 to-violet-500/35 px-5 py-2.5 text-sm font-medium text-blue-50 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/60 hover:from-blue-400/50 hover:to-violet-400/45"
                  href="https://github.com/SubtleSpark"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Profile
                </a>
                <a
                  className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/35 hover:bg-white/[0.06]"
                  href="#featured-project"
                >
                  Explore Featured Project
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {heroPanels.map((panel) => (
                <div
                  key={panel.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 shadow-[0_12px_32px_rgba(2,6,23,0.28)] backdrop-blur-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/75">{panel.label}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">{panel.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{panel.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <Card id="about" className="h-full" delay={120}>
            <h2 className="section-title">About</h2>
            <div className="mt-3 space-y-3 text-slate-300">
              <p>我专注于把重复、易错的流程做成稳定且可复用的自动化工具。</p>
              <p>我重视可维护性与可靠性，让小系统在真实场景中持续产生价值。</p>
            </div>
          </Card>

          <Card id="featured-project" className="h-full" delay={180}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="section-title">Featured Project</h2>
                <h3 className="mt-2 font-display text-2xl font-semibold text-slate-100 sm:text-3xl">
                  auto-bond-purchase
                </h3>
              </div>
              <a
                className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-200/30 hover:bg-white/[0.06] sm:inline-flex"
                href="https://github.com/SubtleSpark/auto-bond-purchase"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {projectTags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>

            <p className="mt-5 text-slate-300">
              基于 Playwright 与 VGG 验证码识别，自动化处理东方财富新债申购流程，支持多账号并发、定时执行、失败重试与通知推送，
              目标是把高频重复操作交给系统，显著减少手动负担。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-xl border border-slate-300/20 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/45 hover:bg-slate-800/60"
                href="https://github.com/SubtleSpark/auto-bond-purchase"
                target="_blank"
                rel="noreferrer"
              >
                Open Project on GitHub
              </a>
              <a
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/35 hover:bg-white/[0.06]"
                href="#links"
              >
                More Links
              </a>
            </div>
          </Card>
        </div>

        <Card id="links" className="space-y-3" delay={240}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Links</h2>
              <p className="mt-2 text-sm text-slate-400">精选的几个入口，用来快速了解我和我的项目。</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a className="link-row" href="https://github.com/SubtleSpark" target="_blank" rel="noreferrer">
              <span className="block text-xs uppercase tracking-[0.18em] text-blue-200/70">Profile</span>
              <span className="mt-1 block text-base text-white">github.com/SubtleSpark</span>
            </a>
            <a
              className="link-row"
              href="https://github.com/SubtleSpark/auto-bond-purchase"
              target="_blank"
              rel="noreferrer"
            >
              <span className="block text-xs uppercase tracking-[0.18em] text-blue-200/70">Project</span>
              <span className="mt-1 block text-base text-white">github.com/SubtleSpark/auto-bond-purchase</span>
            </a>
          </div>
        </Card>
      </main>
    </div>
  );
}
