import ApiService from "./ApiService";

class PostService extends ApiService {
  async getAll(): Promise<IPost[]> {
    const response = await this.api({ url: "/posts" }).then(
      (response) => response.data
    );

    return response;
  }

  async getById(id: number): Promise<IPost> {
    const response = await this.api({ url: `/posts/${id}` }).then(
      (response) => response.data
    );

    return response;
  }

  async create(data: IPost) {
    const response = await this.api({
      url: "/posts/",
      method: "post",
      data,
    });

    return response.data;
  }
}

export default new PostService();
