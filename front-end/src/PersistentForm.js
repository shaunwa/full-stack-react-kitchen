import usePersistentState from "./usePersistentState";

const PersistentForm = () => {
    const [firstName, setFirstName, clearFirstName] = usePersistentState('first', '');
    const [lastName, setLastName, clearLastName] = usePersistentState('last', '');
    const [email, setEmail, clearEmail] = usePersistentState('email', '');

    return (
        <>
            <input value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input value={lastName} onChange={e => setLastName(e.target.value)} />
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={() => {
                clearFirstName();
                clearLastName();
                clearEmail();
            }}>Submit</button>
        </>
    )
}

export default PersistentForm;