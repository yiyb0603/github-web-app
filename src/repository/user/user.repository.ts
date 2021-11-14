import { githubInstance } from '@/lib/axios';
import { Organization } from '@/types/organization.type';
import { Repository } from '@/types/repository.type';
import { Star } from '@/types/star.type';

class UserRepository {
  public async fetchUserRepositories(userName: string) {
    const { data } = await githubInstance.get<Repository[]>(`/users/${userName}/repos?per_page=100`);

    return data;
  }

  public async fetchUserOrganizations(userName: string) {
    const { data } = await githubInstance.get<Organization[]>(`/users/${userName}/orgs?per_page=100`);

    return data;
  }

  public async fetchUserStarred(userName: string) {
    const { data } = await githubInstance.get<Star[]>(`/users/${userName}/starred?per_page=100`);

    return data;
  }
}

export default new UserRepository();