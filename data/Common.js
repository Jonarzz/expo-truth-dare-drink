export const FEMALE = 'F';
export const MALE = 'M';
export const SEX_ARRAY = [FEMALE, MALE];

export const TRUTH_KEY = 'truth';
export const DARE_KEY  = 'dare';
export const DRINK_KEY = 'drink';

export const getCardDataFor = (dataArray, currentSex) => {
    const availableData = dataArray.filter(truth => (truth.times || 0) < 2 && (!truth.sex || truth.sex === currentSex));
    const truth = randomElementFrom(availableData) || {};
    return {
        text: truth.text,
        selectedCallbackReturningCountChange: () => {
            truth.sex = nextSex(currentSex);
            truth.times = (truth.times || 0) + 1;
            return 1;
        }
    };
};

const randomElementFrom = array => {
    return array[Math.floor(Math.random() * array.length)];
};

const nextSex = currentSex => {
    const nextSexIndex = SEX_ARRAY.findIndex(sex => sex === currentSex) + 1;
    if (nextSexIndex >= SEX_ARRAY.length) {
        return SEX_ARRAY[0];
    }
    return SEX_ARRAY[nextSexIndex];
};