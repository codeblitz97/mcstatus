const request = require('request');

let url: any;

const favicon = (
    ip: string,
    port: number = 25565,
    JSON: boolean,
    callback: any
  ) => {
    url = `https://api.minetools.eu/favicon/${ip}/${port}`;
    request(url, { json: JSON }, (err: any, res: any, body: any) => {
      if (err) {
        return callback(err);
      }
      return callback(body);
    });
  };

  export { favicon };