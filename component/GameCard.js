import React from 'react';
import {Text, TouchableNativeFeedback} from "react-native";
import {Card} from "react-native-elements";
import {CARDS_BORDER_COLOR, TEXT_COLOR} from "../ColorsContants";

const GameCard = ({ currentCard, selectedCard, cardChosenCallback, playerChangeCallback }) => {

    const opacity = !currentCard.text || (selectedCard && selectedCard.title !== currentCard.title) ? 0 : 1;
    const onCardPress = selectedCard ? playerChangeCallback : cardChosenCallback;

    return (
        <TouchableNativeFeedback onPress={() => onCardPress(currentCard)} disabled={!opacity}>
            <Card title={currentCard.title} titleStyle={{color: TEXT_COLOR, fontSize: 20}}
                  containerStyle={{backgroundColor: currentCard.backgroundColor, borderRadius: 10, borderColor: CARDS_BORDER_COLOR, opacity: opacity}}>
                <Text style={{color: TEXT_COLOR, fontSize: 18}}>{currentCard.text}</Text>
            </Card>
        </TouchableNativeFeedback>
    );

};

export default GameCard;