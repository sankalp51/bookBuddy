export default function loading() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="relative w-12 h-12 rounded-full animate-rotate">
        <div className="absolute inset-0 border-4 border-primary rounded-full animate-prixClipFix"></div>
      </div>
    </main>
  );
}
