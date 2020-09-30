import axios from "axios";

abstract class ApiService {
  private static api = axios.create({
    baseURL: "https://simple-blog-api.crew.red/",
  });

  get api() {
    return ApiService.api;
  }
}

export default ApiService;
