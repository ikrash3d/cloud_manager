import { createContext, useContext, useEffect, useState } from 'react';
import { GridCarousel } from '@/utils/interfaces/Grid';

interface GridCarouselContextProps {
  itemCount: number;
  currentIndex: number;
  itemPerPages: number;
  cards: GridCarousel[];

  setItemCount: (itemCount: number) => void;
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
  const Mike = require('../../assets/mike.jpg');
  const ExcitedMike = require('../../assets/mike_happy.jpg');

  const cards: GridCarousel[] = [
    { key: '0', url: Mike, title: 'Mike' },
    { key: '1', url: ExcitedMike, title: 'Excited Mike' },
  ];

  const multipliedCards: GridCarousel[] = Array.from({ length: 50 }).map((_, index) => {
    return {
      key: index.toString(),
      url: cards[index % cards.length].url,
      title: `${cards[index % cards.length].title} ${index}`,
    };
  });

  const [itemCount, setItemCount] = useState(multipliedCards.length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemPerPages, setItemPerPages] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const onPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numberOfPages) % numberOfPages);
  };

  const onNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfPages);
  };

  const onNumberOfPages = () => {
    const numberOfPages = Math.ceil(itemCount / itemPerPages);

    setNumberOfPages(numberOfPages);
  };

  // Allows to set the proper index when the number of items per page changes
  const clampPageIndex = () => {
    const maxIndex = Math.floor(Math.max(0, (itemCount - 1) / itemPerPages));

    return Math.min(currentIndex, maxIndex);
  };

  useEffect(() => {
    onNumberOfPages();
  }, [itemPerPages]);

  useEffect(() => {
    setCurrentIndex(clampPageIndex());
  }, [itemPerPages, itemCount]);

  return (
    <GridCarouselContext.Provider
      value={{
        itemCount,
        currentIndex,
        itemPerPages,
        cards: multipliedCards,
        onNext,
        onPrevious,
        setItemCount,
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
