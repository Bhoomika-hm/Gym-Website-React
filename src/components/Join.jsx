import Card from "./Card";

function Join(){
    return(
        <div id="join">
        <h1 className="heading-h1">
            MEMBERSHIP
        </h1>
        <div className="a-container">
            <Card title="Diamond" desc="1-on-1 mentronship with industry experts"
            desc2="24/7 Gym Acess" price="₹4999"/>
            <Card title="Gold" desc="Access to all video tutorials" price="₹2499"/>
            <Card title="Basic" desc="Access to all equpments   " price="₹999"/>
        </div>
        </div>
    )
}

export default Join;