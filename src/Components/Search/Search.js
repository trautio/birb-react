import './Search.css';

function Search() {
  const colors = [
    {hex: "#ffffff", name:"White", type:"light"},
    {hex: "#000000", name:"Black", type:"dark"},
  ]

    return (
      <div className="search-container">
          <div className="colors">
                {
                  colors.map((color) => 
                  <div className="color-block">
                    <button className="color-ticker" 
                      style={{backgroundColor: color.hex, color: (color.type == "dark" ? "white" : "black")}} 
                      value={color.hex}>
                        {color.name}
                      </button>
                  </div>
                  )
                }
          </div>
      </div>
    );
  }
  
  export default Search;
  