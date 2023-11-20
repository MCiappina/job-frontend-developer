import React, { FC } from 'react';
import * as S from './style'
import { useModalStore } from '@/stores/store';


const YouTubeModal: FC = () => {
    const { isOpen, closeModal, selectedVideo } = useModalStore();
    console.log('here')

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    closeModal()
  };

  return (
    <S.ModalBackdrop>
      <S.Modal>
        <S.CloseButton className="close-button" onClick={handleClose}>
          X
        </S.CloseButton>
        <S.Iframe
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></S.Iframe>
      </S.Modal>
    </S.ModalBackdrop>
  );
};

export default YouTubeModal;