export type ProfileStackParamList = {
  Profile: { userId: number };
  Settings: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Activity: undefined;
  NewPost: undefined;
  Profile: undefined; // the tab itself, no params here
};
