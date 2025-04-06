// import React, { Component } from 'react';

// export class About extends Component {
//   render() {
//     return (
//       <div className="container mt-5">
//         <div className="text-center mb-4">
//           <h1 className="display-5 fw-bold">📰 About NewsIndia</h1>
//           <p className="lead mt-3">
//             NewsIndia is a modern and responsive news app powered by the News API. Stay updated with the latest headlines from around the world, filtered by category!
//           </p>
//         </div>

//         <div className="card shadow-sm border-0">
//           <div className="card-body">
//             <h4 className="mb-3">🛠 Technologies Used</h4>
//             <div className="d-flex flex-wrap gap-3">
//               <span className="badge bg-primary fs-6">HTML</span>
//               <span className="badge bg-success fs-6">CSS</span>
//               <span className="badge bg-warning text-dark fs-6">JavaScript</span>
//               <span className="badge bg-info text-dark fs-6">React JS</span>
//               <span className="badge bg-dark fs-6">Bootstrap</span>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <p className="text-muted small">Developed with ❤️ by Asif Ansari</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default About;


import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="container mt-5">
        {/* Title and Description */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">📰 About NewsIndia</h1>
          <p className="lead mt-3">
            NewsIndia is a sleek and responsive news app that delivers the latest headlines across multiple categories. Built with modern tech and powered by the News API.
          </p>
        </div>

        {/* Features */}
        <div className="mb-5">
          <h4 className="fw-semibold">✨ Features</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">🔸 Browse top news headlines by category</li>
            <li className="list-group-item">🔸 Lightning-fast loading with progress bar</li>
            <li className="list-group-item">🔸 Mobile responsive and fully interactive</li>
            <li className="list-group-item">🔸 Clean UI with Bootstrap styling</li>
            <li className="list-group-item">🔸 Built using component-based architecture</li>
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="mb-5">
          <h4 className="fw-semibold">🛠 Technology Stack</h4>
          <div className="d-flex flex-wrap gap-3">
            <span className="badge bg-primary fs-6">HTML</span>
            <span className="badge bg-success fs-6">CSS</span>
            <span className="badge bg-warning text-dark fs-6">JavaScript</span>
            <span className="badge bg-info text-dark fs-6">React JS</span>
            <span className="badge bg-dark fs-6">Bootstrap 5</span>
          </div>
        </div>

        {/* API Information */}
        <div className="mb-5">
          <h4 className="fw-semibold">📚 Powered By</h4>
          <p>
            This app uses the <a href="https://newsapi.org/" target="_blank" rel="noreferrer">NewsAPI.org</a> to fetch real-time news from around the globe.
          </p>
        </div>

        {/* Future Plans */}
        <div className="mb-5">
          <h4 className="fw-semibold">🌟 Upcoming Features</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">📅 News by date and keyword</li>
            <li className="list-group-item">🌍 Country-based filters</li>
            <li className="list-group-item">🔍 In-app search functionality</li>
            <li className="list-group-item">🗂 Saved articles & reading list</li>
          </ul>
        </div>

      {/* Social Media Links Section */}
      <div className="text-center mb-4">
          <h4>🌍 Follow Us:</h4>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/asif-ansari10" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">GitHUb</a>
            <a href="https://www.linkedin.com/in/asif-naseem-ansari-00260919a/" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center mt-5">
          <p className="text-muted small">
            Developed with ❤️ by <strong>YourName</strong> <br />
           
          </p>
        </div>
      </div>
    );
  }
}

export default About;
