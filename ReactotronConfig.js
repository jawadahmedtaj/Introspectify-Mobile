import Reactotron, { asyncStorage, networking } from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .use(asyncStorage()) // async storage plugin
  .use(networking()) // networking plugin
  // .useReactNative({
  //   storybook: false,
  // }) // add all built-in react native plugins
  .connect(); // let's connect!
