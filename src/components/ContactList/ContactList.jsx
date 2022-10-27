import css from './ContactList.module.css'
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { removeContact } from "redux/contacts/contacts-slice";

export function ContactList() {
  
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onRemoveContact = (id) => {
    const action = removeContact(id);
    dispatch(action);
  }

  return (
    <ul >
      {contacts.map(({ id, name, number }) => 
        <li className={css.contactList__item} key={id}>{name}: {number}
          <button className={css.contactList__btn} onClick={()=> onRemoveContact(id)}>Delete</button>          
        </li>
      )}
    </ul>
  )
}