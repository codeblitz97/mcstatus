const request = require("request");

let url: any;

const UUID = (username: string, JSON: boolean, callback: any) => {
  if (typeof username !== "string") {
    throw new TypeError("Type of IP is not string..");
  } else if (typeof JSON !== "boolean") {
    throw new TypeError("Type of JSON is not boolean..");
  }
  url = `https://api.minetools.eu/uuid/${username}`;
  request(url, { json: JSON }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

export { UUID };
