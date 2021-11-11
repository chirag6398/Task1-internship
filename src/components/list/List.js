import React from 'react';

const List = (props)=>{
    let comp;

    if(props.data.length!==0)
    {
        let url = props.data[0].owner.avatar_url;
        comp = <img src={url} alt="avatar"/>
    }


    return(
        <>
            <div className="list-div">
                {
                  props.data?.length !==0 ?<h2>Total Repositories: {props.data.length}</h2> :null
                }
           
            <div className="avatar-div">
                {comp}
            </div>
            {
             props.data.map((data,i)=>{
                     return <div  key={i}>
                        <div className="list-inner-div">
                        <h2>{data.name}</h2>
                        <h6>branch:- {data.default_branch}</h6><br/>
                        <h5>Created at:- {data.created_at}</h5>
                        <h5>Language:- {data.language}</h5>
                        <h4><a href={data.html_url} target="_blank">Click to view Project</a></h4>
                        <p>Clone URL:- {data.clone_url}</p>
                    </div>
                    </div>
                })
            }
            </div>
        </>
    );
}

export default List;