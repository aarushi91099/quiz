import React from "react";
import Answers from "./Answers";
import Popup from "./Popup";
import data4 from "../Questions/data4";

class Dark extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnum: 1,
      nr: 0,
      total: data4.length,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: "flex",
    };
    this.pushdata4 = this.pushdata4.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  pushdata4(nr) {
    this.setState({
      seriesId: data4[nr].seriesId,
      question: data4[nr].question,
      answers: [
        data4[nr].answers[0],
        data4[nr].answers[1],
        data4[nr].answers[2],
        data4[nr].answers[3],
      ],
      correct: data4[nr].correct,
      nr: this.state.nr + 1,
    });
  }

  componentWillMount() {
    let { nr } = this.state;
    this.pushdata4(nr);
  }

  nextQuestion() {
    let { nr, total } = this.state;

    if (nr === total) {
      this.setState({
        displayPopup: "flex",
      });
    } else {
      this.pushdata4(nr);
      this.setState({
        questionnum: this.state.questionnum + 1,
        showButton: false,
        questionAnswered: false,
      });
    }
  }

  handleShowButton() {
    this.setState({
      showButton: true,
      questionAnswered: true,
    });
  }

  handleStartQuiz() {
    this.setState({
      displayPopup: "none",
      nr: 1,
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  render() {
    let {
      nr,
      total,
      question,
      answers,
      correct,
      showButton,
      questionAnswered,
      displayPopup,
      score,
    } = this.state;

    return (
      <div className="container">
        <Popup
          style={{ display: displayPopup }}
          score={score}
          total={total}
          startQuiz={this.handleStartQuiz}
        />
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <div id="question">
              <h4>
                Question {nr}/{total}
              </h4>
              <p>{question}</p>
            </div>
            <Answers
              questionnum={this.state.questionnum}
              answers={answers}
              correct={correct}
              showButton={this.handleShowButton}
              isAnswered={questionAnswered}
              increaseScore={this.handleIncreaseScore}
            />
            <div id="submit">
              {showButton ? (
                <button className="fancy-btn" onClick={this.nextQuestion}>
                  {nr === total ? "Finish quiz" : "Next question"}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dark;
