export default function handleAnimation(
  side: string,
  domElement: string,
  delay: number = 0,
): void {
  function handleIntersect(entries: any, observer: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove("hideElement");
          if (side === "left") {
            entry.target.classList.add("animate-slideInFromLeft");
          } else if (side === "right") {
            entry.target.classList.add("animate-slideInFromRight");
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
