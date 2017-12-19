import React from 'react';


class DataTable extends React.Component {

    render() {
        console.log('DataTable?',this.props);
        const { data={} } = this.props;

        // data
        // placeholder
        let RenderData = <p>Fetching data...</p>;

        // wait
        if (data) {

            // filter
            RenderData = [];
            for (let key in data) {
                RenderData.push(
                    <div key={key} style={{paddingBottom:"10px"}}>
                        <label style={{width:"120px",display:"inline-block"}}>{key}: </label>
                        <input type="text" value={data[key]} onChange={()=>{console.log('readOnly');}} />
                    </div>
                );
            }

        }

        return (
            <div>{RenderData}</div>
        );
    }    
}


export default DataTable;