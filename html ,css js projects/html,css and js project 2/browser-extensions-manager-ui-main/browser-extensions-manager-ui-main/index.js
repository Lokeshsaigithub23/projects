document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".bottombtn").forEach(btn => {  //removebutton
    btn.addEventListener("click", () => {
      const card = btn.closest(".box");
      if (card) card.remove();
    });
  });

document.querySelectorAll(".switch input").forEach(toggle => {
  const card = toggle.closest(".box");
  if (toggle.checked) {
    card.classList.add("active");              //check for the start
    card.classList.remove("inactive");
  } else {
    card.classList.add("inactive");
    card.classList.remove("active");
  }
  toggle.addEventListener("change", () => {    // of and on perations
    if (toggle.checked) {
      card.classList.add("active");
      card.classList.remove("inactive");
    } else {
      card.classList.add("inactive");
      card.classList.remove("active");
    }
  });
});

  const filterButtons = document.querySelectorAll(".btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.textContent.trim(); // All / Active / Inactive
      const cards = document.querySelectorAll(".box");
      cards.forEach(card => {
        if (filter === "All") {
          card.style.display = "flex";
        } 
        else if (filter === "Active") {
          card.style.display = card.classList.contains("active") ? "flex" : "none";
        } 
        else if (filter === "Inactive") {
          card.style.display = card.classList.contains("inactive") ? "flex" : "none";
        }
      });
      filterButtons.forEach(b => b.classList.remove("active-btn"));
      btn.classList.add("active-btn");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.querySelector(".head button");
  const icon = themeBtn.querySelector("img");
  document.body.classList.add("dark-mode");//dm
  themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {//d>l
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      icon.src = "./assets/images/icon-moon.svg";
      themeBtn.style.backgroundColor = "#ffffff";
    }   
    else {                                             
      document.body.classList.remove("light-mode"); // L>d
      document.body.classList.add("dark-mode");

      icon.src = "./assets/images/icon-sun.svg";
      themeBtn.style.backgroundColor = "hsl(225, 23%, 24%)";
    }

  });
});

