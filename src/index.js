import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Link extends React.Component {
    constructor(props) {
        super(props)

        this.url = props.url
        this.value = props.value
    }

    render() {
        return (
            <button className="link" onClick={() => window.open(this.url, '_blank')}>
                {this.value}
            </button>
        )
    }
}

class Frame extends React.Component {
    render() {
        return (
        <div className="frame">
            <Link url="https://gather.town/ZSLjHH2ATCwcs98g/livingspring" value="活动区" />
            <Link url="https://northwestern.zoom.us/j/345691004" value="讨论区" />
        </div>
        )
    }
}

ReactDOM.render(
    <Frame />,
    document.getElementById('root')
)
