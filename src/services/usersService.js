import Config from "../config";
import combineUrl from "../helpers/combineUrl";

class  UsersService {

  get = async () => {
    const response = await fetch(this.getUrl('/api/Users'));    
    return await response.json();
  }

  getById = async (id) => {
    const response = await fetch(this.getUrl(`/api/Users/${id}`));
    return await response.json();
  }

  post = async (user) => {
    const response = await fetch(this.getUrl(`/api/Users`), 
                                  {
                                    method: 'POST',
                                    headers: {'Content-type': 'application/json; charset=UTF-8'},
                                    body: JSON.stringify(user)
                                  });
    return await response.json();
  }

  put = async (user) => {
    const response = await fetch(this.getUrl(`/api/Users/${user.id}`), 
                                  {
                                    method: 'PUT',
                                    headers: {'Content-type': 'application/json; charset=UTF-8'},
                                    body: JSON.stringify(user)
                                  });
    return await response.json();
  }

  delete = async (id) =>
    await fetch(this.getUrl(`/api/Users/${id}`), { method: 'DELETE'});

  getUrl = (path) =>
    combineUrl(Config.apiUrl, path);

}

export default new UsersService();