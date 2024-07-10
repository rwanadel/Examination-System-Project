class Question{
    constructor(title,answersArr,number){
        
        this.title=title;
        this.answersArr=answersArr;
        this.number=number;

    }
    toString(){
        return this.title;
    }

}
export default Question;