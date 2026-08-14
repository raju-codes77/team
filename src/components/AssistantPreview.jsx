import { Bot } from "lucide-react";

export default function AssistantPreview() {
  return (
    <section className="bg-[#ffe9e6] px-6 py-20 md:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#bf1624]">
            Assistant Preview
          </p>
          <h2 className="max-w-xl text-[34px] font-black leading-[1.08] text-[#221615] md:text-[44px]">
            A cooking assistant that knows your fridge
          </h2>
          <p className="mt-5 max-w-[540px] text-base leading-8 text-[#765b58]">
            The assistant panel is inspired by the mockup chat bubbles, but
            presented as a static landing-page proof point.
          </p>
        </div>

        <div className="rounded-2xl bg-[#b90f1d] p-6 shadow-[0_28px_70px_rgba(185,15,29,0.25)] md:p-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-sm font-black text-white">
            <Bot className="h-4 w-4" />
            Chef&apos;s Kitchen AI
          </div>

          <div className="flex justify-end">
            <div className="max-w-[360px] rounded-2xl bg-white/20 px-5 py-4 text-sm font-bold leading-6 text-white">
              What can I make with eggs, spinach, and rice?
            </div>
          </div>

          <div className="mt-3 max-w-[430px] rounded-2xl bg-white px-5 py-4 text-sm font-bold leading-6 text-[#221615]">
            Try spinach fried rice with a crispy egg, garlic, basil, and chili.
            18 min, 410 kcal, 22g protein.
          </div>
        </div>
      </div>
    </section>
  );
}
