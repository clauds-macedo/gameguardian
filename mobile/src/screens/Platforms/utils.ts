export const data = [
  'https://cdn.cloudflare.steamstatic.com/store/home/store_home_share.jpg',
  'https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/11/epic-games-divulgacao.jpg',
];

const temp = {
  platforms: {
    '1': {
      name: 'Steam',
      src: 'https://firebasestorage.googleapis.com/v0/b/gameguardian-5c609.appspot.com/o/imagem_2023-09-01_144631514.png?alt=media&token=14fe2115-c93e-485a-82e0-4a6aa8b0acc4',
    },
    '2': {
      name: 'Epic Games',
      src: 'https://firebasestorage.googleapis.com/v0/b/gameguardian-5c609.appspot.com/o/imagem_2023-09-01_144543897.png?alt=media&token=00f8b1c2-a8b4-4d11-9d0e-9c0253873033',
    },
    '3': {
      name: 'GOG',
      src: 'https://firebasestorage.googleapis.com/v0/b/gameguardian-5c609.appspot.com/o/imagem_2023-09-01_144804933.png?alt=media&token=cf47c5d8-f0a6-4934-8fd4-5cdf11ff2b4a',
    },
    '4': {
      name: 'Nuuvem',
      src: 'https://firebasestorage.googleapis.com/v0/b/gameguardian-5c609.appspot.com/o/imagem_2023-09-01_145040465.png?alt=media&token=664e570b-4c2d-4c8e-8408-75318765f4ec',
    },
  },
};

export const platformData = Object.values(temp.platforms).map(platform => ({
  name: platform.name,
  src: platform.src,
}));
