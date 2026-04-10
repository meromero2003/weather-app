import { skeletonStyle } from "../utils/skeletonStyle";

const SkeletonForecast = () => {
    return (
        <div style = {{display:"flex", gap:"10px",marginTop:"20px"}}>
            {[...Array(5)].map((_, i) => (
                <div key={i} style={{width:"80px", padding:"10px", borderRadius:"15px",
                    background:"rgba(255,255,255,0.1)"}}>
                    <div style={skeletonStyle({with:"100%", height:"15px"})}></div>
                    <div style={skeletonStyle({with:"40px", height:"40px", margin:"10px auto"})}></div>
                    <div style={skeletonStyle({with:"60%", height:"15px", margin:"0px auto"})}></div>
                </div>
            ))}
        </div>
    );
};

export default SkeletonForecast;