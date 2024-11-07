const MyProvider = ({ children }) => {
    const [ userValue, setUserValue ] = useState('');
    return (
        <MyContext.Provider value={{ userValue, setUserValue }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
