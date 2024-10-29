import {
  useState,
  useRef,
  useEffect,
} from "react";
import {
  Button,
} from '@nextui-org/react';
import {
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";


type HorizontalScrollContainerProps = {
  children: React.ReactNode;
};

const HorizontalScrollContainer: React.FC<HorizontalScrollContainerProps> = ({ children }) => {
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const checkScrollPosition = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainer;

      setShowRightArrow(scrollWidth > clientWidth + scrollLeft);
      setShowLeftArrow(scrollLeft > 0);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      checkScrollPosition();
      scrollContainer.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative p-4">
      {showLeftArrow && (
        <Button
          onClick={scrollLeft}
          isIconOnly
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-secondary text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </Button>
      )}
      <div className="sm:px-8">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto p-4"
        >
          {children}
        </div>
      </div>
      {showRightArrow && (
        <Button
          onClick={scrollRight}
          isIconOnly
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-secondary text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </Button>
      )}
    </div>
  );
};

export default HorizontalScrollContainer;
