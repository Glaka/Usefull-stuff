var userAgent = window.navigator.userAgent;
if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    document.body.classList.add("is-iphone");
}