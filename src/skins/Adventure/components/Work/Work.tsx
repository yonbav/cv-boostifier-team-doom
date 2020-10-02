import React from "react";
import { Work } from "../../../../models";
import { utils } from "../../utils/Utils";

export function WorkComponent(props: {
  data: Work[];
  screenSize: number;
  scrollLeft: number;
  scrollTop: number;
}) {
  const CLOUDS_MOVEMENT_RATIO = -1;
  const CLOUDS_STARTING_OFFSET = 0.9;
  console.log(props.data);

  const listItems = props.data.map((work: Work, index) => {
    console.log(work, index);
    return (
      <div key={index} className="sky slide">
        <div className="company-description">
          <div className="dates">
            {work?.startDate} - {work?.endDate || "Present"}
          </div>
          <div className="name">
            {work?.position} @ {work?.company}
            <div className="website">
              <a href={work?.url}>{work?.url}</a>
            </div>
          </div>
          <div className="summary">{work?.summary}</div>
        </div>
        <div
          className="clouds"
          style={{
            right: utils.moveElement(
              props.screenSize * CLOUDS_STARTING_OFFSET,
              props.scrollLeft,
              CLOUDS_MOVEMENT_RATIO
            ),
          }}
        ></div>
      </div>
    );
  });

  return <div>{listItems}</div>;
}