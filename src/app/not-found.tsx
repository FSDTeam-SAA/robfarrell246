import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#090a0f] p-6 text-center text-zinc-100">
      <div className="relative mb-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 shadow-2xl">
          <Compass className="h-12 w-12 animate-pulse" />
        </div>
      </div>

      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-indigo-400">
        404 — Endpoint Not Found
      </span>

      <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        Lost in Cyberspace
      </h1>

      <p className="mt-2 max-w-md text-sm text-zinc-400">
        The dashboard view or resource you are attempting to access does not exist or has been shifted in the architecture hierarchy.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Link href="/">
          <Button variant="default" size="default" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
