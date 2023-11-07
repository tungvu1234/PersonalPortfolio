function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  // This will open a default tab when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablinks").click();
  });
  
  var typed = new Typed(".auto-input", {
    strings: ["A Self-taught Web Developer", "HTML5/CSS/Javasript", "C#", "React", "SQL"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})