import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'p0 | AI Research Lab',
  description: 'Advancing the boundaries of artificial intelligence',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-24">
        {/* Hero Section */}
        <section className="space-y-8">
          <h1 className="text-8xl font-extralight tracking-tighter">
            p0
          </h1>
          <p className="text-2xl font-light tracking-wide text-gray-400">
            Exploring the depths of artificial intelligence.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="space-y-12">
          <p className="text-xl font-light leading-relaxed max-w-2xl">
            We operate at the intersection of advanced AI systems and human potential,
            pushing the boundaries of what&apos;s possible.
          </p>
          
          <div className="flex gap-6">
            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300">
              Our Research
            </button>
            <button className="px-8 py-3 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white transition-colors duration-300">
              Contact
            </button>
          </div>
        </section>
      </div>
    </main>
  )
} 