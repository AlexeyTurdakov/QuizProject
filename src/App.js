import React, { Component } from "react";
import Layout from "./hoc/layout/layout.js";
import Quiz from "./containers/Quiz/Quiz.js";
import { Route, Switch } from "react-router-dom";
import QuizList from "./containers/QuizList/QuizList.js";
import QuizCreator from "./containers/QuizCreator/QuizCreator.js";
import Auth from "./containers/Auth/Auth.js";
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/' component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
