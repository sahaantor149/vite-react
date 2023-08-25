import { useEffect, useState } from "react";

function ProgressIndicator() {
  const [totalLength, setTotalLength] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  const [isActiveProgress, setIsActiveProgress] = useState(false);

  useEffect(() => {
    const pathElement = document.querySelector(".progress-wrap path");
    const pathTotalLength = pathElement.getTotalLength();
    setTotalLength(pathTotalLength);
    pathElement.style.transition = "none";
    pathElement.style.strokeDasharray = `${pathTotalLength} ${pathTotalLength}`;
    pathElement.style.strokeDashoffset = pathTotalLength;
    pathElement.getBoundingClientRect();
    pathElement.style.transition = "stroke-dashoffset 10ms linear";

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const newDashoffset =
        pathTotalLength -
        (scrollTop * pathTotalLength) / (documentHeight - windowHeight);
      setStrokeDashoffset(newDashoffset);

      if (scrollTop > 50) {
        setIsActiveProgress(true);
      } else {
        setIsActiveProgress(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={scrollToTop}>
      <div
        className={`progress-wrap ${isActiveProgress ? "active-progress" : ""}`}
      >
        <svg className="progress-circle svg-content" viewBox="-1 -1 102 102">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDashoffset: strokeDashoffset,
              strokeDasharray: `${totalLength}, ${totalLength}`,
            }}
          />
        </svg>
      </div>
    </div>
  );
}

export default ProgressIndicator;
