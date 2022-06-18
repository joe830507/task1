import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import {
  fetchUniversities,
  addUniversity,
  deleteUniversity,
} from "../../store/universities/universitiesSlice";

function Buttons(props) {
  const dispatch = useDispatch();

  return (
    <ButtonGroup
      size="large"
      aria-label="large button group"
      className={props.classes["buttonGroup"]}
    >
      <Button
        key="load"
        onClick={() => dispatch(fetchUniversities({ country: "Australia" }))}
      >
        LOAD
      </Button>
      <Button key="delete" onClick={() => dispatch(deleteUniversity())}>
        DELETE
      </Button>
      <Button key="add" onClick={() => dispatch(addUniversity())}>
        ADD
      </Button>
    </ButtonGroup>
  );
}

export default Buttons;
