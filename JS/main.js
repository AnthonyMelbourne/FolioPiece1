  
  // MOBILE MENU vvvv
  let mobileMenuAppears = document.getElementById('mobile-menu-open');
  mobileMenuAppears.addEventListener('click', openNav);
  let mobileMenuDisappears = document.getElementById('mobile-menu-close');
  mobileMenuDisappears.addEventListener('click', closeNav);

  let musicMenuShow = document.getElementById("music-button")
  musicMenuShow.addEventListener("mouseenter", showMusic);
  let musicMenuHide = document.getElementById("music-1")
  musicMenuHide.addEventListener("mouseleave", hideMusic);

  let filmMenuShow = document.getElementById("film-button")
  filmMenuShow.addEventListener("mouseenter", showFilm);
  let filmMenuHide = document.getElementById("film-2")
  filmMenuHide.addEventListener("mouseleave", hideFilm);

  let gamesMenuShow = document.getElementById("games-button")
  gamesMenuShow.addEventListener("mouseenter", showGames);
  let gamesMenuHide = document.getElementById("games-3")
  gamesMenuHide.addEventListener("mouseleave", hideGames);

  let modalBtns = document.querySelectorAll(".modal-open");

  let closeBtns = document.querySelectorAll(".modal-close");


  function openNav() {
    document.getElementById('mobileMenu').classList.add('show-menu');
    document.getElementById("mobileMenu").style.width = "180px";
    document.getElementById("mobile-menu").style.marginLeft = "180px"; 
  } 
  function closeNav() {
    document.getElementById('mobileMenu').classList.remove('show-menu');
    document.getElementById("mobileMenu").style.width = "0";
    document.getElementById("mobile-menu").style.marginLeft= "0";
  } 

  function showMusic() {
    musicMenuHide.classList.add("show");
  }
  function hideMusic() {
  musicMenuHide.classList.remove("show");
  }

  function showFilm() {
    filmMenuHide.classList.add("show");
  }
  function hideFilm() {
    filmMenuHide.classList.remove("show");
  }

  function showGames() {
    gamesMenuHide.classList.add("show");
  }
  function hideGames() {
    gamesMenuHide.classList.remove("show");
  }






modalBtns.forEach(function(btn){
    btn.onclick = function() {
        let modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.closest('.modal').style.display = 'none';
    }
});