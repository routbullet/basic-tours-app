import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import "./App.css";

const URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeCardId = (id) => {
    let updatedTours = tours.filter((tour) => tour.id != id);
    setTours(updatedTours);
  };

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

  if (tours.length === 0) {
    return (
      <main className="no-length-title">
        <h2>Sorry, there is no tours left..</h2>
        <button className="refresh-button" onClick={() => fetchAPI()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours toursProp={tours} removeCardId={removeCardId} />
    </main>
  );
}

export default App;
