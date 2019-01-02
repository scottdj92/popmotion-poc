import React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "@emotion/styled";

const Item = posed.li();

type StyledItemProps = {
    color: string;
};

const StyledItem = styled(Item)`
    background-color: ${({ color }: StyledItemProps) => color};
    border-radius: 5px;
    max-width: 200px;
    min-height: 50px;
`;

const Wrapper = styled.ul`
    list-style: none;
`;

type State = {
    items: Array<{
        color: string;
    }>;
};

type Props = {
    items: Array<{
        color: string;
    }>;
};

class AnimatedList extends React.Component<Props, State> {
    public state: State = {
        items: this.props.items,
    };

    private interval = null;
    public componentWillMount() {
        this.interval = setInterval(this.toggleItems, 2000);
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public render() {
        const { items } = this.state;
        return (
            <>
                <Wrapper>
                    <PoseGroup>
                        {
                            items.map((item) => <StyledItem data-key={item} key={item.color} color={item.color} />)
                        }
                    </PoseGroup>
                </Wrapper>
                {/* <button onClick={this.toggleItems}>Shuffle</button> */}
            </>
        );
    }

    private toggleItems = () => {
        this.setState({ items: this.shuffle(this.state.items) });
    }

    private shuffle = (array) => {
        let currentIndex = array.length;
        let tempValue;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }

        return array;
    }
}

export default AnimatedList;
