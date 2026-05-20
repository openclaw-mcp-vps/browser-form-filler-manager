export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Smart Form Auto-Fill<br />
          <span className="text-[#58a6ff]">with Context Awareness</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A browser extension that learns your form patterns and auto-fills with contextually appropriate test data — synced across devices via a secure web dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get FormFiller Pro — $12/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["ML Field Detection", "Classifies fields automatically"],
            ["Context-Aware Fill", "Right data for every site"],
            ["Cloud Sync", "Profiles across all browsers"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Browser extension (Chrome & Firefox)",
              "ML-based form field classification",
              "Unlimited saved fill profiles",
              "Cloud sync & web dashboard",
              "API access for CI/CD pipelines",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No credit card required for trial.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the ML field classification work?",
              "The extension analyzes field names, labels, placeholders, and surrounding HTML context to classify each field type — email, name, address, phone, etc. — and selects the most appropriate test data from your saved profiles."
            ],
            [
              "Can I use it in automated testing pipelines?",
              "Yes. The Pro plan includes API access so you can programmatically manage fill profiles and trigger fills via CI/CD pipelines, making it ideal for QA automation workflows."
            ],
            [
              "Is my test data stored securely?",
              "All data is encrypted in transit and at rest. Fill profiles are stored locally in the extension and optionally synced to your encrypted cloud dashboard — you control what gets synced."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} FormFiller Pro. Built for developers.
      </footer>
    </main>
  );
}
