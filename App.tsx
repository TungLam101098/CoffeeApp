import React, {useEffect, useState} from 'react';
import {DevSettings, SafeAreaView, Text} from 'react-native';

// Components
import {MyButton} from '@components/Button/Button';

const App = () => {
  const [toggleStorybook, setToggleStorybook] = useState<boolean>(false);

  // Adds a custom menu item to the developer settings to toggle Storybook
  useEffect(() => {
    DevSettings.addMenuItem('Toggle Storybook', () => {
      setToggleStorybook(prev => !prev);
    });
  }, []);

  if (toggleStorybook) {
    const Storybook = require('./.ondevice').default;

    return <Storybook />;
  }

  return (
    <SafeAreaView>
      <Text>My App</Text>
      <MyButton
        text="Hello world"
        textColor="red"
        onPress={() => console.log('Clicked!')}
      />
    </SafeAreaView>
  );
};

export default App;
