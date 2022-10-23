const request = require("request");

let url: any;

const profile = (uuid: string, JSON: boolean, callback: any) => {
  if (typeof uuid !== "string") {
    throw new TypeError("Type of IP is not string..");
  } else if (typeof JSON !== "boolean") {
    throw new TypeError("Type of JSON is not boolean..");
  }
  url = `https://api.minetools.eu/profile/${uuid}`;
  request(url, { json: JSON }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

export { profile };
