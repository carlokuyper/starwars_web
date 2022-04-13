const Header = () => {
    return(
        <div className="navigation">
            <div className="logo-holder">
                <img className="logo-img" src="../starwars_logo.png"/>
            </div>
            
            
            <div className="nav-holder">
                <div className="nav-text"><a href="/">Home</a></div>
                <div className="nav-text"><a href="/ComparisonFilms">Comparison</a></div>
                <div className="nav-text"><a href="/Timeline">Timeline</a></div>
            </div>
        </div>
    );
}

export default Header;
