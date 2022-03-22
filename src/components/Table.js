export const Table = ({ cols, data }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {
                        // cols ? cols?.map(col => <th key={col}>{col.replace('_', ' ').toUpperCase()}</th>) : Object.keys(data ? data[0] : {}).map(col => <th key={col}>{col.replace('_', ' ').toUpperCase()}</th>)
                        cols ? cols?.map(col => <th key={col}>{col.replace('_', ' ').toUpperCase()}</th>) : Object.keys(data !== undefined && data.length > 0 ? data[0] : {}).map(col => <th key={col}>{col.replace('_', ' ').toUpperCase()}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => {
                        return <tr key={index}>
                            {
                                cols ? cols?.map(col => <td key={`row-${col}`}>{item[col]}</td>) : Object.keys(item || {}).map(col => <td key={col}>{item[col]}</td>)
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}