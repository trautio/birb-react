import './Search.css';

function Search() {
  const colors = [
    {hex: "#ffffff", name:"White", type:"light"},
    {hex: "#000000", name:"Black", type:"dark"},
    {hex: "#0000ff", name:"Blue", type:"dark"},
    {hex: "#ff0000", name:"Red", type:"light"},
    {hex: "#ffff00", name:"Yellow", type:"light"},
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
  