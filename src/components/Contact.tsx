import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-sm sm:text-base bg-zinc-50 dark:bg-[#0d1117] text-zinc-800 dark:text-[#c9d1d9] p-4 sm:p-8 rounded-2xl border border-black/10 dark:border-white/10 shadow-xl relative overflow-hidden">
          {/* MacOS style window controls */}
          <div className="absolute top-0 left-0 w-full h-11 bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 flex items-center px-4 gap-2 backdrop-blur-md">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-black/10 dark:border-0"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-black/10 dark:border-0"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 border border-black/10 dark:border-0"></div>
            <span className="ml-3 text-xs font-sans font-medium text-foreground/50 tracking-wide">agent.py</span>
          </div>
          
          <div className="pt-10 overflow-x-auto">
            <p className="mt-2"><span className="text-pink-600 dark:text-pink-400">from</span> typing <span className="text-pink-600 dark:text-pink-400">import</span> <span className="text-orange-500 dark:text-orange-400">TypedDict</span></p>
            <p><span className="text-pink-600 dark:text-pink-400">from</span> langgraph.graph <span className="text-pink-600 dark:text-pink-400">import</span> <span className="text-orange-500 dark:text-orange-400">StateGraph</span></p>
            <br />
            <p><span className="text-pink-600 dark:text-pink-400">class</span> <span className="text-orange-500 dark:text-orange-400">DeveloperState</span>(<span className="text-orange-500 dark:text-orange-400">TypedDict</span>):</p>
            <div className="pl-4 sm:pl-8 space-y-1.5 mt-1">
              <p>name: <span className="text-blue-600 dark:text-blue-400">str</span></p>
              <p>skills: <span className="text-blue-600 dark:text-blue-400">list</span>[<span className="text-blue-600 dark:text-blue-400">str</span>]</p>
              <p>contact: <span className="text-blue-600 dark:text-blue-400">dict</span></p>
            </div>
            <br />
            <p><span className="text-pink-600 dark:text-pink-400">def</span> <span className="text-blue-600 dark:text-blue-400">get_profile</span>(state: <span className="text-orange-500 dark:text-orange-400">DeveloperState</span>):</p>
            <div className="pl-4 sm:pl-8 space-y-1.5 mt-2">
              <p><span className="text-green-600 dark:text-green-400">&quot;&quot;&quot;Agent node to retrieve Thanush&apos;s profile and contact details.&quot;&quot;&quot;</span></p>
              <p><span className="text-pink-600 dark:text-pink-400">return</span> {'{'}</p>
              <div className="pl-4 sm:pl-8 space-y-1.5">
                <p><span className="text-green-600 dark:text-green-400">&quot;name&quot;</span>: <span className="text-green-600 dark:text-green-400">&quot;Thanush Thilipkumar&quot;</span>,</p>
                <p><span className="text-green-600 dark:text-green-400">&quot;role&quot;</span>: <span className="text-green-600 dark:text-green-400">&quot;Software Engineer &amp; AI Enthusiast&quot;</span>,</p>
                <p><span className="text-green-600 dark:text-green-400">&quot;skills&quot;</span>: [<span className="text-green-600 dark:text-green-400">&quot;Scalable Backends&quot;</span>, <span className="text-green-600 dark:text-green-400">&quot;Agentic Workflows&quot;</span>],</p>
                <p><span className="text-green-600 dark:text-green-400">&quot;mission&quot;</span>: <span className="text-green-600 dark:text-green-400">&quot;Always looking for new opportunities to build cool things and solve hard problems.&quot;</span>,</p>
                <p><span className="text-green-600 dark:text-green-400">&quot;contact&quot;</span>: {'{'}</p>
                <div className="pl-4 sm:pl-8 space-y-1.5">
                  <p>
                    <span className="text-green-600 dark:text-green-400">&quot;email&quot;</span>: <a href="mailto:thanushcurtis@gmail.com" className="text-green-600 dark:text-green-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline">&quot;thanushcurtis@gmail.com&quot;</a>,
                  </p>
                  <p>
                    <span className="text-green-600 dark:text-green-400">&quot;github&quot;</span>: <a href="https://github.com/thanushcurtis" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline">&quot;github.com/thanushcurtis&quot;</a>,
                  </p>
                  <p>
                    <span className="text-green-600 dark:text-green-400">&quot;linkedin&quot;</span>: <a href="https://www.linkedin.com/in/thanushcurtis/" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline">&quot;linkedin.com/in/thanushcurtis&quot;</a>
                  </p>
                </div>
                <p>{'}'}</p>
              </div>
              <p>{'}'}</p>
            </div>
            <br />
            <p><span className="text-zinc-500 dark:text-zinc-400"># Initialize LangGraph Agent</span></p>
            <p>portfolio_agent <span className="text-pink-600 dark:text-pink-400">=</span> <span className="text-orange-500 dark:text-orange-400">StateGraph</span>(<span className="text-orange-500 dark:text-orange-400">DeveloperState</span>)</p>
            <p>portfolio_agent.add_node(<span className="text-green-600 dark:text-green-400">&quot;profile&quot;</span>, get_profile)</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
