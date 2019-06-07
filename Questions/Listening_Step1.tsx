import IQuestion, {QuestionType} from "../src/entity/Question";

//TODO: Thêm hình Cho Part 1, Part 2, Part 4, Part 5

const path = ""
//26

const QUESTION_PHASE: string = 'Listen and circle the correct answers.'
const QuestionListeningDataPart1: IQuestion[] = [{
    id: 'step1_1_002',
    type: QuestionType.part2,
    question: QUESTION_PHASE,
    answer: ['A', 'B', 'C'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step1/imagelistening/book1part1/1_1.png'),
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/002.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_003',
    type: QuestionType.part2,
    question: QUESTION_PHASE,
    answer: ['A', 'B', 'C'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step1/imagelistening/book1part1/1_2.png'),
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/003.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_004',
    type: QuestionType.part2,
    question: QUESTION_PHASE,
    answer: ['A', 'B', 'C'],
    correctAnswer: 0,
    imageAsset: require('../assets/images/step1/imagelistening/book1part1/1_3.png'),
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/004.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step1_1_028',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        imageAsset: require('../assets/images/step1/imagelistening/book1part1/2_1.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/028.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_029',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../assets/images/step1/imagelistening/book1part1/2_2.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/004.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_030',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../assets/images/step1/imagelistening/book1part1/2_3.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/030.mp3'),
        difficultLevel: 3
    },
    //Unit 3
    {
        id: 'step1_1_054',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        imageAsset: require('../assets/images/step1/imagelistening/book1part1/3_1.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/035.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_054',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../assets/images/step1/imagelistening/book1part1/3_2.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/054.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_056',
        type: QuestionType.part2,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../assets/images/step1/imagelistening/book1part1/3_3.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/056.mp3'),
        difficultLevel: 3
    },


];


const QuestionDataPart2: IQuestion[] = [{
    id: 'step1_1_005',
    type: QuestionType.part2,
    question: 'Listen to the girl.\n' +
        'Q. What is the girl going to do?\n',
    answer: ['A', 'B', 'C'],
    correctAnswer: 0,
    imageAsset: require('../assets/images/step1/imagelistening/book1part2/1_1.png'),
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/005.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_006',
    type: QuestionType.part2,
    question: 'Listen to the man.\n' +
        'Q. Where is the man going to be this weekend?\n',
    answer: ['A', 'B', 'C'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step1/imagelistening/book1part2/1_2.png'),
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/006.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_007',
    type: QuestionType.part2,
    question: 'Listen to the boy.\n' +
        'Q. What does the boy usually do after school?\n',
    answer: ['A', 'B', 'C'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step1/imagelistening/book1part2/1_3.png'),
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/007.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step1_1_031',
        type: QuestionType.part2,
        question: 'Listen to the girl.\n' +
            'Q. What is the girl going to do?\n',
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../assets/images/step1/imagelistening/book1part2/2_1.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/031.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_032',
        type: QuestionType.part2,
        question: 'Listen to the boy.\n' +
            'Q. What does the boy do every morning?\n',
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../assets/images/step1/imagelistening/book1part2/2_2.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/032.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_033',
        type: QuestionType.part2,
        question: 'Listen to the man.\n' +
            'Q. What is the man going to do?\n',
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../assets/images/step1/imagelistening/book1part2/2_3.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/033.mp3'),
        difficultLevel: 3
    },
    //Unit 3
    {
        id: 'step1_1_057',
        type: QuestionType.part2,
        question: 'Listen to the librarian\n' +
            'Q. What did the librarian tell the students NOT to do?\n',
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../assets/images/step1/imagelistening/book1part2/3_1.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/057.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_058',
        type: QuestionType.part2,
        question: 'Listen to the librarian\n' +
            'Q. What did the librarian tell the boy to do?\n',
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../assets/images/step1/imagelistening/book1part2/3_2.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/058.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_059',
        type: QuestionType.part2,
        question: 'Listen to the girl\n' +
            'Q. What will the girl do next?\n',
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../assets/images/step1/imagelistening/book1part2/3_3.png'),
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/059.mp3'),
        difficultLevel: 3
    },
];

const QuestionDataPart3: IQuestion[] = [{
    id: 'step1_1_008',
    type: QuestionType.part2,
    question: 'Do you have any brothers or sisters?',
    answer: ['A', 'B', 'C'],
    correctAnswer: 1,
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/008.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_009',
    type: QuestionType.part2,
    question: 'Do you live with your grandparents?',
    answer: ['A', 'B', 'C'],
    correctAnswer: 1,
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/009.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_0010',
    type: QuestionType.part2,
    question: 'How many people are there in your family?',
    answer: ['A', 'B', 'C'],
    correctAnswer: 0,
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/010.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step1_1_034',
        type: QuestionType.part2,
        question: 'Q. What hairstyle does she have?',
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/034.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_035',
        type: QuestionType.part2,
        question: 'Q. What can I do for you?',
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/035.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_036',
        type: QuestionType.part2,
        question: 'Q. How does your brother look?',
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/036.mp3'),
        difficultLevel: 3
    },
    //Unit 3
    {
        id: 'step1_1_060',
        type: QuestionType.part2,
        question: 'Q. What time does the library open?',
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/060.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_061',
        type: QuestionType.part2,
        question: 'Q. May I see your library card, please?',
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/061.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_062',
        type: QuestionType.part2,
        question: 'Q. When is the due date?',
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/062.mp3'),
        difficultLevel: 3
    },
];

const QuestionDataPart4: IQuestion[] = [{
    id: 'step1_1_0011',
    type: QuestionType.part2,
    question: 'Listen to the conversation between a boy and a girl\n' +
        'Q. What will the boy do next?\n',
    answer: [
        'Throw his toys away',
        'Hide his toys',
        'Buy new toys'],
    correctAnswer: 1,
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/011.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_0012',
    type: QuestionType.part2,
    question: 'Listen to the conversation between a girl and a boy\n' +
        'Q. What does the boy wish to have?\n',
    answer: [
        'A little sister',
        'A big brother',
        'A little brother'
    ],
    correctAnswer: 1,
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/012.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step1_1_037',
        type: QuestionType.part2,
        question: 'Listen to the conversation between a woman and her\n' +
            'Q. What will the hairdresser do next?\n',
        answer: [
            'Wash the woman’s hair',
            'Dye the woman’s hair',
            'Cut the hairdresser’s hair'
        ],
        correctAnswer: 0,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/037.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_038',
        type: QuestionType.part2,
        question: 'Listen to the conversation between a girl and a boy\n' +
            'Q. What are they talking about?\n',
        answer: [
            'The girl’s brother',
            'The boy’s brother',
            'The boy’s friend'
        ],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/038.mp3'),
        difficultLevel: 3
    },
    //Unit 3
    {
        id: 'step1_1_063',
        type: QuestionType.part2,
        question: 'Listen to the conversation between a student and a librarian.\n' +
            'Q. What will the student do next?\n',
        answer: [
            'Pick out a book',
            'Buy a book',
            'Write a book'
        ],
        correctAnswer: 0,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/063.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_064',
        type: QuestionType.part2,
        question: 'Listen to the conversation between a student and a librarian\n' +
            'Q. What will the librarian do next?\n',
        answer: [
            'Read the Scarlet Letter',
            'Check other libraries',
            'Return the book'
        ],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/064.mp3'),
        difficultLevel: 3
    },
];

const QuestionDataPart5: IQuestion[] = [{
    id: 'step1_1_0013',
    type: QuestionType.part2,
    question: 'Listen to the phone message\n' +
        'Why did Maya’s mom call? \n',
    answer: [
        'To tell Maya to make breakfast',
        'To tell Maya not to eat dinner',
        'To tell Maya that she will be home late'],
    correctAnswer: 2,
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/013.mp3'),
    difficultLevel: 3
}, {
    id: 'step1_1_0014',
    type: QuestionType.part2,
    question: 'Listen to the hoy giving a talk\n' +
        'Who does the boy spend most of his time with?\n',
    answer: [
        'His father',
        'His mother',
        'His grandmother'],
    correctAnswer: 2,
    audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/014.mp3'),
    difficultLevel: 3
},
    //Unit 2
    {
        id: 'step1_1_039',
        type: QuestionType.part2,
        question: 'Listen to the phone message\n' +
            'Why did Bill call?\n',
        answer: [
            'To ask Robert to attend a meeting',
            'To ask Robert to pick up his business partner',
            'To ask Robert to double-check James’s arrival time'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/039.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_040',
        type: QuestionType.part2,
        question: 'Listen to the girl giving a talk\n' +
            'What is the girl mainly talking about?\n',
        answer: [
            'Her best friend',
            'Her younger brother',
            'Her family'],
        correctAnswer: 2,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/040.mp3'),
        difficultLevel: 3
    },
    //Unit 3
    {
        id: 'step1_1_065',
        type: QuestionType.part2,
        question: 'Listen to the phone message\n' +
            'Q. Why did Nick call?\n',
        answer: [
            'To ask Jack to get the book for him',
            'To ask Jack to return the book for him',
            'To tell Jack to read the book'],
        correctAnswer: 1,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/065.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_066',
        type: QuestionType.part2,
        question: 'Listen to the librarian giving a talk\n' +
            'What is the librarian doing?\n',
        answer: [
            'Introducing the library',
            'Introducing City Hall',
            'Working in the media room '],
        correctAnswer: 2,
        audioAsset: require('../assets/audio/Step1/Audio_Step1_Book1/066.mp3'),
        difficultLevel: 3
    },
];
export default QuestionListeningDataPart1;
