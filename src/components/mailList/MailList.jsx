import "./mailList.css"

const MailList = () => {
  return (
    <div className="mailList">
        <h2 className="mailListTitle">Save time, save money!</h2>
        <h4 className="mailListSubtitle">Sign up and we'll send the best deals to you</h4>
        <div className="mailListInputContainer">
            <input type="email" className="mLInput" placeholder="Your email"/>
            <button className="mailListInputBtn">Subscribe</button>
        </div>
    </div>
  )
}

export default MailList