import React, { Component } from "react";
import { fire } from "../config";
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Content: []
    };
  }
  componentDidMount() {
    let data = fire.database().ref("developers");
    console.log(data);
    data.on("value", item => {
      let contents = item.val();
      let newContent = [];
      for (let content in contents) {
        newContent.push({
          id: content,
          title: contents[content].name,
          content: contents[content].role
        });
      }
      this.setState({
        Content: newContent
      });
    });
  }
  render() {
    return (
      <div className="bg-dark text-light">
        <div class="row">
          <div className="col s6 m12 text-center">
            <h4 className="text-center text-light">Say ! Hello</h4>
            <img src="//graph.facebook.com/100000838467269/picture?type=large"></img>
            <p className="mt-2">
              Website được xây dựng bằng react + firebase database +
              materializecss
            </p>
            <p className="mt-2">Nếu thấy hay vui lòng share cho các đồng hữu</p>
            <a
              href="http://fb.com/phucbun"
              target="_blank"
              rel="noopener noreferrer"
            >
             👉 FB.COM/PHUCBUN
            </a>
          </div>
          <div class="col s6 m12">
            {this.state.Content.map(item => {
              return (
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{item.title}</span>
                    <p>{item.content}</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
