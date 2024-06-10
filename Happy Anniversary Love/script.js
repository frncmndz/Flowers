
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
function press() {
    var videoContainer = document.querySelector('.video-container');
    if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
        videoContainer.style.display = "block";
    } else {
        videoContainer.style.display = "none";
    }
}     