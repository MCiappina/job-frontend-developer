import { NextApiRequest, NextApiResponse } from 'next';
import { APIResponse } from '@/types/api/youtube';

const BASE_URL = process.env.NEXT_PUBLIC_YOUTUBE_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse<APIResponse | { error: string }>) {
    const { searchQuery } = req.query;


    const queryParams = new URLSearchParams({
        key: API_KEY,
        type: 'video',
        part: 'snippet',
        videoEmbeddable: 'true',
        maxResults: '50',
        q: searchQuery as string
    });

    const url = `${BASE_URL}/search/?${queryParams.toString()}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}