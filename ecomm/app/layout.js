import './globals.css'; // Import Bootstrap and custom styles
import Navbar from '../components/Navbar';
import Banner from '@/components/Banner';


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
     
      <Navbar/>
      
        <main>{children}</main> {/* This will render your page content */}
        {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO9n8p8dff0oUbOpwI0siN7FqB6iAE9S8PpUnF7e0CeaT6umJlg5B" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-w76A8/8q6/J5waF4JW0dAiT5A2J5J0J7jjRrj01GJmOU8JzYldZq8O2h9pbg6tf3x" crossorigin="anonymous"></script>
       */}
      </body>
    </html>
  );
}
