class Game {
    constructor(limit) {
        this.limit = limit;
        this.current = 0;
        this.Questions = [];
    }
    checkAnswer(answer){
        if(answer === this.Questions[this.current].correctAnswer){
            return true;
        }else {
            return false;
        }
    }

    chooseAnswer(answer){
        if(this.checkAnswer(answer)){
            alert('Câu trả lời quá nà chính xác nuông');
        }else {
            alert('Thôiiiiii sai mất tiu ồiiii !!!');
        }
    }

    addQuestions(Question){
        this.Questions.push(Question);
    }

    nextQuestion(){
        if( games.current < games.limit){
            games.current++;
            Screen(games.current);
        }else {
            alert('Bạn đã phá đảo rồi đếyyy :x')
            this.current = 0;
        }
    }

    resetGame(){
        location.replace('index.html');
    }



}
