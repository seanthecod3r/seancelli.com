export default function handleAnimation(
  from: "left" | "right" | "bottom" | "top",
  domElement: string,
  delay: number = 0,
): void {
  function handleIntersect(entries: any, observer: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove("hideElement");
          if (from === "left") {
            entry.target.classList.add("animate-slideInFromLeft");
          } else if (from === "right") {
            entry.target.classList.add("animate-slideInFromRight");
          } else if (from === "bottom") {
            entry.target.classList.add("animate-slideInFromBottom");
          } else if (from === "top") {
            entry.target.classList.add("animate-slideInFromTop");
          }
          observer.unobserve(entry.target);
        }, delay);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    const cards = document.querySelectorAll(domElement);
    cards.forEach((card) => {
      card.classList.add("hideElement");
      observer.observe(card);
    });
  });
}
