export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-950 px-6 text-center text-neutral-100">
      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        Coming soon
      </p>
      <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
        Leon Hebeisen
      </h1>
      <p className="max-w-md text-neutral-400">
        Application developer in training. My portfolio is on its way.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/lelelon225"
          className="rounded-full border border-neutral-700 px-5 py-2 text-sm transition hover:border-neutral-400"
        >
          GitHub
        </a>
        <a
          href="mailto:contact@leonhebeisen.com"
          className="rounded-full bg-neutral-100 px-5 py-2 text-sm text-neutral-950 transition hover:bg-neutral-300"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
