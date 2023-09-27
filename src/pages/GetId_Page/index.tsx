import tw from "tailwind-styled-components"
import { useParams } from "react-router-dom";

// Icons
import info from "../../assets/icons/info.svg"

// Components

// Structure
function GetId_Page() {
    let { component_id } = useParams();

    return (
        <Wrapper>
            <h1 className="p-5 text-6xl text-white1">GetId_Page</h1>
            <h3>ID: {component_id}</h3>
            <img src={info} />
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
  flex
  flex-col 
  flex-grow
  pt-5
`

export default GetId_Page;