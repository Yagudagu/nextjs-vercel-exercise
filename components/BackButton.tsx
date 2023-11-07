import Link from "next/link";

export function BackButton() {
  return (
    <div className="flex gap-1 justify-end">
      <Link
        href=".."
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      >
        Back to Home
      </Link>
    </div>
  );
}
