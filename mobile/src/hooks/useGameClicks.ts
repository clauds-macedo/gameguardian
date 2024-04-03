import { realtimeConfig } from '../config/database-config';

const useGameClicks = () => {
  const registerClick = async (gameTitle: string) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const gamePath = `clicks/${currentDate}/${gameTitle}`;
    const gameRef = realtimeConfig.docRef(gamePath);

    // gameRef.transaction((currentClicks) => (currentClicks || 0) + 1);
  };

  return { registerClick };
};

export default useGameClicks;
