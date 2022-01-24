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
    console.log("Progress " + props.len);
    const info = props.len;
    return(
        <div style={{height: 5 + 'em', display: "block"}}>
            <Timeline style={{display: "block", position: "absolute", top: 5 + 'em', left: 50 + 'em'}} sx={{transform: "rotate(-90deg)"}}>
                {
                    info.map(information => (
                        <TimelineItem key={information.postNo}>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={{paddingBottom: 10}} sx={{
                                display: "inline-block",
                                transform: "rotate(90deg)",
                                textAlign: "center",
                                minWidth: 20,
                                maxHeight:20
                                }}>
                                {information.postNo}
                                </TimelineContent>
                        </TimelineItem>
                        ))
                }
                <TimelineItem>
                    <TimelineSeparator>
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