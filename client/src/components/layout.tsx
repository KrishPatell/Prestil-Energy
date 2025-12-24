import { useLocation, Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, ChevronRight, Phone, Mail, MapPin, Linkedin, ArrowUpRight, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CatalogRequestDialog } from "@/components/catalog-request-dialog";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

const PRODUCTS = [
  "Submersible Centrifugal Pumps",
  "Submersible Electric Motors",
  "Motor Protectors",
  "Gas Separators",
  "Integrated ESP Solutions",
  "Sealed Metering Pumps",
];

// Theme Toggle Hook
function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Only check for explicitly saved dark theme preference
    // Default is light mode
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      // Ensure light mode is applied by removing dark class
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return { isDark, toggleTheme };
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCatalogDialogOpen, setIsCatalogDialogOpen] = useState(false);
  const [location] = useLocation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Prestil Energy Ltd." 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location === item.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-sm border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>

          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm h-10 px-6 rounded-sm"
            onClick={() => setIsCatalogDialogOpen(true)}
          >
            Request Quote
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-sm border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border w-[300px] p-0">
              <div className="p-8 flex flex-col h-full">
                <div className="mb-8">
                  <img src="/logo.png" alt="Prestil Energy" className="h-8" />
                </div>
                <nav className="flex flex-col gap-4">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary flex items-center justify-between group py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-sm h-12" 
                    onClick={() => {
                      setIsOpen(false);
                      setIsCatalogDialogOpen(true);
                    }}
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CatalogRequestDialog open={isCatalogDialogOpen} onOpenChange={setIsCatalogDialogOpen} />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Prestil Energy Ltd." className="h-10 mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Prestil Energy Ltd. is a leading manufacturer of submersible centrifugal pumps and electric motors for oil & gas production, with over 25 years of engineering excellence.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary hover:bg-primary border border-border hover:border-primary flex items-center justify-center transition-all group"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  Home
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  About Us
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  Products
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  Manufacturing
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                  Contact
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wider uppercase">Products</h4>
            <ul className="space-y-3 text-sm">
              {PRODUCTS.map((product) => (
                <li key={product}>
                  <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">
                  109/A, Nalanda Complex, NR Mansi Complex<br />
                  Mahavir Nagar society, Vastrapur<br />
                  Ahmedabad, Gujarat 380015
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:energy.apatel@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  energy.apatel@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:prestilindia@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  prestilindia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919824054002" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9824054002
                </a>
              </li>
              <li className="flex items-start gap-3 mt-4 pt-4 border-t border-border">
                <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Registered Office</p>
                  <p className="text-sm text-muted-foreground">
                    15A Newcourt Street, London, England, NW87AA<br />
                    United Kingdom Company No. 07944346
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Certifications</p>
              <p className="text-sm text-foreground">ISO 9001:2015 Certified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prestil Energy Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
