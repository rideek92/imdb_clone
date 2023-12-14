

export default function ItemsMovie({data}){

    return(
        <div className=" ">
            {!data ? <h1>Home</h1> : data.map(movie => {
                return (
                    <div key={movie.id} className="">
                        <h1 >{movie.title}</h1>
                    </div>

                )
            })
            }
        </div>

    )
}