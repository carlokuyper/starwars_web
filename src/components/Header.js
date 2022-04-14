const Header = () => {
    return(
        <div className="navigation">
            <div className="logo-holder">
                <img className="logo-img" src="../starwars_logo.png"/>
            </div>
            
            
            <div className="nav-holder">
                <div className="nav-text"><a href="/">Home</a></div>
                <div className="nav-text"><a href="/ComparisonPeople">Comparison</a></div>
                <div className="nav-text"><a href="/Timeline">Timeline</a></div>
                
                https://www.w3schools.com/css/css_dropdowns.asp

                <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
      <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
</ul>

            </div>
        </div>
    );
}

export default Header;
