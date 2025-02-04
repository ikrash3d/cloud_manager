import { createContext, useContext, useEffect, useState } from 'react';
import { GridCarousel } from '@/utils/interfaces/Grid';
import { useMedia } from '../media';

interface GridCarouselContextProps {
  itemCount: number;
  currentIndex: number;
  itemPerPages: number;
  cards: GridCarousel[];

  setCurrentIndex: (currentIndex: number) => void;
  setItemPerPages: (itemPerPages: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

interface GridCarouselProviderProps {
  children: React.ReactNode;
}

const GridCarouselContext = createContext<GridCarouselContextProps | undefined>(undefined);

export const GridCarouselProvider = ({ children }: GridCarouselProviderProps) => {
  const { pictureUris } = useMedia();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemPerPages, setItemPerPages] = useState(5);

  const cards: GridCarousel[] = pictureUris.map((uri, index) => {
    return {
      key: index.toString(),
      url: { uri },
      title: `Index: ${index}`,
    };
  });
  const itemCount = cards.length;
  const numberOfPages = Math.ceil(itemCount / itemPerPages);

  const onPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numberOfPages) % numberOfPages);
  };

  const onNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfPages);
  };

  // Allows to set the proper index when the number of items per page changes
  const clampPageIndex = () => {
    const maxIndex = Math.floor(Math.max(0, (itemCount - 1) / itemPerPages));

    return Math.min(currentIndex, maxIndex);
  };

  useEffect(() => {
    setCurrentIndex(clampPageIndex());
  }, [itemPerPages, itemCount]);

  return (
    <GridCarouselContext.Provider
      value={{
        itemCount,
        currentIndex,
        itemPerPages,
        cards,
        onNext,
        onPrevious,
        setCurrentIndex,
        setItemPerPages,
      }}>
      {children}
    </GridCarouselContext.Provider>
  );
};

export const useGridCarousel = () => {
  const context = useContext(GridCarouselContext);

  if (!context) {
    throw new Error('useGridCarousel must be used within a GridCarouselProvider');
  }

  return context;
};
