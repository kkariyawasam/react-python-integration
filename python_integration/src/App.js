import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/python')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data)) // Update state with fetched data
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Hello Python</h1>

      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
};

export default App;
