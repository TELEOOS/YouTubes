export type RootStackParamList = {
  MainTabs: undefined;
  VideoPlayer: {
    video: {
      id: string;
      title: string;
      videoUrl: string;
      channel: string;
      views: number;
    };
  };
  Subscriptions: { videoId: string };
};

export type TabParamList = {
  Home: undefined;
  Shorts: undefined;
  Subscriptions: undefined;
  Profile: undefined;
};
