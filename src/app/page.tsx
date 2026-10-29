export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
              Financial Tools
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-zinc-50">
              Plan smarter with clear, focused calculators
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              A simple collection of calculators to help you estimate repayments
              and project long-term growth. Start by exploring the tools below.
            </p>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="group relative flex flex-col gap-6 rounded-3xl border border-black/[.06] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/[.12] dark:bg-zinc-950">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                Mortgage
              </span>
              <h2 className="text-2xl font-semibold text-black sm:text-3xl dark:text-zinc-50">
                Mortgage Repayment Calculator
              </h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Estimate your monthly mortgage repayments based on loan amount,
                interest rate, and term. Understand how much you'll pay over the
                life of your loan at a glance.
              </p>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                Compare different loan terms and rates
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                See total interest vs principal breakdown
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                Plan affordability with confidence
              </li>
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-3">
              <span className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition group-hover:bg-zinc-800 dark:bg-white dark:text-black dark:group-hover:bg-zinc-200">
                Coming soon
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                /mortgage-repayment
              </span>
            </div>
          </article>

          <article className="group relative flex flex-col gap-6 rounded-3xl border border-black/[.06] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/[.12] dark:bg-zinc-950">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                Investments
              </span>
              <h2 className="text-2xl font-semibold text-black sm:text-3xl dark:text-zinc-50">
                Compound Interest Calculator
              </h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Project how your savings or investments grow over time with
                compound interest. Factor in initial balance, contributions,
                rate, and frequency.
              </p>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                Visualize growth year by year
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                Compare lump sums vs recurring contributions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                See the power of compounding in action
              </li>
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-3">
              <span className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition group-hover:bg-zinc-800 dark:bg-white dark:text-black dark:group-hover:bg-zinc-200">
                Coming soon
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                /compound-interest
              </span>
            </div>
          </article>
        </section>

        <footer className="flex flex-col items-center gap-2 border-t border-black/[.06] pt-8 text-center text-sm text-zinc-500 dark:border-white/[.12] dark:text-zinc-400 sm:flex-row sm:justify-between">
          <p>Financial calculators for clearer decision making.</p>
          <p>More tools coming soon.</p>
        </footer>
      </main>
    </div>
  );
}
