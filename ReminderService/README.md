# REMINDER SERVICE

# Folder Structure
    - src/
        config/
        app.js //server
        routes/
        seeders/
        migrations/
        models/
        repository/
        controller/
        middlewares/
        services/
        utils/

# Project Setup
- clone the project.
- Execute `cd ReminderService`
- Execute `npm install`
- Create a `.env` file in BookingService folder and add following environment variable
    - `PORT=3004`
- Inside `src/config` folder, create a new file `config.json` and then add following piece of json.

```
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "REMINDER_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```