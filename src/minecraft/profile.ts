const request = require("request");

let url: any;

const profile = (uuid: string, JSON: boolean, callback: any) => {
  url = `https://api.minetools.eu/profile/${uuid}`;
  request(url, { json: JSON }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

export { profile };
