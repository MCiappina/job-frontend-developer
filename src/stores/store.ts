import { VideoItem } from '@/types/api/youtube';
import { create } from 'zustand';

interface SearchFormStore {
    searchQuery: string,
    changeSearchQuery: (value: string) => void
}

interface ModalStore {
  isOpen: boolean,
  selectedVideo: VideoItem,
  selectVideo: (video: VideoItem) => void,
  openModal: () => void,
  closeModal: () => void,
}

export const useSearchStore = create<SearchFormStore>((set) => ({
    searchQuery: '',
    changeSearchQuery: (value) => set(({ searchQuery: value }))
}))

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  selectedVideo: {} as VideoItem,
  selectVideo: (video: VideoItem) => set({ selectedVideo: video}),
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));