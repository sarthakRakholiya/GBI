interface LoaderProps {
  variant?: "fullscreen" | "container";
}

const Loader = ({ variant = "fullscreen" }: LoaderProps) => {
  const containerClasses =
    variant === "fullscreen"
      ? "fixed inset-0 bg-white z-50"
      : "w-full min-h-[400px] bg-white";

  return (
    <div className={`${containerClasses} flex items-center justify-center`}>
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="h-12 w-fit bg-gbi-700 rounded-md flex items-center justify-center border border-gray-300 px-3">
          <span className="text-white font-title font-bold text-2xl">GBI</span>
        </div>

        {/* Loading dots */}
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gbi-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
