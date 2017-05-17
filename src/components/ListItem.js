import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        // const { library, selectedLibraryId } = this.props;
        // if (library.id === selectedLibraryId) {
        //     return (
        //         <Text>{library.description}</Text>
        //     );
        // }
        //Above becomes below with updated mapStateToProps function to remove logic
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1, paddingLeft: 15, paddingRight: 15 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.selectLibrary;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
            <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => { //we can access components props with ownProps
    //and compute which props to send in
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};

//connect takes mapStateToProps as first arg, sends actions into component as props
//if not using mapStateToProps can be null e.g connect(null, actions)
export default connect(mapStateToProps, actions)(ListItem);
