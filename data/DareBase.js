import {FEMALE, MALE, getCardDataFor} from "./Common";

const DARE_ARRAY = [
    { text: "Do your best fake 'O' while looking the person in front of you in the eye." },
    { text: "You have to to lick peanut butter, chocolate sauce, whipped cream etc. off the person in front of you's finger, cheek and a place of their choice." },
    { text: "Find a position you’ve never heard of. Then, try to act it out using whatever furniture and pillows you have at your disposal." },
    { text: "You have to keep your hand on the very inner thigh of the person next to you for the next round." },
    { text: "Get within one inch of the other person, look them straight in the eye, and tell them how you feel about them for one minute. Do not touch them." },
    { text: "Blow on the back of the other person's neck, alternating hot and cool for one minute. Do not touch them." },
    { text: "Make out with them." },
    { text: "Beg them to make out with you. They have to refuse. Keep trying to convince them in different ways for a minute." },
    { text: "Choose a song to create sexy mood." },
    { text: "You have to do whatever they tell you for one minute." },
    { text: "Kiss them passionately, like in the movies." },
    { text: "Touch tongues with someone." },
    { text: "Demonstrate your best technique for you-know-what on your finger." },
    { text: "Fake it for 10 seconds." },
    { text: "Pick up a random book and read it in the most seductive voice you can manage." },
    { text: "Make out with your hand to “The Song That Never Ends” (look it up on YouTube)." },
    { text: "Feed someone snacks using just your mouth." },
    { text: "Show the picture in your phone that’s five pictures back." },
    { text: "Show the most recent text that you sent your best friend." },
    { text: "Make up a story about the closest item on the table." },
    { text: "Say the first word that comes to your mind right now." },
    { text: "Sing everything you say for the next round." },
    { text: "Lick your partner (or person to your left) from their neck all the way to the brim or their underwear." },
    { text: "Lick or suck on the nipples of your partner for a minute." },
    { text: "Kiss your partner all around their “down-low” area (not the actual part tough)." },
    { text: "Put your hand down your partner’s pants until the next round." },
    { text: "Give your partner oral pleasure for 1 minute." },
    { text: "Bite/kiss your partner’s booty for a minute." },
    { text: "Masturbate in front of your partner." },
    { text: "Give a hand job for 1 minute." },
    { text: "Give oral pleasure to the person next to you until the song ends." },
    { text: "You must act like the sex slave for 2 minutes." },
    { text: "Give your partner a hickey on the chest." },
    { text: "Let your partner record you giving them head for the next minute." },
    { text: "Pick your favourite porn, watch it together and do exactly what they do." },
    { text: "Let your partner sit on your face while you give them head for a minute"},
    { text: "Do a sexy dance for your partner for a minute.",
        sex: FEMALE,
        times: 1
    },
    { text: "Give them a lap dance.",
        sex: FEMALE,
        times: 1
    },
    { text: "You have to hold a mouthful of your alcohol in your mouth until the round is over.",
        sex: MALE,
        times: 1
    },
    { text: "Make out with a bellybutton.",
        sex: MALE,
        times: 1
    }
];

export const getDare = currentSex => {
    return getCardDataFor(DARE_ARRAY, currentSex);
};