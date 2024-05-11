import { Component } from 'react';
import Feedback from './Feedback/Feedback';


export class App extends Component {
  // значнен за замовчанням, якщо від пропсів нічого не прийде
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // поточне значення state
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  render() {
    // отримуємо значення зі state
    const { good, neutral, bad } = this.state; 
    return (
    <div>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
      />
      </div>
    );
  }
}
