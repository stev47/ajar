"use strict"

function querystring(params) {
    var qstr = []
    for (var key in params)
        qstr.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))

    return qstr.join('&')
}

function request(method, url, gdata, pdata) {
    return new Promise((resolve, reject) => {
        if (gdata)
            url += '?' + querystring(gdata)

        var req = new XMLHttpRequest()

        req.open(method, url)
        if (pdata)
            req.setRequestHeader('Content-Type', 'application/json')

        req.addEventListener('load', (evt) => {
            if (req.status >= 200 && req.status < 300) {
                if (/application\/json/i.test(req.getResponseHeader('Content-Type')))
                    resolve(JSON.parse(req.responseText))

                resolve(req)
            } else {
                reject(req)
            }
        })
        req.addEventListener('error', () => reject(req))

        req.send(JSON.stringify(pdata))
    })
}

exports.get = (url, data) => request('GET', url, data, null)
exports.post = (url, data) => request('POST', url, null, data)
exports.put = (url, data) => request('PUT', url, null, data)
exports.delete = (url, data) => request('DELETE', url, data, null)
