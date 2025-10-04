import { Plane } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="flex flex-col items-center gap-6">
        {/* Airplane animation */}
        <div className="relative">
          <Plane
            className="w-16 h-16 text-primary-foreground animate-bounce"
            strokeWidth={1.5}
          />
          {/* Trail effect */}
          <div className="absolute top-1/2 left-0 w-32 h-0.5 bg-primary-foreground/30 -translate-y-1/2 -translate-x-full animate-pulse" />
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2">
          <span className="text-primary-foreground text-lg font-medium">
            Loading
          </span>
          <div className="flex gap-1">
            <span
              className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-2 h-2 bg-primary-foreground rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
