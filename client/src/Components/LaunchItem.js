import React from "react";
import Moment from "react-moment";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4
            className={classNames({
              "text-success": launch_success,
              "text-danger": !launch_success
            })}
          >
            Mission: {mission_name}
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link className="btn btn-primary" to={`/launch/${flight_number}`}>
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
