import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepo.find();
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepo.findOne({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  async create(data: Partial<Category>): Promise<Category> {
    const category = this.categoryRepo.create(data);
    // Додаємо каст типів, щоб уникнути помилки TS2352
    const saved = await this.categoryRepo.save(category);
    return saved as unknown as Category;
  }

  async update(id: number, data: Partial<Category>): Promise<Category> {
    const category = await this.findOne(id);
    Object.assign(category, data);
    // Додаємо каст типів тут також
    const saved = await this.categoryRepo.save(category);
    return saved as unknown as Category;
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);
    await this.categoryRepo.remove(category);
  }
}