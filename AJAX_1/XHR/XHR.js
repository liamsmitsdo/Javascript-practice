const XHR = new XMLHttpRequest()

XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
        console.log(XHR.responseText)
    } else {
        console.log('There was a problem')
    }
}

XHR.open('get', 'https://api.github.com/zen')
XHR.send()