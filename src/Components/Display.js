function Display({imgList}){
    return(
        <div className="ImageContainer">
            {imgList.map((ele)=>{
                return(
                    <div className="imgholder">
                    <img src={ele.urls.small} alt={ele.alt_description} key={ele.id}></img>
                    </div>
                )
            })}
        </div>
    );
}

export default Display;