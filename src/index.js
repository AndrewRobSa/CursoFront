import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Header.js";
import Content from "./Content.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {refreshing: false};
  }

  // Bound to the refresh button
  refresh() {
    this.setState({refreshing: true});
  }

  // Callback from the `Content` component
  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">{/* content goes here */}</div>
        <Header title="Timeline" />
        <Content
          onComponentRefresh={this.onComponentRefresh.bind(this)}
          requestRefresh={this.refreshing}
          fetchData={this.fetchEvents}
        />
        <footer>
          <button onClick={this.refresh.bind(this)} className="butonRefresh">
            <i className="fa fa-refresh" />
            Refresh
          </button>
        </footer>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
