class Question{
    constructor(title,answersArr,number,correctAns){
        
        this.title=title;
        this.answersArr=answersArr;
        this.number=number;
        this.correctAns=correctAns

    }
    toString(){
        return this.title;
    }

}
export default Question;