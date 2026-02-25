import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';

export const useTiresQuery = () => {
  const queryClient = useQueryClient();

  const tiresQuery = useQuery({
    queryKey: ['tires'],
    queryFn: async () => {
      const res = await api.getTires();
      return res.data || [];
    }
  });

  const addMutation = useMutation({
    mutationFn: (newTire) => api.createTire(newTire),
    onSuccess: (response, variables) => {
      // Если сервер прислал пустой title, берем тот, что мы отправляли (variables)
      const newObject = { 
        ...response, 
        title: response.title || variables.title, 
        id: Math.random() 
      }; 
      queryClient.setQueryData(['tires'], (old = []) => [newObject, ...old]);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => api.deleteTire(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(['tires'], (old = []) => old.filter(t => t.id !== id));
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => api.updateTire(id, data),
    onSuccess: (response, variables) => {
      // JSONPlaceholder может вернуть пустой объект на PUT. 
      // Поэтому мы берем ID и DATA из variables, которые отправляли сами.
      queryClient.setQueryData(['tires'], (old = []) => 
        old.map(t => (t.id === variables.id ? { ...t, ...variables.data } : t))
      );
    }
  });

  return { tiresQuery, deleteMutation, addMutation, updateMutation };
};