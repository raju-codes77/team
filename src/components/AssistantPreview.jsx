import { Bot } from "lucide-react";

export default function AssistantPreview() {
  return (
    <section className="bg-[#ffe9e7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c81e2b]">
            Assistant preview
          </p>
          <h2 className="mt-3 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-[#211513] sm:text-5xl">
            A cooking assistant that knows your fridge
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[#765b56] sm:text-lg">
            The assistant panel is inspired by the mockup chat bubbles, but
            presented as a static landing-page proof point.
          </p>
        </div>

        <aside className="rounded-3xl bg-gradient-to-br from-[#bd1522] to-[#990f18] p-6 shadow-[0_24px_60px_rgba(182,23,34,0.20)] sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-2 text-xs font-black text-white shadow-sm">
            <Bot className="h-4 w-4" />
            Chef&apos;s Kitchen AI
          </div>

          <div className="mt-7 flex flex-col gap-4">
            <div className="max-w-[82%] self-end rounded-2xl bg-white/20 px-5 py-4 text-sm font-bold leading-6 text-white">
              What can I make with eggs, spinach, and rice?
            </div>
            <div className="max-w-[88%] rounded-2xl bg-white px-5 py-4 text-sm font-semibold leading-6 text-[#241514] shadow-sm">
              Try spinach fried rice with a crispy egg, garlic, basil, and
              chili. 18 min, 410 kcal, 22g protein.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
