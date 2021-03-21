import React, { Component } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import api from '../api'

import styled from 'styled-components'

// import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class StudentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllStudents().then(students => {
            this.setState({
                students: students.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { students, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', students)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Year',
                accessor: 'yearOfBatch',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'collegeId',
                // Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!students.length) {
            showTable = false
        }

        return (
            <Wrapper style={{width:"80%", alignContent:"center", margin:"10%"}}>
                {showTable && (
                    <ReactTable
                        data={students}
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

export default StudentList