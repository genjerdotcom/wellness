import { api } from "@/lib/api";

export const packageService = {
  async getAll() {
    const response = await api.get("/admin/packages");

    return response.data;
  },

  async create(data: any) {
    const response = await api.post("/admin/packages", data);

    return response.data;
  },

  async update(id: string, data: any) {
    const response = await api.put(`/admin/packages/${id}`, data);

    return response.data;
  },

  async delete(id: string) {
    const response = await api.delete(`/admin/packages/${id}`);

    return response.data;
  },
};
