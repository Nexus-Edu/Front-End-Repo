function Post(props) {
    const {name, profilePic, message, hashtag, date, username} = props

    return (
        <div class="card">
            <div class="card-body">
                <div className="flex-row">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <div>
                        <div>
                            <img src={profilePic} width="50" />
                        </div>
                        <h6 class="card-subtitle mb-2">{name} @ {username}</h6>
                    </div>

                    <div>
                        <p class="card-text">{message}</p>
                    </div>
                </div>
                <br></br>
                <div class="text-left">
                    {hashtag}
                </div>
            </div>
            <div class="footer text-muted card flex-row">
                <div>
                    posted: {date}
                </div>
            </div>
        </div>
    )
}

export default Post