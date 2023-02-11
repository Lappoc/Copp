import Header from "./Header";
import Navigation from "./Navigation";
import Products  from "./Products"

function SearchForm() {
    return (
      <div className="SearchForm">
        <Header/>
        <Navigation/>
        <Products/>
      </div>
    );
  }
  
  export default SearchForm;