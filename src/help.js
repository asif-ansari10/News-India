import React, { Component } from 'react';

export class Help extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        {/* Page Title */}
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold">❓ Help & Support</h1>
          <p className="lead">Need assistance? You're in the right place!</p>
        </div>

        {/* How to Use */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <h4 className="mb-3">🧭 How to Use NewsIndia</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🔍 Click on any category (e.g., Sports, Health) from the navigation bar to view the latest news.</li>
              <li className="list-group-item">📱 The site is mobile-friendly. You can browse news on your phone or tablet.</li>
              <li className="list-group-item">⚡ The red loading bar at the top indicates the news is loading — hang tight!</li>
              <li className="list-group-item">🌐 Headlines are fetched in real time from NewsAPI.org.</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <h4 className="mb-3">💡 Frequently Asked Questions (FAQs)</h4>
            <div>
              <h6 className="fw-bold">Q: Is this app free to use?</h6>
              <p>✅ Yes! NewsIndia is completely free and does not require registration.</p>

              <h6 className="fw-bold">Q: Where is the news coming from?</h6>
              <p>📰 News is fetched from <a href="https://newsapi.org" target="_blank" rel="noreferrer">NewsAPI.org</a>.</p>

              <h6 className="fw-bold">Q: Can I suggest a feature?</h6>
              <p>💬 Of course! Please contact us via our social media links at the bottom of the About page.</p>

              <h6 className="fw-bold">Q: Why is some news missing images?</h6>
              <p>🖼️ Some articles from the News API may not include images. We display content as provided by the API.</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h4 className="mb-3">📬 Need More Help?</h4>
            <p>If you're facing technical issues or have feedback, feel free to reach out:</p>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> asifnasimansari10@gmail.com</li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/asif-naseem-ansari-00260919a/" target="_blank" rel="noreferrer">@NewsIndiaSupport</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/asif-ansari10" target="_blank" rel="noreferrer">github.com/yourname/newsindia</a></li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-muted small">We're here to help you stay informed ✨</p>
        </div>
      </div>
    );
  }
}

export default Help;
