import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
        <p class="h3">It's a News App by using News Api.</p>
        <p class="h3">Technology use:-</p>
        {/* <div>
            HTML
            CSS
            Javascript
            React js
            Bootstrap

        </div> */}

        <ul class="list-group">
        <li class="list-group-item disabled">HTML</li>
        <li class="list-group-item">CSS</li>
        <li class="list-group-item">Javascript</li>
        <li class="list-group-item">React js</li>
        <li class="list-group-item">Bootstrap</li>
        </ul>

      </div>
    )
  }
}

export default About
