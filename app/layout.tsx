import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FractalBackground from "./FractalBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FractalBackground />
        
        {/* Hero Section (Restored Text) */}
        <section className="hero-section">
          <h1 className="hero-title">Welcome to Princeton QT</h1>
          <p className="hero-subtitle">Explore the world of finance with cutting-edge tools</p>
        </section>

        <main className="min-h-screen flex flex-col justify-center items-center p-6">
          <div className="max-w-4xl w-full">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
