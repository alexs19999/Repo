function Post(props) {
    let { name, title } = props;
    return (
        <div>
            <fieldset>
<legend style={{fontWeight: "bold"}}>{name}</legend>
<p>{title}</p>
<button>delete</button>
            </fieldset>
        </div>
    )
}

export default Post;