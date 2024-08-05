import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from '../ContactForm/ContactForm'
import { addContact } from "../../redux/contactsSlice";
import "./App.css";

export default function App() {

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList />
    </div>
  )

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('saved-contacts');

  //   if (savedContacts !== null) {
  //     console.log(JSON.parse(savedContacts));
  //     return JSON.parse(savedContacts)
  //   }
  //   return initContacts;
  // });
  // const [filter, setFilter] = useState('');
  

  // const visibleContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  // useEffect(() => {
  //   window.localStorage.setItem('saved-contacts', JSON.stringify(contacts))
  // }, [contacts]);

  // return (
  //   <div>
  //     <h1>Phonebook</h1>
  //     <ContactForm onAdd={addContact} />
  //     <SearchBox value={filter} onFilter={setFilter} />
  //     <ContactList contacts={visibleContacts} />
  //   </div>
  // )

}
