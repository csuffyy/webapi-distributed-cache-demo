
self.addEventListener('message', function(e) {

    var msgData = e.data;

    if ($.isArray(msgData)) {

        for (var i = 0; i < msgData.length; i++) {

            var postUrl = msgData[i];

            $.get(postUrl).done(function (returnValue) {

                if (returnValue) {
                    self.postMessage('A web worker just warmed up ' + postUrl + '.');
                } else {
                    self.postMessage('A problem was encountered trying to warm up ' + postUrl + '.');
                }

            });
        }
    }

}, false);