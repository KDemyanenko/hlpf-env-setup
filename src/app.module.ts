import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';

// Entities
import { Category } from './categories/category.entity';
import { Product } from './products/product.entity';
import { User } from './users/user.entity';

// Modules
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// Migrations
import { CreateTables1740000000000 } from './migrations/1740000000000-CreateTables';
import { AddIsActiveToProducts1774536620654 } from './migrations/1774536620654-AddIsActiveToProducts';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // 1. Налаштування конфігурації
    ConfigModule.forRoot({ isGlobal: true }),

    // 2. База даних PostgreSQL (Async)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT', 5432),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DB'),
        entities: [Category, Product, User],
        synchronize: false,
        migrationsRun: true,
        migrations: [
          CreateTables1740000000000,
          AddIsActiveToProducts1774536620654,
        ],
      }),
    }),

    // 3. Redis Кешування (Вправа 4)
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        // Створюємо store для версії 5+
        const store = await redisStore({
          socket: {
            host: configService.get<string>('REDIS_HOST', 'redis'),
            port: configService.get<number>('REDIS_PORT', 6379),
          },
        });

        return {
          store: store as any,
          ttl: 60000, // 60 секунд
        };
      },
    }),

    CategoriesModule,
    ProductsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}