import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
}

type LoginResponse = {
  accessToken: string;
};

export default class Http {
  private baseURL: string;
  constructor() {
    this.baseURL = import.meta.env.VITE_BASE_URL as string;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async api<T>(endpoint: string, method: string, data?: any): Promise<T> {
    const url = `${this.baseURL}/${endpoint}`;

    const config: AxiosRequestConfig = {
      url,
      method,
      headers: this.generateHeaders(),
      data,
    };
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios(config);
      return response.data.data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async login(nickname: string): Promise<LoginResponse> {
    return this.api<LoginResponse>('auth/guest', 'post', { nickname });
    // const response = await axios.post<LoginResponse>(GUEST_LOGIN_URL, {nickname});
    // return response.data;
  }
  // 헤더 생성 메서드
  private generateHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    // if (this.authToken) {
    //     headers['Authorization'] = `Bearer ${this.authToken}`;
    //   }
    return headers;
  }
}
