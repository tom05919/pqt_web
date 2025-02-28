"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} Princeton QT. All Rights Reserved.</p>
    </footer>
  );
}
