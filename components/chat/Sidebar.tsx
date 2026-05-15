import { BookOpen, HelpCircle, Clock, HeartHandshake } from "lucide-react";

export function Sidebar() {
  const topics = [
    { name: "Rulings & Eligibility", icon: BookOpen },
    { name: "Selecting Animals", icon: HelpCircle },
    { name: "Timing & Procedure", icon: Clock },
    { name: "Distribution of Meat", icon: HeartHandshake },
  ];

  return (
    <div className="h-full flex flex-col bg-white border-r border-border shadow-sm">
      <div className="p-6 pb-4 border-b border-border/50">
        <h2 className="text-lg font-heading font-bold text-primary flex items-center gap-2">
          Topics
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin">
        {topics.map((topic, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface text-left transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <topic.icon className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {topic.name}
            </span>
          </button>
        ))}
      </div>

      <div className="p-6 border-t border-border/50 bg-neutral-bg/50 mt-auto">
        <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
          <p className="text-xs text-primary font-medium leading-relaxed">
            Need a specific Fatwa?
            <br />
            <span className="text-muted-foreground mt-1 block">
              Consult your local scholars for complex personal rulings.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
