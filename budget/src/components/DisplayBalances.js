import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances({ title, value, color = "black", size = "tiny" }) {
  return (
    <Segment textAlign="centre">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income:" value="1,045.50" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses:" value="623.50" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;