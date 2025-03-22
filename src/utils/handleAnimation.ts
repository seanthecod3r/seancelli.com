export default function handleAnimation(
  from: "left" | "right" | "bottom" | "top",
  domElement: string,
  delay: number = 0,
  animateOnLoad: boolean = true,
): void {
  const applyAnimation = (element: Element) => {
    setTimeout(() => {
      element.classList.remove("hideElement");
      if (from === "left") {
        element.classList.add("animate-slideInFromLeft");
      } else if (from === "right") {
        element.classList.add("animate-slideInFromRight");
      } else if (from === "bottom") {
        element.classList.add("animate-slideInFromBottom");
      } else if (from === "top") {
        element.classList.add("animate-slideInFromTop");
      }
    }, delay);
  };

  // For lazy loading
  function handleIntersect(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        applyAnimation(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(domElement);

    elements.forEach((element) => {
      element.classList.add("hideElement");

      if (animateOnLoad) {
        // Animate immediately on page load
        applyAnimation(element);
      } else {
        // Only animate when element comes into view
        const options = {
          threshold: 0.1,
        };
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(element);
      }
    });
  });
}
