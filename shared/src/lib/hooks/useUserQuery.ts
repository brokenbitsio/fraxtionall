import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../api/userApi.js';
import { queryKeys } from '../queryKeys.js';

export const useSingleUser = (id: string) => {
  return useQuery({
    queryKey: queryKeys.users.single(id),
    queryFn: () => fetchUser(id),
  });
};
