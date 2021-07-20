const About = () => {
    return (
        <>
            <div className="container text-center bg-dark my-2 w-50 text-warning" style={{ borderRadius: "50px" }}>
                <h4>welcome to the Hotel Plaza</h4>
            </div>
            <div className="container w-75 my-2">
                <p className="text-success" style={{ fontSize: "30px",marginBottom:"-20px" }}>Hotel Plaza </p>
                <hr  />
                {/* <> */}
               <div >
                   <div style={{marginTop:"-10px" }} className="text-center"><img src="./Image/plaza.png" alt="" /></div>
               <p style={{fontSize: "14px"}}> <strong>Hotel Plaza </strong>
                     is a chain of luxury hotels and a subsidiary of
                    the Indian Hotels Company Limited,[2] headquartered at Express
                    Towers, Nariman Point in Mumbai.[3] Incorporated by the founder
                    of the , in 1903,[4][5] the company is
                    a part of the Plaza Group, one of India's largest business conglomerates.
                    The company employed over 20,000 people in the year 2010.[6][7]
                    As of 2020, the company operates a total of 100 plus hotels and hotel-resorts,
                    with 84 across India and 16 in other countries, including Bhutan, Malaysia, Maldives,
                    Nepal, South Africa, Sri Lanka, UAE, UK, USA and Zambia.[5]
                </p>
               </div>
            </div>
        </>
    )
}

export default About