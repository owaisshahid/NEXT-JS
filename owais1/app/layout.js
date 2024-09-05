import "./globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Profile</title>
      </head>
      <body>
        <header>
          <h1>My Profile</h1>
          {/* You can add a navigation bar here if needed */}
        </header>
        <main>{children}</main>
        <footer>
          <p>MY PROFILE </p>
        </footer>
      </body>
    </html>
  );
}
