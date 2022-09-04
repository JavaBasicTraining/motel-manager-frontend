import axios from "axios";
const API_URL = "http://localhost:8081/api/auth";

class AuthService {
  login(data: any) {
    return axios.post(`${API_URL}/v1/login`, data, { withCredentials: true });
  }

  logout() {
    var token = this.getToken();
    return axios
      .delete(`${API_URL}/v1/logout`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          console.log("logout");
        }
        localStorage.removeItem("auth");
        return response.data;
      });
  }

  register(data: any) {
    return axios.post(`${API_URL}/v1/register`, data);
  }

  getCurrentAuth() {
    var auth = localStorage.getItem("auth");
    return auth ? JSON.parse(auth) : null;
  }

  getUserInfo() {
    var auth = this.getCurrentAuth();
    console.log(auth?.data?.user_info.avatarUrl)
    return auth?.data?.user_info;
  }

  getToken() {
    var user = this.getCurrentAuth();
    
    return user.data.access_token;
  }
}

export default new AuthService();
