const request = require("request");

let url: any;

const favicon = (
  ip: string,
  port: number = 25565,
  JSON: boolean,
  callback: any
) => {
  if(typeof ip !== 'string') {
    throw new TypeError('Type of IP is not string..')
  } else if (typeof port !== 'number') {
    throw new TypeError('Type of PORT is not number..')
  } else if (typeof JSON !== 'boolean') {
    throw new TypeError('Type of JSON is not boolean..')
  }
  url = `https://api.minetools.eu/favicon/${ip}/${port}`;
  request(url, { json: JSON }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

export { favicon };

