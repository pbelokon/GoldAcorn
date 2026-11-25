"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaGitlab, FaYoutube } from "react-icons/fa";

const socials = [
  { href: "https://github.com/pbelokon", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pbelokon/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://gitlab.com/PuffDuck", icon: FaGitlab, label: "GitLab" },
  { href: "https://www.youtube.com/@BaronSakamoto", icon: FaYoutube, label: "YouTube" },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
];

export default function Navbar() {
  const pathname = usePathname();

  function handleConnectClick(e) {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-socials">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
        <nav className="navbar-links">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`navbar-link${pathname === href ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/#connect"
            className="navbar-link"
            onClick={handleConnectClick}
          >
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
