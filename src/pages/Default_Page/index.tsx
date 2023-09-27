import tw from "tailwind-styled-components"

// Icons
import info from '../../assets/icons/info.svg'

// Components

// Structure
function Default_Page() {
    return (
        <Wrapper>
            <img src={info} />
            <p className="p-2">Default Page</p>
        </Wrapper>
    )
}

// Styles
const Wrapper = tw.section`
  flex
  flex-col 
  flex-grow
`


export default Default_Page;