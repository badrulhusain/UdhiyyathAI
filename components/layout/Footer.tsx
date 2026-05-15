import { DISCLAIMER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-4 text-center">
        <p className="text-xs text-gray-400 leading-relaxed">
          {DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}
