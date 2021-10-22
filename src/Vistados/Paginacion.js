import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import './Cursoss.css'

class Paginacion extends Component {
  render () {
    return (
      <div className='center '>
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={''}
          breakClassName={'break-me'}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={0}
          onPageChange={this.props.handlePaginationClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default Paginacion;