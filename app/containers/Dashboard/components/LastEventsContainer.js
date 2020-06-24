import React, { Component } from 'react'
import { Loader } from 'rsuite';
import moment from 'moment';
import styled from 'styled-components';

const StyledEventsSection = styled.div`
    display: flex; 
    flex-direction: column;
    flex: 1;
`

const StyledEventRow = styled.div`
    display: flex;
    flex-direction: row; 
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: gray;
`

const StyledEventColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex: ${props => props.flex || '1'};
    font-weight: ${props => props.fontWeight || 'regular'};
    align-content: ${props => props.align || 'flex-start'};
`

class EventsHeader extends Component {
    render() {
        return (
            <StyledEventRow>
                <StyledEventColumn fontWeight="bold" flex={2}>
                    Event Name
                </StyledEventColumn>
                <StyledEventColumn bold>
                    Started At
                </StyledEventColumn>
                <StyledEventColumn bold>
                    Ended At
                </StyledEventColumn>
                <StyledEventColumn bold>
                    Summary
                </StyledEventColumn>
            </StyledEventRow>
        )
    }
}


class EventRow extends Component {
    render() {
        const {last_event} = this.props;
        return (
            <StyledEventRow>
                <StyledEventColumn flex={2}>
                   {last_event.name} 
                </StyledEventColumn>
                <StyledEventColumn align="center">
                    {moment(last_event.started_at).format('DD/MM/YYYY')}
                </StyledEventColumn>
                <StyledEventColumn align="center">
                    {moment(last_event.ended_at).format('DD/MM/YYYY')}
                </StyledEventColumn>
                <StyledEventColumn align="center">
                    <a>Summary</a>
                </StyledEventColumn>
            </StyledEventRow>
        )
    }
}

export default class LastEventsContainer extends Component {
    render() {
        const {last_events} = this.props;
        return (
            <div>
                {!last_events && <Loader />}
                {last_events &&
                    last_events.length > 0 ? (
                        <StyledEventsSection>
                            <EventsHeader />
                            {last_events.map(last_event => {
                                return (
                                    <EventRow last_event={last_event}/>
                                )
                            })}
                        </StyledEventsSection>
                    ) :(
                        <StyledEventsSection>
                            No last events.
                        </StyledEventsSection>
                    )}
            </div>
        )
    }
}
