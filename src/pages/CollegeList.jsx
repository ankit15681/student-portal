import React, { Component } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import api from '../api'

import styled from 'styled-components'
import ChartJs from './ChartJs';

// import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class CollegeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colleges: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllColleges().then(colleges => {
            this.setState({
                colleges: colleges.data.data,
                isLoading: false,
            })
        })


    }

    render() {
        const { colleges, isLoading } = this.state
        const labels = colleges.map(college=> {
           return college.state;
        })
        console.log(labels.length)
        console.log(labels);

        const columns = [
            
            {
                Header: 'Name',
                accessor: 'name',
                // filterable: true,
            },
            {
                Header: 'Year',
                accessor: 'year',
            },
            {
                Header: 'City',
                accessor: 'city',
            },
            {
                Header: 'State',
                accessor: 'state',
            },
            {
                Header: 'Country',
                accessor: 'country',
            },
            // {
            //     // Header: 'No of Students',
            //     // accessor: 'noOfStudents',
            //     // Cell: props => <span>{props.value.join(' / ')}</span>,
            // },
        ]

        let showTable = true
        if (!colleges.length) {
            showTable = false
        }

        return (
            
            <Wrapper style={{width: "76vw", marginLeft:"12vw"}}>
                <ChartJs labels={labels} />
                {showTable && (
                    <ReactTable
                        style={{textAlign: 'center'}}
                        data={colleges}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default CollegeList