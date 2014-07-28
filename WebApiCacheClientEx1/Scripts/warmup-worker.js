
self.addEventListener('message', function(e) {

    var msgData = e.data;

    for (var i = 0; i < msgData.length; i++) {

        var getUrl = msgData[i];
        var domainName = getUrl.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];

        var oReq = new XMLHttpRequest();

        oReq.open("get", getUrl, false);
        oReq.send(null);
        
        if (oReq.responseText == 'true') {
            self.postMessage('A web worker just warmed up ' + domainName + '.');
        } else {
            self.postMessage('A problem was encountered trying to warm up ' + domainName + '.');
        }

    }


}, false);