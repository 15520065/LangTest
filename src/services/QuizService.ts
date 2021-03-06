import IQuizService from './IQuizService'
import IQuestion, { QuestionType } from '../entity/Question';
import QuestionDataPart1 from '../data/QuestionDataPart1';
import QuestionDataPart2 from '../data/QuestionDataPart2';
import QuestionDataPart3 from '../data/QuestionDataPart3';
import QuestionDataPart4 from '../data/QuestionDataPart4';
import QuestionDataPart5 from '../data/QuestionDataPart5';
import QuestionDataPart7 from '../data/QuestionDataPart7';
import QuestionDataPart6 from '../data/QuestionDataPart6';
import DataSync from '../helper/DataSync';
import UtilHelper from '../helper/UtilHelper';


//For this app, we assume that 

class QuizService implements IQuizService{

    _questionList : IQuestion[] = null;

    _testId = null;

    getTestId(): number {
        return this._testId;
    }

    _srcQuestionList: IQuestion[] = null;
    _lastSrcQuestionList = null;

    // _lastMode: number = 0;

    // getMode(): number {
    //     return this._lastMode;
    // }

    _difficult: number = 0;
    _timer: number = 0;
    _numberOfQuestion: number = 0;

    readonly _typePercent: number[] = [3, 12.5, 19.5, 15, 15, 8, 27];
    readonly _chanceOfHigher1Difficult:  number = 30;
    readonly _chanceOfHigher2Difficult: number = 5;
    readonly _chanceOfHigher1Lower: number = 20;
    readonly _chanceOfHigher2Lower: number = 5;


    reset(): void {
        this._questionList = null;
    }

    getQuestion(): IQuestion[] {
        return this._questionList;
    }

    //Calculator the number of question for each type by percent
    //Because of the rounding, the total number of question may not true, so we trim down or scale random type of question
    //Then scan for the number of question of each type, the number of difficult level may increase by one two but not over
    async initQuickTest(numberOfQuestion: number = 5, difficultLevel: number = 3, timer: number): Promise<void> {
        this._timer = timer;
        this._difficult = difficultLevel;
        this._numberOfQuestion = numberOfQuestion;

        this.reset();

        var numberOfQuestionType: Array<number> = new Array();
        for(let i = 0; i < 7; i++){
            numberOfQuestionType.push(Math.ceil(numberOfQuestion * this._typePercent[i] / 100));
        }

        //Let crawling the question
        var questionListPart : IQuestion[][] = new Array();
        questionListPart[0] = this.crawlingQuestion(QuestionType.part1, numberOfQuestionType[0], difficultLevel);
        questionListPart[1] = this.crawlingQuestion(QuestionType.part2, numberOfQuestionType[1], difficultLevel);
        questionListPart[2] = this.crawlingQuestion(QuestionType.part3, numberOfQuestionType[2], difficultLevel);
        questionListPart[3] = this.crawlingQuestion(QuestionType.part4, numberOfQuestionType[3], difficultLevel);
        questionListPart[4] = this.crawlingQuestion(QuestionType.part5, numberOfQuestionType[4], difficultLevel);
        questionListPart[5] = this.crawlingQuestion(QuestionType.part6, numberOfQuestionType[5], difficultLevel);
        questionListPart[6] = this.crawlingQuestion(QuestionType.part7, numberOfQuestionType[6], difficultLevel);

        //Let trim the question so that it can fix the number of question
        const sumQuestion = function(questionList: IQuestion[][]) : number{
            let sum : number = 0;
            for(let i = 0; i < questionList.length; i++){
                sum += questionList[i].length
            }
            return sum;
        }
        var sum: number = sumQuestion(questionListPart);
        if(sum > numberOfQuestion){
            while(sum > numberOfQuestion){
                let randomType = Math.floor(Math.random() * 6);
                questionListPart[randomType].pop();
                sum = sumQuestion(questionListPart);
            }
        } else {
            //just add part5 cause it easy to do 
            // let i = 0
            // let questionList: IQuestion[] = this._dataQuestion[4];
            // while(sum < numberOfQuestion){
            //     questionListPart[4].push(questionList[i]);
            //     i++;
            //     sum = sumQuestion(questionListPart);
            // }
        }


        //So concat the question and return them
        let resQuestionList: IQuestion[] = new Array();
        for(let i = 0; i < 7; i++){
            resQuestionList =  resQuestionList.concat(questionListPart[i]);
        }

        this._questionList = resQuestionList;
    }

    // async initTestOld(type: QuestionType, numberOfQuestion: number, difficultLevel: number, timer: number): Promise<void> {
    //     this._timer = timer;
    //     switch(type){
    //         case QuestionType.part1:
    //             this._lastMode = 1;
    //             break;
    //         case QuestionType.part2:
    //             this._lastMode = 2;
    //             break;
    //         case QuestionType.part3:
    //             this._lastMode = 3;
    //             break;
    //         case QuestionType.part4:
    //             this._lastMode = 4;
    //             break;
    //         case QuestionType.part5:
    //             this._lastMode = 5;
    //             break;
    //         case QuestionType.part6:
    //             this._lastMode = 6;
    //             break;
    //         case QuestionType.part7:
    //             this._lastMode = 7;
    //             break;
    //     }
    //     this._difficult = difficultLevel;
    //     this._numberOfQuestion = numberOfQuestion;
    //
    //     //Let crawling the question
    //     const resQuestionList: IQuestion[] = this.crawlingQuestion(type, numberOfQuestion, difficultLevel);
    //
    //
    //     //Let trim the question so that it can fix the number of question
    //     if(resQuestionList.length > numberOfQuestion){
    //         while(resQuestionList.length > numberOfQuestion){
    //             resQuestionList.pop();
    //         }
    //     } else {
    //         //just add part5 cause it easy to do
    //
    //     }
    //
    //     this._questionList = resQuestionList;
    // }

    async initTest(testId, questionData, numberOfQuestion: number, difficultLevel: number, timer: number): Promise<void> {
        this._testId = testId;

        //Let crawling the question
        const resQuestionList: IQuestion[] = this.crawlingQuestion(questionData, numberOfQuestion, difficultLevel);
        //Let trim the question so that it can fix the number of question
        if(resQuestionList.length > numberOfQuestion){
            while(resQuestionList.length > numberOfQuestion){
                resQuestionList.pop();
            }
        } else {
            //just add part5 cause it easy to do

        }

        this._timer = timer;

        this._difficult = difficultLevel;
        this._numberOfQuestion = numberOfQuestion;

        this._questionList = resQuestionList;
    }

    initLastTest(): Promise<void> {
        if (this._lastSrcQuestionList && this._lastSrcQuestionList.length > 0) {
            return this.initTest(this._testId,this._lastSrcQuestionList,this._numberOfQuestion, this._difficult, this._timer);
        }
        return new Promise<void>(null);
    }

    private crawlingQuestion(questionData, numberOfQuestion: number, difficult: number): IQuestion[] {
        this._srcQuestionList = this._lastSrcQuestionList = questionData;

        // //TODO
        // let questionData = UtilHelper._objectToMap(DataSync.getExam().exams[1].step1.listening);
        // console.log("questionData ---------- ");
        // UtilHelper._printMapConsole(questionData)
        // console.log("questionData ---------- ");
        // UtilHelper._printMapConsole(UtilHelper._objectToMap(this._srcQuestionList));
        //
        // this._srcQuestionList = DataSync.getExam().exams[1].step1.listening;

        var resQuestionList : IQuestion[] = new Array();
        //Suffer question 
        this._srcQuestionList = this.shuffle(this._srcQuestionList);
        //Loop throught question until enough
        for(let i = 0; i < this._srcQuestionList.length; i++){
            const question = this._srcQuestionList[i];
            if(question === null || question.difficultLevel === null){
                this.addQuestionToArray(resQuestionList, question);
                continue;
            }
            let difficultDifferent: number = question.difficultLevel - difficult;
            switch(difficultDifferent){
                case 2:
                    if(Math.random() * 100 < this._chanceOfHigher2Difficult){
                        this.addQuestionToArray(resQuestionList, question);
                    }
                    break;
                case 1:
                    if(Math.random() * 100 < this._chanceOfHigher2Difficult){
                        this.addQuestionToArray(resQuestionList, question);
                    }
                    break;
                case 0:
                    this.addQuestionToArray(resQuestionList, question);
                case -1:
                    if(Math.random() * 100 < this._chanceOfHigher2Difficult){
                        this.addQuestionToArray(resQuestionList, question);
                    }
                    break;
                case -2:
                    if(Math.random() * 100 < this._chanceOfHigher2Difficult){
                        this.addQuestionToArray(resQuestionList, question);
                    }
                break;
            }

            if(resQuestionList.length >= numberOfQuestion){
                break;
            }
        }
        return resQuestionList;
    }

    async initTestVocabulary(questions: IQuestion[]): Promise<void> {
        this._questionList = questions;
    }

    //Since some question may come together, it better to take all of them to
    private addQuestionToArray(questionList: IQuestion[], question: IQuestion){
        if(this.contain(questionList, question.id)){
            return;
        }

        if(question.comeWith){
            question.comeWith.forEach((id, _) => {
                if(!this.contain(questionList, id)){
                    const questionToAdd : IQuestion = this._srcQuestionList.find((value, _, __) => value && value.id === id);
                    if (questionToAdd){
                        questionList.push(questionToAdd);
                    }
                }
            })
        } else {
            questionList.push(question);            
        }
    }

    private contain(questionList: IQuestion[], question_id: string) : boolean {
            //Check whether we already have the question in the question List yet !
            for(var i = 0; i < questionList.length; i++) {
                if (questionList[i].id === question_id) {
                    return true;
                }
            }
            return false;
    }

    private shuffle(a : IQuestion[]) : IQuestion[] {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}

const sharedQuizService = new QuizService();
export default sharedQuizService;