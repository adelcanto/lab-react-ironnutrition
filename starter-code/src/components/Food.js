import React, { Component } from 'react'

export default class Food extends Component {
    render() {
        return (


            
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.payLoad.image} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.payLoad.name}</strong> <br />
                                <small>{this.props.payLoad.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value="1"
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info">
                                    +
          </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
