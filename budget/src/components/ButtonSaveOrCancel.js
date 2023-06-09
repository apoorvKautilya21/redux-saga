import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry()}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
