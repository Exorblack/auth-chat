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
          <Link color="foreground" href="#">
          About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/contact" aria-current="page">
          Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
          Dashboard
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
            <Link className="w-full" href="#" size="lg">About</Link>
            <Link className="w-full" href="/" size="lg">Dashboard</Link>
            <Link className="w-full" href="/contact" size="lg">Contact Us</Link>
            <Link className="w-full" href="#" size="lg">Analytics</Link>
            <Link className="w-full" href="#" size="lg">Deployments</Link>
            <Link className="w-full" href="#" size="lg">System</Link>
          </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}