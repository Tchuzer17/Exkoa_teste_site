import logo from "@/assets/xkoa-logo.jpeg";
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "light";
  showWordmark?: boolean;
  className?: string;
}

export const Logo = ({ variant = "default", showWordmark = true, className = "" }: LogoProps) => (
  <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label="XKOA">
    <img
      src={logo}
      alt="EXKOA"
      className="h-9 w-9 object-contain rounded-md"
      style={{ mixBlendMode: variant === "light" ? "screen" : "multiply" }}
    />
    {showWordmark && (
      <span
        className={`font-display text-[22px] font-extrabold tracking-tight ${
          variant === "light" ? "text-white" : "text-foreground"
        }`}
      >
        ex<span className="text-primary">koa</span>
      </span>
    )}
  </Link>
);
