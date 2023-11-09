import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Saad Iqbal",
    location: "Toronto, Canada",
    email: "saadiqbal525@hotmail.com",
    availability: "Open for work",
    brand: "Software Engineer",
    interest: "tasdsadasd"
  };
  
  
  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
