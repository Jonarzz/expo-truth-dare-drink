import React from 'react';
import {Modal, Text, TouchableNativeFeedback, View} from "react-native";
import {BACKGROUND_COLOR, TEXT_COLOR} from "../ColorsContants";

const PlayerChangeModal = ({ modalVisible, playerName, closeModalCallback }) => {

    return (
        <Modal visible={modalVisible} onRequestClose={closeModalCallback}>
            <TouchableNativeFeedback onPress={closeModalCallback}>
                <View id="modal" style={{flex: 1, justifyContent: 'center', backgroundColor: BACKGROUND_COLOR }}>
                    <Text style={{color: TEXT_COLOR, fontSize: 30, textAlign: 'center'}}>
                        Now it's <Text style={{fontWeight: 'bold'}}>{playerName}</Text>'s turn
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </Modal>
    );

};

export default PlayerChangeModal;