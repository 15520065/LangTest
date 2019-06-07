import IQuestion, {QuestionType} from "../src/entity/Question";

//TODO: Edit imageAsset for Part 1
const QUESTION_PHASE_PART1_123: string = 'Choose the word that goes best with each picture'
const QUESTION_PHASE_PART1_456: string = 'What does the arrow show?'
const QUESTION_PHASE_PART1_789: string = 'Choose the sentence that goes best with each picture'

const QuestionReadingPart1: IQuestion[] = [{
    id: 'r_s2_b1_u1_p1_1',
    type: QuestionType.part3,
    question: '1.\tThis person is someone who you know and like very much. You enjoy spending time with this person' +
        'Q. Who is it?',
    answer: [
        '(A)\tA co-worker',
        '(B)\tA friend',
        '(C)\tA pet'],
    correctAnswer: 1,
    difficultLevel: 3,
}, {
    id: 'r_s2_b1_u1_p1_2',
    type: QuestionType.part3,
    question: '2.\tThis is a relationship between friends' +
        'Q. What is it?',
    answer: [
        '(A)\tFamily',
        '(B)\tCo-workers',
        '(C)\tFriendship'],
    correctAnswer: 2,
    difficultLevel: 3,
}, {
    id: 'r_s2_b1_u1_p1_3',
    type: QuestionType.part3,
    question: '3.\tThis is something you want to keep to yourself and not tell other people.' +
        'Q. What is it?',
    answer: [
        '(A)\tNews',
        '(B)\tAn announcement',
        '(C)\tA secret'],
    correctAnswer: 2,
    difficultLevel: 3,
}, {
    id: 'r_s2_b1_u1_p1_4',
    type: QuestionType.part3,
    question: '4.\tThis is what you call someone who you do a particular activity with' +
        'Q. Who is it?',
    answer: [
        '(A)\tA partner',
        '(B)\tA part',
        '(C)\tPartially'],
    correctAnswer: 0,
    difficultLevel: 3,
}];

//
const QuestionReadingPart2: IQuestion[] = [{
    id: 'r_s2_b1_u1_p2_1',
    type: QuestionType.part3,
    question: '1.\tWhat does Michelle think of Jennifer as?',
    answer: [
        '(A)\tHer best student',
        '(B)\tHer best friend',
        '(C)\tHer best sister'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_123.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_1', 'r_s2_b1_u1_p2_2', 'r_s2_b1_u1_p2_3']
}, {
    id: 'r_s2_b1_u1_p2_2',
    type: QuestionType.part3,
    question: '2.\tWhat does Michelle like about Jennifer?',
    answer: [
        '(A)\tThat she spreads rumors',
        '(B)\tThat she knows funny jokes',
        '(C)\tThat she only thinks about herself'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_123.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_1', 'r_s2_b1_u1_p2_2', 'r_s2_b1_u1_p2_3']
}, {
    id: 'r_s2_b1_u1_p2_3',
    type: QuestionType.part3,
    question: 'What does Michelle like?',
    answer: [
        '(A)\tMath',
        '(B)\tChocolate milk.',
        '(C)\tStrawberry milk'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_123.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_1', 'r_s2_b1_u1_p2_2', 'r_s2_b1_u1_p2_3']
}, {
    id: 'r_s2_b1_u1_p2_4',
    type: QuestionType.part3,
    question: '4.\tWhat is true about Alex?',
    answer: [
        '(A)\tHe likes soccer',
        '(B)\tHe moved to a new city',
        '(C)\tHe doesn’t know how to play basketball'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_45.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_4', 'r_s2_b1_u1_p2_5']
}, {
    id: 'r_s2_b1_u1_p2_5',
    type: QuestionType.part3,
    question: '5.\tWhy did Michael write a letter to Alex?',
    answer: [
        'To blame him for the game',
        'To ask how he is doing',
        'To tell him that he is moving, too'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_45.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_4', 'r_s2_b1_u1_p2_5']
}, {
    id: 'r_s2_b1_u1_p2_6',
    type: QuestionType.part3,
    question: '6.\tWhat is the text about?',
    answer: [
        'Going to college',
        'Going to the movies',
        'Having friends'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_678.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_6', 'r_s2_b1_u1_p2_7', 'r_s2_b1_u1_p2_8']
}, {
    id: 'r_s2_b1_u1_p2_7',
    type: QuestionType.part3,
    question: '7.\tWhat decreases when you have someone to share things with?',
    answer: [
        '(A)\tHappiness',
        '(B)\tExcitement',
        '(C)\tStress'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_678.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_6', 'r_s2_b1_u1_p2_7', 'r_s2_b1_u1_p2_8']
}, {
    id: 'r_s2_b1_u1_p2_8',
    type: QuestionType.part3,
    question: '5.\tAccording to the text, how does having friends affect our lives?',
    answer: [
        '(A)\tIt makes our lives more depressed',
        '(B)\tIt makes our lives more enjoyable',
        '(C)\tIt makes our lives more difficult'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_678.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_6', 'r_s2_b1_u1_p2_7', 'r_s2_b1_u1_p2_8']
}, {
    id: 'r_s2_b1_u1_p2_9',
    type: QuestionType.part3,
    question: '9.\tWho is Sonia?',
    answer: [
        '(A)\tShe is Angela’s sister',
        '(B)\tShe is Christine’s cousin',
        '(C)\tShe is Angela’s cousin'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_9101112.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_9', 'r_s2_b1_u1_p2_10', 'r_s2_b1_u1_p2_11', 'r_s2_b1_u1_p2_12']
}, {
    id: 'r_s2_b1_u1_p2_10',
    type: QuestionType.part3,
    question: '10.\tWhy did Sonia come to Angela’s school?',
    answer: [
        '(A)\tShe came to visit Christine',
        '(B)\tShe became a student there',
        '(C)\tShe wanted to help Angela with her science project'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_9101112.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_9', 'r_s2_b1_u1_p2_10', 'r_s2_b1_u1_p2_11', 'r_s2_b1_u1_p2_12']
}, {
    id: 'r_s2_b1_u1_p2_11',
    type: QuestionType.part3,
    question: '11.\tWhy was Christine upset?',
    answer: [
        '(A)\tShe had to take care of her baby sister after school',
        '(B)\tShe had to help her mom move to their new home',
        '(C)\tShe thought Angela didn’t want to be friends with her'],
    correctAnswer: 2,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_9101112.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_9', 'r_s2_b1_u1_p2_10', 'r_s2_b1_u1_p2_11', 'r_s2_b1_u1_p2_12']
}, {
    id: 'r_s2_b1_u1_p2_12',
    type: QuestionType.part3,
    question: '12.\tWhat did Angela get for Christine?',
    answer: [
        '(A)\tA necklace',
        '(B)\tA jewelry box',
        '(C)\tA book'],
    correctAnswer: 1,
    imageAsset: require('../assets/images/step2/imagereading/r_part2/1_9101112.png'),
    difficultLevel: 3,
    comeWith: ['r_s2_b1_u1_p2_9', 'r_s2_b1_u1_p2_10', 'r_s2_b1_u1_p2_11', 'r_s2_b1_u1_p2_12']
},];


export default QuestionReadingPart1;
