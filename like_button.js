const e = React.createElement

function LikeButton() {
    return e(
        'button',
        {
            onClick: () => alert('berhasil')
        },
        'Like'
    )
}


const domContainer = document.querySelector('#root')
ReactDOM.render(e(LikeButton), domContainer)