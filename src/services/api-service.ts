import apiClient from "../config/api_client";

interface Entity {
  id: number;
}

export class ApiService<T extends Entity> {
  constructor(private endpoint: string) {}

  getAll<T>() {
    return apiClient.get<T[]>(this.endpoint);
  }
}
