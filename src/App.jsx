import { BsBasket3 } from "react-icons/bs";
import { useEffect, useState } from "react";
//BsSearch

function App() {
  const [isDisplayFirstImageInFirstSlise, setIsDisplayFirstImageInFirstSlise] =
    useState(false);
  const MINUTE_MS = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(new Date().toLocaleTimeString);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
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

        <div className="advertise-slide-show">
          <div className="second-slide"></div>
          <div className="first-slide">
            <div className={`"first-slide-img1"+ ${isDisplayFirstImageInFirstSlise } `}>
              <img
                src="https://www.banimode.com/img/cms/020810/1698820023.jpg"
                style={{ width: "100%" }}
              />
            </div>

            <div className={`"first-slide-img2"+ ${!isDisplayFirstImageInFirstSlise } `}>
              <img
                src="https://www.banimode.com/img/cms/020809/1698734914.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="navbar-categoreis"></div>
      </div>
    </>
  );
}

export default App;
