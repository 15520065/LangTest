import IQuestion, {QuestionType} from "../src/entity/Question";

//TODO: Thêm hình Cho Part 1, Part 2, Part 4, Part 5

const path = ""

const QUESTION_PHASE: string = 'Listen and circle the correct answers.'
const QuestionDataPart1: IQuestion[] = [{
    id: 'step2_1_002',
    type: QuestionType.part2,
    question: QUESTION_PHASE,
    answer: ['A', 'B', 'C'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagelistening/book1part1/1_1.png'),
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/02.mp3'),
    difficultLevel: 3
}, {
    id: 'step2_1_003',
    type: QuestionType.part2,
    question: QUESTION_PHASE,
    answer: ['A', 'B', 'C'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step2/imagelistening/book1part1/1_2.png'),
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/03.mp3'),
    difficultLevel: 3
}, {
    id: 'step2_1_004',
    type: QuestionType.part2,
    question: QUESTION_PHASE,
    answer: ['A', 'B', 'C'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagelistening/book1part1/1_3.png'),
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/04.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step2_1_025',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        imageAsset: require('../assets/images/step2/imagelistening/book1part1/2_1.png'),
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/25.mp3'),
        difficultLevel: 3
    }, {
        id: 'step2_1_026',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../assets/images/step2/imagelistening/book1part1/2_2.png'),
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/26.mp3'),
        difficultLevel: 3
    }, {
        id: 'step2_1_027',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../assets/images/step2/imagelistening/book1part1/2_3.png'),
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/27.mp3'),
        difficultLevel: 3
    }

];


const QuestionDataPart2: IQuestion[] = [{
    id: 'step2_1_005',
    type: QuestionType.part2,
    question: 'Listen to the conversation between a girl and a boy.\n' +
        'What will the boy do next?\n',
    answer: [
        'Go to the girl’s house',
        'Call the girl’s mom',
        'Call his mom'],
    correctAnswer: 2,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/05.mp3'),
    difficultLevel: 3
}, {
    id: 'step2_1_006',
    type: QuestionType.part2,
    question: 'Listen to the conversation between a boy and a girl\n' +
        'Q. What did the boy want to do with the girl?\n',
    answer: [
        'Go to a birthday party',
        'Help set up for a party',
        'Play basketball together'],
    correctAnswer: 2,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/06.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step2_1_028',
        type: QuestionType.part2,
        question: 'Listen to the conversation between a paramedic and an injured man\n' +
            'Q. What will the paramedic do next?\n',
        answer: [
            'Send the man home',
            'Take the man to the hospital',
            'Call the man’s family'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/28.mp3'),
        difficultLevel: 3
    }, {
        id: 'step2_1_029',
        type: QuestionType.part2,
        question: 'Listen to the conversation between a mail carrier and a woman\n' +
            'Q. Who is Kenny Cole?\n',
        answer: [
            'A friend of the mail carrier',
            'A friend of the woman',
            'The man who sold the house to the woman'],
        correctAnswer: 2,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/29.mp3'),
        difficultLevel: 3
    }
];

const QuestionDataPart3: IQuestion[] = [{
    id: 'step2_1_007',
    type: QuestionType.part2,
    question: 'Listen to the phone message\n' +
        'Q. Why did Amy call?\n',
    answer: [
        'To ask Jerry about homework',
        'To talk to Jerry about an English test',
        'To borrow an English textbook from Jerry'],
    correctAnswer: 0,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/07.mp3'),
    difficultLevel: 3
}, {
    id: 'step2_1_008',
    type: QuestionType.part2,
    question: 'Listen to the phone message\n' +
        'Why did Mike call Robert?\n',
    answer: [
        'To ask Robert to play soccer together',
        'To tell Robert about the P.E. class schedule',
        'To apologize to Robert for punching him'],
    correctAnswer: 2,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/08.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step2_1_030',
        type: QuestionType.part2,
        question: 'Listen to the phone message\n' +
            'Q. Why did Doctor Lee call?\n',
        answer: [
            'To ask Lisa to come to work late',
            'To ask Lisa to have lunch by herself',
            'To ask Lisa to delay his first appointment'],
        correctAnswer: 2,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/30.mp3'),
        difficultLevel: 3
    }, {
        id: 'step2_1_031',
        type: QuestionType.part2,
        question: 'Listen to the phone message\n' +
            'Q. Who should be there to put out the fire?\n',
        answer: [
            'Farmers',
            'Firefighters',
            'Sanitation workers'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/31.mp3'),
        difficultLevel: 3
    },
];

const QuestionDataPart4: IQuestion[] = [{
    id: 'step2_4_1_009',
    type: QuestionType.part2,
    question: 'Listen to the story about Jessica and her mother\n' +
        'Q1. What did Jessica’s mother ask her to find in the supermarket?\n',
    answer: [
        'A carton of milk',
        'Bread',
        'A bag of apples'],
    correctAnswer: 2,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/09.mp3'),
    difficultLevel: 3,
    comeWith: ['step2_4_1_009', 'step2_4_2_009']
}, {
    id: 'step2_4_2_009',
    type: QuestionType.part2,
    question: 'Listen to the story about Jessica and her mother\n' +
        'Q 2. Why did Sarah go to the supermarket?\n',
    answer: [
        'To bake some cookies',
        'To buy some stuff for baking',
        'To get a bag of oranges'],
    correctAnswer: 1,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/09.mp3'),
    difficultLevel: 3,
    comeWith: ['step2_4_1_009', 'step2_4_2_009']
}, {
    id: 'step2_4_3_012',
    type: QuestionType.part2,
    question: 'Listen to the teacher giving a lesson about friendship\n' +
        'Q 3. What is the lesson about?\n',
    answer: [
        'Family',
        'Friendship',
        'Butterflies'],
    correctAnswer: 1,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/12.mp3'),
    difficultLevel: 3,
    comeWith: ['step2_4_3_012', 'step2_4_4_012', 'step2_4_5_012']
}, {
    id: 'step2_4_4_012',
    type: QuestionType.part2,
    question: 'Listen to the teacher giving a lesson about friendship\n' +
        'Q 4. Who can’t be your friends?\n',
    answer: [
        'Your classmates',
        'Strangers',
        'Your neighbors'],
    correctAnswer: 1,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/12.mp3'),
    difficultLevel: 3,
    comeWith: ['step2_4_3_012', 'step2_4_4_012', 'step2_4_5_012']
}, {
    id: 'step2_4_5_012',
    type: QuestionType.part2,
    question: 'Listen to the teacher giving a lesson about friendship\n' +
        'Q 5. What is the best way to keep up good relationships with others?\n',
    answer: [
        'Start fights',
        'Win all arguments',
        'Respect others first'],
    correctAnswer: 2,
    audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/12.mp3'),
    difficultLevel: 3,
    comeWith: ['step2_4_3_012', 'step2_4_4_012', 'step2_4_5_012']
},
    //Unit 2
    {
        id: 'step2_4_1_032',
        type: QuestionType.part2,
        question: 'Listen to the story about two women\n' +
            'Q1. Who is Susan?\n',
        answer: [
            'Mrs. Brown`s daughter',
            'Mrs. Brown`s neighbor',
            'An apartment manager'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/32.mp3'),
        difficultLevel: 3,
        comeWith: ['step2_4_1_032', 'step2_4_2_032']
    }, {
        id: 'step2_4_2_032',
        type: QuestionType.part2,
        question: 'Listen to the story about Jessica and her mother\n' +
            'Q 2. What did Mrs. Brown tell Susan about?\n',
        answer: [
            'A new garbage dumping area',
            'How to recycle',
            'Where to buy plastic bags'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/32.mp3'),
        difficultLevel: 3,
        comeWith: ['step2_4_1_032', 'step2_4_2_032']
    }, {
        id: 'step2_4_3_035',
        type: QuestionType.part2,
        question: 'Listen to the teacher giving a lesson about volunteer workers\n' +
            'Q 3. What is the teacher talking about?\n',
        answer: [
            'Volunteer workers',
            'A school fundraiser',
            'Many jobs around our town'],
        correctAnswer: 0,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/35.mp3'),
        difficultLevel: 3,
        comeWith: ['step2_4_3_035', 'step2_4_4_035', 'step2_4_5_035']
    }, {
        id: 'step2_4_4_035',
        type: QuestionType.part2,
        question: 'Listen to the teacher giving a lesson about volunteer workers\n' +
            'Q 4. Who can become a volunteer worker?\n',
        answer: [
            'Anyone with a warm heart',
            'Selfish people',
            'Only rich people'],
        correctAnswer: 0,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/35.mp3'),
        difficultLevel: 3,
        comeWith: ['step2_4_3_035', 'step2_4_4_035', 'step2_4_5_035']
    }, {
        id: 'step2_4_5_035',
        type: QuestionType.part2,
        question: 'Listen to the teacher giving a lesson about volunteer workers\n' +
            'Q 5. What can we learn from volunteer work?\n',
        answer: [
            'How to manage money well',
            'How to make money without any skills',
            'The value of helping others'],
        correctAnswer: 2,
        audioAsset: require('../assets/audio/Step2/Audio_Step2_Book1/35.mp3'),
        difficultLevel: 3,
        comeWith: ['step2_4_3_035', 'step2_4_4_035', 'step2_4_5_035']
    }
];
export default QuestionDataPart1;
