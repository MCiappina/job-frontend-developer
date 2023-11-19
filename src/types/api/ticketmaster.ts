export interface AttractionItem {
    name?: string,
    type?: string,
    id: string,
    test?: boolean,
    url?: string,
    locale?: string
    externalLinks?: {
        youtube?: { url?: string }[],
        twitter?: { url?: string }[],
        itunes?: { url?: string }[],
        spotify?: { url?: string }[],
        facebook?: { url?: string }[],
        musicbrainz?: { id?: string }[],
        instagram?: { url?: string }[],
        homepage?: { url?: string }[],
    }
    aliases?: string[],
    images?: {
        ratio?: string,
        url?: string,
        width?: number,
        height?: number,
        fallback?: boolean
    }[],
    classifications?: {
        primary?: boolean,
        segment?: {
            id: string,
            name?: string
        },
        genre?: {
            id: string,
            name?: string
        },
        subGenre?: {
            id: string,
            name?: string
        },
        type?: {
            id: string,
            name?: string
        },
        subType?: {
            id: string,
            name?: string
        },
        family?: boolean
    }[],
    upcomingEvents?: {
        _total?: number,
        _filtered?: number
    },
    _links?: {
        self?: {
            href?: string
        }
    }
}

export interface APIResponse {
    _embedded?: { attractions?: AttractionItem[] },
    _links?: {
        first?: {
            href?: string
        },
        self?: {
            href?: string
        },
        next?: {
            href?: string
        },
        last?: {
            href?: string
        },
    },
    page: {
        size?: number,
        totalElements?: number,
        totalPages?: number
        number: number
    }
}