import React from 'react';


const Card = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.imgUrl} alt="poster" />
                <h4>{props.title}</h4>
                <p>
                    {props.disc}
                </p>
                <p>
                    {props.tags}
                </p>

                <div>
                    <button>
                        github
                    </button>
                    <button>live demo</button>
                </div>
            </div>


        </>
    );
}

export default Card;
