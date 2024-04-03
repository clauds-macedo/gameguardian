import firestore from '@react-native-firebase/firestore';

const useGameClicks = () => {
  const registerClick = async (gameTitle: string) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const doc = firestore().collection('games').doc(currentDate);

    const gameDocValues = (await doc.get()).data();
    const gameInfo = gameDocValues?.[gameTitle];
    console.log(gameInfo, 'gamedoc');
    if (!gameInfo) {
      await doc.update({
        [gameTitle]: { clicks: 1 },
      });
    }
    const newClicks = (gameInfo?.clicks || 0) + 1;
    await doc.update(new firestore.FieldPath(gameTitle), {
      clicks: newClicks,
    });
  };

  return { registerClick };
};

export default useGameClicks;
