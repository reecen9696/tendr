import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="flex items-center justify-between gap-4 px-4 py-5 sm:px-6 sm:py-6 md:px-12 md:py-8">
        <a href="/" className="flex items-center" aria-label="Tendr home">
          <Image
            src="/logo.png"
            alt="Tendr"
            width={785}
            height={208}
            priority
            className="h-7 w-auto sm:h-8 md:h-10"
          />
        </a>
        <a
          href="https://calendar.app.google/st8KsrJpXH3VfWnH7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#44B1FF] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#2f9eee] sm:px-5"
        >
          Contact Us
        </a>
      </header>

      <main className="flex flex-1 items-center px-4 sm:px-6 md:px-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 py-10 sm:gap-12 sm:py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="flex flex-col gap-5 sm:gap-6">
            <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
              Generate a tender in under 30 minutes
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl">
              Upload the drawings, scope and BOQ template and get back a priced
              bill of quantities, scope of work and proposal — so you can
              respond to every RFQ, not just the ones worth a three-day takeoff.
            </p>
            <div>
              <a
                href="https://calendar.app.google/st8KsrJpXH3VfWnH7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#44B1FF] px-6 text-base font-semibold text-white transition-colors hover:bg-[#2f9eee]"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-[#A2D2EE] p-3 sm:p-4 md:p-6">
            <Image
              src="/hero.png"
              alt="Tendr review interface showing a structural drawing with pile counts and linear cuts"
              width={2000}
              height={1200}
              priority
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
