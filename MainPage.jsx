import styled from "styled-components"

const Wrapper = styled.div`
    padding: lem;
    background: gray
`

const Title = styled.h1`
    font-size: 1.5em;
    color: white;
    text-align: center
`
// const Button = styled.button`
//     color: ${props => props.dark ? 'white' : 'dark'};
//     background: ${props => props.dark ? 'black' : 'white'};
//     border: 1px solid black;
// `
// const RoundButton = styled(Button)`
//     border-radius: 16px;
// `

const Block = styled.div`
    border: 1px solid black
`

const blockItem = [
    {
        lavel: '1',
        padding: '1rem',
        backgroundColor: 'red'
    },
    {
        lavel: '2',
        padding: '3rem',
        backgroundColor: 'green'
    },
    {
        lavel: '3',
        padding: '4rem',
        backgroundColor: 'blue'
    }
]

export default function MainPage() {
    return (
        <Wrapper>
            <Title>
                안녕 리액트!
            </Title>
            {/* <Button>Normal</Button>
            <Button dark>Dark</Button>
            <RoundButton>Round Button</RoundButton> */}
            <br /> <br />
            {blockItem.map((blockItem) => {
                <Block
                    padding={blockItem.padding}
                    backgroundColor={blockItem.backgroundColor}
                >
                    {blockItem.lavel}
                </Block>
            })}
        </Wrapper>
    )
}
