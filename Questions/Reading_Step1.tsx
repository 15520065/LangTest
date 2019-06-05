import IQuestion, {QuestionType} from "../src/entity/Question";

//TODO: Edit imageAsset for Part 1
const QUESTION_PHASE_PART1_123: string = 'Choose the word that goes best with each picture'
const QUESTION_PHASE_PART1_456: string = 'What does the arrow show?'
const QUESTION_PHASE_PART1_789: string = 'Choose the sentence that goes best with each picture'

const QuestionReadingPart1: IQuestion[] = [{
    id: 'r_s1_b1_u1_p1_1',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Grandmother',
        'Grandfather',
        'Aunt'],
    correctAnswer: 1,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_2',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Younger sister',
        'Younger brother',
        'Older brother'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_3',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Divorced',
        'Separated',
        'Married'],
    correctAnswer: 2,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_4',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Family',
        'Friends',
        'Co-workers'],
    correctAnswer: 1,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_5',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Parents',
        'Sisters',
        'Brothers '],
    correctAnswer: 1,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_6',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'She is my big sister',
        'He is my little brother.',
        'He is my big brother.  '],
    correctAnswer: 1,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_7',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'There are five people in my family',
        'There are six people in my family.',
        'There are four people in my family'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_8',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'A boy is with his brother.',
        'A boy is with his grandmother.',
        'A boy is with his dad'],
    correctAnswer: 1,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u1_p1_9',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'An old man is hugging his grandson',
        'An old man is looking at his granddaughter',
        'An old woman is talking to her grandson'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_1',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Face',
        'Hand',
        'Feed'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_2',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Glass',
        'Glasses',
        'Glassy'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_3',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_123,
    answer: [
        'Bangs',
        'Pigtail',
        'Ponytail'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_4',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_456,
    answer: [
        'Short',
        'Tall',
        'Small'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_5',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_456,
    answer: [
        'Straight hair',
        'Mustache',
        'Curly hair'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_6',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_456,
    answer: [
        'He has short hair',
        'She has long hair',
        'She has a ponytail'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_7',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_789,
    answer: [
        'He has a scar on his face',
        'He has a beard',
        'He has a mustache'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_8',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_789,
    answer: [
        'My grandfather has short blond hair.',
        'My grandmother has long blond hair.',
        'My grandfather has short white hair.'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}, {
    id: 'r_s1_b1_u2_p1_9',
    type: QuestionType.part4,
    question: QUESTION_PHASE_PART1_789,
    answer: [
        'My sister wears a yellow hat.',
        'My sister wears glasses.',
        'My sister has a glass.'],
    correctAnswer: 0,
    imageAsset: require('./../../assets/images/test1/p1_1_001.png'),
    comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
    difficultLevel: 3
}];

//
const QuestionReadingPart2: IQuestion[] = [{
    id: 'r_s1_b1_u1_p2_1',
    type: QuestionType.part3,
    question: 'This is a group of people. They are related to each other. The members can be people such as grandparents, parents, sisters, brothers, and cousins.\n' +
        'Q. Who are they?\n',
    answer: [
        'Classmates',
        'Co-workers',
        'Family'],
    correctAnswer: 2,
    difficultLevel: 3,
    comeWith: ['p3_1_032', 'p3_1_033', 'p3_1_034']
}, {
    id: 'r_s1_b1_u1_p2_2',
    type: QuestionType.part3,
    question: 'This person is the mother of your mother or father. \n' +
        'Q. Who is she? \n',
    answer: [
        'My grandfather',
        'My mother',
        'My grandmother'],
    correctAnswer: 2,
    difficultLevel: 3,
    comeWith: ['p3_1_032', 'p3_1_033', 'p3_1_034']
}, {
    id: 'r_s1_b1_u1_p2_3',
    type: QuestionType.part3,
    question: 'This person is the brother of your mother or father.\n' +
        'Q. Who is he?\n',
    answer: [
        'My brother',
        'My uncle',
        'My nephew'],
    correctAnswer: 1,
    difficultLevel: 3,
    comeWith: ['p3_1_032', 'p3_1_033', 'p3_1_034']
}, {
    id: 'r_s1_b1_u1_p2_4',
    type: QuestionType.part3,
    question: 'This person is the daughter of your brother or sister.\n' +
        'Q. Who is she?\n',
    answer: [
        'My aunt',
        'My daughter',
        'My niece '],
    correctAnswer: 2,
    difficultLevel: 3,
    comeWith: ['p3_1_032', 'p3_1_033', 'p3_1_034']
},
    // Unit 2
    {
        id: 'r_s1_b1_u2_p2_1',
        type: QuestionType.part3,
        question: 'It is a small brown spot on someone’s face.\n' +
            'Q. What is it?\n',
        answer: [
            'My aunt',
            'My daughter',
            'My niece '],
        correctAnswer: 2,
        difficultLevel: 3,
        comeWith: ['p3_1_032', 'p3_1_033', 'p3_1_034']
    }, {
        id: 'r_s1_b1_u2_p2_2',
        type: QuestionType.part3,
        question: '2.\tIt is a line on your face. You get this when you get old.\n' +
            'Q. What is it?\n',
        answer: [
            'A scar',
            'A beard',
            'A wrinkle'],
        correctAnswer: 0,
        comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
        difficultLevel: 3
    }, {
        id: 'r_s1_b1_u2_p2_3',
        type: QuestionType.part3,
        question: 'Some people show a small hollow area on their cheek or chin when they smile.\n' +
            'Q. What is it?\n',
        answer: [
            'Curly hair',
            'A dimple',
            'A ponytail'],
        correctAnswer: 0,
        comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
        difficultLevel: 3
    }, {
        id: 'r_s1_b1_u2_p2_4',
        type: QuestionType.part3,
        question: 'For this hairstyle, you cut the front part of your hair short.\n' +
            'Q. What is it?\n',
        answer: [
            'A pigtail',
            'Bangs',
            'Bald '],
        correctAnswer: 0,
        comeWith: ['p4_1_071', 'p4_1_072', 'p4_1_073'],
        difficultLevel: 3
    }];

export default QuestionReadingPart1;
