## Student
- Name: Демʼяненко Микола Володимирович
- Group: 232/1 

```text
<!-- docker --version -->
Docker version 29.2.1, build a5c7197

<!-- docker compose version -->
Docker Compose version v5.0.2

<!-- docker run --rm hello-world -->
Hello from Docker!
This message shows that your installation appears to be working correctly.

<!-- docker compose run --rm npm npm -v -->
Container hlpf-env-setup-npm-run-2bbf93c70985 Creating
Container hlpf-env-setup-npm-run-2bbf93c70985 Created
11.11.0

<!-- docker compose run --rm npm node --version -->
Container hlpf-env-setup-npm-run-22a3963bc392 Creating
Container hlpf-env-setup-npm-run-22a3963bc392 Created
v25.8.0
```









-------------------------------------------------------
## Student
- Name: Дем'яненко Микола Володимирович
- Group: 232 1 група


## Практичне заняття №2 — NestJS + PostgreSQL + Redis


## Структура репозиторію
```text
.
├── src/                # Вихідний код застосунку (NestJS)
├── test/               # Тести
├── node_modules/       # Встановлені бібліотеки (ігноруються git)
├── .dockerignore       # Список файлів, які Docker має ігнорувати
├── .env                # Змінні оточення (секрети, не для git)
├── .env.example        # Шаблон змінних оточення для інших розробників
├── .prettierrc         # Налаштування форматування коду
├── docker-compose.yml  # Конфігурація Docker Compose
├── Dockerfile          # Інструкція по збірці образу застосунку
├── eslint.config.mjs   # Налаштування перевірки якості коду
├── nest-cli.json       # Конфігурація NestJS CLI
├── package.json        # Опис проекту та залежностей
├── package-lock.json   # Зафіксовані версії бібліотек
├── README.md           # Звіт про виконання роботи
├── tsconfig.json       # Головні налаштування TypeScript
└── tsconfig.build.json # Налаштування TypeScript для збірки проекту


### 2. Команди для комітів та пушу
#### Крок 1: Створення .env.example
```bash
cp .env .env.example


## Перевірка сервісів
NAME                        IMAGE                COMMAND                  SERVICE    CREATED          STATUS                       PORTS
hlpf-env-setup-app-1        hlpf-env-setup-app   "docker-entrypoint.s…"   app        37 minutes ago   Up 36 minutes                0.0.0.0:3000->3000/tcp, [::]:3000->3000/tcp   
hlpf-env-setup-postgres-1   postgres:16-alpine   "docker-entrypoint.s…"   postgres   5 days ago       Up About an hour (healthy)   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp   
hlpf-env-setup-redis-1      redis:7-alpine       "docker-entrypoint.s…"   redis      5 days ago       Up About an hour (healthy)   0.0.0.0:6379->6379/tcp, [::]:6379->6379/tcp  


## Перевірка PostgreSQL
List of databases
   Name    |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges
-----------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------
 nestdb    | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
 postgres  | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |
 template0 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser
 template1 | nestuser | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/nestuser          +
           |          |          |                 |            |            |            |           | nestuser=CTc/nestuser


## Перевірка Redis
PS C:\hlpf-env-setup> docker compose exec redis redis-cli ping
PONG


## Перевірка застосунку
StatusCode        : 200
StatusDescription : OK
Content           : Hello World!


## Логи NestJS
app-1  |
app-1  | [10:28:47 AM] Found 0 errors. Watching for file changes.
app-1  |
app-1  | [Nest] 29  - 03/26/2026, 10:28:55 AM     LOG [NestFactory] Starting Nest application...
app-1  | [Nest] 29  - 03/26/2026, 10:28:55 AM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +285ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:55 AM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +1ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:55 AM     LOG [InstanceLoader] AppModule dependencies initialized +0ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:55 AM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:55 AM     LOG [InstanceLoader] CacheModule dependencies initialized +286ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:56 AM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +823ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:56 AM     LOG [RoutesResolver] AppController {/}: +9ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:56 AM     LOG [RouterExplorer] Mapped {/, GET} route +8ms
app-1  | [Nest] 29  - 03/26/2026, 10:28:56 AM     LOG [NestApplication] Nest application successfully started +5ms