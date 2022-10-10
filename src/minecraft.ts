const request = require('request');

let url: any;

const Serverinfo = (ip: string, port: number = 25565, callback: any) => {
    url = `https://mcapi.us/server/status?ip${ip}&port=${port}`;
    request(url, { json: true }, (err: any, res: any, body: any) => {
        if(err) {
            return callback(err);
        }
        return callback(body)
    });
}

module.exports = Serverinfo;