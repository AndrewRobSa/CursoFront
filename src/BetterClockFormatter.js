import React from "react";

import {Hour} from "./BetterClockParts";
import {Minute} from "./BetterClockParts";
import {Second} from "./BetterClockParts";
import {Separator} from "./BetterClockParts";
import {Ampm} from "./BetterClockParts";


export const BetterClockFormatter = props => {
  let children = props.format.split('').map((e, idx) => {
    if (e === 'h') {
      return <Hour key={idx} {...props} />;
    } else if (e === 'm') {
      return <Minute key={idx} {...props} />;
    } else if (e === 's') {
      return <Second key={idx} {...props} />;
    } else if (e === 'p') {
      return <Ampm key={idx} {...props} />;
    } else if (e === ' ') {
      return <span key={idx}> </span>;
    } else {
      return <Separator key={idx} {...props} />;
    }
  });
  return <span>{children}</span>;
};
