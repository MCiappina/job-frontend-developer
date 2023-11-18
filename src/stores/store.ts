import { create } from 'zustand';

interface SearchFormStoreState {
    searchQuery: string,
    changeSearchQuery: (value: string) => void
}

export const useSearchStore = create<SearchFormStoreState>((set) => ({
    searchQuery: '',
    changeSearchQuery: (value) => set((state) => ({ searchQuery: value }))
}))