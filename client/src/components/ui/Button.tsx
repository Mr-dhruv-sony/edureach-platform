interface Props {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = ""
}: Props) {

  const base =
    "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-[#7B1E2B] text-white hover:opacity-90",
    secondary: "border border-[#7B1E2B] text-[#7B1E2B]"
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}