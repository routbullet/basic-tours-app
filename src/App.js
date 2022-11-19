import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []); // it should run once for initial renders

  const fetchAPI = async () => {
    setLoading(true);

    try {
      const response = await fetch(URL);
      const toursVal = await response.json();
      setLoading(false);
      setTours(toursVal);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log(tours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours toursProp={tours} />
    </main>
  );
}

export default App;
