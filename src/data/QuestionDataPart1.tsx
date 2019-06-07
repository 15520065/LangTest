import IQuestion, {QuestionType} from "../entity/Question";

const QUESTION_PHASE: string = 'Listen and circle the correct answers.'


const QuestionDataPart1: IQuestion[] = [
    {
        id: 'step1_1_002',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/1q1.png'),
        audioAsset: require('../../assets/audio/step1/audiostep1book1/002.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_003',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/1q2.png'),
        audioAsset: require('../../assets/audio/step1/audiostep1book1/003.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_004',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/1q3.png'),
        audioAsset: require('../../assets/audio/step1/audiostep1book1/004.mp3'),
        difficultLevel: 3
    },
    //Unit 2
    {
        id: 'step1_1_028',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 0,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/2q1.png'),
        audioAsset: require('../../assets/audio/step1/audiostep1book1/028.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_029',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 1,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/2q2.png'),
        audioAsset: require('../../assets/audio/step1/audiostep1book1/029.mp3'),
        difficultLevel: 3
    }, {
        id: 'step1_1_030',
        type: QuestionType.part1,
        question: QUESTION_PHASE,
        answer: ['A', 'B', 'C'],
        correctAnswer: 2,
        imageAsset: require('../../assets/images/step1/imagelistening/book1part1/2q3.png'),
        audioAsset: require('../../assets/audio/step1/audiostep1book1/030.mp3'),
        difficultLevel: 3
    }
];

export default QuestionDataPart1;
