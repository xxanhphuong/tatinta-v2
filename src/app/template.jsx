export default function Template({ children }) {
    return <div>
        <h2>Header</h2>
        {children}
        <h2>Footer</h2>
    </div>
}