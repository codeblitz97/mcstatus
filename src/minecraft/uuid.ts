const request = require('request');

let url: any;

const UUID = (username: string, JSON: boolean, callback: any) => {
    url = `https://api.minetools.eu/uuid/${username}`;
    request(url, { json: JSON }, (err: any, res: any, body: any) => {
      if (err) {
        return callback(err);
      }
      return callback(body);
    });
  };

  export { UUID };