
self.addEventListener('message', function(e) {

    var msgData = e.data;

    if ($.isArray(msgData)) {

        for (var i = 0; i < msgData.length; i++) {

            var getUrl = msgData[i];
            var oReq = new XMLHttpRequest();

            oReq.open("get", getUrl, false);
            oReq.send(null);

            if (oReq.responseText == 'true') {
                self.postMessage('A web worker just warmed up ' + getUrl + '.');
            } else {
                self.postMessage('A problem was encountered trying to warm up ' + getUrl + '.');
            }

        }
    }

}, false);