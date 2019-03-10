# Blog

#### Start DB service
```bash
make start
```

### Stop DB service 
```bash
make stop
```

### Connect to DB service 
```bash
make connect_db
```

### Set user permission
```bash
sudo chmod -R $USER:$USER $PWD
```

#### Watch table info
```bash
DESCRIBE table_name;
```

#### Create empty tables
```bash
sequelize db:migrate 
```

#### Seeder data
```bash
sequelize db:seed:all 
```