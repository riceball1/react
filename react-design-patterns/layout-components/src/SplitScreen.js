import styled from 'styled-components'

const Container = styled.div`
    display: flex
`
// flex 1 -- make left and right panes take up equal amount of space
const Pane = styled.div`
    flex: ${props => props.weight} 
`

// more developer friendly being able to accept children
// it also allows individually for the children components to take in props

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1}) => {
    const [left, right] = children;
    return (<Container>
        <Pane weight={leftWeight}>{left}</Pane>
        <Pane weight={rightWeight}>{right}</Pane>
    </Container>)
}