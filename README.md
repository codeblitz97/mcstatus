# MCSTATUS

An nodejs module for getting minecraft server status

## INSTALLATION

run it on terminal

```sh
npm i mcstatus.js@latest
```

## FEATURES

- Query (Everything in details)
- Ping (Just basic information about server)
- Favicon (Returns server icon)
- UUID (Returns user status on the server)
- Profile (Returs user information about server)

## SYNTAX

query(ip: string, port: number, JSON: boolean, callback: any)

ping(ip: string, port: number, JSON: boolean, callback: any)

favicon(ip: string, port: number, JSON: boolean, callback: any)

uuid(username: string, JSON: boolean, callback: any)

profile(uuid: string, JSON: boolean, callback: any)

## EXAMPLE

### Query

```js
const { query } = require("mcstatus.js");

query("play.endercraftbd.net", 25565, true, (response) => {
  console.log(response);
});
```

### Ping

```js
const { ping } = require("mcstatus.js");

ping("play.endercraftbd.net", 25565, true, (response) => {
  console.log(response);
});
```

### UUID

```js
const { uuid } = require("mcstatus.js");

uuid("Sohom829", true, (response) => {
  console.log(response);
});
```

### Profile

```js
const { profile } = require("mcstatus.js");

profile("anyuuid", true, (response) => {
  console.log(response);
});
```

**NOTE:** If you need UUID simply run the uuid one

### Favicon

```js
const { favicon } = require("mcstatus.js");

ping("play.endercraftbd.net", true, 25565, (response) => {
  console.log(response);
});
```

## IMPORTANT

- Make sure to have **enable-query=true** set in your **server.properties** to use query function at all.
- If you have query-plugins: true set in your bukkit.yml, also the installed plugins in query.
- JSON won't work because our API MineTools doesn't have non-json formant, we need to add JSON option to avoid errors.

## 1.1.1

- Fixed Bug
- Removed **Serverinfo**
- Added **query, ping, favicon, uuid, profile**

## 1.2.2

- Fixed README.md
- Fixed bugs
- Added JSON customization

## 2.0.0

- Updated file structure
- Fixed thousands bugs
- Fixed the intellisense

## 2.1.0

- Fixed tons of BUGS
- Improved Performance
- API Update
- Typing Error Fixed
