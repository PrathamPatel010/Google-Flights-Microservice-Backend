# AUTH SERVICE

# Folder Structure
    - src/
        config/
        app.js //server
        seeders/
        migrations/
        models/
        controller/
        middlewares/
        services/
        utils/

# Project Setup
- clone the project.
- Execute `cd AuthService`
- Execute `npm install`
- Create a `.env` file in AuthService folder and add following environment variable
    - `PORT=3001`
- Inside `src/config` folder, create a new file `config.json` and then add following piece of json.

```
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "AUTH_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```