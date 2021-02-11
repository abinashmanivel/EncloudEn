importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching
    .precacheAndRoute([
        {"revision":"92002685ba9c9754b311b161d2820db6","url":"icons/logo-192.png"},
        {"revision":"7dd109e6193e05fe106a86e1f9fbb657","url":"icons/logo-512.png"},
        {"revision":"8cf22e5be94dedc7c5e4da666958fe38","url":"icons/logo-64.png"},
        {"revision":"f77209bdc2cc9c1a242b0c963b5d8bfa","url":"index.html"},
        {"revision":"9aef36ceae600ed99d996bb81473529f","url":"static/css/main.eb064747.chunk.css"},
        {"revision":"2b19f1b46a38ed5f5945aa5de6cf15e2","url":"static/js/2.534a633d.chunk.js"},
        {"revision":"4b4e61e0f6758d370bd6cb86b6efff6d","url":"static/js/main.a2f79c63.chunk.js"},
        {"revision":"bbf4607f9aa07e1758a5801f0bcd8d74","url":"static/js/runtime-main.28323018.js"},
        {"revision":"86300130a32939f1347cb0342fbff196","url":"static/media/bg-pattern-detail-footer.86300130.svg"},
        {"revision":"f5101f61d2c3760bbf1e143f3f6416f8","url":"static/media/bg-pattern-detail-footer.f5101f61.svg"},
        {"revision":"1360e861b646bd6ad7eb291611b87297","url":"static/media/bg-pattern-header.1360e861.svg"},
        {"revision":"549c547037bed3b69613b18fe82026f1","url":"static/media/bg-pattern-header.549c5470.svg"},
        {"revision":"9321e7d578e180fce4d6acee30cd720e","url":"static/media/close.9321e7d5.svg"},
        {"revision":"7be5b44bf3e313b496e3f1a2757e24a0","url":"static/media/github-black.7be5b44b.svg"},
        {"revision":"baece89f74e51a54a0ccddea33d591a0","url":"static/media/github-purple.baece89f.svg"},
        {"revision":"100102f17534aa30bd7416f4fe4f31ff","url":"static/media/github-red.100102f1.svg"},
        {"revision":"6354efb6d4a8a60b0a3c37edff215b15","url":"static/media/icon-check.6354efb6.svg"},
        {"revision":"3c89a70b5b71137658d6947dce0a025a","url":"static/media/icon-filter.3c89a70b.svg"},
        {"revision":"7c42293b3d14222e6129148e5ffd2671","url":"static/media/icon-location.7c42293b.svg"},
        {"revision":"a0697094d80fb1eba560070d0145c106","url":"static/media/icon-moon.a0697094.svg"},
        {"revision":"2304decb2cfc0f3765c0e442b01eb7a3","url":"static/media/icon-search-white.2304decb.svg"},
        {"revision":"b89fe227f180059b0fd49627ad60622d","url":"static/media/icon-search.b89fe227.svg"},
        {"revision":"20ea2dcbd84639f3c3a0128d676556f6","url":"static/media/icon-sun.20ea2dcb.svg"},
        {"revision":"66810c3dcb18afd9ee96edb758f52927","url":"static/media/logo.66810c3d.svg"},
        {"revision":"6d7c4ca82bd5be283babcd15bbf13047","url":"static/media/Magnify-1.2s-200px--dark.6d7c4ca8.svg"},
        {"revision":"e9ae98397bc0c3adf5a906eda643906d","url":"static/media/Magnify-1.2s-200px.e9ae9839.svg"},
        {"revision":"2a788fc33c2dfd521d2423bcf09a6cc3","url":"static/media/up-arrow.2a788fc3.svg"}
    ])

    