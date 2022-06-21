import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Header.js";
import Content from "./Content.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {refreshing: false, searchFilter: ""};
  }

  handleSearch(val) {
    // handle search here
    this.setState({
      searchFilter: val
    });
  }

  // Bound to the refresh button
  refresh() {
    this.setState({refreshing: true});
  }

  // Callback from the `Content` component
  onComponentRefresh() {
    this.setState({refreshing: false});
  }

  // Method built for demostration propuses
  onMouseMove(evt) {
    console.log("mouse move!!!");
    const ele = document.querySelector(".panel");
    ele.innerHTML = "Move your mouse!";
    const {screenX, screenY} = evt;
    ele.innerHTML = `<div>
      Mouse is at: X: ${screenX}, Y: ${screenY}
      </div>`;
  }

  render() {
    return (
      <div className="notificationsFrame">
        <Header title="Timeline" onSearch={this.handleSearch.bind(this)} />
        <Content
          onComponentRefresh={this.onComponentRefresh.bind(this)}
          requestRefresh={this.state.refreshing}
          fetchData={this.fetchEvents}
          searchFilter={this.state.searchFilter}
        />
        <div className="panel">{/* content goes here */}</div>
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
