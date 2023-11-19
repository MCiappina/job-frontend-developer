export interface VideoItem {
    etag?: string,
    id: {
        kind?: string,
        videoId: string;
    };
    kind?: string,
    snippet?: {
        channelId?: string,
        channelTitle?: string,
        description?: string,
        liveBroadcastContent?: string,
        publishTime?: Date,
        publishedAt?: Date,
        thumbnails?: {
            default?: {
                height?: number,
                url?: string,
                width?: string
            }
            high?: {
                height?: number,
                url?: string,
                width?: string
            }
            medium?: {
                height?: number,
                url?: string,
                width?: string
            }
        }
        title?: string;
    };
}

export interface APIResponse {
    etag?: string,
    items?: VideoItem[];
    kind?: string,
    nextPageToken?: string,
    pageInfo?: {
        totalResults?: number,
        resultsPerPage?: number
    },
    regionCode?: string
}