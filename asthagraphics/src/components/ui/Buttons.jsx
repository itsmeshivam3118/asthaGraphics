export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 active:scale-95";

  const variants = {
    primary:
      "bg-rose-700 text-white hover:bg-rose-800 hover:shadow-xl hover:-translate-y-1",

    secondary:
      "border border-gray-300 bg-white text-gray-700 hover:border-rose-700 hover:text-rose-700 hover:shadow-lg",

    outline:
      "border-2 border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
