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
    <section className="bg-[#fffcf9] px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto max-w-[1080px]">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#bf1624]">
          How It Works
        </p>
        <h2 className="max-w-3xl text-[32px] font-black leading-[1.08] text-[#221615] md:text-[42px]">
          Pantry to plate in four simple steps
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="min-h-[170px] rounded-2xl border border-[#f0c8c4] bg-white px-5 py-5 shadow-[0_18px_42px_rgba(190,30,40,0.08)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffe2df] text-base font-black text-[#bf1624]">
                  {step.number}
                </span>
                <span className="font-mono text-xs font-bold text-[#7b625f]">
                  {step.label}
                </span>
              </div>
              <h3 className="text-lg font-black leading-tight text-[#221615]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#765b58]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
