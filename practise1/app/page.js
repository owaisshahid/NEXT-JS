// app/about/page.js
import React from 'react';

// Fetching data in a server component
export default async function About() {
  let data = [];

  try {
    const response = await fetch('https://muhammadtayyab.com/api/get_data.php', { next: { revalidate: 10 } });
    data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div>
      {/* Add your Navbar component here */}
      <ul>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.phone}</li>
            <li>{item.address}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

