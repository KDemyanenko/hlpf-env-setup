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












## Student
- Name: Дем'яненко Микола Володимирович
- Group: 232/1

---

## Практичне заняття №3 — CRUD REST API (MiniShop)

### 1. Конфігурація TypeORM
.
├── src/                        # Вихідний код застосунку
│   ├── categories/             # Модуль категорій
│   │   ├── categories.controller.ts  # Обробка маршрутів /api/categories
│   │   ├── categories.module.ts      # Реєстрація модуля категорій
│   │   ├── categories.service.ts     # Бізнес-логіка (CRUD) для категорій
│   │   └── category.entity.ts        # Опис таблиці категорій у БД
│   ├── migrations/             # Папка з міграціями (керування схемою БД)
│   │   ├── 1740000000000-CreateTables.ts        # Створення початкових таблиць
│   │   └── 1774536620654-AddIsActiveToProducts.ts # Додавання поля isActive
│   ├── products/               # Модуль продуктів
│   │   ├── product.entity.ts         # Опис таблиці продуктів у БД
│   │   ├── products.controller.ts    # Обробка маршрутів /api/products
│   │   ├── products.module.ts        # Реєстрація модуля продуктів
│   │   └── products.service.ts       # Бізнес-логіка (CRUD) для продуктів
│   ├── app.controller.ts       # Базовий контролер
│   ├── app.module.ts           # Головний модуль (з'єднує БД та всі модулі)
│   ├── app.service.ts          # Базовий сервіс
│   ├── data-source.ts          # Конфігурація для TypeORM CLI (міграції)
│   └── main.ts                 # Точка входу (запуск NestJS)
├── test/                       # Папка для автоматичних тестів
├── .dockerignore               # Файли, що не копіюються в Docker
├── .env                        # Секретні змінні оточення (НЕ ДЛЯ GIT!)
├── .env.example                # Шаблон змінних оточення для GitHub
├── .gitignore                  # Список ігнорування файлів для Git
├── .prettierrc                 # Налаштування форматування коду
├── docker-compose.yml          # Конфігурація сервісів (App, Postgres, Redis)
├── Dockerfile                  # Інструкція для збірки Docker-образу
├── eslint.config.mjs           # Налаштування лінтера (перевірка якості коду)
├── nest-cli.json               # Конфігурація Nest CLI
├── package.json                # Залежності проєкту та скрипти (npm run ...)
├── package-lock.json           # Зафіксовані версії бібліотек
├── README.md                   # Звіт про виконання роботи
├── tsconfig.json               # Головні налаштування TypeScript
└── tsconfig.build.json         # Налаштування TypeScript для збірки (build)



### Запуск проекту
[+] up 4/4
 ✔ Image hlpf-env-setup-app            Built                                                                                                                                15.7s
 ✔ Container hlpf-env-setup-redis-1    Running                                                                                                                              0.0s 
 ✔ Container hlpf-env-setup-postgres-1 Running                                                                                                                              0.0s 
 ✔ Container hlpf-env-setup-app-1      Recreated                                                                                                                            10.6s
Attaching to app-1, postgres-1, redis-1
Container hlpf-env-setup-redis-1 Waiting 
Container hlpf-env-setup-postgres-1 Waiting 
Container hlpf-env-setup-postgres-1 Healthy 
Container hlpf-env-setup-redis-1 Healthy 




### API Endpoints
| Method | URL | Опис |
|--------|-----|------|
| GET | /api/categories | Список категорій |
| GET | /api/categories/:id | Одна категорія |
| POST | /api/categories | Створити категорію |
| PATCH | /api/categories/:id | Оновити категорію |
| DELETE | /api/categories/:id | Видалити категорію |
| GET | /api/products | Список продуктів |
| GET | /api/products/:id | Один продукт |
| POST | /api/products | Створити продукт |
| PATCH | /api/products/:id | Оновити продукт |
| DELETE | /api/products/:id | Видалити продукт |




### Перевірка міграцій
PS C:\hlpf-env-setup> docker compose exec postgres psql -U nestuser -d nestdb -c "\dt"
           List of relations
 Schema |    Name    | Type  |  Owner
--------+------------+-------+----------
 public | categories | table | nestuser
 public | migrations | table | nestuser
 public | products   | table | nestuser
(3 rows)


### Тест створення категорії
PS C:\hlpf-env-setup> Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/categories" -ContentType "application/json" -Body '{"name": "Food", "description": "Grocery and drinks"}'

id name description        createdAt
-- ---- -----------        ---------
 4 Food Grocery and drinks 2026-04-01T13:19:45.550Z


PS C:\hlpf-env-setup>








### Тест створення продукту
PS C:\hlpf-env-setup> Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/products" -ContentType "application/json" -Body '{"name": "iPhone 15", "description": "Latest Apple smartphone", "price": 999.99, "stock": 50, "categoryId": 1}'


id          : 3
name        : iPhone 15
description : Latest Apple smartphone
price       : 999,99
stock       : 50
isActive    : True
category    : @{id=1}
createdAt   : 2026-04-01T13:22:56.518Z
updatedAt   : 2026-04-01T13:22:56.518Z



PS C:\hlpf-env-setup>





### Тест отримання продуктів
PS C:\hlpf-env-setup> Invoke-RestMethod -Uri "http://localhost:3000/api/products" -Method Get


id          : 1
name        : iPhone 15
description :
price       : 899.99
stock       : 45
isActive    : True
category    : @{id=1; name=Electronics; description=Gadgets and devices; createdAt=2026-04-01T12:32:54.224Z}
createdAt   : 2026-04-01T12:36:18.108Z
updatedAt   : 2026-04-01T12:36:58.696Z

id          : 3
name        : iPhone 15
description : Latest Apple smartphone
price       : 999.99
stock       : 50
isActive    : True
category    : @{id=1; name=Electronics; description=Gadgets and devices; createdAt=2026-04-01T12:32:54.224Z}
createdAt   : 2026-04-01T13:22:56.518Z
updatedAt   : 2026-04-01T13:22:56.518Z



PS C:\hlpf-env-setup> 



### Тест 404
PS C:\hlpf-env-setup> try { Invoke-RestMethod -Uri "http://localhost:3000/api/products/999" -Method Get } catch { $_.Exception.Response.GetResponseStream().ReadToEnd() }
Method invocation failed because [System.Net.SyncMemoryStream] does not contain a method named 'ReadToEnd'.
At line:1 char:93
+ ... Get } catch { $_.Exception.Response.GetResponseStream().ReadToEnd() }
+                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (:) [], RuntimeException
    + FullyQualifiedErrorId : MethodNotFound











## Student
- Name: Дем'яненко Микола Володимирович
- Group: 232/1

## Практичне заняття №4 — DTO + class-validator + Pipes

### Структура репозиторію
```text
.
├── src/
│   ├── categories/
│   │   ├── dto/
│   │   │   ├── create-category.dto.ts
│   │   │   └── update-category.dto.ts
│   │   ├── category.entity.ts
│   │   ├── categories.module.ts
│   │   ├── categories.service.ts
│   │   └── categories.controller.ts
│   ├── products/
│   │   ├── dto/
│   │   │   ├── create-product.dto.ts
│   │   │   └── update-product.dto.ts
│   │   ├── product.entity.ts
│   │   ├── products.module.ts
│   │   ├── products.service.ts
│   │   └── products.controller.ts
│   ├── common/
│   │   └── pipes/
│   │       └── trim.pipe.ts
│   ├── migrations/
│   ├── data-source.ts
│   ├── main.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md



###Запуск проекту
cp .env.example .env
docker compose up --build

###Тест валідації — порожнє ім'я категорії
PS C:\hlpf-env-setup> $b='{"name":""}'; try { Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/categories" -ContentType "application/json" -Body $b } catch { (New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())).ReadToEnd() }

PS C:\hlpf-env-setup> 


###  Тест валідації — від'ємна ціна продукту
PS C:\hlpf-env-setup> $b='{"name": "Test", "price": -5}'; try { Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/products" -ContentType "application/json" -Body $b } catch { (New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())).ReadToEnd() }

PS C:\hlpf-env-setup> 


###Тест валідації — зайве поле (forbidNonWhitelisted)
PS C:\hlpf-env-setup> $b='{"name": "Test", "isAdmin": true}'; try { Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/categories" -ContentType "application/json" -Body $b } catch { (New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())).ReadToEnd() }

PS C:\hlpf-env-setup> 


###Тест TrimPipe
PS C:\hlpf-env-setup> $b='{"name": "  TrimmedCategory  "}'; Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/categories" -ContentType "application/json" -Body $b

id name            description createdAt
-- ----            ----------- ---------
 8 TrimmedCategory             2026-04-14T17:47:08.227Z


PS C:\hlpf-env-setup>


###Тест валідне створення продукту
PS C:\hlpf-env-setup> $b='{"name": "Valid iPhone", "price": 999.99, "stock": 10, "categoryId": 6}'; Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/products" -ContentType "application/json" -Body $b


id          : 5
name        : Valid iPhone
description :
price       : 999,99
stock       : 10
isActive    : True
category    : @{id=6}
createdAt   : 2026-04-14T17:47:31.000Z
updatedAt   : 2026-04-14T17:47:31.000Z



PS C:\hlpf-env-setup>

















## Student
- Name: Дем'яненко Микола Володимирович
- Group: 232/1

## Практичне заняття №5 — JWT Authentication + Guards + RBAC

### Структура репозиторію
```text
.
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   │   ├── register.dto.ts
│   │   │   └── login.dto.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   └── auth.controller.ts
│   ├── users/
│   │   ├── user.entity.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   ├── common/
│   │   ├── enums/
│   │   │   └── role.enum.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   └── pipes/
│   │       └── trim.pipe.ts
│   ├── categories/
│   ├── products/
│   ├── migrations/
│   ├── data-source.ts
│   ├── main.ts
│   └── app.module.ts
├── Dockerfile
├── docker-compose.yml
└── README.md


### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
```



### API Endpoints
| Method |       URL         | Auth | Role |
|--------|-------------------|------|------|
| POST   | /auth/register    | -   | -     |
| POST   | /auth/login       | -   | -     |
| GET    | /api/categories   | -   | -     |
| POST   | /api/categories   | JWT | admin |
| GET    | /api/products     | -   | -     |
| POST   | /api/products     | JWT | admin |
| PATCH  | /api/products/:id | JWT | admin |
| DELETE | /api/products/:id | JWT | admin |



### Тест реєстрації
PS C:\hlpf-env-setup> $regAdmin = '{"email": "admin@test.com", "password": "password123", "name": "System Admin"}'
PS C:\hlpf-env-setup> Invoke-RestMethod -Method Post -Uri "http://localhost:3000/auth/register" -ContentType "application/json" -Body $regAdmin

id        : 2
email     : admin@test.com
name      : System Admin
role      : user
createdAt : 2026-04-16T15:10:19.802Z




### Тест логіну
PS C:\hlpf-env-setup> curl.exe --% -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d "{\"email\": \"admin@test.com\", \"password\": \"password123\"}"
{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoiYWRtaW5AdGVzdC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzYzNTQyMDQsImV4cCI6MTc3NjM1NzgwNH0.uoocsh3pWrgNrZ5vqPZYGwnQaotnxqE5olVhXhL4QAc"}


### Тест 401 — запит без токена
PS C:\hlpf-env-setup> $body = '{"name": "Check Guard", "price": 10}'
PS C:\hlpf-env-setup> try {
>>     $res = Invoke-WebRequest -Method Post -Uri "http://localhost:3000/api/products" -ContentType "application/json" -Body $body -ErrorAction Stop
>>     Write-Host "ТРИВОГА: Сервер все ще пускає анонімів! (Status: $($res.StatusCode))" -ForegroundColor Red
>> } catch {
>>     $statusCode = $_.Exception.Response.StatusCode.value__
>>     $stream = $_.Exception.Response.GetResponseStream()
>>     $reader = New-Object System.IO.StreamReader($stream)
>>     $text = $reader.ReadToEnd()
>>     Write-Host "УСПІХ: Запит відхилено (Status: $statusCode)" -ForegroundColor Green
>>     Write-Output "Відповідь сервера: $text"
>> }
УСПІХ: Запит відхилено (Status: 401)
Відповідь сервера:
PS C:\hlpf-env-setup>




### Тест 403 — запит з роллю user
PS C:\hlpf-env-setup> $res = Invoke-WebRequest -Method Post -Uri "http://localhost:3000/api/products" -Headers @{ Authorization = "Bearer $U_TOKEN" } -ContentType "application/json" -Body '{"name": "Restricted", "price": 10}' -ErrorAction SilentlyContinue
Invoke-WebRequest : {"message":"У вас недостатньо прав (потрібна роль: admin)","error":"Forbidden","statusCode":403}
At line:1 char:8
+ $res = Invoke-WebRequest -Method Post -Uri "http://localhost:3000/api ...
+        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
PS C:\hlpf-env-setup> $res.Content
PS C:\hlpf-env-setup> 



### Тест успішного створення від admin
PS C:\hlpf-env-setup> $login = '{"email": "admin@test.com", "password": "password123"}'
PS C:\hlpf-env-setup> $res = Invoke-RestMethod -Method Post -Uri "http://localhost:3000/auth/login" -ContentType "application/json" -Body $login
PS C:\hlpf-env-setup> $headers = @{ Authorization = "Bearer $($res.accessToken)" }
PS C:\hlpf-env-setup> $body = '{"name": "Admin MacBook", "price": 1500, "stock": 5, "categoryId": 1}'
PS C:\hlpf-env-setup> Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/products" -Headers $headers -ContentType "application/json" -Body $body


id          : 12
name        : Admin MacBook
description :
price       : 1500
stock       : 5
isActive    : True
category    : @{id=1}
createdAt   : 2026-04-16T16:07:48.262Z
updatedAt   : 2026-04-16T16:07:48.262Z















## Student
- Name: Дем'яненко Микола Володимирович
- Group: 232/1

## Практичне заняття №6 — Interceptors + Exception Filters + Swagger

### Структура репозиторію
.
├── src/
│   ├── auth/ ...
│   ├── users/ ...
│   ├── categories/ ...
│   ├── products/ ...
│   ├── common/
│   │   ├── enums/
│   │   │   └── role.enum.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   ├── interceptors/
│   │   │   ├── logging.interceptor.ts
│   │   │   └── transform.interceptor.ts
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   └── pipes/
│   │       └── trim.pipe.ts
│   ├── migrations/
│   ├── main.ts
│   └── app.module.ts
├── swagger-screenshot.png
├── Dockerfile
├── docker-compose.yml
└── README.md

### Запуск проекту
```bash
cp .env.example .env
docker compose up --build
```


### Swagger UI
http://localhost:3000/api/docs
 
![Swagger](swagger-screenshot.png)
 
### Формат успішної відповіді
```json
{
  "data": { ... },
  "statusCode": 200,
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```
 
### Формат помилки
```json
{
  "error": {
	"code": 400,
	"message": "Validation failed",
	"details": ["name must be longer..."],
	"traceId": "a1b2c3..."
  },
  "timestamp": "2025-01-15T10:31:00.000Z"
}
```


### Приклад логів (LoggingInterceptor)
PS C:\hlpf-env-setup> docker compose logs --tail 15 app
app-1  |     at next (/app/node_modules/router/lib/route.js:157:13)
app-1  |     at Route.dispatch (/app/node_modules/router/lib/route.js:117:3)
app-1  |     at handle (/app/node_modules/router/index.js:435:11)
app-1  |     at Layer.handleRequest (/app/node_modules/router/lib/layer.js:152:17)
app-1  | [Nest] 29  - 04/21/2026, 11:05:53 AM     LOG [HTTP] POST /api/products — 201 — 439ms
app-1  | [Nest] 29  - 04/21/2026, 11:10:39 AM   ERROR [Exception] [d10b9bae-d040-4983-9804-b6ce30f0f750] POST /api/products — 400 — Validation failed
app-1  | BadRequestException: Bad Request Exception
app-1  |     at ValidationPipe.exceptionFactory (/app/node_modules/@nestjs/common/pipes/validation.pipe.js:112:20)
app-1  |     at ValidationPipe.transform (/app/node_modules/@nestjs/common/pipes/validation.pipe.js:79:30)
app-1  |     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
app-1  |     at async /app/node_modules/@nestjs/core/pipes/pipes-consumer.js:15:25
app-1  |     at async resolveParamValue (/app/node_modules/@nestjs/core/router/router-execution-context.js:148:23)
app-1  |     at async Promise.all (index 0)
app-1  |     at async pipesFn (/app/node_modules/@nestjs/core/router/router-execution-context.js:151:13)
app-1  |     at async /app/node_modules/@nestjs/core/router/router-execution-context.js:37:30


### Тест помилки з traceId
PS C:\hlpf-env-setup> $res = Invoke-WebRequest -Uri "http://localhost:3000/api/products/999" -ErrorAction SilentlyContinue; $res.Content
Invoke-WebRequest : {"error":{"code":404,"message":"Product #999 not found","traceId":"9828831a-9bd2-4e90-b1b7-a111d336588c"},"timestamp":"2026-04-21T11:27:28.
275Z"}
At line:1 char:8
+ $res = Invoke-WebRequest -Uri "http://localhost:3000/api/products/999 ...
+        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
PS C:\hlpf-env-setup> 