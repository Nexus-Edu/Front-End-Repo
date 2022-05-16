function Post(props) {
    const {name} = props

    return (
        <div class="card">
            <div class="card-body">
                <div className="flex-row">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <div>
                        <div>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} width="50" />
                        </div>
                        <h6 class="card-subtitle mb-2">{name} @ user1234</h6>
                    </div>

                    <div>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <br></br>
                <div class="text-left">
                    #hashtags #hashtags
                </div>
            </div>
            <div class="footer text-muted card flex-row">
                <div>
                    posted: 2 days ago
                </div>
            </div>
        </div>
    )
}

export default Post