import { skeletonStyle } from "../utils/skeletonStyle";

const SkeletonCard = () => {
    return (
        <div style={{background:"rgba(255,255,255,0.1)", borderRadius:"20px", padding:"20px",
            marginTop:"20px", backdropFilter:"blur(10px)"}}>
                <div style={skeletonStyle({width:"60%", height:"30px"})}></div>
                <div style={skeletonStyle({width:"80px", height:"80px", margin:"20px auto"})}></div>
                <div style={skeletonStyle({width:"40%", height:"40px", margin:"10px auto"})}></div>
                <div style={skeletonStyle({width:"50%", height:"20px", margin:"0px auto"})}></div>
                
        </div>
    );
}

export default SkeletonCard;