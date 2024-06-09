import React from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import Follower from '@/components/Follower';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "./about/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Contact from "./contact/page";
import Home from "./page";
import Navigation from "@/components/navigation";
import Shery from 'sheryjs';
import Images from '@/components/Images';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hemant Meena",
  description: "A next and React Js developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navigation/>
        <div id="home">
          <Home/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="projects">
          <Project/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </body>
    </html>
  );
}
