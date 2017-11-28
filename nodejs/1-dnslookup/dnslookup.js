const dns = require('dns')

for (let i = 2; i < process.argv.length; i++) {
    let url = process.argv[i]
    dns.lookup(url, function (err, add) {
        console.log("Addresses of " + url + " :" + JSON.stringify(add))
    })
}
