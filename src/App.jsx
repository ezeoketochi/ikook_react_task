import FoodGallery from "./components/FoodGallery";
import IkookFooter from "./components/Footer";
import Header from "./components/Header";
import { SearchSection } from "./components/SearchComponent";

function App() {
  return (
    <>
      <Header/>

      <SearchSection/> 

      <FoodGallery/>

      <IkookFooter/>
    </>
  );
}

export default App;
