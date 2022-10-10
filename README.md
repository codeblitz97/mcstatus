# MCSTATUS
 An nodejs module for getting minecraft server status

# INSTALLATION

run it on terminal

```sh
npm i mcstatus.js@latest
```

# FEATURES
- Query (Everything in details)
- Ping (Just basic information about server)
- Favicon (Returns server icon)
- UUID (Returns user status on the server)
- Profile (Returs user information about server)

# SYNTAX
query(ip: string, port: number, callback: any)

ping(ip: string, port: number, callback: any)

favicon(ip: string, port: number, callback: any)

uuid(username: string, callback: any)

profile(uuid: string, callback: any)


# EXAMPLE

## Query
```js
const { query } = require('mcstatus.js');

query('play.endercraftbd.net',  25565, response => {
    console.log(response);
});
```

## Ping
```js
const { ping } = require('mcstatus.js');

ping('play.endercraftbd.net',  25565, response => {
    console.log(response);
});
```
## UUID
```js
const { uuid } = require('mcstatus.js');

uuid('Sohom829', response => {
    console.log(response);
});
```
## PROFILE
```js
const { profile } = require('mcstatus.js');

profile('anyuuid', response => {
    console.log(response);
});
```
**NOTE:** If you need UUID simply run the uuid one
## Favicon
```js
const { favicon } = require('mcstatus.js');

ping('play.endercraftbd.net',  25565, response => {
    console.log(response);
});
```

# IMPORTANT
- Make sure to have **enable-query=true** set in your **server.properties** to use query function at all.
- If you have query-plugins: true set in your bukkit.yml, also the installed plugins in query.



# 1.1.1
- Fixed Bug
- Removed **Serverinfo**
- Added **query, ping, favicon, uuid, profile**