import { useEffect } from "react";

export default function useFadeInOnView(selector = ".fade-up") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // 👈 hide again
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}