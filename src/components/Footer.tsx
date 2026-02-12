export default function Footer() {
  return (
    <footer className="pb-2 px-4 text-center text-xs text-slate-500">
      © Copyright {new Date().getFullYear()} Designed & Built by{' '}
      <span className="text-slate-300 font-medium">rahulvijay</span>
    </footer>
  );
}