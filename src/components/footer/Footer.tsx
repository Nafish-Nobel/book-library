

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Library App. All rights reserved.
        </span>
        <nav className="flex gap-4">
          <a
            href="/about"
            className="text-sm text-muted-foreground hover:underline"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-sm text-muted-foreground hover:underline"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="text-sm text-muted-foreground hover:underline"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}