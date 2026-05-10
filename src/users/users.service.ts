import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  private filePath = join(__dirname, 'data', 'users.json');

  public async getUsers() {
    const users = await readFile(this.filePath, 'utf-8');
    return users;
  }

  public async createUser(body) {
    const usersJson = await readFile(this.filePath, 'utf-8');
    const users = JSON.parse(usersJson);
    users.push(body);
    await writeFile(this.filePath, JSON.stringify(users, null, 2));

    return users;
  }
}
