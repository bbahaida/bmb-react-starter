import apiClient from "../config/api_client";
import { User } from "../models/User";

export class AuthService {
  login(username: string, password: string) {
    apiClient.post<User>("/login", { username, password });
  }
}
