import { NextApiRequest, NextApiResponse } from 'next';
import { APIResponse } from '@/types/api/ticketmaster';

const BASE_URL = process.env.NEXT_PUBLIC_TICKETMASTER_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse<APIResponse | { error: string }>) {
    const { searchQuery } = req.query;


    const queryParams = new URLSearchParams({
        apikey: API_KEY,
        size: '1',
        keyword: searchQuery as string
    });

    const url = `${BASE_URL}/attractions/?${queryParams.toString()}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}