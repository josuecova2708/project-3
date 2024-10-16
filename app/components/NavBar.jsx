import React from 'react'
import Image from 'next/image'
import logo from "./Logo.png"
import Link from 'next/link'
export default function NavBar() {
  return (
    <nav className="w-full h-20 items-center justify-evenly flex bg-slate-50">
      <div className="flex items-center">
        <figure className="size-11 flex items-center">
          <Image
            src={logo}
            alt="logo"
          />
        </figure>
        <p className="logo_title">
          Klean
        </p>
      </div>
      <ul className="flex gap-7">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>

        <li>
          <Link href="/service">
            Service
          </Link>
        </li>

        <li>
          <Link href="details">
            Details
          </Link>
        </li>

        <li>
          <Link href="features">
            Features
          </Link>
        </li>

        <li>
          <Link href="projects">
            Projects
          </Link>
        </li>

        <li>
          <Link href="team">
            Team
          </Link>
        </li>

        <li>
          <Link href="testimonials">
            Testimonial
          </Link>
        </li>
        <li>
          <Link href="blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="contact">
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="flex gap-3 ">
        <button className=" text-blue-600">Log in</button>
        <button className=" text-purple-500 shadow-lg h-12 w-20 rounded-xl"> Sign Up</button>
      </div>


    </nav>
  )
}
