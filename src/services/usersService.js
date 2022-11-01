import Config from "../config";
import combineUrl from "../helpers/combineUrl";

class UsersService {

  get = async () => {
    const response = await fetch(this.getUrl('/api/User'));
    return await response.json();
  }

  getById = async (id) => {
    const response = await fetch(this.getUrl(`/api/User/${id}`));
    return await response.json();
  }

  post = async (user) => {
    const response = await fetch(this.getUrl(`/api/User`),
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(user)
      });
    return await response.json();
  }

  put = async (user) => {
    const response = await fetch(this.getUrl(`/api/User/${user.id}`),
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(user)
      });
    return await response.json();
  }

  delete = async (id) =>
    await fetch(this.getUrl(`/api/User/${id}`), { method: 'DELETE' });

  getUrl = (path) =>
    combineUrl(Config.apiUrl, path);

}

export default new UsersService();