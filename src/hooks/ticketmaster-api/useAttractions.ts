import { useQuery, UseQueryResult } from 'react-query';
import { APIResponse } from '@/types/api/ticketmaster'

export const useAttractions = (searchQuery: string): UseQueryResult<APIResponse, Error> => {
    return useQuery(['attractions', searchQuery], async () => {
        if (!searchQuery) return
        const response = await fetch(`/api/ticketmaster?searchQuery=${searchQuery}`)
        return response.json();
    }, { enabled: false });
};