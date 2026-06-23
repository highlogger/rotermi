"use client";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 rounded-xl border-2 border-warm-300 px-6 py-3 text-sm font-semibold text-navy-700 hover:bg-warm-100 transition-all"
    >
      <ArrowLeft className="h-4 w-4" />
      Geri Dön
    </button>
  );
}
