import Link from "next/link";
import { Home } from "lucide-react";
import { BackButton } from "@/components/ui/back-button";

export default function EnNotFound() {
  return (
    <section className="flex-1 flex items-center justify-center min-h-[80dvh] bg-warm-50">
      <div className="text-center px-4">
        <div className="text-8xl font-bold font-display text-navy-200 mb-4">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-3">
          Page Not Found
        </h1>
        <p className="text-warm-600 max-w-md mx-auto mb-8">
          The page you are looking for may have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-700 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 transition-all"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <BackButton />
        </div>
      </div>
    </section>
  );
}
