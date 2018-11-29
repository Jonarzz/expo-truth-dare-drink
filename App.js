import React from 'react';
import {View} from 'react-native';
import {getTruth} from "./data/TruthBase";
import {getDare} from "./data/DareBase";
import {DARE_KEY, DRINK_KEY, FEMALE, MALE, TRUTH_KEY} from "./data/Common";
import PlayerChangeModal from "./component/PlayerChangeModal";
import Header from "./component/Header";
import GameCard from "./component/GameCard";
import {BACKGROUND_COLOR, DARE_CARD_COLOR, DRINK_CARD_COLOR, TRUTH_CARD_COLOR} from "./ColorsContants";

const PLAYERS = [{
    name: 'Woman',
    sex: FEMALE,
    count: {
        [TRUTH_KEY]: 0,
        [DARE_KEY]:  0,
        [DRINK_KEY]: 0
    }
}, {
    name: 'Man',
    sex: MALE,
    count: {
        [TRUTH_KEY]: 0,
        [DARE_KEY]:  0,
        [DRINK_KEY]: 0
    }
}];

const BASE_TRUTH_CARD_PROPS = {
    title: 'Truth',
    backgroundColor: TRUTH_CARD_COLOR,
    key: TRUTH_KEY
};
const BASE_DARE_CARD_PROPS = {
    title: 'Dare',
    backgroundColor: DARE_CARD_COLOR,
    key: DARE_KEY
};
const BASE_DRINK_CARD_PROPS = {
    title: 'Drink',
    backgroundColor: DRINK_CARD_COLOR,
    key: DRINK_KEY
};

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPlayerIndex: 0,
            cardsModel: {
                [TRUTH_KEY]: { ...BASE_TRUTH_CARD_PROPS, handleCardUpdate: sex => this._updateCard(TRUTH_KEY, getTruth(sex)) },
                [DARE_KEY]:  { ...BASE_DARE_CARD_PROPS,  handleCardUpdate: sex => this._updateCard(DARE_KEY,  getDare(sex)) },
                [DRINK_KEY]: { ...BASE_DRINK_CARD_PROPS, handleCardUpdate: ()  => this._updateCard(DRINK_KEY, this._getDrink()) }
            },
            selectedCard: null,
            modalVisible: false,
            isInitialized: false
        };
    }

    componentDidMount() {
        Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
        this._updateAllCards();
        this.setState({ isInitialized: true });
    }

    _getDrink = () => {
        const sips = Math.floor(Math.random() * 4) + 2;
        return {
            text : `Drink ${sips} sips of your alcohol`,
            selectedCallbackReturningCountChange: () => sips
        };
    };

    _updateAllCards = () => {
        const { cardsModel, currentPlayerIndex } = this.state;
        const currentPlayerSex = PLAYERS[currentPlayerIndex].sex;
        Object.values(cardsModel).forEach(card => card.handleCardUpdate(currentPlayerSex));
    };

    _updateCard = (cardKey, cardData) => {
        const {text, selectedCallbackReturningCountChange} = cardData;
        const newCard = {...this.state.cardsModel[cardKey], text, selectedCallbackReturningCountChange};
        this.setState(prevState => ({ cardsModel: {...prevState.cardsModel, [cardKey]: newCard } }));
    };

    closeModal = () => {
        this._updateAllCards();
        this.setState({modalVisible: false});
    };

    handleCardChosen = theCard => {
        const countChange = theCard.selectedCallbackReturningCountChange();
        const currentPlayerDoneCardCounts = PLAYERS[this.state.currentPlayerIndex].count;
        currentPlayerDoneCardCounts[theCard.key] += countChange;
        this.setState({selectedCard: theCard});
    };

    handlePlayerChanged = () => {
        this.setState(prevState => ({
            currentPlayerIndex: prevState.currentPlayerIndex !== PLAYERS.length - 1 ? prevState.currentPlayerIndex + 1 : 0,
            modalVisible: true,
            selectedCard: null
        }));
    };

    render() {
        const { isInitialized, modalVisible, currentPlayerIndex, selectedCard, cardsModel } = this.state;
        if (!isInitialized) {
            return <View />;
        }
        const currentPlayer = PLAYERS[currentPlayerIndex];
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: BACKGROUND_COLOR, justifyContent: 'center'}}>
                <PlayerChangeModal modalVisible={modalVisible}
                                   playerName={currentPlayer.name}
                                   closeModalCallback={this.closeModal}/>
                {!modalVisible && [
                    <Header key="header"
                            playerName={currentPlayer.name}
                            playerDoneCardCounts={currentPlayer.count}/>,
                    <View key="cards" style={{alignItems: 'stretch', justifyContent: 'space-evenly'}}>
                        {Object.values(cardsModel).map((card, index) => (
                            <GameCard currentCard={card}
                                      selectedCard={selectedCard}
                                      cardChosenCallback={this.handleCardChosen}
                                      playerChangeCallback={this.handlePlayerChanged}
                                      key={index}/>
                        ))}
                    </View>
                ]}
            </View>
        );
    }

}
