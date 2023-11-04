import { BsBasket3 } from "react-icons/bs";
//BsSearch
function App() {
  return (
    <>
      <div className="header">
        <img src="https://www.banimode.com/img/cms/020810/1698831102.gif" />
      </div>
      <div className="container">
        <div className="navbar-items">
          <img src="https://www.banimode.com//themes/new/assets/images/banilogo.svg" />
          <div className="search">
            <input
              className="search-input"
              placeholder="جست و جو در میان بیش از 700 برند معتبر"
            />
          </div>
          <div className="login">
            <button>ورود/ثبت نام</button>
            <BsBasket3 className="basket" color="white" />
          </div>
        </div>

        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src="https://www.banimode.com/img/cms/020810/1698820023.jpg" />
          </div>

          <div className="mySlides fade">
            <img src="https://www.banimode.com/img/cms/020809/1698734914.jpg"  />
          </div>

          <a className="prev">
            ❮
          </a>
          <a className="next">
            ❯
          </a>
        </div>
      </div>
      {/* <div className="navbar-categoreis">
       
      </div> */}
    </>
  );
}

export default App;
