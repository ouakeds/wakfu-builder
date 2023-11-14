import axios, { AxiosResponse } from 'axios';
import cookiesService from './cookies.service';

interface IServiceResponse<T> {
  data: T;
  status: number;
}

class ApiService {
  private axiosInstance = axios.create({
    baseURL: process.env.API || 'http://localhost:8000/',
  });

  public async get<T>(url: string): Promise<IServiceResponse<T>> {
    const token = cookiesService.get('access-token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, config);

    return {
      data: response.data,
      status: response.status,
    };
    
  }

  public async post<T>(url: string, data: any): Promise<IServiceResponse<T>> {
    const token = cookiesService.get('access-token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config);
    
    return {
      data: response.data,
      status: response.status,
    };
  }

  public async put<T>(url: string, data: any): Promise<IServiceResponse<T>> {
    const token = cookiesService.get('access-token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config);
    return {
      data: response.data,
      status: response.status,
    };
  }

  public async patch<T>(url: string, data: any): Promise<IServiceResponse<T>> {
    const token = cookiesService.get('access-token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const response: AxiosResponse<T> = await this.axiosInstance.patch(url, data, config);
    return {
      data: response.data,
      status: response.status,
    };
  }

  public async delete<T>(url: string): Promise<IServiceResponse<T>> {
    const token = cookiesService.get('access-token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config);
    return {
      data: response.data,
      status: response.status,
    };
  }
}

export default new ApiService();
