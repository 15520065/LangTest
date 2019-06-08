import IQuestion, { QuestionType } from "../entity/Question";

export default interface IQuizService{
    getQuestion(): IQuestion[],
    reset(): void,
    initQuickTest(numberOfQuestion: number, difficultLevel: number, timer: number): Promise<void>,
    initTest(testId, questionData, numberOfQuestion: number, difficultLevel: number, timer: number): Promise<void>
    initLastTest(): Promise<void>,
    getTestId(): number
    initTestVocabulary(questions: IQuestion[]): Promise<void>
}