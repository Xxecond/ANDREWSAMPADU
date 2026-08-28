"use client"
import {Front } from "@/components";
import Sections from "./sections/page";

export default function Home() {

  return (
    <div className="overflow-hidden">
      <main >
        <Front />
        <Sections />  
        </main>
    </div>  
);
}