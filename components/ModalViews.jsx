// import React, {useState} from 'react';
// import {Text, View, Button, StyleSheet, Modal} from 'react-native';

// const ModalViews = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <View style={styles.main}>
//       <Modal transparent={true} visible={showModal} animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.centeredView}>
//             <Text style={styles.modalText}>Hello Modal Views</Text>
//             <Button
//               title="Close Modal"
//               onPress={() => setShowModal(false)}></Button>
//           </View>
//         </View>
//       </Modal>
//       <View style={styles.buttonView}>
//         <Button title="Open Modal" onPress={() => setShowModal(true)}></Button>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   centeredView: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 20,
//     // borderWidth: 2,
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     elevation: 5,
//   },
//   buttonView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   modalText: {
//     fontSize: 30,
//     marginBottom: 30,
//   },
// });

// export default ModalViews;

import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, Modal} from 'react-native';

const ModalViews = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.centeredView}>
            <Text style={styles.modalText}>Hello Modal Views</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  centeredView: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5,
  },
  buttonView: {
    marginBottom: 20, // Add some margin at the bottom
  },
  modalText: {
    fontSize: 30,
    marginBottom: 30,
  },
});

export default ModalViews;
