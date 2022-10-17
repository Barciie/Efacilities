import React, { FunctionComponent } from "react";

import { Event } from "../Clips/Event";
import { ProfileItem } from "./ProfileItem";


interface Props {
  tasks: Event[];
  onDelete: (task: Event) => void;
}

export const ProfileList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
  <ul className="paddingLeftTodo">    
  </ul>
);
