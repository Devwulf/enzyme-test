import React from "react";

type TestComponentProps = {

}

type TestComponentState = {

}

export default class TestComponent extends React.Component<TestComponentProps, TestComponentState> {
    constructor(props: TestComponentProps) {
        super(props);

        this.state = {

        };
    }

    render(): JSX.Element {
        return (
            <div className="">test</div>
        );
    }
}