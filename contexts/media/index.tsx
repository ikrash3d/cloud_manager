import { createContext, useContext, useState } from 'react';

interface MediaContext {
  pictureUris: string[];
  isLoading: boolean;
  setPictureUris: React.Dispatch<React.SetStateAction<string[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MediaProviderProps {
  children: React.ReactNode;
}

const MediaContext = createContext<MediaContext | null>(null);

export const MediaProvider = ({ children }: MediaProviderProps) => {
  const [pictureUris, setPictureUris] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <MediaContext.Provider
      value={{
        pictureUris,
        isLoading,
        setPictureUris,
        setIsLoading,
      }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);

  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider');
  }

  return context;
};
