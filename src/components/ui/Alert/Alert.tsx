import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { AlertTypes } from "../../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type = "danger", icon, title, description, children }: IProps) => {
  return (
    <div className={`alert_${type}`}>
      <div className="alert_header">
        <div className="alert_header_left">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className="close_icon" />
      </div>
      <p>{description}</p>
      {
        children ? <p>{children}</p> : null
      }
    </div>
  );
};

export default Alert;
