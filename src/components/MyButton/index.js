import React from 'react';
import { Button } from 'react-native-paper';

const MyButton = ({ text, action, mode, size }) => {
  let style = null;

  // Adjusting the button size based on the 'size' prop
  switch (size) {
    case 'small':
      style = { ...btnStyle.buttonSmall };
      break;
    case 'medium':
      style = { ...btnStyle.buttonMedium };
      break;
    case 'large':
      style = { ...btnStyle.buttonLarge };
      break;
    default:
      style = btnStyle.buttonMedium;
      break;
  }

  return (
    <Button
      contentStyle={style}
      mode={mode}
      onPress={() => action()}
      style={{
        backgroundColor: '#004225',  // Setting the background color
        borderColor: 'black',        // Setting the border color to black
        borderWidth: 2,              // Optional: Border width for the border color to be visible
      }}
    >
      {text}
    </Button>
  );
};

export default MyButton;

const btnStyle = {
  buttonSmall: {
    height: 50,
  },
  buttonMedium: {
    height: 60,
  },
  buttonLarge: {
    height: 70,
  },
};
