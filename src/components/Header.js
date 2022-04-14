const Header = () => {
    return(
        <div className="navigation">
            <div className="logo-holder">
                <img className="logo-img" src="../starwars_logo.png"/>
            </div>
            
            
            <div className="nav-holder">
                <button className="dropbtn"><a href="/">Home</a></button>
                <div class="dropdown1">
                    <button class="dropbtn"><a href="/ComparisonPeople">Comparison</a></button>
                    <div class="dropdown-content">
                        <a href="/ComparisonPeople">People</a>
                        <a href="/ComparisonPlanets">Planets</a>
                        <a href="/ComparisonVehicles">Vehicles</a>
                        <a href="/ComparisonStarships">Starships</a>
                    </div>
                </div>
                <button className="dropbtn"><a href="/Timeline">Timeline</a></button>
                
            </div>
        </div>
    );
}

export default Header;
