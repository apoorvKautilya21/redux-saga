import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

let initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 20000,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water Bill",
    value: 2000,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 3000,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: 5000,
    isExpense: true,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      setEntries([
        ...entries.slice(0, index),
        { ...entries[index], description, value, isExpense },
        ...entries.slice(index + 1),
      ]);
      resetEntry();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.forEach((entry) => {
      if (entry.isExpense) totalExpense += Number(entry.value);
      else totalIncome += Number(entry.value);
    });

    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncome);
    setTotal(totalIncome - totalExpense);
  }, [entries]);

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const editEntry = (id) => {
    console.log(`Edit entry with ${id}`);
    if (id) {
      const entry = entries[entries.findIndex((entry) => entry.id === id)];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const addEntry = () => {
    setEntries(
      entries.concat({
        id: entries.length + 1,
        description,
        value,
        isExpense,
      })
    );
    resetEntry();
  };

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
