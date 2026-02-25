import { ThemeToggle } from "../atoms/ThemeButton";
import Link from "next/link";
function Navbar() {
  return (
    <div className="ds-bg-alt h-15 flex items-center">
      <div className="flex justify-between container">
        <h2>logo</h2>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/Feature">Features</Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
