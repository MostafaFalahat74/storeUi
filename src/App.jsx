import { BsBasket3 } from "react-icons/bs";
import { useEffect, useState } from "react";
//BsSearch

function App() {
  const [intervalId, setIntervalId] = useState(null);
  const [isDisplayFirstImageInFirstSlise, setIsDisplayFirstImageInFirstSlise] =
    useState(false);
  const [isDisplayImageInSecondSlide, setDisplayImageInSecondSlide] =
    useState(0);

  const [isMouseInterInFirstSlide, setMouseInterInFirstSlide] = useState(false);
  const [isMouseInterInSecondSlide, setMouseInterInSecondSlide] = useState(false);
  let MINUTE_MS = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDisplayFirstImageInFirstSlise((isDisplayFirstImageInFirstSlise) => !isDisplayFirstImageInFirstSlise);
    }, MINUTE_MS);
    setIntervalId(interval);
  }, []);
  const ChangeImageInFirstSlide = () => {
    setIsDisplayFirstImageInFirstSlise((isDisplayFirstImageInFirstSlise) => !isDisplayFirstImageInFirstSlise);
    clearInterval(intervalId);
  }
  const ChangeToBackImageInSecondSlide = () => {
    switch (isDisplayImageInSecondSlide) {
      case 0: return setDisplayImageInSecondSlide(() => 2);
      default: return setDisplayImageInSecondSlide((isDisplayImageInSecondSlide) => isDisplayImageInSecondSlide - 1);
    }
  }
  const ChangeToNextImageInSecondSlide = () => {
    switch (isDisplayImageInSecondSlide) {
      case 2: return setDisplayImageInSecondSlide(() => 0);
      default: return setDisplayImageInSecondSlide((isDisplayImageInSecondSlide) => isDisplayImageInSecondSlide + 1);
    }
  }
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
          <div className="second-slide"
            onMouseEnter={() => setMouseInterInSecondSlide(true)}
            onMouseLeave={() => setMouseInterInSecondSlide(false)}
          >
            <div className={`second-slide-img${isDisplayImageInSecondSlide == 0 ? "active" : ""} `}>
              <img
                src="https://www.banimode.com/img/cms/020814/1699182597.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className={`second-slide-img${isDisplayImageInSecondSlide == 1 ? "active" : ""} `} >
              <img
                src="https://www.banimode.com/img/cms/020809/1698735026.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className={`second-slide-img${isDisplayImageInSecondSlide == 2 ? "active" : ""} `}
            >
              <img
                src="https://www.banimode.com/img/cms/020814/1699181825.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className={`slide-controll${isMouseInterInSecondSlide ? "" : "active"}`}>
              <span onClick={ChangeToBackImageInSecondSlide} className="back-slide">{`<`}</span>
              <span onClick={ChangeToNextImageInSecondSlide} className="next-slide">{`>`}</span>
            </div>
          </div>
          <div className="first-slide"
            onMouseEnter={() => setMouseInterInFirstSlide(true)}
            onMouseLeave={() => setMouseInterInFirstSlide(false)}
          >
            <div
              className={`"first-slide-img1"+ ${isDisplayFirstImageInFirstSlise} `}
            >
              <img
                src="https://www.banimode.com/img/cms/020810/1698820023.jpg"
                style={{ width: "100%" }}
              />
            </div>

            <div
              className={`"first-slide-img2"+ ${!isDisplayFirstImageInFirstSlise} `}
            >
              <img
                src="https://www.banimode.com/img/cms/020809/1698734914.jpg"
                style={{ width: "100%" }}
              />
            </div>

            <div className={`slide-controll${isMouseInterInFirstSlide ? "" : "active"}`}>
              <span onClick={ChangeImageInFirstSlide} className="back-slide">{`<`}</span>
              <span onClick={ChangeImageInFirstSlide} className="next-slide">{`>`}</span>
            </div>
          </div>
          <div className="navbar-categoreis"></div>
        </div>
      </div>
    </>
  );
}

export default App;
