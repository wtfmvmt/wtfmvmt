import CircleLoader from "react-spinners/CircleLoader";

const Loader = () => (
    
    <CircleLoader
        size={128}
        color={"#FFFFFF"}
        cssOverride={{
            position: "absolute",
            zIndex: 1000000000,
            top: "50%",
            left: "50%",
            right: "50%",
            bottom: "50%"
        }} />
)

export default Loader