export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-primary rounded-full animate-ping"></div>
        <div
          className="absolute inset-2 border-4 border-secondary rounded-full animate-ping"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute inset-4 border-4 border-accent rounded-full animate-ping"
          style={{ animationDelay: "0.4s" }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-foreground text-lg font-bold">Loading</span>
        </div>
      </div>
    </div>
  );
}
