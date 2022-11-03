const Details =  () => {
    const Data = [
        {
            name: "The WET Codbase",
            date: "sunday 4th 20, 11min read",
            description: "come waste your time with me"

        },
        {
            name: "Goodby, Clean Code",
            date: "Friday 2nd, 2019 5mins read",
            description: "Let Clean code guide you, Then let it go"

        },
        {
            name: "My Decade In Review",
            date: "saturday 11t, 2016 5 min read",
            description: "A personal reflection"

        },
        {
            name: "What Are The React Team Principles",
            date: "saturday 11t, 2016 5 min read",
            description: "A personal reflection"

        }

    ]

    return (
        <>

            {Data.map((e, idx) => {

                return (
                    <div key={idx} className="content" >
                        <div className="content2">
                            <h2 style={{color:"#d13565"}}>{e.name}</h2>
                            <span >{e.date}</span>
                            <span>{e.description}</span>
                        </div>
                        
                    </div>
                )
            })}

        </>
    )
}

export default Details;