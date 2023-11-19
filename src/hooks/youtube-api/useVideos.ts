import { useQuery, UseQueryResult } from 'react-query';
import { APIResponse } from '@/types/api/youtube'

export const useVideos = (searchQuery: string): UseQueryResult<APIResponse, Error> => {
    return useQuery(['videos', searchQuery], async () => {
        if (!searchQuery) return
        const response = await fetch(`/api/youtube?searchQuery=${searchQuery}`)
        return response.json();
    }, { enabled: false });
};