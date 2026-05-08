import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class UsersService {
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
