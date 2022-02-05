import Link from 'next/link'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const LectureProgressBar = (props) => {
    /*
    const style = {
        timeline: {
          transform: "rotate(90deg)"
        },
        timelineContentContainer: {
          textAlign: "left"
        },
        timelineContent: {
          display: "inline-block",
          transform: "rotate(-90deg)",
          textAlign: "center",
          minWidth: 50
        },
        timelineIcon: {
          transform: "rotate(-90deg)"
        }
      };
      */
    console.log("Progress: " + props.len);
    console.log("Current: " + props.current);
    const info = props.len;
    return(
        <div style={{height: 10 + 'em', display: "block"}}>
            <Timeline position="alternate" style={{display: "block", position: "absolute", top: -40 + 'em', left: 42 + 'em', marginTop: 5 + 'em' }} sx={{transform: "rotate(-90deg)", fontSize: "12"}}>
                {
                    info.map(information => (
                        <TimelineItem key={information.postNo}>
                            <TimelineSeparator>
                            
                            <TimelineDot color={props.current <= information.postNo-1 ? 'grey' : 'primary'} />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={{paddingBottom: -400}} sx={{
                                display: "inline-block",
                                transform: "rotate(90deg)",
                                textAlign: "center",
                                minWidth: 20,
                                maxHeight:20
                                }}>
                                {information.title}
                                </TimelineContent>
                        </TimelineItem>
                        ))
                }
                <TimelineItem>
                    <TimelineSeparator color='primary'>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent style={{paddingBottom: 10}} sx={{
                        display: "inline-block",
                        transform: "rotate(90deg)",
                        textAlign: "center",
                        minWidth: 20,
                        maxHeight:20
                        }}>
                        Finał
                        </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}

export default LectureProgressBar;