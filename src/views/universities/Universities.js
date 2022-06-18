import { Fragment } from "react";
import ButtonGroup from "./ButtonGroup";
import Table from "./Table";
import classes from "./Universities.module.css";

function Universities() {
  return (
    <Fragment>
      <ButtonGroup classes={classes} />
      <Table classes={classes} />
    </Fragment>
  );
}

export default Universities;
