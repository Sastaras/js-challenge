window.onscroll = () =>{
    scrolling = document.body.scrollTop;
    height = document.body.scrollHeight - document.body.clientHeight;
    scrolled = (scrolling / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
};