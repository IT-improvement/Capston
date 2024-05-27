/* ========== */
/* Temha */
(function () {
  // Body
  document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", () => {
      document
          .querySelectorAll(".dropset")
          .forEach((element) => element.classList.remove("active"));
      document
          .querySelectorAll(".selectset")
          .forEach((element) => element.classList.remove("active"));
    });
  });
  // Tabset
  const tabsetLinks = document.querySelectorAll(".tabset-link");
  tabsetLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      const button = event.currentTarget;
      const buttonParent = button.closest(".tabset-item");
      const index = [...buttonParent.parentElement.children].indexOf(
          buttonParent
      );
      const container = button.closest(".tabset").querySelector(".tabset-container");
      const contents = container.querySelectorAll(".tabset-cont");
      tabsetLinks.forEach((link) => link.classList.remove("active"));
      button.classList.add("active");
      contents.forEach((content, i) => {
        content.classList.toggle("active", i === index);
      });
    });
  });

  // Selectset
  const selectsetToggles = document.querySelectorAll(".selectset-toggle");
  selectsetToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const parent = event.currentTarget.closest(".selectset");
      parent.classList.toggle("active");
    });
  });

  // Dropset
  const dropsetToggles = document.querySelectorAll(".dropset-toggle");
  dropsetToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const parent = event.currentTarget.closest(".dropset");
      parent.classList.toggle("active");
    });
  });

  // Accordset
  const accordsetButtons = document.querySelectorAll(".accordset-button");
  accordsetButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const parent = event.currentTarget.closest(".accordset-item");
      parent.classList.toggle("active");
    });
  });

  // Videoset
  const videosetButtons = document.querySelectorAll(".videoset-play");
  videosetButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const video = event.currentTarget.closest(".videoset").querySelector(".videoset-video");
      const parent = event.currentTarget.closest(".videoset");
      video.play();
      parent.classList.add("active");
      video.addEventListener("click", () => {
        video.pause();
        parent.classList.remove("active");
      });
    });
  });

  // Function
  function getSiblings(parent, element) {
    return [...parent.children].filter((item) => item !== element);
  }
})();