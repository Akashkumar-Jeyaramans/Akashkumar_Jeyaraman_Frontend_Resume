import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./index.css";
import { Layout } from "./Layout";



function App() {
  const [isVisible, setIsVisible] = useState(true);
  // const inputRef = useRef(null);
  // const printDocument = () => {
  //   html2canvas(inputRef.current).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     pdf.save("download.pdf");
  //   });
  // };

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {/*========== HEADER ==========*/}
      <Header />
    
      <div  id="divToPrint" 
      // ref={inputRef}
      >
        <Layout/>
      </div>
      
      {isVisible && (
        <span className="scrolltop show-scroll" onClick={scrollToTop} id="scroll-top">
          <i className="bx bxs-up-arrow-alt scrolltop__icon"></i>
        </span>
      )}
       
    </>
  );
}

export default App;
