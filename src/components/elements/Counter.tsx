import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  duration: number;
}
export default function Counter({ end, duration }: Props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const increment = end / duration;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount();
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= end) {
          clearInterval(interval);
          return end;
        } else {
          return newCount;
        }
      });
    }, 1000 / duration);

    return () => {
      clearInterval(interval);
    };
  }, [end, increment, duration]);

  const startCount = () => {
    setCount(0);
  };

  return (
    <span ref={countRef}>
      <span>{Math.round(count)}</span>
    </span>
  );
}
