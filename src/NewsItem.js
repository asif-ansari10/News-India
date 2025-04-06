import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date, name } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            
                        }
                    }
                    >
                        <span className=" badge rounded-pill bg-danger" >{name}</span>
                    </div>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}...  <span className="badge bg-secondary">{name}</span></h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown Author" : author} On {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>

                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
