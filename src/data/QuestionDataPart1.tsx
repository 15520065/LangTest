import IQuestion, {QuestionType} from "../entity/Question";

const QUESTION_PHASE: string = 'Listen and circle the correct answers.'


const QuestionDataPart1: IQuestion[] = [
    {
        id: 'step1_1_002',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/1_1.png'),
        audioAsset: require('../../assets/audio/Step1/Audio_Step1_Book1/002.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_003',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/1_2.png'),
        audioAsset: require('../../assets/audio/Step1/Audio_Step1_Book1/003.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_004',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/1_3.png'),
        audioAsset: require('../../assets/audio/Step1/Audio_Step1_Book1/004.mp3'),
        difficultLevel: 3
    },
    //Unit 2
    {
        id: 'step1_1_028',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/2_1.png'),
        audioAsset: require('../../assets/audio/Step1/Audio_Step1_Book1/028.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_029',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/2_2.png'),
        audioAsset: require('../../assets/audio/Step1/Audio_Step1_Book1/029.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_030',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/2_3.png'),
        audioAsset: require('../../assets/audio/Step1/Audio_Step1_Book1/030.mp3'),
        difficultLevel: 3
    }
];

export default QuestionDataPart1;
