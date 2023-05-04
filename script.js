switch (window.location.hostname) {
    case "www.facebook.com":
        document.body.innerHTML = "<h1>This is facebook, you can't Access it right Now. Go back and Study</h1>"
        // alert('This is facebook')
        break;

    case "https://www.facebook.com/":
        document.body.innerHTML = "This is instagram, you can't Access it right Now. Go back and Study"
        // alert('This is facebook')
        break;

    case "www.youtube.com":
        document.body.innerHTML = "This is Youtube, you can't Access it right Now. Go back and Study"
        // alert('This is facebook')
        break;

    default:
        break;
}