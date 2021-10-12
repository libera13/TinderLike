import React, {FC} from "react";

import {Image, Text, View} from "react-native";

interface Props {

}

const App: FC= (Props) => {
  return (
      <View>
      <Text>ho</Text>










      <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG'}} style={{height: 250, width: 250}}/>
      </View>
  )
};

export default App;

