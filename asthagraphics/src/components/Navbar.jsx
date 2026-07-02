import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Container from "./ui/Container";
import Button from "./ui/Buttons";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-4">
      <Container>
        <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-rose-700"
          >
            Astha Graphics
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium text-gray-700 transition hover:text-rose-700"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button>Get Quote</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl bg-white p-6 shadow-xl lg:hidden">
            <div className="space-y-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-gray-700 hover:text-rose-700"
                >
                  {item.name}
                </Link>
              ))}

              <Button className="w-full">Get Quote</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
