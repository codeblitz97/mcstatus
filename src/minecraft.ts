const request = require("request");

let url: any;

const query = (ip: string, port: number = 25565, callback: any) => {
  url = `https://api.minetools.eu/query/${ip}/${port}`;
  request(url, { json: true }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

const UUID = (username: string, callback: any) => {
  url = `https://api.minetools.eu/uuid/${username}`;
  request(url, { json: true }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

const profile = (uuid: string, callback: any) => {
  url = `https://api.minetools.eu/profile/${uuid}`;
  request(url, { json: true }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

const favicon = (ip: string, port: number = 25565, callback: any) => {
  url = `https://api.minetools.eu/favicon/${ip}/${port}`;
  request(url, { json: false }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

const ping = (ip: string, port: number = 25565, callback: any) => {
  url = `https://api.minetools.eu/ping/${ip}/${port}`;
  request(url, { json: true }, (err: any, res: any, body: any) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

module.exports = {
    query,
    ping,
    favicon,
    UUID,
    profile
}