import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Saad Iqbal",
    location: "Toronto, Canada",
    email: "happysaadliving@gmail.com",
    availability: "Open for work",
    brand: "Full Stack Engineer",
  };
  
  
  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
