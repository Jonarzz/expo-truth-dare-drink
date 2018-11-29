import React from 'react';
import {Text, View} from "react-native";
import {DARE_KEY, DRINK_KEY, TRUTH_KEY} from "../data/Common";
import {TEXT_COLOR} from "../ColorsContants";

const Header = ({ playerName, playerDoneCardCounts }) => {

    return (
        <View key="header" style={{marginBottom: 10}}>
            <Text style={{color: TEXT_COLOR, fontSize: 30, textAlign: 'center'}}>
                Now it's <Text style={{fontWeight: 'bold'}}>{playerName}</Text>'s turn
            </Text>
            <Text style={{color: TEXT_COLOR, textAlign: 'center'}}>
                (truths: {playerDoneCardCounts[TRUTH_KEY]}, dares: {playerDoneCardCounts[DARE_KEY]}, drink sips: {playerDoneCardCounts[DRINK_KEY]})
            </Text>
        </View>
    );

};

export default Header;