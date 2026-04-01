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
