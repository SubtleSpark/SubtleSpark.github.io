const siteStack = ['Vite', 'React', 'Tailwind', 'GitHub Actions'];
const projectTags = ['Playwright', 'VGG', 'Automation', 'Scheduled Runs'];

function Card({ id, className = '', children, delay = 0 }) {
  return (
    <section
      id={id}
      className={`card animate-fadeInUp ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip px-4 py-10 text-slate-100 sm:px-6 sm:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 tech-grid opacity-28" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-32 size-96 animate-float rounded-full bg-blue-500/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 top-8 size-[26rem] animate-float rounded-full bg-violet-500/25 blur-3xl [animation-delay:1800ms]" />

      <main className="relative z-10 mx-auto grid w-full max-w-5xl gap-5 pb-6 sm:gap-6 sm:pb-10">
        <Card id="hero" className="hero-card relative overflow-hidden" delay={40}>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-blue-300/25 to-violet-300/10 blur-2xl" />
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-200/90">Personal Homepage</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">SubtleSpark</h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            building useful automation tools and reliable small systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {siteStack.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>

          <a
            className="mt-8 inline-flex items-center rounded-xl border border-blue-200/30 bg-gradient-to-r from-blue-500/40 to-violet-500/35 px-5 py-2.5 text-sm font-medium text-blue-50 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/60 hover:from-blue-400/50 hover:to-violet-400/45"
            href="https://github.com/SubtleSpark"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile
          </a>
        </Card>

        <Card id="about" delay={120}>
          <h2 className="section-title">About</h2>
          <div className="space-y-2.5 text-slate-300">
            <p>我专注于把重复、易错的流程做成稳定且可复用的自动化工具。</p>
            <p>我重视可维护性与可靠性，让小系统在真实场景中持续产生价值。</p>
          </div>
        </Card>

        <Card id="featured-project" delay={200}>
          <h2 className="section-title">Featured Project</h2>
          <h3 className="mt-1 font-display text-2xl font-semibold text-slate-100">auto-bond-purchase</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {projectTags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
          <p className="mt-4 text-slate-300">
            基于 Playwright 与 VGG 验证码识别，自动化处理东方财富新债申购流程，支持多账号并发、定时执行、失败重试与通知推送，
            目标是把高频重复操作交给系统，显著减少手动负担。
          </p>
          <a
            className="mt-6 inline-flex items-center rounded-xl border border-slate-300/20 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200/45 hover:bg-slate-800/60"
            href="https://github.com/SubtleSpark/auto-bond-purchase"
            target="_blank"
            rel="noreferrer"
          >
            Open Project on GitHub
          </a>
        </Card>

        <Card id="links" className="space-y-3" delay={280}>
          <h2 className="section-title">Links</h2>
          <a
            className="link-row"
            href="https://github.com/SubtleSpark"
            target="_blank"
            rel="noreferrer"
          >
            github.com/SubtleSpark
          </a>
          <a
            className="link-row"
            href="https://github.com/SubtleSpark/auto-bond-purchase"
            target="_blank"
            rel="noreferrer"
          >
            github.com/SubtleSpark/auto-bond-purchase
          </a>
        </Card>
      </main>
    </div>
  );
}
