import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";

import ThemeContextProvider from "./context/ThemeContext";
import ThemeProvider from "./provider/ThemeProvider";

export const metadata = {
  title: "Blog App",
  description: "Fullstack Blog Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <main className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </main>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
