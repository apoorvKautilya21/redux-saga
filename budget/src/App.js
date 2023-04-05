import { Container, Grid, Segment, Statistic } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance:" value="2,500.53" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine description="Something" value="$10" isExpense />
      <EntryLine description="Something else" value="$100" />
      <EntryLine description="Something" value="$20" isExpense />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
