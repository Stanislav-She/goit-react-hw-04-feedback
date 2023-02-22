import { Component } from 'react';
import React from 'react';

import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    if (event === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (event === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (event === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '50px',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '620px',
          width: '470px',
          fontSize: 26,
          color: '#000000',
          borderRadius: '13px',
          boxShadow: '0px 1px 1px rgba(0.9, 0.9, 0.9, 0.9)',
          backgroundColor: '#907d7d',
        }}
      >
        <Section title="Please leave feedback">
          <Feedback
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

///// Особисті замітки навчального характеру
// import { Component } from 'react';
// import React from 'react';

// import { Section } from './Section/Section';
// import { Feedback } from './Feedback/Feedback';
// import { Notification } from './Notification/Notification';
// import { Statistics } from './Statistics/Statistics';
// // імпортуємо всі компоненти
// export class App extends Component {
//   // експортуємо клас App
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   // створюємо стейт для зберігання даних із початковою ініціалізацією

//   handleFeedback = event => {
//     if (event === 'Good') {
//       this.setState({ good: this.state.good + 1 });
//     } else if (event === 'Neutral') {
//       this.setState({ neutral: this.state.neutral + 1 });
//     } else if (event === 'Bad') {
//       this.setState({ bad: this.state.bad + 1 });
//     }
//   };
//   // створюємо метод, який приймає івент і, якщо івент рівний якомусь із трьох значень, то
//   // додає до відповідному ключеві в стейті +1 до значення

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   // створюємо метод підрахунку загальної кількості голосів

//   countPositiveFeedbackPercentage = () => {
//     if (this.countTotalFeedback() === 0) {
//       return 0;
//       // якщо лічильник голосів рівний нулю, то відображати 0%
//     }
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//     // інакше відображати %, отриманий ділення позитивних відгуків на загальну кількість
//     // помножену на 100
//   };
//   // створюємо метод підрахунку відсотку позитивних відгуків,

//   render() {
//     return (
//       // рендиремо контейнер div із наповненням, задаємо стилі самому контейнеру
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           textAlign: 'center',
//           marginTop: '50px',
//           marginLeft: 'auto',
//           marginRight: 'auto',
//           height: '620px',
//           width: '470px',
//           fontSize: 26,
//           color: '#000000',
//           borderRadius: '13px',
//           boxShadow: '0px 1px 1px rgba(0.9, 0.9, 0.9, 0.9)',
//           backgroundColor: '#907d7d',
//         }}
//       >
//         <Section title="Please leave feedback">
//           <Feedback
//             // Використовуємо імпортований компонент Section для рендеру секції, за умовами
//             // якого Section приймає title h2 і всіх дітей, тобто всі елементи, які поставимо до
//             // неї. Відповідно дитиною ставимо так само імпортований компонент Feedback.
//             //  Feedback приймає масив рядків, які перебирає і відмальовує відповідно кнопки
//             // для голосування.
//             options={['Good', 'Neutral', 'Bad']}
//             onLeaveFeedback={this.handleFeedback}
//             // під час кліку на кнопку спрацьовує слухач onClick, який анонімною функцією викликає
//             // onLeaveFeedback, я він містить метод оновлення стейту голосів handleFeedback,
//             // відповідно onLeaveFeedback приймає option із певним значенням, яке й обробляє
//             // handleFeedback
//           />{' '}
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               // Так само використовуємо імпортований компонент Section.
//               // Дитиною ставимо так само імпортований компонент Statistics.
//               // Якщо лічильник countTotalFeedback не рівний нулю, то відмалюється Statistics,
//               // інакше відмалюється інший імпортований компонент Notification із сповіщенням,
//               // що відгуків ще не залишали
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
