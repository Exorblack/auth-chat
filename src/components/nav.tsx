"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">ExorBlack</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about">
          About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          Careers
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/contact" aria-current="page">
          Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth/register" variant="solid">
            Get Start
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
          <NavbarMenuItem>
            <Link className="w-full" href="about" size="lg">About</Link>
            <Link className="w-full" href="/" size="lg">Pricing</Link>
            <Link className="w-full" href="/contact" size="lg">Contact Us</Link>
            <Link className="w-full" href="#" size="lg">Blog</Link>
            <Link className="w-full" href="#" size="lg">Careers</Link>
            <Link className="w-full text-blue-700" href="/auth/login" size="lg">Login</Link>
          </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}