function App() {
    return (
        <div className="page">
          <div className="title">Home</div>
          <table className="table-auto w-full hover">
            <thead>
            <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
            </tr>
            <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
            </tr>
            <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
            </tr>
            </tbody>
        </table>
          <div>
            <input type="text" />
            <input className="error" type="number" />
            <input type="password" />
            <input type="email" />
            <textarea></textarea>
          </div>
          <button className="btn">Default</button>
          <button className="btn" disabled>Disabled</button>
          <button className="btn dark">Dark default</button>
          <button className="btn danger">Danger default</button>
          <button className="btn primary">Primary default</button>
        </div>
    )
}

export default App