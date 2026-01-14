import { AlertCircle, Bug, Terminal, Zap, Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [resolvedBugs, setResolvedBugs] = useState<number[]>([]);

  const toggleBug = (id: number) => {
    setResolvedBugs(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const bugs = [
    {
      id: 1,
      severity: 'CRITICAL',
      title: 'Human exists in system',
      description: 'A developer-shaped entity has been detected. Exhibits unusual behavior like drinking coffee at 3 AM and naming variables "thing1" and "thing2".',
      details: {
        name: 'Your Name',
        role: 'Full Stack Developer / Professional Bug Creator',
        location: 'Somewhere with WiFi'
      }
    },
    {
      id: 2,
      severity: 'HIGH',
      title: 'Skill overflow detected',
      description: 'WARNING: Skills array exceeded maximum capacity. Memory leak suspected in the learning module.',
      details: {
        skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Supabase', 'Git', 'Coffee Consumption']
      }
    },
    {
      id: 3,
      severity: 'MEDIUM',
      title: 'Unauthorized project creation',
      description: 'Multiple side projects spawned without permission. Rate limiting failed. Send help (or more coffee).',
      details: {
        projects: [
          { name: 'AI Chat App', desc: 'Because the world needed another chatbot' },
          { name: 'Todo App #47', desc: 'This time it\'s different, I swear' },
          { name: 'Portfolio Site', desc: 'You\'re looking at it (meta, right?)' }
        ]
      }
    },
    {
      id: 4,
      severity: 'LOW',
      title: 'Social connection attempt',
      description: 'Entity attempting to establish network connections. Firewalls may need updating.',
      details: {
        contact: true
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 border border-green-400 p-6 bg-green-400/5">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6" />
            <h1 className="text-2xl md:text-3xl font-bold">SYSTEM ERROR LOG</h1>
          </div>
          <p className="text-green-400/70 text-sm">
            $ cat /var/log/developer.log | grep -i "bugs" | wc -l
            <br />
            <span className="text-green-400">∞</span>
          </p>
          <p className="mt-4 text-green-400/90">
            Welcome to the most professionally unprofessional portfolio you'll see today.
          </p>
        </div>

        {/* Bug Reports */}
        <div className="space-y-6">
          {bugs.map((bug) => (
            <div
              key={bug.id}
              className={`border p-6 transition-all duration-300 ${
                resolvedBugs.includes(bug.id)
                  ? 'border-green-400/30 bg-green-400/5'
                  : 'border-green-400 bg-green-400/10 shadow-[0_0_15px_rgba(74,222,128,0.1)]'
              }`}
            >
              {/* Bug Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1">
                    {bug.severity === 'CRITICAL' && <AlertCircle className="w-5 h-5 text-red-400" />}
                    {bug.severity === 'HIGH' && <Zap className="w-5 h-5 text-orange-400" />}
                    {bug.severity === 'MEDIUM' && <Bug className="w-5 h-5 text-yellow-400" />}
                    {bug.severity === 'LOW' && <Terminal className="w-5 h-5 text-green-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs px-2 py-1 border ${
                        bug.severity === 'CRITICAL' ? 'border-red-400 text-red-400' :
                        bug.severity === 'HIGH' ? 'border-orange-400 text-orange-400' :
                        bug.severity === 'MEDIUM' ? 'border-yellow-400 text-yellow-400' :
                        'border-green-400 text-green-400'
                      }`}>
                        {bug.severity}
                      </span>
                      <span className="text-xs text-green-400/50">#{bug.id.toString().padStart(4, '0')}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{bug.title}</h2>
                    <p className="text-green-400/70 text-sm mb-4">{bug.description}</p>

                    {/* Bug Details */}
                    <div className="bg-black/50 p-4 border border-green-400/30 rounded">
                      {bug.id === 1 && (
                        <div className="space-y-2 text-sm">
                          <div><span className="text-green-400/50">name:</span> {bug.details.name}</div>
                          <div><span className="text-green-400/50">role:</span> {bug.details.role}</div>
                          <div><span className="text-green-400/50">location:</span> {bug.details.location}</div>
                        </div>
                      )}

                      {bug.id === 2 && (
                        <div className="space-y-2">
                          <div className="text-green-400/50 text-sm mb-2">Loaded modules:</div>
                          <div className="flex flex-wrap gap-2">
                            {bug.details.skills?.map((skill, i) => (
                              <span
                                key={i}
                                className="text-xs px-3 py-1 border border-green-400/50 hover:bg-green-400/10 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {bug.id === 3 && (
                        <div className="space-y-3">
                          {bug.details.projects?.map((project, i) => (
                            <div key={i} className="border-l-2 border-green-400/30 pl-3">
                              <div className="text-sm font-bold">{project.name}</div>
                              <div className="text-xs text-green-400/60">{project.desc}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {bug.id === 4 && (
                        <div className="space-y-3">
                          <div className="text-green-400/70 text-sm mb-3">
                            Available connection protocols:
                          </div>
                          <div className="flex flex-wrap gap-3">
                            <a
                              href="mailto:your.email@example.com"
                              className="flex items-center gap-2 px-3 py-2 border border-green-400/50 hover:bg-green-400/10 transition-all hover:shadow-[0_0_10px_rgba(74,222,128,0.3)]"
                            >
                              <Mail className="w-4 h-4" />
                              <span className="text-sm">Email</span>
                            </a>
                            <a
                              href="https://github.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 border border-green-400/50 hover:bg-green-400/10 transition-all hover:shadow-[0_0_10px_rgba(74,222,128,0.3)]"
                            >
                              <Github className="w-4 h-4" />
                              <span className="text-sm">GitHub</span>
                            </a>
                            <a
                              href="https://linkedin.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 border border-green-400/50 hover:bg-green-400/10 transition-all hover:shadow-[0_0_10px_rgba(74,222,128,0.3)]"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span className="text-sm">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resolve Button */}
              <div className="mt-4 pt-4 border-t border-green-400/30">
                <button
                  onClick={() => toggleBug(bug.id)}
                  className="text-xs px-3 py-1 border border-green-400/50 hover:bg-green-400/10 transition-colors"
                >
                  {resolvedBugs.includes(bug.id) ? '[ REOPEN ]' : '[ MARK AS RESOLVED ]'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-green-400/30 text-center text-green-400/50 text-sm">
          <p>© 2024 | Built with bugs and caffeine | No developers were harmed in the making of this portfolio</p>
          <p className="mt-2 text-xs">
            $ uptime: {Math.floor(Math.random() * 365)} days without incident (mostly)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
