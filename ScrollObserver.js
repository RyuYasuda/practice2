document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay");
            if (delay) {
              setTimeout(() => {
                entry.target.classList.add("coverchange");
              }, parseInt(delay));
            } else {
              entry.target.classList.add("coverchange");
            }
            observer.unobserve(entry.target); // 監視を解除
          }
        });
      },
      {
        threshold: 0.5, // 要素が50%表示されたらアニメーションを開始
      }
    );
  
    const targets1 = document.querySelectorAll(".main-visual__background");
    targets1.forEach((target) => {
        observer.observe(target);
    })
    const targets2 = document.querySelectorAll(".main-visual__background-text");
    targets2.forEach((target) => {
        observer.observe(target);
    })
});