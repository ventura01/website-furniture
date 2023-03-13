import Link from "next/link";
import React from "react";
const links = [
  { name: "home", route: "/" },
  { name: "products", route: "/products" },
  { name: "about", route: "/about" },
  { name: "contact", route: "/contact" },
];
const NavLinks = () => {
  return (
    <nav>
      <div className="hidden  space-x-8 justify-around text-sm text-gray-500 md:flex">
        {links.map((link) => (
          <div key={link.name}>
            <Link href={link.route}>
              <div className="capitalize py-4 px-12 hover:text-gray-700 hover:bg-yellow-500">
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;
