const steps = [
  {
    number: "1",
    label: "Pantry",
    title: "Add what you have",
    description: "Type ingredients or use a food photo as a starting point.",
  },
  {
    number: "2",
    label: "AI Match",
    title: "Generate recipes",
    description: "Get dish ideas based on time, diet, and flavor fit.",
  },
  {
    number: "3",
    label: "Customize",
    title: "Tune macros",
    description: "Adjust protein, calories, spice, and substitutions.",
  },
  {
    number: "4",
    label: "Cook",
    title: "Follow the steps",
    description: "Cook with clear instructions and AI guidance.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#fffaf7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c81e2b]">
            How it works
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-tight text-[#211513] sm:text-4xl lg:text-5xl">
            Pantry to plate in four simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="min-h-44 rounded-2xl border border-[#efcbc4] bg-white px-5 py-6 shadow-[0_18px_45px_rgba(182,23,34,0.07)] sm:px-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ffe5e1] text-base font-black text-[#c81e2b]">
                  {step.number}
                </span>
                <span className="font-mono text-xs font-bold tracking-wide text-[#7a625d]">
                  {step.label}
                </span>
              </div>

              <h3 className="text-lg font-black leading-tight text-[#211513]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-7 text-[#6d5550]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
